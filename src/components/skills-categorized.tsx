'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SkillsCategorizedProps {
	skills: string[]
	mode?: 'modern' | 'westeros'
}

const westerosCategories: Record<string, string> = {
	'Cloud Platforms': 'Imperial Realms',
	'AWS': 'Sky Fiefdoms (AWS)',
	'GCP': 'Earth Fiefdoms (GCP)',
	"Azure": "Azure Fiefdoms (Azure)",
	'OCI': 'Oracle Fiefdoms (OCI)',
	'Container & Orchestration': 'Beast Orchestration (Containers)',
	'Infrastructure as Code': 'Alchemical Architecture (IaC)',
	'CI/CD Tools': 'Siege Pipelines (CI/CD)',
	'Observability': 'Scrying Mirrors & Ravens (Observability)',
	'Operating Systems': 'Runes of the Realms (OS)',
	'Scripting & Languages': 'Scroll Transcripts (Languages)',
	'Version Control': 'Royal Records (Git)',
	'Content Management System (CMS)': 'Scroll Repositories (CMS)',
	'VPN': 'Secret Passageways (VPN)',
	'Web Servers': 'Citadel Gatekeepers',
	'Other Tools': 'Citadel Instruments',
	'Soft Skills': 'Knightly Virtues',
	'MLOps & ML Platforms': 'Dragon Breeding & Alchemy',
	'Learned AI Infra Technologies': 'Arcane AI Infrastructure'
}

const skillCategories: Record<string, string[]> = {
	'Cloud Platforms': ['AWS', 'GCP', 'OCI', 'Azure'],
	'AWS': ['S3', 'Route 53', 'EC2', 'VPC', 'EKS', 'ECR', 'CloudFormation', 'SSO', 'SES', 'SNS', 'SQS', 'Opensearch', 'Elasticache', 'cloudwatch', 'ALB', 'NLB', 'Autoscaling', 'Cloudfront', 'ApiGateway', 'Athena', 'AWS Organisation', 'AWS Batch', 'CloudTrail', 'ECS', 'CloudMap', 'Lambda', 'EventBridge', 'Amazon QuickSight', 'RAM', 'IAM', 'SSM', 'WAF', 'Amazon Secrets Manager', 'RDS', 'DynamoDB', 'Dax', 'Sagemaker AI', 'Bedrock', 'Cloudwatch', 'Glue', 'Backup', 'Billing and Cost Management', 'Certificate Manager', 'Code Commit', 'CodeBuild', 'EFS', 'EMR', 'kinesis', 'Firewall Manager', 'Managed Apache Airflow', 'Service Quotas', 'AWS Transfer Family', 'AWS SSM', 'Security Hub'],
	'GCP': ['Google Compute', 'Google Storage', 'Google GKE', 'Google VCN', 'Google Buckets', 'Google Identity & Access Management', 'Google PostgreSQL', 'Google Cloud Functions', 'Google Cloud Run', 'Google Artifact Registry', 'Google Secret Store'],
	"Azure": ["VCN", "AKS", "VMSS", "Storage", "Identity & Access Management", "Entra ID", "Azure AD", "Azure LoadBalancer", "Azure Container Registry", "Azure Functions", "Azure Virtual Machines", "Azure DNS Zone", "Azure Container Instances", "Azure SQL Database", "Azure Table Storage", "Azure Data Factory", "Azure Key Vault"],
	'OCI': ['Oracle VCN', 'Oracle compute', 'Oracle Storage', 'Oracle OKE', 'Oracle Container Registry', 'Oracle Api Gateway', 'Oracle LoadBalancers', 'Oracle Heatwave Mysql', 'Oracle Redis', 'Oracle Postgres', 'Oracle Pub/Sub', 'Oracle Function'],
	'Container & Orchestration': ['Kubernetes', 'Docker', 'EKS', 'GKE', "AKS", 'OKE', 'Helm'],
	'Infrastructure as Code': ['Terraform', 'Ansible', 'Crossplane', 'CloudFormation'],
	'CI/CD Tools': ['Jenkins', 'GitHub Actions', 'GitLab', 'GitOps', "ARGO CD"],
	'Observability': ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Mimir', 'Pyroscope', 'ELK Stack', 'Apache Heartzbeat', 'OpenObserv', 'Signoz'],
	'Operating Systems': ['Linux', 'Ubuntu', 'CentOS', 'Redhat', 'Windows', 'MacOS'],
	'Scripting & Languages': ['Python', 'Bash', 'Shell Scripting', 'YAML'],
	'Version Control': ['Git', 'GitHub', 'GitLab'],
	'Content Management System (CMS)': ['Adobe Experience Manager'],
	'VPN': ['OpenVPN', 'Netbird'],
	"SIEM": ["Wazuh", "Coralogix"],
	'Web Servers': ['NGINX', 'Apache webserver'],
	'Other Tools': ['Jira', 'Confluence', 'VS Code', "Cursor", "Claude", "Google AntiGravity", 'keycloak', 'Tyk API Gateway', 'Kafka ui', 'Metabase', 'KEDA', 'HPA', 'ISTIO Service Mesh', 'Node local dns', 'Linkerd', 'Caddy', 'Traefik', 'Authentik', 'Zitadel', 'Knative', 'Kro', 'Cillium', 'Velero', 'Cert-Manager', 'ExternalDNS', 'Karpenter', 'External Secret', 'kubernetes-reflector', 'Apicurio', 'Helmfile', 'Minio', 'RustDesk', 'Selenium', 'Atlasian'],
	'Soft Skills': [
		'Agile Methodologies',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning'
	],
	"MLOps & ML Platforms": [
		"MLOps ML lifecycle automation (AWS Sagemaker AI)",
		"Data versioning & pipelines (DVC, DagsHub)",
		"Experiment tracking & model registry (MLFlow, DagsHub)",
		"ML frameworks (scikit-learn, Pandas, NumPy)",
		"ML Pipeline",
		"ML deployment (KServe, Kubernetes)",
		"ML observability (Grafana, Prometheus, Signoz)",
	],
	"Learned AI Infra Technologies": ["NCA-AIIO", "NVIDIA NIM", "GPU Architectures (L40S, A100, H100, H200, GH200, Blackwell), NVLink, NVSwitch", "Infiband", "RDMA", "NVIDIA BlueField DPUs", "CUDA", "cuDNN", "NCCL", "TensorRT", "NVIDIA Triton Inference Server"]
}

export function SkillsCategorized({ skills, mode = 'modern' }: SkillsCategorizedProps) {
	const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Cloud Platforms', 'Container & Orchestration', 'Infrastructure as Code']))

	const categorizedSkills: Record<string, string[]> = {}
	const uncategorized: string[] = []

	// Categorize skills
	skills.forEach((skill) => {
		let found = false
		for (const [category, categorySkills] of Object.entries(skillCategories)) {
			if (categorySkills.some((catSkill) => skill.toLowerCase().includes(catSkill.toLowerCase()) || catSkill.toLowerCase().includes(skill.toLowerCase()))) {
				if (!categorizedSkills[category]) {
					categorizedSkills[category] = []
				}
				categorizedSkills[category].push(skill)
				found = true
				break
			}
		}
		if (!found) {
			uncategorized.push(skill)
		}
	})

	const toggleCategory = (category: string) => {
		const newExpanded = new Set(expandedCategories)
		if (newExpanded.has(category)) {
			newExpanded.delete(category)
		} else {
			newExpanded.add(category)
		}
		setExpandedCategories(newExpanded)
	}

	return (
		<div className='space-y-4'>
			{Object.entries(categorizedSkills).map(([category, categorySkills]) => {
				const displayCategory = mode === 'westeros' ? westerosCategories[category] || category : category
				return (
					<Card key={category} className='overflow-hidden border border-border bg-card text-card-foreground p-0 transition-all duration-300 hover:shadow-md'>
						<CardHeader className='pb-3 p-4'>
							<button
								type='button'
								className={cn(
									'w-full flex items-center justify-between p-0 h-auto font-semibold text-left transition-colors rounded-md',
									'hover:bg-accent/50 active:bg-accent',
									'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
								)}
								onClick={() => toggleCategory(category)}
							>
								<CardTitle className={cn('text-base', mode === 'westeros' && 'font-cinzel')}>{displayCategory}</CardTitle>
								{expandedCategories.has(category) ? (
									<ChevronUpIcon className='size-4 flex-shrink-0' />
								) : (
									<ChevronDownIcon className='size-4 flex-shrink-0' />
								)}
							</button>
						</CardHeader>
						{expandedCategories.has(category) && (
							<CardContent className='pt-0'>
								<div className='flex flex-wrap gap-2'>
									{categorySkills.map((skill) => (
										<Badge key={skill} className={cn('transition-all duration-200 hover:scale-105 hover:shadow-md', mode === 'westeros' && 'font-cinzel text-[10px] tracking-wide bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground')} variant="secondary">
											{skill}
										</Badge>
									))}
								</div>
							</CardContent>
						)}
					</Card>
				)
			})}
			{uncategorized.length > 0 && (
				<Card className='overflow-hidden border border-border bg-card text-card-foreground p-0 transition-all duration-300 hover:shadow-md'>
					<CardHeader className='pb-3 p-4'>
						<CardTitle className={cn('text-base', mode === 'westeros' && 'font-cinzel')}>{mode === 'westeros' ? 'Other Arts' : 'Other Skills'}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='flex flex-wrap gap-2'>
							{uncategorized.map((skill) => (
								<Badge key={skill} className={cn('transition-all duration-200 hover:scale-105 hover:shadow-md', mode === 'westeros' && 'font-cinzel text-[10px] bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground')} variant="secondary">
									{skill}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	)
}

