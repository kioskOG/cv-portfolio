import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Jatin Sharma',
	initials: '',
	location: 'Mahendragarh, India',
	locationLink: 'https://www.google.com/maps/place/Kanina',
	about: 
	    'DevOps,MLOps & Cloud Engineer passionate about automation, scalability, Observability and building reliable infrastructure that empowers development teams.',
    summary: `I specialize in DevOps, Cloud, Infrastructure Automation and MLops with hands-on expertise in tools like Kubernetes, Terraform, Ansible, Docker, CI/CD pipelines and Observability. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    As an open-source contributor, I actively collaborate with the global tech community, sharing solutions and tackling real-world challenges together.
    I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/avatar.png',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://jatinog.com'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://kioskog.github.io/'
		},
		email: {
			name: 'Email',
			at: 'jatinvashishtha110@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+91xxxxxxxxxx'
		},
		blog: {
			name: 'Blog',
			url: 'https://blog.jatinog.com/'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/kioskOG',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/jatin-devops/',
				icon: LinkedInIcon
			}
		]
	},
	education: [
		{
		  school: 'RPSGOI, Balana',
		  degree: "Bachelor of Technology, Computer Science & Engineering",
		  start: 'Jul, 2014',
		  end: 'Jun, 2018',
		  description: [
			'Built a strong foundation in core engineering principles including Linux, Networking.',
			'Explored interdisciplinary interests that led to a growing passion for automation and cloud infrastructure.',
			'Worked on academic and practical projects involving design, analysis, and simulation of computer systems.',
			'Participated in workshops and tech fests, developing early skills in problem-solving and teamwork.',
			'This journey eventually sparked a shift toward DevOps, cloud computing, and open-source collaboration.'
		  ]
		}
	],
	work: [
    {
      company: 'Opstree Solutions',
      link: 'https://opstree.com/',
      badges: ['Remote', 'Lead'],
      jobs: [
        {
          title: 'Lead DevOps & MLOps Engineer',
          start: 'April, 2021',
          end: 'Present',
          description: [
            'Architected MLOps foundations using Python, DVC, and MLflow for secure data processing, reproducible training pipelines, and model lifecycle management.',
            'Cars24 (Client): Executed migration of 200+ production services from AWS ECS to EKS, saving ~$20,000/month by replacing Datadog with a custom SigNoz observability stack.',
            'Swiggy (Client): Managed 50+ AWS accounts using Terraform, ensuring 99.9% uptime during high-traffic national events like Diwali and New Year.',
            'Nomupay (Client): Designed multi-account AWS structures with Terragrunt and migrated EKS networking to Cilium/Hubble for enhanced performance and security.',
            'Barq Fintech (Client): Engineered resilient OKE (Oracle Kubernetes) environments, implementing Istio Service Mesh and Keycloak for centralized AuthN/AuthZ.',
            'Drove innovation by creating a custom Cloud Map Kubernetes Controller and implementing Karpenter for intelligent EKS autoscaling.',
            'Introduced Netbird VPN as the organizational standard.',
			'Mentored 50+ engineers through the Ninja, Sanatak, and Ronin programs.',
			'Designed and implemented production-ready MLOps pipelines using Python, scikit-learn, DVC, MLflow, and AWS S3 for reproducible model training and data versioning.'
          ]
        }
      ]
    },
    {
      company: 'NEXTEON Solutions',
      link: 'https://www.nexteon.in/',
      badges: ['On-Site'],
      jobs: [
        {
          title: 'Jr. DevOps Engineer',
          start: 'July, 2018',
          end: 'April, 2021',
          description: [
            'Managed and monitored 100+ websites running on Adobe Experience Manager (AEM) across on-premise data centers (RSDC & BSDC).',
            'Led the successful migration of Rajasthan Government websites and AEM (6.1) infrastructure between data centers in Jaipur.',
            'Collaborated with cross-functional teams to resolve infrastructure bottlenecks and ensure high availability for mission-critical government services.',
            'Automated routine deployment tasks, reducing manual intervention and minimizing release-window downtime.'
          ]
        }
      ]
    }
],	  
	skills: [
		'AWS',
		'GCP',
		'OCI',
		'S3',
		'Route 53',
		'EC2',
		'VPC',
		'EKS',
		'ECR',
		'SNS', 'SQS', 'Opensearch', 'Elasticache', 'CloudFormation', 'cloudwatch', 'SSO', 'ALB', 'NLB', 'Autoscaling', 'Cloudfront', 'ApiGateway', 'Athena', 'CloudTrail', 'ECS', 'CloudMap', 'Lambda', 'EventBridge', 'Amazon QuickSight', 'RAM', 'IAM', 'SSM', 'WAF', 'RDS', 'DynamoDB', 'Dax', 'Sagemaker AI', 'Bedrock', 'Cloudwatch', 'Glue', 'Backup', 'Billing and Cost Management', 'Certificate Manager', 'Code Commit', 'CodeBuild', 'EFS', 'EMR', 'kinesis', 'Firewall Manager', 'Managed Apache Airflow', 'Service Quotas', 'Transfer Family',
		'Google Compute', 'Google Storage', 'Google GKE', 'Google VCN', 'Google Buckets', 'Google Identity & Access Management', 'Google PostgreSQL',
		'Oracle VCN', 'Oracle compute', 'Oracle Storage', 'Oracle OKE', 'Oracle Container Registry', 'Oracle Api Gateway', 'Oracle LoadBalancers', 'Oracle Heatwave Mysql', 'Oracle Redis', 'Oracle Postgres', 'Oracle Pub/Sub', 'Oracle Function',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Ansible',
		'Linux',
		'Ubuntu',
		'CentOS',
		'Redhat',
		'Windows',
		'MacOS',
		'CI/CD',
		'Jenkins',
		'GitHub Actions',
		'Prometheus',
		'Mimir',
		'Grafana',
		'Loki',
		'Tempo',
		'Pyroscope',
		'ELK Stack',
		'Git',
		'Shell Scripting',
		'Bash',
		'GitLab',
		'Python',
		'YAML',
		'Monitoring',
		'Logging',
		'Apache Heartzbeat', 'OpenObserv', 'Signoz',
		'Helm',
		'NGINX',
		'Apache webserver',
		'Networking',
		'GitHub',
		'GitOps',
		'Agile Methodologies',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning',
		'Infrastructure as Code',
		'Configuration Management',
		'Secrets Manager',
		'Incident Management',
		'Disaster Recovery',
		'Load Balancing',
		'High Availability',
		'Performance Tuning',
		'Security Best Practices',
		'Agile',
		'DevOps Practices',
		'Jira', 'Cursor', 'Confluence', 'VS Code', 'keycloak', 'Tyk API Gateway', 'Kafka ui', 'Metabase', 'KEDA', 'HPA', 'ISTIO Service Mesh', 'Node local dns', 'Linkerd', 'Wazuh', 'Caddy', 'Traefik', 'Authentik', 'Zitadel', 'Coralogix', 'Knative', 'Kro', 'Cillium', 'Velero', 'Cert-Manager', 'ExternalDNS', 'Karpenter', 'External Secret', 'kubernetes-reflector', 'Apicurio', 'HashiCorp Vault', 'Helmfile', 'Minio', 'RustDesk', 'Selenium', 'Atlasian',
		"MLOps ML lifecycle automation",
		"Data versioning & pipelines (DVC)",
		"Experiment tracking & model registry (MLFlow)",
		"ML frameworks (scikit-learn, Pandas, NumPy)",
		"ML Pipeline",
		"ML deployment (KServe, Kubernetes)",
		"ML observability (Metrics, Logs, Performance monitoring)",
	],
	volunteering: [
    {
      role: "Trainer / Mentor",
      organization: "Opstree Global",
      start: "Sep 2025",
      end: "Jan 2026",
      description: "Designed and delivered a foundational training program titled 'Journey of a DevOps Engineer — From Day 1 to Serving a Million' for new engineers, covering real-world DevOps practices from setup to large-scale production systems.",
    }
    ],
	awards: [
    {
      title: "ECS to EKS Migration Excellence",
      date: "May 2025",
      description: "Successfully migrated 200+ services for client with near zero downtime.",
    },
    {
      title: "Opstree Ninja/Ronin Mentor",
      date: "April 2023",
      description: "Recognized for providing high-impact training and mentorship in DevOps programs.",
    },
    {
      title: "AEM Data Center Migration",
      date: "Feb 2020",
      description: "Successfully migrated all Rajasthan Govt Websites to a new Data Center.",
    },
	{
      title: "Appreciation",
      date: "",
      description: "Reciedved appreciation multiple times from clients.",
    }
  ],
  certifications: [
    "RHCSA (RedHat)",
	"RHCE (RedHat)",
    "AWS Certified Solutions Architect – Associate",
  ],
	projects: [
		{
		  title: 'Netbird Deployment Automation',
		  techStack: ['Docker', 'Kubernetes', 'Learning'],
		  description: 'Self-hosted VPN server setup & multi-cloud links.',
		  link: {
			label: '',
			href: 'https://kioskog.github.io/docs/devops/docker/Netbird/'
		  },
		  isNew: true
		},
		{
		  title: '🌐 CloudMap Controller for EKS',
		  techStack: ['EKS', 'Cloudmap', 'ECS'],
		  description: 'Sync headless Services to AWS Cloud Map/Route53 with TTLs & audit logs.',
		  link: {
			label: 'github.com/kioskOG/EKS-cloudmap-controller',
			href: 'https://github.com/kioskOG/EKS-cloudmap-controller'
		  },
		  isNew: true
		},
		{
		  title: '🚀 LGTM Stack on Kubernetes — Complete Hands-On',
		  techStack: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Mimir', 'Pyroscope'],
		  description: 'This project provides a ready-to-use advanced monitoring platform for DevOps engineers and beginners. With just one command, you get Prometheus, Grafana, Loki, Alertmanager, Node Exporter etc',
		  link: {
			label: 'github.com/kioskOG/observability-hub',
			href: 'https://github.com/kioskOG/observability-hub'
		  },
		  isNew: true
		},
		{
		  title: 'Netbird Management Utility',
		  techStack: ['AWS', 'GCP', 'Cloud'],
		  description: 'Menu-driven admin utility to manage Netbird resources.',
		  link: {
			label: '',
			href: 'https://kioskog.github.io/docs/devops/python/netbird-python-utility/'
		  },
		  isNew: true
		},
		{
		  title: 'Amazon EKS Cluster with Terraform',
		  techStack: ['Terraform', 'EKS'],
		  description: 'Terraform-based provisioning of an Amazon EKS Cluster for Kubernetes deployments.',
		  link: {
			label: '',
			href: ''
		  }
		},
		{
		  title: 'CI/CD on EKS using GitHub Actions',
		  techStack: ['CI/CD', 'EKS', 'GitHub Actions', 'Terraform'],
		  description: 'CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.',
		  link: {
			label: '',
			href: ''
		  }
		},
		// {
		//   title: 'DevOps Tools Collection',
		//   techStack: ['DevOps'],
		//   description: 'Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/devops-tools',
		// 	href: 'https://github.com/NotHarshhaa/devops-tools'
		//   }
		// },
		// {
		//   title: 'Certified Kubernetes Administrator (CKA) Prep',
		//   techStack: ['Kubernetes'],
		//   description: 'Master Kubernetes from scratch and prepare for the CKA certification.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Certified_Kubernetes_Administrator',
		// 	href: 'https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator'
		//   }
		// },
		// {
		//   title: 'Secure Kubernetes Dashboard',
		//   techStack: ['Kubernetes', 'Security'],
		//   description: 'Kubernetes dashboard with integrated health checks and Trivy scanning.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/kubernetes-dashboard',
		// 	href: 'https://github.com/NotHarshhaa/kubernetes-dashboard'
		//   }
		// },
		// {
		//   title: 'Real-World DevOps Projects',
		//   techStack: ['DevOps', 'Projects'],
		//   description: 'Real-world DevOps projects from beginner to advanced levels.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/DevOps-Projects',
		// 	href: 'https://github.com/NotHarshhaa/DevOps-Projects'
		//   }
		// },
		// {
		//   title: 'Uber Clone with DevSecOps',
		//   techStack: ['Full-Stack', 'DevSecOps'],
		//   description: 'Full-stack Uber-like transportation application with DevSecOps integration.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/uber-clone',
		// 	href: 'https://github.com/NotHarshhaa/uber-clone'
		//   }
		// },
		// {
		//   title: 'Kubernetes Learning Projects',
		//   techStack: ['Kubernetes'],
		//   description: 'Practical Kubernetes projects to master deployment, management, and scaling of containerized applications.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/kubernetes-projects-learning',
		// 	href: 'https://github.com/NotHarshhaa/kubernetes-projects-learning'
		//   }
		// },
		// {
		//   title: 'Provisioning EKS on AWS with Terraform',
		//   techStack: ['AWS', 'EKS', 'Terraform'],
		//   description: 'Provision Amazon EKS Cluster on AWS using Terraform.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/AWS-EKS_Terraform',
		// 	href: 'https://github.com/NotHarshhaa/AWS-EKS_Terraform'
		//   }
		// },
		// {
		//   title: 'Deploy Super Mario on EKS',
		//   techStack: ['Kubernetes', 'Terraform'],
		//   description: 'Deploy Super Mario game on Amazon EKS using Terraform.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform',
		// 	href: 'https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform'
		//   }
		// },
		// {
		//   title: 'Cloud-Native Monitoring App',
		//   techStack: ['Python', 'Docker', 'EKS'],
		//   description: 'Monitoring app built with Python, containerized with Docker, and deployed to EKS.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/cloud-native-monitoring-app',
		// 	href: 'https://github.com/NotHarshhaa/cloud-native-monitoring-app'
		//   }
		// },
		// {
		//   title: 'Zomato Clone with DevSecOps',
		//   techStack: ['Full-Stack', 'DevSecOps'],
		//   description: 'Full-stack food delivery application inspired by Zomato with DevSecOps integration.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Zomato-Clone',
		// 	href: 'https://github.com/NotHarshhaa/Zomato-Clone'
		//   }
		// },
		// {
		//   title: 'Learning Prometheus Monitoring',
		//   techStack: ['Prometheus', 'Monitoring'],
		//   description: 'Repository for learning and implementing Prometheus monitoring in Kubernetes environments.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Learning-Prometheus',
		// 	href: 'https://github.com/NotHarshhaa/Learning-Prometheus'
		//   }
		// },
		// {
		//   title: 'Kubernetes Mastery Guide',
		//   techStack: ['Kubernetes'],
		//   description: 'Comprehensive Kubernetes learning and deployment repository from basic to advanced.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Kubernetes',
		// 	href: 'https://github.com/NotHarshhaa/Kubernetes'
		//   }
		// },
		// {
		//   title: 'DevOps Setup & Installation Guides',
		//   techStack: ['DevOps'],
		//   description: 'Guides for installing and setting up essential DevOps and DevSecOps tools.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/DevOps_Setup-Installations',
		// 	href: 'https://github.com/NotHarshhaa/DevOps_Setup-Installations'
		//   }
		// },
		// {
		//   title: 'DevOps Tool Installer Scripts',
		//   techStack: ['Automation'],
		//   description: 'Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/DevOps-Tool-Installer',
		// 	href: 'https://github.com/NotHarshhaa/DevOps-Tool-Installer'
		//   }
		// },
		// {
		//   title: 'Kubernetes Learning Path',
		//   techStack: ['Kubernetes'],
		//   description: 'Step-by-step Kubernetes learning path from beginner to advanced.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/kubernetes-learning-path',
		// 	href: 'https://github.com/NotHarshhaa/kubernetes-learning-path'
		//   }
		// },
		// {
		//   title: 'AWS Infra with Jenkins and Terraform',
		//   techStack: ['Jenkins', 'Terraform', 'AWS'],
		//   description: 'Terraform scripts for AWS infrastructure provisioning with Jenkins integration.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra',
		// 	href: 'https://github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra'
		//   }
		// },
		// {
		//   title: 'Azure Cloud Resources Hub',
		//   techStack: ['Azure'],
		//   description: 'Curated list of Azure resources, libraries, guides, and blogs.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/azure-all_in_one',
		// 	href: 'https://github.com/NotHarshhaa/azure-all_in_one'
		//   }
		// },
		// {
		//   title: 'AWS Billing Alert with Terraform',
		//   techStack: ['Terraform', 'AWS'],
		//   description: 'Terraform module for setting up AWS billing alerts.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/aws-billing-alert-terraform',
		// 	href: 'https://github.com/NotHarshhaa/aws-billing-alert-terraform'
		//   }
		// },
		// {
		//   title: 'Real-Time AWS DevOps Deployment',
		//   techStack: ['AWS', 'DevOps'],
		//   description: 'End-to-end AWS DevOps deployment pipeline from Dev to Production.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment',
		// 	href: 'https://github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment'
		//   }
		// },
		// {
		//   title: 'DevOps Cheatsheet',
		//   techStack: ['DevOps'],
		//   description: 'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/devops-cheatsheet',
		// 	href: 'https://github.com/NotHarshhaa/devops-cheatsheet'
		//   }
		// },
		// {
		//   title: 'DevOps Interview Questions',
		//   techStack: ['DevOps', 'Interview'],
		//   description: '550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/DevOps-Interview-Questions',
		// 	href: 'https://github.com/NotHarshhaa/DevOps-Interview-Questions'
		//   }
		// },
		// {
		//   title: 'Into the DevOps',
		//   techStack: ['DevOps'],
		//   description: 'Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.',
		//   link: {
		// 	label: 'github.com/NotHarshhaa/into-the-devops',
		// 	href: 'https://github.com/NotHarshhaa/into-the-devops'
		//   }
		// }
	]			
}
