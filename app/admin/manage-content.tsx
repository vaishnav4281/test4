"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function ManageContent() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Management</CardTitle>
          <CardDescription>Manage website content and media</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Admin Features Unavailable</AlertTitle>
            <AlertDescription>
              The content management features are currently unavailable. This is a static website without a backend database.
              Please contact the website administrator for content updates.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
} 