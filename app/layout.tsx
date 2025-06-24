import "./globals.css"

export const metadata = {
  title: "ClipFlow",
  description: "AI Video Clips",
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
