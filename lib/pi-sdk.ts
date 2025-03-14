export interface PiUser {
  uid: string
  username: string
  accessToken: string
}

export interface PiPayment {
  amount: number
  memo: string
  metadata: Record<string, any>
  uid: string
  identifier: string
  status: {
    developer_completed: boolean
    transaction_verified: boolean
    developer_completed_timestamp: number
    transaction_verified_timestamp: number
  }
  transaction: {
    txid: string
    verified: boolean
    _link: string
  }
  cancelled: boolean
  user_uid: string
  created_at: string
}

export interface PiSDK {
  authenticate: (scopes: string[], onSuccess: (user: PiUser) => void, onError?: (error: Error) => void) => void
  createPayment: (
    payment: {
      amount: number
      memo: string
      metadata: Record<string, any>
    },
    onSuccess: (payment: PiPayment) => void,
    onError?: (error: Error) => void,
  ) => void
  openShareDialog: (title: string, message: string) => void
}

// Check if Pi SDK is available in the window object
export const isPiSDKAvailable = (): boolean => {
  return typeof window !== "undefined" && "Pi" in window
}

// Get Pi SDK from window object
export const getPiSDK = (): PiSDK | null => {
  if (isPiSDKAvailable()) {
    return (window as any).Pi
  }
  return null
}

// Connect to Pi Network wallet
export const connectPiWallet = async (): Promise<PiUser | null> => {
  return new Promise((resolve, reject) => {
    const Pi = getPiSDK()

    if (!Pi) {
      console.error("Pi SDK not available")
      reject(new Error("Pi SDK not available. Please use the Pi Browser."))
      return
    }

    try {
      Pi.authenticate(
        ["username", "payments", "wallet_address"],
        (user: PiUser) => {
          console.log("User authenticated:", user)
          resolve(user)
        },
        (error: Error) => {
          console.error("Authentication error:", error)
          reject(error)
        },
      )
    } catch (error) {
      console.error("Pi SDK error:", error)
      reject(error)
    }
  })
}

// Make a payment using Pi
export const makePiPayment = async (
  amount: number,
  memo: string,
  metadata: Record<string, any> = {},
): Promise<PiPayment | null> => {
  return new Promise((resolve, reject) => {
    const Pi = getPiSDK()

    if (!Pi) {
      console.error("Pi SDK not available")
      reject(new Error("Pi SDK not available. Please use the Pi Browser."))
      return
    }

    try {
      Pi.createPayment(
        {
          amount,
          memo,
          metadata,
        },
        (payment: PiPayment) => {
          console.log("Payment created:", payment)
          resolve(payment)
        },
        (error: Error) => {
          console.error("Payment error:", error)
          reject(error)
        },
      )
    } catch (error) {
      console.error("Pi SDK error:", error)
      reject(error)
    }
  })
}

