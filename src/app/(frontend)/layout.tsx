import React from 'react'
import PrimaryNavbar from '@/components/navs/primary-navbar'
import AppWrapper from '../../components/providers/app-wrapper'
import { Toaster } from 'sonner'
import { ProjectAnnouncement } from '@/components/ui/project-announcement'
import './globals.css'

export const metadata = {
  description:
    'a creative team focused on crafting bespoke websites that launch startups swiftly, seamlessly, and with refined style.',
  title: 'Dino - Next gen design studio.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <AppWrapper>
      <ProjectAnnouncement />
      <PrimaryNavbar />
      <main className="border-x border-neutral-200">{children}</main>
      <Toaster position="bottom-right" richColors />
    </AppWrapper>
  )
}
