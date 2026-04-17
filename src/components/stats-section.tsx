'use client'

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { RESUME_DATA } from '@/data/resume-data'
import { BriefcaseIcon, CodeIcon, AwardIcon, BuildingIcon } from 'lucide-react'

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const hasAnimated = useRef(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated.current) {
					hasAnimated.current = true
					const duration = 1200
					const startTime = performance.now()

					const animate = (currentTime: number) => {
						const elapsed = currentTime - startTime
						const progress = Math.min(elapsed / duration, 1)
						const eased = 1 - Math.pow(1 - progress, 3)
						setCount(Math.floor(eased * target))
						if (progress < 1) requestAnimationFrame(animate)
					}
					requestAnimationFrame(animate)
				}
			},
			{ threshold: 0.3 }
		)
		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [target])

	return (
		<div ref={ref} className='text-3xl font-bold mb-1 text-gradient'>
			{count}{suffix}
		</div>
	)
}

export function StatsSection() {
	const stats = [
		{
			label: 'Years Experience',
			value: new Date().getFullYear() - 2018,
			icon: BriefcaseIcon,
			description: 'Professional experience'
		},
		{
			label: 'Projects',
			value: RESUME_DATA.projects.length,
			icon: CodeIcon,
			description: 'Open source & personal'
		},
		{
			label: 'Companies',
			value: RESUME_DATA.work.length,
			icon: BuildingIcon,
			description: 'Worked with'
		},
		{
			label: 'Skills',
			value: RESUME_DATA.skills.length,
			icon: AwardIcon,
			description: 'Technologies mastered'
		}
	]

	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
			{stats.map((stat, index) => {
				const Icon = stat.icon
				return (
					<Card key={index} className='text-center group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.03]'>
						<div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
						<CardContent className='pt-6 pb-4 relative'>
							<div className='inline-flex items-center justify-center size-10 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/15 transition-colors duration-300'>
								<Icon className='size-5 text-primary' />
							</div>
							<AnimatedCounter target={stat.value} />
							<div className='text-sm text-muted-foreground font-medium'>{stat.label}</div>
							<div className='text-xs text-muted-foreground/70 mt-1'>{stat.description}</div>
						</CardContent>
					</Card>
				)
			})}
		</div>
	)
}
