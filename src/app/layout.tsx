import React from 'react'
import { OpenPanelComponent } from '@openpanel/nextjs'
import './(frontend)/globals.css'

export const metadata = {
  description:
    'a creative team focused on crafting bespoke websites that launch startups swiftly, seamlessly, and with refined style.',
  title: 'Dino - Next gen design studio.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="50f0d6bf-596e-4e58-8e58-69aa5142ad2a"
        ></script>
        <OpenPanelComponent
          clientId="6621cc22-a1ff-4225-a38e-cc0cec494e81"
          trackScreenViews={true}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
