"use client"

import { useEffect } from "react"

// This component adds the Pi SDK script to the page
export default function PiSdkScript() {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.getElementById("pi-sdk-script")) {
      return
    }

    // Create script element
    const script = document.createElement("script")
    script.id = "pi-sdk-script"
    script.src = "https://sdk.minepi.com/pi-sdk.js"
    script.async = true
    script.defer = true

    // Add script to document
    document.body.appendChild(script)

    // Clean up on unmount
    return () => {
      const existingScript = document.getElementById("pi-sdk-script")
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return null
}

