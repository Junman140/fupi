"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield, Lock } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h1>

      <div className="mb-8 p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20">
        <div className="flex items-center mb-4">
          <Lock className="h-6 w-6 text-mint-green mr-2" />
          <p className="text-vibrant-text">
            <strong>Privacy Notice:</strong> This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use the fund.pi platform. Please read this policy carefully.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-mint-green mr-2" />
          <p className="text-vibrant-text">
            <strong>Legal Disclaimer:</strong> This Privacy Policy is provided as a template and should be reviewed by
            qualified legal counsel before implementation. fund.pi is committed to protecting your privacy and complying
            with applicable data protection laws.
          </p>
        </div>

        <p className="text-vibrant-text mb-4">Last Updated: March 10, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">1. Information We Collect</h2>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">1.1 Personal Information</h3>
          <p className="text-vibrant-text mb-4">We may collect the following types of personal information:</p>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Identity Information:</strong> Name, date of birth, nationality, government-issued identification.
            </li>
            <li>
              <strong>Contact Information:</strong> Email address, phone number, mailing address.
            </li>
            <li>
              <strong>Financial Information:</strong> Wallet addresses, transaction history, investment information.
            </li>
            <li>
              <strong>Business Information:</strong> Company details, registration documents, ownership structure.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, account preferences.
            </li>
            <li>
              <strong>Profile Information:</strong> Profile picture, bio, professional background.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">1.2 Automatically Collected Information</h3>
          <p className="text-vibrant-text mb-4">When you use our Platform, we may automatically collect:</p>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers.
            </li>
            <li>
              <strong>Usage Information:</strong> Pages visited, features used, time spent on the Platform.
            </li>
            <li>
              <strong>Location Information:</strong> General location based on IP address.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and
              similar technologies.
            </li>
            <li>
              <strong>Blockchain Information:</strong> Public blockchain data related to your transactions.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">2. How We Use Your Information</h2>

          <p className="text-vibrant-text mb-4">We may use your information for the following purposes:</p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.1 Provide and Improve Services</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Process transactions and investments</li>
            <li>Facilitate communication between startups and investors</li>
            <li>Provide customer support</li>
            <li>Improve and optimize the Platform</li>
            <li>Develop new features and services</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.2 Security and Compliance</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Verify your identity (KYC/AML)</li>
            <li>Detect and prevent fraud, spam, and abuse</li>
            <li>Ensure platform security</li>
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms and Conditions</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.3 Communication and Marketing</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Send administrative notifications</li>
            <li>Provide updates about the Platform</li>
            <li>Send marketing communications (with consent)</li>
            <li>Conduct surveys and research</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.4 Legal Basis for Processing</h3>
          <p className="text-vibrant-text mb-4">We process your information based on the following legal grounds:</p>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Contractual Necessity:</strong> To perform our contract with you
            </li>
            <li>
              <strong>Legitimate Interests:</strong> For our legitimate business interests
            </li>
            <li>
              <strong>Consent:</strong> Where you have given consent
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with laws and regulations
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">3. Information Sharing and Disclosure</h2>

          <p className="text-vibrant-text mb-4">
            We may share your information with the following categories of recipients:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.1 Platform Participants</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Startups and Investors:</strong> Information necessary for investment transactions and due
              diligence
            </li>
            <li>
              <strong>Mentors and Advisors:</strong> Information needed to provide mentorship and support
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.2 Service Providers</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>KYC/AML Providers:</strong> For identity verification
            </li>
            <li>
              <strong>Payment Processors:</strong> To process transactions
            </li>
            <li>
              <strong>Cloud Services:</strong> For hosting and storage
            </li>
            <li>
              <strong>Analytics Providers:</strong> To analyze Platform usage
            </li>
            <li>
              <strong>Customer Support:</strong> To assist with inquiries
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.3 Legal and Regulatory</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Regulatory Authorities:</strong> As required by law
            </li>
            <li>
              <strong>Law Enforcement:</strong> In response to valid requests
            </li>
            <li>
              <strong>Legal Advisors:</strong> For legal advice and proceedings
            </li>
            <li>
              <strong>Potential Acquirers:</strong> In connection with a merger, acquisition, or sale of assets
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.4 With Your Consent</h3>
          <p className="text-vibrant-text mb-4">
            We may share your information with other third parties with your explicit consent.
          </p>

          <div className="flex items-center p-4 bg-forest-green/30 rounded-lg mb-4">
            <AlertTriangle className="h-6 w-6 text-mint-green mr-2" />
            <p className="text-vibrant-text">
              <strong>Important:</strong> We do not sell your personal information to third parties for monetary
              consideration.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">4. Data Security</h2>

          <p className="text-vibrant-text mb-4">
            We implement appropriate technical and organizational measures to protect your information, including:
          </p>

          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage practices</li>
            <li>Staff training on data protection</li>
          </ul>

          <p className="text-vibrant-text mb-4">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
            to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">4.1 Data Retention</h3>
          <p className="text-vibrant-text mb-4">We retain your information for as long as necessary to:</p>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Provide the services you requested</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
          </ul>
          <p className="text-vibrant-text mb-4">
            When your information is no longer needed, we will securely delete or anonymize it.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">5. Your Rights and Choices</h2>

          <p className="text-vibrant-text mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.1 Access and Portability</h3>
          <p className="text-vibrant-text mb-4">
            You may request access to your personal information and receive a copy in a structured, commonly used
            format.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.2 Correction</h3>
          <p className="text-vibrant-text mb-4">You may request correction of inaccurate or incomplete information.</p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.3 Deletion</h3>
          <p className="text-vibrant-text mb-4">
            You may request deletion of your personal information, subject to certain exceptions.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.4 Restriction and Objection</h3>
          <p className="text-vibrant-text mb-4">
            You may request restriction of processing or object to processing of your information.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.5 Consent Withdrawal</h3>
          <p className="text-vibrant-text mb-4">
            You may withdraw consent at any time for processing based on consent.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.6 Complaint</h3>
          <p className="text-vibrant-text mb-4">You may lodge a complaint with a supervisory authority.</p>

          <p className="text-vibrant-text mb-4">
            To exercise these rights, please contact us at privacy@fund.pi. We will respond to your request within the
            timeframe required by applicable law.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">6. International Data Transfers</h2>

          <p className="text-vibrant-text mb-4">
            We operate globally and may transfer your information to countries other than your country of residence.
            These countries may have different data protection laws.
          </p>

          <p className="text-vibrant-text mb-4">
            When we transfer personal information outside of the European Economic Area (EEA), United Kingdom, or
            Switzerland, we implement appropriate safeguards, such as:
          </p>

          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Binding Corporate Rules</li>
            <li>Adequacy decisions</li>
            <li>Other legally approved mechanisms</li>
          </ul>

          <p className="text-vibrant-text mb-4">
            By using our Platform, you consent to the transfer of your information to countries that may not provide the
            same level of data protection as your country of residence.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">7. Children's Privacy</h2>

          <p className="text-vibrant-text mb-4">
            Our Platform is not intended for children under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe that your child has provided
            us with personal information, please contact us at privacy@fund.pi, and we will take steps to delete such
            information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">8. Cookies and Tracking Technologies</h2>

          <p className="text-vibrant-text mb-4">
            We use cookies and similar tracking technologies to collect information about your browsing activities and
            to distinguish you from other users of our Platform.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">8.1 Types of Cookies</h3>
          <ul className="list-disc list-inside mb-4 text-vibrant-text">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the Platform to function
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> To analyze how users interact with the Platform
            </li>
            <li>
              <strong>Functionality Cookies:</strong> To remember user preferences
            </li>
            <li>
              <strong>Targeting Cookies:</strong> To deliver relevant content and advertisements
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">8.2 Cookie Management</h3>
          <p className="text-vibrant-text mb-4">
            You can manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies,
            delete cookies, or be notified when a cookie is set. Please note that disabling cookies may affect the
            functionality of our Platform.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">9. Changes to This Privacy Policy</h2>

          <p className="text-vibrant-text mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated
            Privacy Policy on our Platform and updating the "Last Updated" date.
          </p>

          <p className="text-vibrant-text mb-4">
            We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and
            protect your information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-mint-green">10. Contact Us</h2>

          <p className="text-vibrant-text mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
            contact us at:
          </p>

          <p className="text-vibrant-text mb-4">
            <strong>Email:</strong> privacy@fund.pi
          </p>

          <p className="text-vibrant-text mb-4">
            <strong>Address:</strong> [Company Address]
          </p>

          <p className="text-vibrant-text mb-4">
            <strong>Data Protection Officer:</strong> dpo@fund.pi
          </p>

          <p className="text-vibrant-text mb-4">
            We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

