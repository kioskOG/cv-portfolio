// app/layout.tsx
import React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
	title: `CV | ${RESUME_DATA.name}`,
	description: `${RESUME_DATA.about}`,
	keywords: ['DevOps', 'Cloud Engineer', 'Kubernetes', 'Terraform', 'AWS', 'GCP', 'Infrastructure', 'MLOps'],
	authors: [{ name: RESUME_DATA.name }],
	creator: RESUME_DATA.name,
	openGraph: {
		title: `CV | ${RESUME_DATA.name}`,
		description: RESUME_DATA.about,
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: `CV | ${RESUME_DATA.name}`,
		description: RESUME_DATA.about,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
	other: {
		'preload': `<${RESUME_DATA.avatar}>; rel=preload; as=image`
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={cn(GeistSans.variable, GeistMono.variable)}
		>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					GeistSans.variable,
					GeistMono.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					<TooltipProvider>
						{children}
					</TooltipProvider>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
