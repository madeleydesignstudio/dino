import React from 'react'
import { OpenPanelComponent } from '@openpanel/nextjs'
import './globals.css'
import PrimaryNavbar from './components/navs/primary-navbar'
import AppWrapper from './components/providers/app-wrapper'

export const metadata = {
  description:
    'a creative team focused on crafting bespoke websites that launch startups swiftly, seamlessly, and with refined style.',
  title: 'Dino - Next gen design studio.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <PrimaryNavbar />
          <main className="border-x border-neutral-200">{children}</main>
        </AppWrapper>
      </body>
    </html>
  )
}
