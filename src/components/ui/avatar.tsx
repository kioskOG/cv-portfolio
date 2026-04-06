'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  active?: boolean
  status?: 'online' | 'offline' | 'busy' | 'away'
}

const statusColorMap: Record<NonNullable<AvatarProps['status']>, string> = {
  online: 'bg-emerald-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-yellow-500',
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, active, status = 'online', ...props }, ref) => {
  const statusColor = statusColorMap[status]

  return (
    <div className="relative group">
      {/* Active ping effect */}
      {active && (
        <span
          className={cn(
            'absolute -top-1 -right-1 z-10 h-3.5 w-3.5 animate-ping rounded-full',
            statusColor,
            'opacity-70'
          )}
        />
      )}

      {/* Avatar container */}
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-lg ring-1 ring-border transition-transform duration-200 hover:scale-105 hover:ring-2 hover:ring-primary',
          className
        )}
        {...props}
      />

      {/* Solid status indicator */}
      {active && (
        <span
          className={cn(
            'absolute -top-1 -right-1 z-20 h-3.5 w-3.5 rounded-full ring-2 ring-background',
            statusColor
          )}
        />
      )}
    </div>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      'aspect-square h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110',
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, children, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-2xl bg-muted/40 text-muted-foreground font-semibold backdrop-blur-md text-xl',
      className
    )}
    {...props}
  >
    {children}
  </AvatarPrimitive.Fallback>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
