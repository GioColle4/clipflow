import "./globals.css"

export const metadata = {
  title: "ClipFlow - AI Video Clips",
  description: "Generate viral-ready clips in seconds",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
