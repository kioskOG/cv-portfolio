'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-2xl space-y-8 bg-background text-foreground'>
				<Card className='border-destructive/50'>
					<CardHeader className='text-center'>
						<div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10'>
							<AlertTriangle className='h-8 w-8 text-destructive' />
						</div>
						<CardTitle className='text-2xl font-bold text-destructive'>
							Something went wrong!
						</CardTitle>
						<CardDescription className='text-muted-foreground'>
							An unexpected error occurred while loading your portfolio.
						</CardDescription>
					</CardHeader>
					<CardContent className='text-center'>
						<div className='space-y-4'>
							<p className='text-sm text-muted-foreground'>
								{error.message || 'An unknown error occurred'}
							</p>
							<div className='flex justify-center gap-2'>
								<Button
									onClick={reset}
									variant='outline'
									className='inline-flex items-center gap-2'
								>
									<RefreshCw className='h-4 w-4' />
									Try again
								</Button>
								<Button
									onClick={() => window.location.href = '/'}
									className='inline-flex items-center gap-2'
								>
									Go home
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	)
}
