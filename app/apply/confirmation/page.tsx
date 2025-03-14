"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1)
    }, 1000)

    const redirect = setTimeout(() => {
      router.push("/")
    }, 10000)

    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [router])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-center">Application Submitted</CardTitle>
          <CardDescription className="text-center">Thank you for applying to fund.pi</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Your startup application and KYB information have been successfully submitted. Our team will review your
            application within 72 hours. We appreciate your patience during this process.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            You will be redirected to the home page in {countdown} seconds.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Return to Home Page</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

