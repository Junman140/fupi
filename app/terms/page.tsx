"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Terms and Conditions
      </motion.h1>

      <ScrollAnimation>
        <div className="mb-8 p-6 bg-gradient-dark backdrop-blur-md rounded-lg border border-mint-green/20">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-mint-green mr-2" />
            <p className="text-vibrant-text">
              <strong>Important Notice:</strong> This document outlines the terms and conditions governing your use of
              the fupi platform. By accessing or using our services, you agree to be bound by these terms. Please read
              them carefully.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-mint-green mr-2" />
            <p className="text-vibrant-text">
              <strong>Legal Disclaimer:</strong> The following terms and conditions are provided as a template and
              should be reviewed by qualified legal counsel before implementation. fupi is not a registered financial
              institution, broker-dealer, investment advisor, or exchange in any jurisdiction.
            </p>
          </div>

          <p className="text-vibrant-text mb-4">Last Updated: March 10, 2025</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">1. Definitions</h2>

            <p className="text-vibrant-text mb-4">
              In these Terms and Conditions, unless the context requires otherwise:
            </p>

            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>"Platform"</strong> refers to fupi, a decentralized accelerator platform built on the Pi
                Blockchain.
              </li>
              <li>
                <strong>"User"</strong> refers to any individual or entity that accesses or uses the Platform.
              </li>
              <li>
                <strong>"Investor"</strong> refers to a User who invests in startups through the Platform.
              </li>
              <li>
                <strong>"Startup"</strong> refers to a business entity that applies for or receives funding through the
                Platform.
              </li>
              <li>
                <strong>"Pi"</strong> refers to the cryptocurrency of the Pi Network.
              </li>
              <li>
                <strong>"$FUPI"</strong> refers to the governance token of the Platform.
              </li>
              <li>
                <strong>"We," "Us," "Our"</strong> refers to fupi and its operators.
              </li>
              <li>
                <strong>"Services"</strong> refers to all features, functions, and services provided by the Platform.
              </li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.3}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">2. Eligibility and Registration</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.1 Eligibility</h3>
            <p className="text-vibrant-text mb-4">To use the Platform, you must:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                Be at least 18 years of age or the age of legal majority in your jurisdiction, whichever is higher.
              </li>
              <li>Have the legal capacity to enter into binding contracts.</li>
              <li>
                Not be a resident of or located in any jurisdiction where participation in the Platform would be
                prohibited by applicable law.
              </li>
              <li>Not be a citizen or resident of, or located in, any country subject to international sanctions.</li>
              <li>Not be a Politically Exposed Person (PEP) or on any sanctions or watchlists.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.2 Registration</h3>
            <p className="text-vibrant-text mb-4">
              To access certain features of the Platform, you must register for an account. When registering, you agree
              to:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Provide accurate, current, and complete information.</li>
              <li>Maintain and promptly update your account information.</li>
              <li>Keep your account credentials confidential and secure.</li>
              <li>Accept responsibility for all activities that occur under your account.</li>
              <li>Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">2.3 KYC/AML Compliance</h3>
            <p className="text-vibrant-text mb-4">
              We implement Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures to comply with applicable
              regulations. You agree to:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Complete our identity verification process.</li>
              <li>Provide additional information or documents as requested.</li>
              <li>
                Acknowledge that we may refuse service or limit your access to certain features if you fail to complete
                verification or if we identify potential compliance risks.
              </li>
              <li>Acknowledge that we may share your information with regulatory authorities as required by law.</li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.4}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">3. Platform Services</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.1 For Startups</h3>
            <p className="text-vibrant-text mb-4">The Platform provides the following services for Startups:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Application for funding from Investors.</li>
              <li>Milestone-based funding release.</li>
              <li>Access to mentorship and resources.</li>
              <li>Exposure to the Pi Network ecosystem.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.2 For Investors</h3>
            <p className="text-vibrant-text mb-4">The Platform provides the following services for Investors:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Access to vetted startup investment opportunities.</li>
              <li>Ability to invest using Pi cryptocurrency.</li>
              <li>Tracking of investments and startup progress.</li>
              <li>Participation in governance through $FUPI tokens.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">3.3 Service Limitations</h3>
            <p className="text-vibrant-text mb-4">You acknowledge and agree that:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>We do not provide financial, investment, legal, or tax advice.</li>
              <li>We do not guarantee the success of any startup or investment.</li>
              <li>We do not act as a broker, dealer, or investment advisor.</li>
              <li>We do not hold custody of funds except as explicitly described in these Terms.</li>
              <li>Services may not be available in all jurisdictions.</li>
              <li>We may modify, suspend, or discontinue any aspect of the Services at any time.</li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.5}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">4. Investment Terms</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">4.1 Investment Process</h3>
            <p className="text-vibrant-text mb-4">Investments on the Platform operate as follows:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Investments are made using Pi cryptocurrency.</li>
              <li>Investments are governed by a Simple Agreement for Future Equity (SAFE) or similar instrument.</li>
              <li>Funds are released to Startups based on milestone completion.</li>
              <li>The Platform charges a 5% fee on all investments.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">4.2 Risk Disclosure</h3>
            <p className="text-vibrant-text mb-4">
              By investing through the Platform, you acknowledge and accept the following risks:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>
                <strong>Loss of Capital:</strong> Startup investments are high-risk, and you may lose your entire
                investment.
              </li>
              <li>
                <strong>Illiquidity:</strong> Investments are illiquid and cannot be easily sold or transferred.
              </li>
              <li>
                <strong>Long-Term Horizon:</strong> Returns, if any, may take years to materialize.
              </li>
              <li>
                <strong>Limited Information:</strong> Startups may have limited operating history and financial
                information.
              </li>
              <li>
                <strong>Cryptocurrency Risks:</strong> Pi cryptocurrency is subject to volatility, regulatory changes,
                and technical risks.
              </li>
              <li>
                <strong>Dilution:</strong> Your ownership percentage may be diluted in future funding rounds.
              </li>
              <li>
                <strong>Regulatory Risks:</strong> Changes in regulations may impact the legality or structure of
                investments.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">4.3 Investor Representations</h3>
            <p className="text-vibrant-text mb-4">As an Investor, you represent and warrant that:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>You have sufficient knowledge and experience to evaluate investment risks.</li>
              <li>You have conducted your own due diligence on any Startup you invest in.</li>
              <li>You are investing with funds that you can afford to lose.</li>
              <li>You understand that past performance is not indicative of future results.</li>
              <li>You are in compliance with all applicable laws regarding investments in your jurisdiction.</li>
              <li>
                You are not relying on any representations or warranties not expressly set forth in these Terms or the
                specific investment documentation.
              </li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.6}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">5. Startup Obligations</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.1 Information Accuracy</h3>
            <p className="text-vibrant-text mb-4">As a Startup, you represent and warrant that:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>All information provided to the Platform and Investors is accurate, complete, and not misleading.</li>
              <li>You have disclosed all material information that could reasonably affect an investment decision.</li>
              <li>You will promptly update any information that becomes inaccurate or incomplete.</li>
              <li>You have all necessary rights, licenses, and permissions to operate your business.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.2 Milestone Compliance</h3>
            <p className="text-vibrant-text mb-4">Startups agree to:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Set realistic and measurable milestones.</li>
              <li>Use funds solely for the purposes disclosed to Investors.</li>
              <li>Provide regular updates on progress toward milestones.</li>
              <li>Submit evidence of milestone completion as required.</li>
              <li>Accept the Platform's determination regarding milestone completion.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">5.3 Ongoing Obligations</h3>
            <p className="text-vibrant-text mb-4">Startups further agree to:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Maintain accurate financial records.</li>
              <li>Provide financial statements and reports as required.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Notify the Platform of any material changes to the business.</li>
              <li>Participate in mentorship and support programs as offered.</li>
              <li>Maintain open communication with Investors.</li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.7}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">6. Governance and $FUPI Tokens</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">6.1 Token Utility</h3>
            <p className="text-vibrant-text mb-4">$FUPI tokens serve the following purposes:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Voting on governance proposals.</li>
              <li>Staking for platform rewards.</li>
              <li>Accessing premium features.</li>
              <li>Participating in startup selection.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">6.2 Token Disclaimers</h3>
            <p className="text-vibrant-text mb-4">You acknowledge and agree that:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>$FUPI tokens are utility tokens, not securities or investments.</li>
              <li>Token value may fluctuate and could decrease to zero.</li>
              <li>We make no representations regarding the future value of tokens.</li>
              <li>Tokens may be subject to regulatory restrictions in certain jurisdictions.</li>
              <li>Token functionality may change over time through governance decisions.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">6.3 Governance Participation</h3>
            <p className="text-vibrant-text mb-4">When participating in governance, you agree to:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Act in good faith and in the best interests of the Platform ecosystem.</li>
              <li>Review proposal information carefully before voting.</li>
              <li>Accept the outcome of governance votes.</li>
              <li>Comply with any additional governance rules established through the governance process.</li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.8}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">7. Intellectual Property</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">7.1 Platform IP</h3>
            <p className="text-vibrant-text mb-4">
              All intellectual property rights in the Platform, including but not limited to software, code, interfaces,
              content, and design, are owned by us or our licensors. You may not:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Copy, modify, or create derivative works of the Platform.</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Platform.</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices.</li>
              <li>Use our intellectual property without express written permission.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">7.2 User Content</h3>
            <p className="text-vibrant-text mb-4">By submitting content to the Platform, you:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>Retain ownership of your intellectual property rights.</li>
              <li>
                Grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish,
                translate, and distribute your content for the purpose of operating and promoting the Platform.
              </li>
              <li>Represent that you have all necessary rights to grant this license.</li>
              <li>Agree not to submit content that infringes on third-party rights.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">7.3 Startup IP</h3>
            <p className="text-vibrant-text mb-4">For Startups, you acknowledge that:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>We do not claim ownership of your business's intellectual property.</li>
              <li>
                You grant us the right to display your logo, name, and non-confidential business information for
                promotional purposes.
              </li>
              <li>
                You are responsible for protecting your own intellectual property through appropriate registrations and
                agreements.
              </li>
              <li>Investment agreements may include specific IP provisions that supersede these general terms.</li>
            </ul>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={0.9}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">8. Privacy and Data Protection</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">8.1 Data Collection</h3>
            <p className="text-vibrant-text mb-4">
              We collect and process personal data as described in our Privacy Policy. By using the Platform, you
              consent to such processing and warrant that all data you provide is accurate.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">8.2 Data Security</h3>
            <p className="text-vibrant-text mb-4">
              We implement reasonable security measures to protect your data, but no system is completely secure. You
              acknowledge that:
            </p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>We cannot guarantee absolute security of your data.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You will notify us immediately of any unauthorized access to your account.</li>
              <li>We may use third-party service providers to process data.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">8.3 Regulatory Compliance</h3>
            <p className="text-vibrant-text mb-4">We comply with applicable data protection laws, including:</p>
            <ul className="list-disc list-inside mb-4 text-vibrant-text">
              <li>General Data Protection Regulation (GDPR) for users in the European Economic Area.</li>
              <li>California Consumer Privacy Act (CCPA) for California residents.</li>
              <li>Other applicable regional and national data protection laws.</li>
            </ul>
            <p className="text-vibrant-text mb-4">
              You may have certain rights regarding your personal data, as detailed in our Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={1.0}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">9. Limitation of Liability</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">9.1 Disclaimer of Warranties</h3>
            <p className="text-vibrant-text mb-4">
              THE PLATFORM AND ALL SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-vibrant-text mb-4">
              WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, THAT DEFECTS
              WILL BE CORRECTED, OR THAT THE PLATFORM OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">9.2 Limitation of Liability</h3>
            <p className="text-vibrant-text mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR
              GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS, THE PLATFORM, OR THE SERVICES, WHETHER BASED
              ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-vibrant-text mb-4">
              IN NO EVENT SHALL OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THESE TERMS, THE PLATFORM, OR THE
              SERVICES EXCEED THE GREATER OF $100 OR THE AMOUNT PAID BY YOU TO US DURING THE 12 MONTHS PRECEDING THE
              CLAIM.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">9.3 Investment Risks</h3>
            <p className="text-vibrant-text mb-4">
              YOU ACKNOWLEDGE THAT STARTUP INVESTMENTS INVOLVE SUBSTANTIAL RISK, INCLUDING THE POSSIBLE LOSS OF ALL
              INVESTED CAPITAL. WE DO NOT GUARANTEE ANY RETURN ON INVESTMENT OR THE PERFORMANCE OF ANY STARTUP. ALL
              INVESTMENT DECISIONS ARE MADE SOLELY BY YOU BASED ON YOUR OWN EVALUATION.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={1.1}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">10. Dispute Resolution</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">10.1 Governing Law</h3>
            <p className="text-vibrant-text mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law principles.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">10.2 Arbitration</h3>
            <p className="text-vibrant-text mb-4">
              Any dispute arising out of or relating to these Terms or the Platform shall be resolved by binding
              arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted
              in [City, Country], in the English language, by a single arbitrator.
            </p>
            <p className="text-vibrant-text mb-4">
              The arbitrator shall have exclusive authority to resolve all disputes, including the validity,
              interpretation, breach, or termination of these Terms. The arbitrator's award shall be final and binding,
              and judgment on the award may be entered in any court of competent jurisdiction.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">10.3 Class Action Waiver</h3>
            <p className="text-vibrant-text mb-4">
              YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY AND
              NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            </p>
            <p className="text-vibrant-text mb-4">
              Unless both you and we agree otherwise, the arbitrator may not consolidate more than one person's claims
              and may not otherwise preside over any form of a representative or class proceeding.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">10.4 Injunctive Relief</h3>
            <p className="text-vibrant-text mb-4">
              Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of
              competent jurisdiction to prevent breach of intellectual property rights or confidentiality obligations.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation delay={1.2}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-mint-green">11. Miscellaneous</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.1 Entire Agreement</h3>
            <p className="text-vibrant-text mb-4">
              These Terms, together with the Privacy Policy and any additional terms referenced herein, constitute the
              entire agreement between you and us regarding the Platform and supersede all prior agreements and
              understandings.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.2 Severability</h3>
            <p className="text-vibrant-text mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
              or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and
              effect.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.3 No Waiver</h3>
            <p className="text-vibrant-text mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right
              or provision. The waiver of any such right or provision will be effective only if in writing and signed by
              our authorized representative.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.4 Assignment</h3>
            <p className="text-vibrant-text mb-4">
              You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written
              consent. We may assign or transfer these Terms, at our sole discretion, without restriction.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.5 Amendments</h3>
            <p className="text-vibrant-text mb-4">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by
              posting the updated Terms on the Platform and updating the "Last Updated" date. Your continued use of the
              Platform after such changes constitutes your acceptance of the revised Terms.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">11.6 Contact Information</h3>
            <p className="text-vibrant-text mb-4">
              If you have any questions about these Terms, please contact us at legal@fund.pi.
            </p>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  )
}

