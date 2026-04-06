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
export function VolunteeringSection({ volunteering }: { volunteering: any[] }) {
  if (!volunteering || volunteering.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <Users className="size-4" />
        Volunteering & Mentorship
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteering.map((item, index) => (
          <Card key={index} className="p-5">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-semibold text-foreground">
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
export function AwardsSection({ awards }: { awards: any[] }) {
  if (!awards || awards.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <Trophy className="size-4" />
        Awards & Recognition
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="p-5">
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-foreground">
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
export function CertificationsSection({ certifications }: { certifications: string[] }) {
  if (!certifications || certifications.length === 0) return null

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <CheckCircle2 className="size-4" />
        Certifications
      </h3>

      <Card className="p-5">
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <Badge key={index}>{cert}</Badge>
          ))}
        </div>
      </Card>
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
}: {
  volunteering: any[]
  awards: any[]
  certifications: string[]
}) {
  return (
    <div className="space-y-12">
      <VolunteeringSection volunteering={volunteering} />
      <AwardsSection awards={awards} />
      <CertificationsSection certifications={certifications} />
    </div>
  )
}