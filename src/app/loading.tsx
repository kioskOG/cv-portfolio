import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-4xl space-y-8 bg-background text-foreground print:space-y-6'>
				<div className='flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between'>
					<div className='flex-1 space-y-3 text-center sm:text-left'>
						<Skeleton className='h-12 w-64 mx-auto sm:mx-0' />
						<Skeleton className='h-4 w-full max-w-md mx-auto sm:mx-0' />
						<Skeleton className='h-4 w-32 mx-auto sm:mx-0' />
						<div className='flex justify-center gap-2 pt-1 sm:justify-start'>
							<Skeleton className='h-10 w-24' />
							<Skeleton className='h-10 w-24' />
						</div>
					</div>
					<Skeleton className='size-32 sm:size-40 rounded-full' />
				</div>

				<div className='space-y-4'>
					<Skeleton className='h-6 w-24' />
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-3/4' />
				</div>

				<div className='space-y-4'>
					<Skeleton className='h-6 w-32' />
					{Array.from({ length: 3 }).map((_, i) => (
						<Card key={i}>
							<CardContent className='p-4'>
								<Skeleton className='h-5 w-48 mb-2' />
								<Skeleton className='h-4 w-32 mb-4' />
								<div className='space-y-2'>
									<Skeleton className='h-3 w-full' />
									<Skeleton className='h-3 w-5/6' />
									<Skeleton className='h-3 w-4/5' />
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className='space-y-4'>
					<Skeleton className='h-6 w-20' />
					<div className='flex flex-wrap gap-2'>
						{Array.from({ length: 8 }).map((_, i) => (
							<Skeleton key={i} className='h-6 w-16' />
						))}
					</div>
				</div>

				<div className='space-y-4'>
					<Skeleton className='h-6 w-24' />
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{Array.from({ length: 6 }).map((_, i) => (
							<Card key={i}>
								<CardContent className='p-3'>
									<Skeleton className='h-5 w-32 mb-2' />
									<Skeleton className='h-3 w-full mb-2' />
									<Skeleton className='h-3 w-4/5 mb-3' />
									<div className='flex flex-wrap gap-1'>
										<Skeleton className='h-5 w-12' />
										<Skeleton className='h-5 w-16' />
										<Skeleton className='h-5 w-14' />
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
