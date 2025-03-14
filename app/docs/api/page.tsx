"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Lock, Server } from "lucide-react"

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-mint-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        API Documentation
      </motion.h1>

      <div className="mb-8 p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20">
        <h2 className="text-2xl font-bold mb-4 text-mint-green">Overview</h2>
        <p className="mb-4 text-vibrant-text">
          The fund.pi API allows developers to integrate with our platform, access data, and build applications on top
          of our ecosystem. Our API follows RESTful principles and uses JSON for data exchange.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Authentication</h3>
        <p className="mb-4 text-vibrant-text">
          All API requests require authentication using API keys. You can generate API keys in your account settings.
          Include your API key in the request header as follows:
        </p>

        <div className="bg-deep-black p-4 rounded-md mb-4">
          <code className="text-vibrant-text">Authorization: Bearer YOUR_API_KEY</code>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-2 text-mint-green">Rate Limiting</h3>
        <p className="mb-4 text-vibrant-text">
          API requests are limited to 100 requests per minute per API key. If you exceed this limit, you will receive a
          429 Too Many Requests response.
        </p>
      </div>

      <Tabs defaultValue="startups" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="startups">Startups</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent
          value="startups"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-mint-green mr-2" />
            <h2 className="text-2xl font-bold text-mint-green">Startups API</h2>
          </div>

          <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Endpoints</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/startups</h4>
            <p className="text-vibrant-text mb-2">Retrieve a list of all startups.</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/startups</code>
            </div>
            <p className="text-vibrant-text mb-2">Query Parameters:</p>
            <ul className="list-disc list-inside mb-2 text-vibrant-text">
              <li>page: Page number (default: 1)</li>
              <li>limit: Number of results per page (default: 20, max: 100)</li>
              <li>category: Filter by category</li>
              <li>status: Filter by status (active, funded, completed)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/startups/{"{id}"}</h4>
            <p className="text-vibrant-text mb-2">Retrieve details of a specific startup.</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/startups/123</code>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">POST /api/startups</h4>
            <p className="text-vibrant-text mb-2">Create a new startup (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">POST https://api.fund.pi/v1/startups</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "name": "EcoChain",
  "description": "Sustainable supply chain tracking on Pi Network",
  "category": "Supply Chain",
  "fundingGoal": 200000,
  "equityOffered": 10,
  "milestones": [
    {
      "title": "MVP Development",
      "description": "Develop minimum viable product",
      "fundingPercentage": 30
    },
    {
      "title": "Beta Launch",
      "description": "Launch beta version to early users",
      "fundingPercentage": 40
    },
    {
      "title": "Public Launch",
      "description": "Full public launch",
      "fundingPercentage": 30
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="investments"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-mint-green mr-2" />
            <h2 className="text-2xl font-bold text-mint-green">Investments API</h2>
          </div>

          <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Endpoints</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/investments</h4>
            <p className="text-vibrant-text mb-2">Retrieve a list of your investments (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/investments</code>
            </div>
            <p className="text-vibrant-text mb-2">Query Parameters:</p>
            <ul className="list-disc list-inside mb-2 text-vibrant-text">
              <li>page: Page number (default: 1)</li>
              <li>limit: Number of results per page (default: 20, max: 100)</li>
              <li>status: Filter by status (active, exited)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">POST /api/investments</h4>
            <p className="text-vibrant-text mb-2">Make a new investment (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">POST https://api.fund.pi/v1/investments</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "startupId": "123",
  "amount": 5000,
  "currency": "PI"
}`}
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/investments/{"{id}"}</h4>
            <p className="text-vibrant-text mb-2">Retrieve details of a specific investment.</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/investments/456</code>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="users"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-mint-green mr-2" />
            <h2 className="text-2xl font-bold text-mint-green">Users API</h2>
          </div>

          <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Endpoints</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/users/me</h4>
            <p className="text-vibrant-text mb-2">Retrieve your user profile (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/users/me</code>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">PUT /api/users/me</h4>
            <p className="text-vibrant-text mb-2">Update your user profile (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">PUT https://api.fund.pi/v1/users/me</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "name": "John Doe",
  "email": "john@example.com",
  "profilePicture": "https://example.com/profile.jpg",
  "bio": "Experienced investor in blockchain startups"
}`}
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">POST /api/users/api-keys</h4>
            <p className="text-vibrant-text mb-2">Generate a new API key (requires authentication).</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">POST https://api.fund.pi/v1/users/api-keys</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "name": "My App",
  "expiresIn": "30d" // Optional, defaults to never
}`}
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="governance"
          className="p-6 bg-gradient-dark backdrop-blur-sm rounded-lg border border-mint-green/20"
        >
          <div className="flex items-center mb-4">
            <Server className="h-6 w-6 text-mint-green mr-2" />
            <h2 className="text-2xl font-bold text-mint-green">Governance API</h2>
          </div>

          <h3 className="text-xl font-bold mt-4 mb-2 text-mint-green">Endpoints</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/governance/proposals</h4>
            <p className="text-vibrant-text mb-2">Retrieve a list of governance proposals.</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/governance/proposals</code>
            </div>
            <p className="text-vibrant-text mb-2">Query Parameters:</p>
            <ul className="list-disc list-inside mb-2 text-vibrant-text">
              <li>page: Page number (default: 1)</li>
              <li>limit: Number of results per page (default: 20, max: 100)</li>
              <li>status: Filter by status (active, passed, rejected)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">GET /api/governance/proposals/{"{id}"}</h4>
            <p className="text-vibrant-text mb-2">Retrieve details of a specific proposal.</p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">GET https://api.fund.pi/v1/governance/proposals/789</code>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">POST /api/governance/proposals</h4>
            <p className="text-vibrant-text mb-2">
              Create a new governance proposal (requires authentication and minimum token stake).
            </p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">POST https://api.fund.pi/v1/governance/proposals</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "title": "Reduce Platform Fees",
  "description": "Proposal to reduce platform fees from 5% to 3%",
  "category": "Fees",
  "votingPeriod": "7d",
  "options": ["Approve", "Reject"]
}`}
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-mint-green">POST /api/governance/proposals/{"{id}"}/vote</h4>
            <p className="text-vibrant-text mb-2">
              Vote on a governance proposal (requires authentication and token stake).
            </p>
            <div className="bg-deep-black p-4 rounded-md mb-2">
              <code className="text-vibrant-text">POST https://api.fund.pi/v1/governance/proposals/789/vote</code>
            </div>
            <p className="text-vibrant-text mb-2">Request Body:</p>
            <div className="bg-deep-black p-4 rounded-md">
              <pre className="text-vibrant-text whitespace-pre-wrap">
                {`{
  "option": "Approve",
  "voteWeight": 100 // Number of tokens to use for voting
}`}
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

