"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Upload, Shield, AlertTriangle } from "lucide-react"

export default function KYBPage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Here you would typically handle the file upload to your server
    // For this example, we'll just simulate the upload process
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Document uploaded",
        description: "Your identification document has been successfully uploaded.",
      })
    }, 2000)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the KYB data to your server
    // For this example, we'll just show a success message and redirect
    toast({
      title: "KYB Submitted",
      description: "Your KYB information has been submitted for review.",
    })
    router.push("/apply/confirmation")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Know Your Business (KYB)</h1>

      <Card>
        <CardHeader>
          <CardTitle>Founder Identity Verification</CardTitle>
          <CardDescription>
            Please provide your government-issued identification to verify your identity.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id-type">Identification Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="national-id">National ID Card</SelectItem>
                  <SelectItem value="drivers-license">Driver's License</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="id-number">Identification Number</Label>
              <Input id="id-number" placeholder="Enter your ID number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="id-document">Upload Identification Document</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="id-document"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG or PDF (MAX. 5MB)</p>
                  </div>
                  <Input
                    id="id-document"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".png,.jpg,.jpeg,.pdf"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Your data is encrypted and securely stored. We do not share your information with third parties.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={setAcceptedTerms} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that the information provided is accurate and I agree to the KYB process.
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={!acceptedTerms || isUploading}>
              {isUploading ? "Uploading..." : "Submit KYB Information"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-yellow-800 dark:text-yellow-200" />
          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            Important: Providing false information may result in your application being rejected and potential legal
            consequences.
          </p>
        </div>
      </div>
    </div>
  )
}

