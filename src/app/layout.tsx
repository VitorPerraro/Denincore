import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Denincore - Criamos Experiências Digitais Únicas',
  description: 'Empresa especializada na criação e venda de sites e sistemas web. Desenvolvimento de soluções digitais inovadoras e personalizadas.',
  keywords: 'desenvolvimento web, sites, sistemas, tecnologia, digital, inovação',
  authors: [{ name: 'Denincore' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 