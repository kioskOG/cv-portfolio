import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch the RSS feed as text
    const response = await fetch('https://blog.jatinog.com/feed.xml', {
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio/1.0)'
      },
      // Next.js caching (revalidate every hour)
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: response.status })
    }

    const xmlString = await response.text()
    
    // Simple regex-based parsing for RSS/Atom items to avoid external dependencies
    // This looks for <item> (RSS) or <entry> (Atom) blocks
    const itemRegex = /<(item|entry)>([\s\S]*?)<\/\1>/g
    const titleRegex = /<title[^>]*>([\s\S]*?)<\/title>/
    const linkRegex = /<link[^>]*href="([^"]+)"[^>]*>|<link>([\s\S]*?)<\/link>/
    const descRegex = /<(description|summary)[^>]*>([\s\S]*?)<\/\1>|<content[^>]*>([\s\S]*?)<\/content>/

    const items = []
    let match
    
    // Parse up to 3 items
    let count = 0
    while ((match = itemRegex.exec(xmlString)) !== null && count < 3) {
      const itemContent = match[2]
      
      const titleMatch = itemContent.match(titleRegex)
      const linkMatch = itemContent.match(linkRegex)
      const descMatch = itemContent.match(descRegex)
      
      let title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim() : 'Blog Post'
      
      // Handle <link href="..."> or <link>...</link>
      let link = ''
      if (linkMatch) {
        link = linkMatch[1] || linkMatch[2] || ''
        link = link.trim()
      }
      
      let description = ''
      if (descMatch) {
        description = descMatch[2] || descMatch[3] || ''
        description = description.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
        // Strip HTML
        description = description.replace(/<[^>]+>/g, '').trim()
        if (description.length > 150) {
          description = description.substring(0, 150) + '...'
        }
      }

      items.push({ title, link, description })
      count++
    }

    return NextResponse.json({ status: 'ok', items })
  } catch (error) {
    console.error('RSS fetch error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
