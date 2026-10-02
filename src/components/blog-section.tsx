'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface Blog {
  title: string
  description: string
  link: string
}

export function BlogSection({ blogs: initialBlogs = [], mode = 'modern' }: { blogs?: Blog[], mode?: 'modern' | 'westeros' }) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/rss')
        const data = await response.json()
        if (data.status === 'ok' && data.items) {
          setBlogs(data.items)
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (loading && (!blogs || blogs.length === 0)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="h-48 flex flex-col border border-border bg-card p-5">
             <div className="h-6 w-3/4 bg-muted animate-pulse rounded mb-4" />
             <div className="h-4 w-full bg-muted animate-pulse rounded mb-2" />
             <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
          </Card>
        ))}
      </div>
    )
  }

  if (!blogs || blogs.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog, index) => (
        <a 
          key={index} 
          href={blog.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        >
          <Card className="h-full flex flex-col border border-border bg-card text-card-foreground p-0 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 dragon-glow-hover overflow-hidden">
            <CardHeader className="p-5 pb-2">
              <CardTitle className={`text-base font-semibold leading-tight group-hover:text-primary transition-colors ${mode === 'westeros' ? 'font-cinzel' : ''}`}>
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 flex flex-col flex-grow justify-between">
              <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                {blog.description}
              </p>
              
              <div className="mt-4 flex items-center text-xs font-semibold text-primary">
                {mode === 'westeros' ? 'Read Scroll' : 'Read Article'} 
                <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}

