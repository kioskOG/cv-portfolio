'use client'

import React, { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/button-link'
import { ProjectCard } from '@/components/project-card'
import { CommandMenu } from '@/components/command-menu'
import { GlobeIcon, Swords, Crown, Compass, BookOpen, Scroll, HelpCircle } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { RESUME_DATA } from '@/data/resume-data'
import { WESTEROS_DATA } from '@/data/westeros-data'
import { NavigationMenu } from '@/components/navigation-menu'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CopyButton } from '@/components/copy-button'
import { SkillsCategorized } from '@/components/skills-categorized'
import { DownloadResumeButton } from '@/components/download-resume-button'
import { StatsSection } from '@/components/stats-section'
import { ProjectsSection } from '@/components/projects-section'
import { WorkTimeline } from '@/components/work-timeline'
import VolunteeringAwardsSection from '@/components/volunteering-awards-and-certifications'
import { BlogSection } from '@/components/blog-section'
import { DragonFireBackground } from '@/components/dragon-fire-background'
import { FactionModeToggle } from '@/components/faction-mode-toggle'
import { cn } from '@/lib/utils'

// Memoized components for better performance
const MemoizedButtonLink = React.memo(ButtonLink)

export default function Page() {
	const [faction, setFaction] = useState<'blacks' | 'greens'>('blacks')
	const [mode, setMode] = useState<'modern' | 'westeros'>('modern')

	// Apply faction CSS class to document root
	useEffect(() => {
		const root = document.documentElement
		if (faction === 'blacks') {
			root.classList.add('faction-blacks')
			root.classList.remove('faction-greens')
		} else {
			root.classList.add('faction-greens')
			root.classList.remove('faction-blacks')
		}
	}, [faction])

	// Merge original CV data with Westeros adaptation translations
	const activeData = {
		...RESUME_DATA,
		...(mode === 'westeros' ? WESTEROS_DATA : {})
	} as typeof RESUME_DATA

	// Dynamic Westeros Section Headers
	const headers = {
		about: mode === 'westeros' ? "Maester's Chronicle" : "About",
		work: mode === 'westeros' ? "Campaigns & Conquests" : "Work Experience",
		education: mode === 'westeros' ? "Citadels of Learning" : "Education",
		skills: mode === 'westeros' ? "Valyrian Steel (Skills)" : "Skills",
		projects: mode === 'westeros' ? "Dragon Hatchery (Projects)" : "Projects",
		impact: mode === 'westeros' ? "Seals of the Realm" : "Impact"
	}

	return (
		<>
			{/* Canvas fire particles background */}
			<DragonFireBackground faction={faction} />

			<NavigationMenu />

			<main id='main-content' className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 pt-28 md:pt-32 z-10'>
				{/* Faction selector, mode switch, and sound toggle */}
				<FactionModeToggle 
					faction={faction} 
					setFaction={setFaction} 
					mode={mode} 
					setMode={setMode} 
				/>

				<section className='mx-auto w-full max-w-4xl space-y-10 text-foreground print:space-y-6 mt-6'>
					{/* Hero Section */}
					<div className='flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between animate-fade-in relative'>
						<div className='flex-1 space-y-4 text-center sm:text-left'>
							{/* Badge */}
							<div className={cn(
								'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300',
								mode === 'westeros' ? 'font-cinzel border-primary/20 bg-primary/10 text-primary' : 'bg-primary/10 text-primary border-primary/20'
							)}>
								<span className='relative flex h-2 w-2'>
									<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
									<span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
								</span>
								{mode === 'westeros' ? 'Pledged for Campaigns' : 'Available for opportunities'}
							</div>

							{/* Name and Sigils */}
							<div className="flex items-center justify-center sm:justify-start gap-3">
								{mode === 'westeros' && (
									faction === 'blacks' ? (
										// House Targaryen crest (Red Dragon)
										<svg className="size-10 text-primary animate-pulse hidden sm:block" viewBox="0 0 100 100" fill="currentColor">
											<path d="M50 10c-6.8 0-12.7 4.1-15.1 10.1C33.4 19.3 31.8 19 30 19c-9.4 0-17 7.6-17 17 0 2.2.4 4.3 1.2 6.2C9.4 44.8 6 49.5 6 55c0 8.3 6.7 15 15 15c2.2 0 4.3-.5 6.2-1.3c2.6 4.8 7.7 8.3 13.6 8.3c1.8 0 3.5-.3 5.1-.9c3 5.4 8.7 9.1 15.3 9.1c9.4 0 17-7.6 17-17c0-2.2-.4-4.3-1.2-6.2c4.8-2.6 8.2-7.7 8.2-13.6c0-8.3-6.7-15-15-15c-2.2 0-4.3.5-6.2 1.3c-2.6-4.8-7.7-8.3-13.6-8.3c-1.8 0-3.5.3-5.1.9c-3-5.4-8.7-9.1-15.3-9.1zm0 10c4.1 0 7.8 2.2 9.8 5.6c-.6-.2-1.3-.3-2-.3c-6.8 0-12.7 4.1-15.1 10.1c-1.5-.8-3.1-1.1-4.7-1.1c-4.1 0-7.8 2.2-9.8 5.6C26.6 28 37.5 20 50 20z" />
										</svg>
									) : (
										// Hightower Beacon crest (Green Beacon)
										<svg className="size-10 text-primary animate-pulse hidden sm:block" viewBox="0 0 100 100" fill="currentColor">
											<path d="M50 10L30 35h15v40h10V35h15L50 10zM45 80h10v5H45v-5zm-10 10h30v4H35v-4z" />
										</svg>
									)
								)}
								<h1 className={cn(
									'text-4.5xl font-bold tracking-tight sm:text-5xl text-gradient leading-tight',
									mode === 'westeros' && 'font-cinzel tracking-widest'
								)}>
									{activeData.name}
								</h1>
							</div>

							<p className={cn(
								'w-full text-pretty font-mono text-base text-muted-foreground md:w-4/5 leading-relaxed',
								mode === 'westeros' && 'font-cinzel text-sm text-foreground/80'
							)}>
								{activeData.about}
							</p>

							{/* Location details */}
							<div className='flex items-center justify-center gap-x-2 font-mono text-sm text-muted-foreground sm:justify-start pt-1'>
								<a
									className='inline-flex items-center gap-x-1.5 hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors'
									href={activeData.locationLink}
									target='_blank'
									rel='noreferrer'
									aria-label={`View ${activeData.location} on Google Maps`}
								>
									{mode === 'westeros' ? <Crown className='size-4' /> : <GlobeIcon className='size-4' aria-hidden="true" />}
									{activeData.location}
								</a>
							</div>

							{/* Action Links & Downloads */}
							<div className='flex flex-wrap justify-center gap-2 pt-2 sm:justify-start'>
								<MemoizedButtonLink data={activeData} />
								<DownloadResumeButton />
							</div>
						</div>

						{/* Avatar Frame */}
						<a 
							href='https://github.com/kioskOG'
							target='_blank' 
							rel='noopener noreferrer' 
							className='group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full relative'
							aria-label="Visit GitHub profile"
						>
							<Avatar className={cn(
								'size-32 border-2 border-primary/30 transition-all duration-500 group-hover:scale-105 sm:size-40 glow-ring dragon-glow',
								faction === 'blacks' ? 'hover:shadow-[0_0_30px_rgba(239,68,68,0.45)]' : 'hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]'
							)} active status="online">
								<AvatarImage src={activeData.avatar} alt={activeData.name} className='object-cover' />
								<AvatarFallback>{activeData.initials}</AvatarFallback>
							</Avatar>
						</a>
					</div>

					{/* About / Summary Section */}
					<Section id='about' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='flex items-center justify-between mb-4 border-b border-border/40 pb-2'>
							<div>
								<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
									{mode === 'westeros' ? <Scroll className="size-4 text-primary" /> : null}
									{headers.about}
								</h2>
								<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
							</div>
							<CopyButton text={activeData.contact.email.at} label='email' className='print:hidden' />
						</div>
						<p className={cn(
							'text-pretty font-mono text-sm leading-relaxed text-muted-foreground mb-6',
							mode === 'westeros' && 'font-cinzel text-foreground/90'
						)}>
							{activeData.summary}
						</p>
						<StatsSection mode={mode} />
					</Section>

					{/* Work Experience Section */}
					<Section id='work' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='mb-6 border-b border-border/40 pb-2'>
							<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
								{mode === 'westeros' ? <Swords className="size-4 text-primary" /> : null}
								{headers.work}
							</h2>
							<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
						</div>
						<WorkTimeline work={activeData.work} mode={mode} />
					</Section>

					{/* Education Section */}
					<Section id='education' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='mb-4 border-b border-border/40 pb-2'>
							<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
								{mode === 'westeros' ? <BookOpen className="size-4 text-primary" /> : null}
								{headers.education}
							</h2>
							<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
						</div>
						{activeData.education.map((education) => (
							<Card key={education.school} className='border border-border bg-card text-card-foreground p-0 transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-in dragon-glow-hover'>
								<CardHeader>
									<h3 className={cn('font-semibold leading-none text-base text-foreground', mode === 'westeros' && 'font-cinzel')}>{education.school}</h3>
								</CardHeader>
								<CardContent className='mt-2 mb-4 text-xs'>
									<div className='flex flex-col md:flex-row md:items-center justify-between gap-x-2 text-sm border-b border-border/30 pb-2 mb-3'>
										<h4 className={cn('font-mono text-primary font-semibold', mode === 'westeros' && 'font-cinzel')}>{education.degree}</h4>
										<time className='tabular-nums text-muted-foreground font-medium' dateTime={`${education.start}/${education.end}`}>
											{education.start} - {education.end}
										</time>
									</div>
									<ul className='mt-2 space-y-2 font-mono text-[12px] text-muted-foreground leading-relaxed'>
										{education.description.map((item, index) => (
											<li key={index} className='flex gap-2'>
												<span className="text-primary">•</span>
												<span className="flex-1">{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</Section>

					{/* Skills Section */}
					<Section id='skills' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='mb-4 border-b border-border/40 pb-2'>
							<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
								{mode === 'westeros' ? <Compass className="size-4 text-primary" /> : null}
								{headers.skills}
							</h2>
							<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
						</div>
						<SkillsCategorized skills={activeData.skills} mode={mode} />
					</Section>

					{/* Projects Section */}
					<Section id='projects' className='print-force-new-page scroll-mb-16 scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='mb-4 border-b border-border/40 pb-2'>
							<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
								{mode === 'westeros' ? <Swords className="size-4 text-primary" /> : null}
								{headers.projects}
							</h2>
							<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
						</div>
						{/* Re-render project lists completely on mode changes */}
						<ProjectsSection key={mode} projects={activeData.projects} />
					</Section>

					{/* Blog Section */}
					{activeData.blogs && activeData.blogs.length > 0 && (
						<Section id='blog' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
							<div className='mb-4 border-b border-border/40 pb-2'>
								<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
									{mode === 'westeros' ? <BookOpen className="size-4 text-primary" /> : null}
									{mode === 'westeros' ? 'Scrolls & Prophecies' : 'Blog & Technical Writing'}
								</h2>
								<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
							</div>
							<BlogSection blogs={activeData.blogs} mode={mode} />
						</Section>
					)}

					{/* Impact (Awards / Volunteering) Section */}
					<Section id='impact' className='scroll-mt-28 md:scroll-mt-32 animate-fade-in'>
						<div className='mb-6 border-b border-border/40 pb-2'>
							<h2 className={cn('text-xl font-bold flex items-center gap-2', mode === 'westeros' && 'font-cinzel')}>
								{mode === 'westeros' ? <Crown className="size-4 text-primary" /> : null}
								{headers.impact}
							</h2>
							<div className='h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-1.5' />
						</div>

						<VolunteeringAwardsSection
							volunteering={activeData.volunteering}
							awards={activeData.awards}
							certifications={activeData.certifications}
							mode={mode}
						/>
					</Section>
				</section>

				{/* Shortcut Command Menu */}
				<CommandMenu
					links={[
						{
							url: activeData.personalWebsiteUrl.url,
							title: activeData.personalWebsiteUrl.name
						},
						{
							url: `mailto:${activeData.contact.email.at}`,
							title: activeData.contact.email.name
						},
						{
							url: `tel:${activeData.contact.tel.phoneNumber}`,
							title: activeData.contact.tel.name
						},
						{
							url: activeData.contact.blog.url,
							title: activeData.contact.blog.name
						},
						...activeData.contact.social.map((socialMediaLink) => ({
							url: socialMediaLink.url,
							title: socialMediaLink.name
						})),
						{
							url: activeData.contact.link.url,
							title: activeData.contact.link.name
						}
					]}
				/>

				{/* Floating Theme Controller */}
				<div className="fixed top-4 left-4 md:top-8 md:left-auto md:right-8 z-50 print:hidden">
					<ThemeToggle />
				</div>

				<ScrollToTop />
			</main>
		</>
	)
}
