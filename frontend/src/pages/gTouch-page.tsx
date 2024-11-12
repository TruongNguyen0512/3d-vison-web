'use client'

import { useState } from 'react'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

export default function Component() {
  const [formData, setFormData] = useState({
    organization: '',
    lastName: '',
    firstName: '',
    email: '',
    website: '',
    inquiry: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          {/* Header with gradient */}
          <div className="relative h-32 bg-gradient-to-r from-white to-pink-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg"
                  alt="READYFOR Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <div className="text-2xl font-bold">
                  READYFOR Fundraising
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Organization */}
              <div>
                <Label htmlFor="organization" className="flex items-center">
                  Organization
                  <span className="ml-1 text-red-500">*</span>
                </Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Organization or Company Name"
                  />
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="lastName" className="flex items-center">
                    Last Name
                    <span className="ml-1 text-red-500">*</span>
                  </Label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Please enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="firstName" className="flex items-center">
                    First Name
                    <span className="ml-1 text-red-500">*</span>
                  </Label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Please enter your first name"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="flex items-center">
                  Email
                  <span className="ml-1 text-red-500">*</span>
                </Label>
                <div className="mt-1">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="We may send you updates about READYFOR's fundraising services"
                  />
                </div>
              </div>

              {/* Website/SNS */}
              <div>
                <Label htmlFor="website">
                  Website/Social Media
                </Label>
                <div className="mt-1">
                  <Input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Please enter your organization's website or social media URL (optional)"
                  />
                </div>
              </div>

              {/* Inquiry */}
              <div>
                <Label htmlFor="inquiry" className="flex items-center">
                  Inquiry Details
                  <span className="ml-1 text-red-500">*</span>
                </Label>
                <div className="mt-1">
                  <Textarea
                    id="inquiry"
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="h-32 w-full"
                    placeholder="Please specify if you're only requesting information.
For crowdfunding inquiries, please use our separate form at:
https://readyfor.jp/proposals"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  className="w-full bg-[#ff4d6a] text-white hover:bg-[#ff3355]"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}