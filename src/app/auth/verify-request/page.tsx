import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MailCheck } from 'lucide-react'

export default function VerifyRequest() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full">
            <MailCheck className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="mt-4">Check your email</CardTitle>
          <CardDescription>
            A sign-in link has been sent to your email address. Please check your inbox and click the link to sign in.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
