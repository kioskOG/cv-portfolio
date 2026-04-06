'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HomeIcon, ArrowLeftIcon } from 'lucide-react'

export default function NotFound() {
	return (
		<main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-2xl space-y-8 bg-background text-foreground'>
				<Card className='border-muted/50'>
					<CardHeader className='text-center'>
						<div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted'>
							<span className='text-2xl font-bold text-muted-foreground'>404</span>
						</div>
						<CardTitle className='text-2xl font-bold'>
							Page Not Found
						</CardTitle>
						<CardDescription className='text-muted-foreground'>
							The page you&apos;re looking for doesn&apos;t exist.
						</CardDescription>
					</CardHeader>
					<CardContent className='text-center'>
						<div className='space-y-4'>
							<p className='text-sm text-muted-foreground'>
								The page you requested could not be found. It might have been moved, deleted, or you entered the wrong URL.
							</p>
							<div className='flex justify-center gap-2'>
								<Button
									onClick={() => window.history.back()}
									variant='outline'
									className='inline-flex items-center gap-2'
								>
									<ArrowLeftIcon className='h-4 w-4' />
									Go back
								</Button>
								<Link href='/'>
									<Button className='inline-flex items-center gap-2'>
										<HomeIcon className='h-4 w-4' />
										Go home
									</Button>
								</Link>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	)
}
