import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-nowrap transition-all duration-200 ease-in-out transform shadow-sm',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-md dark:hover:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 hover:shadow-md dark:hover:bg-secondary/60',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:scale-105 hover:shadow-md',
        outline:
          'border border-border bg-muted text-muted-foreground hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20',
        info:
          'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 hover:shadow-md',
        success:
          'bg-green-500 text-white hover:bg-green-600 hover:scale-105 hover:shadow-md',
        warning:
          'bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 hover:shadow-md'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
