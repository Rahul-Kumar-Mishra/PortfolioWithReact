export type Project = { title: string; description: string; tags: string[]; category: string; github?: string; demo?: string }

export const profile = {
  name: 'Rahul Kumar Mishra',
  role: 'Software Engineer · Backend Engineer · Distributed Systems Enthusiast',
  email: 'rahulkmishra2806@gmail.com',
  location: 'India',
  availability: 'Engineering @ Juspay',
  resume: 'https://drive.google.com/file/d/1qFFxUpeWnllO-dEdf6tZjUTgbH3GaZs8/view?usp=sharing',
  bio: 'I build scalable backend systems, high-performance APIs, and distributed services that power real-world applications. I care deeply about performance, reliability, and making complex systems feel simple to use.',
  socials: { github: 'https://github.com/Rahul-Kumar-Mishra', linkedin: 'https://www.linkedin.com/in/rahul-kumar-mishra-984a40256/', email: 'mailto:rahulkmishra2806@gmail.com' },
}

export const experience = [
  { period: 'Jul 2025 — Present', role: 'Software Engineer', company: 'Juspay Technologies Pvt. Ltd.', text: 'Building large-scale payment infrastructure for enterprise merchants — from Redis caching and partner integrations to onboarding, configuration, and offer-engine services.' },
  { period: 'Dec 2024 — Jun 2025', role: 'Software Engineer Intern', company: 'Juspay Technologies Pvt. Ltd.', text: 'Built merchant integration SDKs, internal merchant-service APIs, payment-link workflows, and data-migration automation that reduced manual effort.' },
  { period: '2021 — 2025', role: 'B.Tech, Computer Science', company: 'National Institute of Technology, Patna', text: 'Built a strong foundation in algorithms, distributed systems, databases, and practical software engineering.' },
]

export const impact = [
  { value: 5, suffix: 'M+', label: 'Transactions supported monthly' },
  { value: 70, suffix: '%', label: 'Database CPU reduction' },
  { value: 40, suffix: '%', label: 'Faster merchant onboarding' },
  { value: 25, suffix: '%', label: 'Lower API response latency' },
]

export const skills = {
  Languages: ['Java', 'Python', 'Haskell', 'JavaScript', 'TypeScript', 'SQL'],
  'Backend & Systems': ['REST APIs', 'Node.js', 'Express.js', 'Redis', 'Microservices', 'System Design'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ClickHouse'],
  'DevOps & Tools': ['Docker', 'Git', 'Linux', 'Nix', 'CI/CD', 'Maven', 'Postman'],
}

export const projects: Project[] = [
  { title: 'Distributed Redis Cache', description: 'Designed a Redis caching layer with read-through and write-behind architecture, reducing database CPU utilization while improving API performance and scalability.', tags: ['Redis', 'Haskell', 'PostgreSQL'], category: 'Systems' },
  { title: 'Enterprise Offer Engine', description: 'Built backend services that let merchants configure and combine promotional offers efficiently across a high-volume payment ecosystem.', tags: ['Haskell', 'PostgreSQL', 'Redis'], category: 'Backend' },
  { title: 'Merchant Integration Platform', description: 'Developed backend integrations for enterprise merchants and fintech partners including Paytm and CRED, simplifying reliable payment processing and onboarding.', tags: ['Haskell', 'REST APIs', 'Redis'], category: 'Backend' },
  { title: 'Python Merchant SDK', description: 'Created reusable Python libraries, logging utilities, and configuration management to make payment API integration simpler for merchants.', tags: ['Python', 'Flask', 'SDK Design'], category: 'Developer tools' },
  { title: 'Hospital Management System', description: 'A full-stack application for appointments, patient records, doctor availability, and hospital administration.', tags: ['Java', 'Spring Boot', 'MySQL'], category: 'Full stack', github: 'https://github.com/Rahul-Kumar-Mishra/HospitalManagementSystem' },
  { title: 'Blog Platform', description: 'A publishing platform where users can create accounts, write articles, and manage content through a RESTful backend.', tags: ['Node.js', 'Express.js', 'MongoDB'], category: 'Full stack', github: 'https://github.com/Rahul-Kumar-Mishra/rBlog' },
]

export const achievements = ['Engineering at Juspay, building enterprise payment infrastructure', 'Designed production-ready distributed caching for services handling millions of monthly transactions', 'B.Tech in Computer Science & Engineering from NIT Patna']

// Drop image files into public/images/gallery. This list is intentionally easy to maintain.
export const gallery = [
  { src: '/images/gallery/workspace-01.jpg', alt: 'Engineering workspace' },
  { src: '/images/gallery/building-01.jpg', alt: 'Building in progress' },
  { src: '/images/gallery/community-01.jpg', alt: 'Developer community' },
]
