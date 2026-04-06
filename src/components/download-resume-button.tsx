// 'use client'

// import { Button } from '@/components/ui/button'
// import { DownloadIcon } from 'lucide-react'
// import { RESUME_DATA } from '@/data/resume-data'

// export function DownloadResumeButton() {
// 	const handleDownload = () => {
// 		// Create a simple text resume or link to a PDF
// 		const resumeText = `
// ${RESUME_DATA.name}
// ${RESUME_DATA.location}
// ${RESUME_DATA.contact.email.at}
// ${RESUME_DATA.contact.tel.phoneNumber}

// ${RESUME_DATA.about}

// WORK EXPERIENCE
// ${RESUME_DATA.work.map((work) => `
// ${work.company}
// ${work.jobs.map((job) => `${job.title} | ${job.start} - ${job.end}`).join('\n')}
// `).join('\n')}

// EDUCATION
// ${RESUME_DATA.education.map((edu) => `
// ${edu.school}
// ${edu.degree} | ${edu.start} - ${edu.end}
// `).join('\n')}

// SKILLS
// ${RESUME_DATA.skills.join(', ')}

// PROJECTS
// ${RESUME_DATA.projects.map((p) => `- ${p.title}: ${p.description}`).join('\n')}
// 		`.trim()

// 		const blob = new Blob([resumeText], { type: 'text/plain' })
// 		const url = URL.createObjectURL(blob)
// 		const a = document.createElement('a')
// 		a.href = url
// 		a.download = `${RESUME_DATA.name.replace(/\s+/g, '_')}_Resume.txt`
// 		document.body.appendChild(a)
// 		a.click()
// 		document.body.removeChild(a)
// 		URL.revokeObjectURL(url)
// 	}

// 	return (
// 		<Button
// 			onClick={handleDownload}
// 			variant='outline'
// 			className='gap-2 transition-all duration-200 hover:scale-105'
// 		>
// 			<DownloadIcon className='size-4' />
// 			Download Resume
// 		</Button>
// 	)
// }


'use client'

import React from 'react'
import { Download } from 'lucide-react'

/**
 * DownloadResumeButton Component
 * Fixed the "Element type is invalid" error by providing both a named export 
 * (for your existing Page/File imports) and a default export named 'App' 
 * to satisfy the preview environment requirements.
 */
export function DownloadResumeButton() {
    const handleDownload = () => {
        // Ensure your PDF is placed in the /public folder and named exactly as below
        const resumeFileUrl = '/jatin_sharma.pdf';
        
        // Filename that will appear for the user
        const fileName = 'jatin_sharma.pdf';

        const link = document.createElement('a');
        link.href = resumeFileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex items-center justify-center p-12 bg-white dark:bg-zinc-950">
            <button
                onClick={handleDownload}
                className="group flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium text-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-sm"
            >
                <Download className="w-4 h-4 group-hover:animate-bounce text-blue-600 dark:text-blue-400" />
                Download PDF Resume
            </button>
        </div>
    )
}

// Default export named App to ensure the Canvas preview can render successfully
export default function App() {
    return <DownloadResumeButton />;
}