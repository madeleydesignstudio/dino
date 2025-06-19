import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
