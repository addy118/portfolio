import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aditya Kirti | Software Engineer",
  description: "Aditya Kirti's portfolio - Software Engineer and IT Student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @supports (scrollbar-width: thin) {
              * {
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 166, 237, 0.5) rgba(10, 10, 10, 0.8);
              }
            }
          `,
          }}
        />
      </head>
      <body className="dark">{children}</body>
    </html>
  )
}
