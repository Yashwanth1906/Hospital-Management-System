/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/6TbqLRbCSxH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function bedallocation() {
  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="grid grid-cols-[1fr_1fr_1fr] gap-4 p-4">
        <div className="space-y-1.5">
          <Label htmlFor="patient-name">Patient Name</Label>
          <div className="flex items-center">
            <Avatar className="mr-2">
              <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="abha-id">Abha ID</Label>
          <div>123456789</div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="doctor-name">Doctor Name</Label>
          <div className="flex items-center">
            <Avatar className="mr-2">
              <AvatarImage src="/placeholder-user.jpg" alt="Doctor" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <span>Dr. Jane Smith</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="reason">Reason</Label>
          <div>Chest pain, shortness of breath</div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ward-name">Ward Name</Label>
          <div>Cardiac Ward</div>
        </div>
        <div className="flex items-end justify-end">
          <Button size="lg">Allocate Bed</Button>
        </div>
      </CardContent>
    </Card>
  )
}
