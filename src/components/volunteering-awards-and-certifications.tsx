'use client'

import React from 'react'
import { Trophy, Users, CheckCircle2 } from 'lucide-react'
import { Card as UICard } from '@/components/ui/card'

/**
 * Unified Card (matches ProjectCard behavior)
 */
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <UICard className={`transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${className}`}>
    {children}
  </UICard>
)

/**
 * Badge (kept simple & consistent)
 */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs rounded-md bg-muted text-muted-foreground">
    {children}
  </span>
)

/**
 * Volunteering Section
 */
export function VolunteeringSection({ volunteering, mode = 'modern' }: { volunteering: any[], mode?: 'modern' | 'westeros' }) {
  if (!volunteering || volunteering.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className={`text-xl font-bold flex items-center gap-2 ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
        <Users className="size-4" />
        {mode === 'westeros' ? 'Grand Instructor Chronicles' : 'Volunteering & Mentorship'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteering.map((item, index) => (
          <Card key={index} className="p-5 border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 dragon-glow-hover">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h4 className={`text-base font-semibold text-foreground ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
                  {item.role}
                </h4>

                <Badge>
                  {item.start?.includes(' ') ? item.start.split(' ')[1] : item.start}
                </Badge>
              </div>

              <p className="text-sm text-primary font-mono">
                {item.organization}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

/**
 * Awards Section
 */
export function AwardsSection({ awards, mode = 'modern' }: { awards: any[], mode?: 'modern' | 'westeros' }) {
  if (!awards || awards.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className={`text-xl font-bold flex items-center gap-2 ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
        <Trophy className="size-4" />
        {mode === 'westeros' ? 'Honors & Laurels of the Realm' : 'Awards & Recognition'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="p-5 border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 dragon-glow-hover">
            <div className="space-y-3">
              <h4 className={`text-base font-semibold text-foreground ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
                {award.title}
              </h4>

              <p className="text-xs text-muted-foreground">
                {award.date}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

/**
 * Certifications Section
 */
export function CertificationsSection({ certifications, mode = 'modern' }: { certifications: any[], mode?: 'modern' | 'westeros' }) {
  if (!certifications || certifications.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className={`text-xl font-bold flex items-center gap-2 ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
        <CheckCircle2 className="size-4 text-primary" />
        {mode === 'westeros' ? 'Citadel Seals & Decrees' : 'Certifications'}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col items-center p-5 border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 dragon-glow-hover">
            {cert.image && (
              <img src={cert.image} alt={cert.name} className="w-24 h-24 mb-4 object-contain drop-shadow-md" />
            )}
            <h4 className={`text-sm font-semibold text-center leading-tight ${mode === 'westeros' ? 'font-cinzel text-primary' : ''}`}>
              {cert.name}
            </h4>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {cert.issuer}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}

/**
 * Combined Section
 */
export default function VolunteeringAwardsSection({
  volunteering,
  awards,
  certifications,
  mode = 'modern',
}: {
  volunteering: any[]
  awards: any[]
  certifications: any[]
  mode?: 'modern' | 'westeros'
}) {
  return (
    <div className="space-y-12">
      <VolunteeringSection volunteering={volunteering} mode={mode} />
      <AwardsSection awards={awards} mode={mode} />
      <CertificationsSection certifications={certifications} mode={mode} />
    </div>
  )
}