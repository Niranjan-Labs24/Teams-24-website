export interface SEOContent {
  title: string;
  description: string;
}

export interface HeroContent {
  headline: string;
  subheading: string;
  trustBadge: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  colors: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HirePageContent {
  seo: SEOContent;
  hero: HeroContent;
  skillsTitle: string;
  skillsDescription: string;
  skills: SkillCategory[];
  faqs: FAQItem[];
}

export const defaultContent: HirePageContent = {
  seo: {
    title: "Hire Expert Developers | Teams24",
    description: "Hire dedicated developers from Teams24 in 72 hours. Scale your team on demand with expert engineers.",
  },
  hero: {
    headline: "Hire {role} Developers: Affordable, dedicated {roleStr} experts in 72 hours",
    subheading: "Access 100+ expert {role} developers, engineers and architects from Teams24, handpicked through a 5-hour evaluation process.",
    trustBadge: "Trusted by 20+ CEO'S and CXO'S",
    primaryCta: "Hire your dream developers",
    secondaryCta: "Book a free discovery call",
  },
  skillsTitle: "10+ skills that {role} Developers at Teams24 are skilled at",
  skillsDescription: "{role} developers at Teams24 are skilled at JavaScript, NodeJS among others.",
  skills: [
    {
      category: "DevOps & Deployment",
      skills: ["Docker", "Kubernetes", "AWS", "Heroku", "Azure", "DigitalOcean"],
      colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-yellow-50 text-yellow-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Backend Languages",
      skills: ["Node.js", "Ruby", "Java", "GO", "Python", "PHP"],
      colors: ["bg-purple-50 text-purple-700", "bg-pink-50 text-pink-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-blue-50 text-blue-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Cassandra"],
      colors: ["bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Version Control",
      skills: ["Gitlab", "Bitbucket", "Github", "Git"],
      colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Backend Frameworks",
      skills: ["Docker", "Kubernetes", "AWS", "Heroku", "Azure", "DigitalOcean"],
      colors: ["bg-green-50 text-green-700", "bg-cyan-50 text-cyan-700", "bg-emerald-50 text-emerald-700", "bg-green-50 text-green-700", "bg-teal-50 text-teal-700", "bg-green-50 text-green-700"]
    },
    {
      category: "CSS Frameworks",
      skills: ["Node.js", "Ruby", "Java", "GO", "Python", "PHP"],
      colors: ["bg-purple-50 text-purple-700", "bg-pink-50 text-pink-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-blue-50 text-blue-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "APIs & Protocols",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Cassandra"],
      colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-red-50 text-red-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Authentication & Authorization",
      skills: ["Gitlab", "Bitbucket", "Github", "Git"],
      colors: ["bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700", "bg-stone-50 text-stone-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "We deploy teams in 24–48 hours with fully vetted professionals ready to execute. No hiring delays, no onboarding friction — just immediate impact."
    },
    {
      question: "What about team chemistry?",
      answer: "We carefully curate team compositions based on your project needs, culture, and working style. Our vetting process ensures compatibility at every level."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Scale up or down based on your project needs. Add specialists, remove roles, or restructure teams with zero contracts or penalties."
    },
    {
      question: "How do you ensure quality?",
      answer: "All team members go through rigorous vetting, have proven track records, and are backed by our quality guarantee. We maintain high standards across all engagements."
    }
  ]
};

export const fullStackDeveloperContent: HirePageContent = {
  seo: {
    title: "Hire Full Stack Developers: Dedicated Full Stack Engineers in 72 Hours",
    description: "Hire dedicated full stack developers from Teams24 in 72 hours. Expert engineers skilled in React, Node.js, Python, AWS & more. 5-hour vetting process. Scale your team on demand."
  },
  hero: {
    headline: "Hire Full Stack Developers: Dedicated Full Stack Engineers in 72 Hours",
    subheading: "Access 100+ expert full stack developers, engineers, and architects from Teams24, handpicked through a rigorous 5-hour evaluation process. From React and Node.js to Python, Django, and AWS — get the full stack talent you need, deployed within 72 hours.",
    trustBadge: "Trusted by 20+ CEOs and CXOs",
    primaryCta: "Hire Your Dream Developers",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Full Stack Developers at Teams24 Are Skilled At",
  skillsDescription: "Full stack developers at Teams24 are skilled at JavaScript, React, Node.js, Python, and more — delivering end-to-end expertise across frontend, backend, databases, and cloud infrastructure.",
  skills: [
    {
      category: "Frontend Frameworks & Libraries",
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "TypeScript"],
      colors: ["bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-emerald-50 text-emerald-700", "bg-red-50 text-red-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Backend Languages",
      skills: ["Node.js", "Python", "Java", "Go", "Ruby", "PHP"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-cyan-50 text-cyan-700", "bg-red-50 text-red-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Database & Data Storage",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Cassandra"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-sky-50 text-sky-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "DevOps & Cloud Deployment",
      skills: ["Docker", "Kubernetes", "AWS", "Heroku", "Azure", "DigitalOcean"],
      colors: ["bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
      colors: ["bg-orange-50 text-orange-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Backend Frameworks",
      skills: ["Express.js", "Django", "Spring Boot", "Ruby on Rails", "Laravel", "Flask"],
      colors: ["bg-gray-100 text-gray-700", "bg-emerald-50 text-emerald-700", "bg-green-50 text-green-700", "bg-red-50 text-red-700", "bg-red-50 text-red-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "CSS Frameworks & UI Libraries",
      skills: ["Tailwind CSS", "Bootstrap", "Material UI", "Sass/SCSS", "Styled Components", "Chakra UI"],
      colors: ["bg-sky-50 text-sky-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-pink-50 text-pink-700", "bg-pink-50 text-pink-700", "bg-teal-50 text-teal-700"]
    },
    {
      category: "APIs & Communication Protocols",
      skills: ["REST", "GraphQL", "WebSocket", "gRPC", "OAuth 2.0", "Swagger/OpenAPI"],
      colors: ["bg-blue-50 text-blue-700", "bg-pink-50 text-pink-700", "bg-yellow-50 text-yellow-700", "bg-green-50 text-green-700", "bg-stone-50 text-stone-700", "bg-green-50 text-green-700"]
    },
    {
      category: "Authentication & Security",
      skills: ["JWT", "OAuth 2.0", "Passport.js", "Auth0", "Firebase Auth", "SAML"],
      colors: ["bg-purple-50 text-purple-700", "bg-stone-50 text-stone-700", "bg-green-50 text-green-700", "bg-orange-50 text-orange-700", "bg-yellow-50 text-yellow-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Testing & Quality Assurance",
      skills: ["Jest", "Cypress", "Playwright", "Mocha", "React Testing Library", "Postman"],
      colors: ["bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-green-50 text-green-700", "bg-stone-50 text-stone-700", "bg-red-50 text-red-700", "bg-orange-50 text-orange-700"]
    }
  ],
  faqs: [
    {
      question: "Can your developers help us build an MVP from scratch?",
      answer: "Yes. Many of our clients are startups and early-stage companies. Our full stack developers have extensive experience building MVPs from concept to launch, including technology selection, architecture decisions, feature prioritization, and iterative development. They help you ship fast without compromising on code quality or scalability."
    },
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated full stack developer is fully onboarded and writing code within 72 hours of selection. This includes repository access, development environment setup, tool configuration, and a kickoff sync with your team. Traditional full stack hiring takes 2–4 months with recruiters, technical interviews, and onboarding. Teams24 compresses that to 3 business days."
    },
    {
      question: "What about team chemistry?",
      answer: "Every full stack developer at Teams24 is evaluated not just for technical skills, but for communication, collaboration, and cultural fit. During our 5-hour vetting process, we assess how candidates work alongside other developers, handle code reviews, participate in standups, and adapt to different project management styles like Agile and Scrum. You also get to interview candidates before making your decision."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more full stack developers, frontend specialists, or backend engineers as your project grows — or scale down after a major release. No long-term contracts, no rigid headcount commitments. Your development team adapts to your business needs."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every full stack developer goes through a 5-hour evaluation that covers frontend development (React, Vue, Angular), backend architecture (Node.js, Python, Java), database design, API development, system design, and real-world scenario problem-solving. Only the top-performing candidates make it into our talent pool. Additionally, our technical leads conduct regular code reviews and performance check-ins."
    },
    {
      question: "What tech stacks do your full stack developers work with?",
      answer: "Our full stack developers have deep expertise across all major stacks including MERN (MongoDB, Express.js, React, Node.js), MEAN (MongoDB, Express.js, Angular, Node.js), Python/Django/React, Java/Spring Boot/Angular, Ruby on Rails, and PHP/Laravel/Vue.js. They are also proficient in TypeScript, GraphQL, Next.js, and modern frontend frameworks. We match the right developer to your specific tech stack."
    },
    {
      question: "Can I hire a frontend-only or backend-only developer instead?",
      answer: "Yes. While our full stack developers work across the entire application layer, Teams24 also provides dedicated frontend developers (React, Vue.js, Angular), backend developers (Node.js, Python, Java), and DevOps engineers. If you need specialists rather than generalists, we can match you with the right talent for your specific requirements."
    },
    {
      question: "Can your developers work with our existing codebase?",
      answer: "Absolutely. Our full stack developers are experienced at jumping into existing projects and codebases. They follow your established coding standards, use your Git branching strategy, and integrate into your CI/CD pipelines. Whether your codebase is greenfield or legacy, they adapt quickly and start contributing within the first week."
    },
    {
      question: "How is this different from hiring a freelance developer?",
      answer: "Freelancers juggle multiple clients and have inconsistent availability. Teams24 provides dedicated full stack professionals who work exclusively on your project. They are fully embedded into your team’s repositories, attend your daily standups, and are accountable to your delivery timelines — just like a full-time hire, but without the overhead of traditional employment."
    }
  ]
};

export const customerSupportContent: HirePageContent = {
  seo: {
    title: "Hire Customer Support Specialists: Dedicated, AI-Ready Support Teams in 72 Hours",
    description: "Hire dedicated customer support specialists from Teams24 in 72 hours. Experts in Zendesk, Intercom, Freshdesk, live chat, email, phone & omnichannel CX. 5-hour vetting. Scale on demand."
  },
  hero: {
    headline: "Hire Customer Support Specialists: Dedicated, AI-Ready Support Teams in 72 Hours",
    subheading: "Access 50+ expert customer support specialists from Teams24, handpicked through a rigorous 5-hour evaluation process. From Zendesk and Intercom ticket management to live chat, phone support, email handling, and AI-augmented omnichannel CX — get the customer support talent you need, deployed within 72 hours.",
    trustBadge: "Your Expert Customer Support Team Is One Call Away. Deploy in 72 Hours.",
    primaryCta: "Hire Your Dream Support Team",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Customer Support Specialists at Teams24 Are Skilled At",
  skillsDescription: "Customer support specialists at Teams24 are skilled in Zendesk, Intercom, Freshdesk, live chat, phone, email, and more — delivering professional, empathetic, and AI-augmented customer experiences across every channel.",
  skills: [
    {
      category: "Helpdesk & Ticketing Platforms",
      skills: ["Zendesk", "Intercom", "Freshdesk", "HubSpot Service Hub", "Salesforce Service Cloud", "Gorgias"],
      colors: ["bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700", "bg-green-50 text-green-700"]
    },
    {
      category: "Live Chat & Messaging",
      skills: ["Intercom Messenger", "Zendesk Chat", "Freshchat", "Tidio", "LiveChat", "Crisp"],
      colors: ["bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-yellow-50 text-yellow-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Email & Ticket Management",
      skills: ["Shared Inbox", "Ticket Prioritization", "Canned Responses", "Macros & Automations", "Escalation Workflows", "Email Triage"],
      colors: ["bg-gray-100 text-gray-700", "bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "Phone & Voice Support",
      skills: ["Inbound Call Handling", "Outbound Follow-ups", "Aircall", "RingCentral", "Dialpad", "VoIP Systems"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "Social Media & Omnichannel",
      skills: ["WhatsApp Business", "Facebook Messenger", "Instagram DMs", "Twitter/X Support", "SMS Support", "Omnichannel Routing"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-pink-50 text-pink-700", "bg-gray-100 text-gray-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "CRM & Customer Data",
      skills: ["Salesforce", "HubSpot CRM", "Zoho CRM", "Pipedrive", "Customer Segmentation", "Contact Management"],
      colors: ["bg-blue-50 text-blue-700", "bg-red-50 text-red-700", "bg-green-50 text-green-700", "bg-gray-100 text-gray-700", "bg-indigo-50 text-indigo-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Knowledge Base & Self-Service",
      skills: ["Help Center Creation", "FAQ Management", "Knowledge Base Writing", "Zendesk Guide", "Intercom Articles", "Notion/Confluence"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-yellow-50 text-yellow-700", "bg-purple-50 text-purple-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "AI-Augmented Support",
      skills: ["AI Chatbots", "Intercom Fin", "Zendesk Answer Bot", "AI Escalations", "Prompt Drafting", "Human + AI Handoff"],
      colors: ["bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-green-50 text-green-700", "bg-red-50 text-red-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Metrics & Reporting",
      skills: ["CSAT & NPS", "First Response Time", "Average Resolution", "Ticket Volume", "SLA Compliance", "QA Scorecards"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-purple-50 text-purple-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Customer Success & Retention",
      skills: ["Onboarding Support", "Churn Prevention", "Account Health", "Upsell Support", "Renewal Management", "Customer Journey"],
      colors: ["bg-green-50 text-green-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "E-Commerce Support",
      skills: ["Shopify", "WooCommerce", "Gorgias", "Order Tracking", "Returns & Refunds", "Dispute Resolution"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-gray-100 text-gray-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated customer support specialist is fully onboarded and handling tickets within 72 hours of selection. This includes helpdesk platform access, internal documentation review, product training kickoff, and a sync with your CX team. Traditional support hiring and training takes 4–8 weeks. Teams24 compresses that to 3 days because our specialists arrive platform-proficient and support-ready."
    },
    {
      question: "What about team chemistry and brand voice?",
      answer: "Every customer support specialist at Teams24 is evaluated not just for technical CX skills, but for communication quality, empathy, cultural fit, and adaptability. During our 5-hour vetting process, we assess written and verbal tone, how candidates handle frustrated customers, de-escalation techniques, and their ability to match different brand voices. You also interview candidates before making your decision, so you can evaluate fit firsthand."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more support agents for product launches, seasonal peaks (Black Friday, holiday rushes), or marketing campaigns — and scale down during quieter periods. No long-term BPO contracts. No minimum headcount commitments. Your support team adapts to your business cycle."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every customer support specialist goes through a 5-hour evaluation that covers helpdesk platform proficiency, live support simulations, written communication assessments, empathy and de-escalation testing, and scenario-based problem-solving. Only top-performing candidates make it into our talent pool. We also conduct ongoing QA reviews and can implement CSAT-linked performance monitoring."
    },
    {
      question: "Which helpdesk platforms do your specialists work with?",
      answer: "Our customer support specialists have hands-on expertise across all major helpdesk platforms including Zendesk (Support, Chat, Guide, Talk), Intercom (Inbox, Messenger, Fin), Freshdesk (Freshchat, Freshcaller), HubSpot Service Hub, Salesforce Service Cloud, Gorgias (for e-commerce), Help Scout, and more. They arrive platform-proficient, so there is no learning curve on your tooling."
    },
    {
      question: "Can your specialists work with AI support tools?",
      answer: "Yes. Our support specialists are trained to work alongside AI tools like Intercom Fin, Zendesk AI and Answer Bot, Freshdesk Freddy, and other AI-powered chatbot and automation platforms. They manage AI escalation workflows, step in when AI reaches its limits on complex issues, and help improve AI accuracy by refining knowledge base content and flagging response gaps. In 2026, the best support teams are human + AI hybrid operations, and our specialists are ready for that model."
    }
  ]
};

export const pythonDeveloperContent: HirePageContent = {
  seo: {
    title: "Hire Python Developers: Dedicated Python Engineers for AI, Web & Data in 72 Hours",
    description: "Hire dedicated Python developers from Teams24 in 72 hours. Expert engineers skilled in Django, FastAPI, AI/ML, data science, automation & cloud deployment. 5-hour vetting. Scale on demand."
  },
  hero: {
    headline: "Hire Python Developers: Dedicated Python Engineers for AI, Web & Data in 72 Hours",
    subheading: "Access 150+ expert Python developers from Teams24, handpicked through a rigorous 5-hour evaluation process. From Django and FastAPI web applications to AI/ML model development, data engineering, and automation — get the Python talent you need, deployed within 72 hours.",
    trustBadge: "Your Expert Python Engineering Team Is One Call Away. Deploy in 72 Hours.",
    primaryCta: "Hire Your Dream Python Team",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Python Developers at Teams24 Are Skilled At",
  skillsDescription: "Python developers at Teams24 are skilled in Django, FastAPI, AI/ML frameworks, data science, and more — delivering production-grade Python expertise across web development, artificial intelligence, and data engineering.",
  skills: [
    {
      category: "Web Frameworks",
      skills: ["Django", "FastAPI", "Flask", "Django REST Framework", "Starlette", "Tornado"],
      colors: ["bg-green-50 text-green-700", "bg-teal-50 text-teal-700", "bg-gray-100 text-gray-700", "bg-emerald-50 text-emerald-700", "bg-yellow-50 text-yellow-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face Transformers", "LangChain", "OpenAI API"],
      colors: ["bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700", "bg-yellow-50 text-yellow-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "Data Science & Analytics",
      skills: ["Pandas", "NumPy", "Polars", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
      colors: ["bg-blue-50 text-blue-700", "bg-sky-50 text-sky-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-green-50 text-green-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Databases & ORMs",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLAlchemy", "Django ORM"],
      colors: ["bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-green-50 text-green-700", "bg-red-50 text-red-700", "bg-yellow-50 text-yellow-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "API Development",
      skills: ["REST APIs", "GraphQL", "WebSocket", "gRPC", "Swagger/OpenAPI", "Pydantic"],
      colors: ["bg-purple-50 text-purple-700", "bg-pink-50 text-pink-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-green-50 text-green-700", "bg-red-50 text-red-700"]
    },
    {
      category: "Data Engineering & Pipelines",
      skills: ["Apache Airflow", "Celery", "Apache Kafka", "Apache Spark (PySpark)", "dbt", "ETL/ELT Pipelines"],
      colors: ["bg-cyan-50 text-cyan-700", "bg-green-50 text-green-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "DevOps & Cloud Deployment",
      skills: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitHub Actions"],
      colors: ["bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-purple-50 text-purple-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "Automation & Scripting",
      skills: ["Web Scraping", "Selenium", "Playwright", "Task Automation", "CLI Tools", "Boto3 (AWS SDK)"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-green-50 text-green-700", "bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Testing & Quality",
      skills: ["pytest", "unittest", "Hypothesis", "tox", "coverage.py", "Locust"],
      colors: ["bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-purple-50 text-purple-700", "bg-green-50 text-green-700", "bg-yellow-50 text-yellow-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "LLM & AI Agent Development",
      skills: ["LangChain", "LlamaIndex", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "AI Agent Frameworks"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-green-50 text-green-700", "bg-yellow-50 text-yellow-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD Pipelines", "Code Reviews"],
      colors: ["bg-orange-50 text-orange-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated Python developer is fully onboarded and shipping code within 72 hours of selection. This includes repository access, virtual environment setup, CI/CD pipeline integration, and a kickoff sync with your engineering team. Traditional Python hiring takes 2–4 months. Teams24 compresses that to 3 days."
    },
    {
      question: "What about team chemistry?",
      answer: "Every Python developer at Teams24 is evaluated not just for technical skills, but for communication, collaboration, and cultural fit. During our 5-hour vetting process, we assess how candidates work alongside frontend developers, participate in code reviews, handle production incidents, and adapt to Agile and Scrum workflows. You also get to interview candidates before making your decision."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more Python developers, data engineers, ML specialists, or DevOps engineers as your project grows — or scale down after a major release. No long-term contracts, no rigid headcount commitments. Your Python team adapts to your product roadmap."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every Python developer goes through a 5-hour evaluation that covers framework proficiency (Django, FastAPI, Flask), database design, API architecture, testing best practices, system design, and real-world debugging scenarios. Only the top-performing candidates make it into our talent pool. Additionally, our engineering leads conduct regular code reviews and architecture check-ins."
    },
    {
      question: "Can your Python developers build AI and machine learning applications?",
      answer: "Yes. Our Python developers build end-to-end AI/ML solutions using TensorFlow, PyTorch, scikit-learn, and Hugging Face. This includes data preprocessing and feature engineering, model training and evaluation, MLOps pipelines for production deployment, and LLM-powered applications using LangChain and LlamaIndex. Whether you need a recommendation engine, a fraud detection model, a computer vision system, or an AI chatbot — our developers have the expertise."
    },
    {
      question: "Can your developers build LLM-powered applications and AI agents?",
      answer: "Yes. Building LLM applications is one of our fastest-growing specializations. Our Python developers build production-grade RAG (Retrieval-Augmented Generation) pipelines with vector databases like Pinecone and Weaviate, AI-powered document Q&A systems, conversational chatbots using LangChain and LlamaIndex, autonomous AI agents, and custom fine-tuning pipelines. They understand prompt engineering, embedding strategies, token optimization, and the full architecture behind shipping reliable AI products."
    }
  ]
};

export const expressJsContent: HirePageContent = {
  seo: {
    title: "Hire Express.js Developers: Dedicated Node.js & Express Experts in 72 Hours",
    description: "Hire dedicated Express.js developers from Teams24 in 72 hours. Expert backend engineers skilled in Node.js, REST APIs, MongoDB, microservices & real-time apps. 5-hour vetting. Scale on demand."
  },
  hero: {
    headline: "Hire Express.js Developers: Dedicated Node.js & Express Experts in 72 Hours",
    subheading: "Access 100+ expert Express.js developers and backend engineers from Teams24, handpicked through a rigorous 5-hour evaluation process. From REST API development and microservices architecture to real-time applications, GraphQL, and MERN stack — get the Express.js talent you need, deployed within 72 hours.",
    trustBadge: "Trusted by 20+ CEOs and CXOs",
    primaryCta: "Hire Your Dream Express.js Team",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Express.js Developers at Teams24 Are Skilled At",
  skillsDescription: "Express.js developers at Teams 24 are skilled at Node.js, REST APIs, MongoDB, and more — delivering production-grade backend expertise for scalable web applications and microservices.",
  skills: [
    {
      category: "Core Express.js & Node.js",
      skills: ["Express.js", "Node.js", "Middleware Architecture", "Routing", "Error Handling", "Template Engines"],
      colors: ["bg-green-50 text-green-700", "bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "API Development",
      skills: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "Swagger/OpenAPI", "API Versioning"],
      colors: ["bg-blue-50 text-blue-700", "bg-pink-50 text-pink-700", "bg-gray-100 text-gray-700", "bg-yellow-50 text-yellow-700", "bg-green-50 text-green-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Sequelize"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Authentication & Security",
      skills: ["JWT", "OAuth 2.0", "Passport.js", "bcrypt", "Helmet.js", "Rate Limiting"],
      colors: ["bg-purple-50 text-purple-700", "bg-gray-100 text-gray-700", "bg-green-50 text-green-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "Frontend Integration",
      skills: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "Server-Side Rendering"],
      colors: ["bg-blue-50 text-blue-700", "bg-gray-100 text-gray-700", "bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "DevOps & Deployment",
      skills: ["Docker", "Kubernetes", "AWS (EC2, Lambda, ECS)", "Heroku", "Vercel", "Nginx"],
      colors: ["bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700", "bg-gray-100 text-gray-700", "bg-green-50 text-green-700"]
    },
    {
      category: "Microservices & Architecture",
      skills: ["Microservices", "Event-Driven", "Message Queues", "Service Mesh", "API Gateway", "Load Balancing"],
      colors: ["bg-indigo-50 text-indigo-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-blue-50 text-blue-700", "bg-green-50 text-green-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Mocha", "Chai", "Supertest", "Postman", "Artillery"],
      colors: ["bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-yellow-50 text-yellow-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700"]
    },
    {
      category: "Real-Time & Streaming",
      skills: ["Socket.io", "WebSocket", "Server-Sent Events", "Redis Pub/Sub", "Live Dashboards", "Chat Systems"],
      colors: ["bg-gray-100 text-gray-700", "bg-yellow-50 text-yellow-700", "bg-blue-50 text-blue-700", "bg-red-50 text-red-700", "bg-emerald-50 text-emerald-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD Pipelines", "Code Reviews"],
      colors: ["bg-orange-50 text-orange-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-purple-50 text-purple-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated Express.js developer is fully onboarded and shipping code within 72 hours of selection. This includes repository access, environment setup, CI/CD pipeline integration, and a kickoff sync with your engineering team. Traditional backend hiring takes 2–4 months. Teams24 compresses that to 3 days."
    },
    {
      question: "What about team chemistry?",
      answer: "Every Express.js developer at Teams24 is evaluated not just for backend technical skills, but for communication, collaboration, and cultural fit. During our 5-hour vetting process, we assess how candidates work alongside frontend developers, participate in code reviews, handle production incidents, and adapt to Agile and Scrum workflows. You also get to interview candidates before making your decision."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more Express.js developers, frontend engineers, or DevOps specialists as your project grows — or scale down after a major release. No long-term contracts, no rigid headcount commitments. Your backend team adapts to your product roadmap."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every Express.js developer goes through a 5-hour evaluation that covers REST API design, database modeling, authentication implementation, error handling patterns, system design, and real-world debugging scenarios. Only the top-performing candidates make it into our talent pool. Additionally, our engineering leads conduct regular code reviews and architecture check-ins."
    },
    {
      question: "What databases do your Express.js developers work with?",
      answer: "Our Express.js developers have deep expertise across both SQL and NoSQL databases including MongoDB (with Mongoose ODM), PostgreSQL (with Sequelize or Knex.js), MySQL, Redis for caching and sessions, and DynamoDB for serverless architectures. They design efficient schemas, write optimized queries, implement indexing strategies, and handle data migrations for production systems."
    },
    {
      question: "Can your Express.js developers build both REST and GraphQL APIs?",
      answer: "Yes. Our developers are proficient in building RESTful APIs with Express.js routing and middleware, as well as GraphQL APIs using Apollo Server or express-graphql. They can help you choose the right API architecture based on your frontend requirements, data complexity, and performance needs — or implement both in a hybrid setup."
    },
    {
      question: "Can your developers handle real-time application development?",
      answer: "Absolutely. Our Express.js developers build real-time features using Socket.io, WebSocket, and Server-Sent Events. This includes live chat systems, collaborative editing tools, real-time notifications, streaming dashboards, multiplayer game backends, and live auction platforms. They handle connection management, event broadcasting, room-based messaging, and horizontal scaling of WebSocket connections."
    },
    {
      question: "How is this different from hiring a freelance Express.js developer?",
      answer: "Freelancers juggle multiple clients and have inconsistent availability. Teams24 provides dedicated Express.js professionals who work exclusively on your project. They are fully embedded into your team’s codebase, attend your daily standups, and are accountable to your deployment schedules — just like a full-time backend hire, but without the overhead of traditional employment."
    },
    {
      question: "Can your developers help migrate our backend to Express.js?",
      answer: "Yes. Our Express.js developers handle backend migrations from legacy frameworks like PHP/Laravel, Ruby on Rails, Django, or monolithic Node.js setups to modern Express.js architectures. This includes API redesign, database migration, authentication system rebuild, and zero-downtime deployment strategies to ensure a smooth transition."
    }
  ]
};

export const automationTestingContent: HirePageContent = {
  seo: {
    title: "Hire Automation Testers: Dedicated, Expert QA Automation Engineers in 72 Hours",
    description: "Hire dedicated automation testers from Teams24 in 72 hours. Expert QA engineers skilled in Selenium, Playwright, Cypress, API testing & CI/CD pipelines. 5-hour vetting. Scale on demand."
  },
  hero: {
    headline: "Hire Automation Testers: Dedicated, Expert QA Automation Engineers in 72 Hours",
    subheading: "Access 75+ expert automation testers and QA engineers from Teams24, handpicked through a rigorous 5-hour evaluation process. From Selenium and Playwright to API testing, performance testing, and CI/CD pipeline integration — get the QA automation talent you need, deployed within 72 hours.",
    trustBadge: "Trusted by 20+ CEOs and CXOs",
    primaryCta: "Hire Your Dream QA Team",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Automation Testers at Teams24 Are Skilled At",
  skillsDescription: "Automation testers at Teams24 are skilled at Selenium, Playwright, Cypress, and more — delivering battle-tested QA expertise across web, mobile, API, and performance testing.",
  skills: [
    {
      category: "Web UI Automation Frameworks",
      skills: ["Selenium WebDriver", "Playwright", "Cypress", "TestCafe", "Puppeteer", "WebdriverIO"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Ruby"],
      colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-yellow-50 text-yellow-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-red-50 text-red-700"]
    },
    {
      category: "API & Service Testing",
      skills: ["Postman", "REST Assured", "SoapUI", "Karate", "GraphQL Testing", "Newman"],
      colors: ["bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-red-50 text-red-700", "bg-green-50 text-green-700", "bg-pink-50 text-pink-700", "bg-yellow-50 text-yellow-700"]
    },
    {
      category: "Mobile Testing",
      skills: ["Appium", "Espresso", "XCUITest", "Detox", "BrowserStack", "Sauce Labs"],
      colors: ["bg-indigo-50 text-indigo-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-orange-50 text-orange-700", "bg-red-50 text-red-700"]
    },
    {
      category: "CI/CD & DevOps Integration",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Azure DevOps", "Docker"],
      colors: ["bg-red-50 text-red-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Performance & Load Testing",
      skills: ["JMeter", "k6", "Gatling", "Locust", "Artillery", "LoadRunner"],
      colors: ["bg-red-50 text-red-700", "bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-green-50 text-green-700", "bg-indigo-50 text-indigo-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "Test Management & Reporting",
      skills: ["JIRA", "TestRail", "Zephyr", "Allure Reports", "Xray", "qTest"],
      colors: ["bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-green-50 text-green-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "BDD & Test Design Frameworks",
      skills: ["Cucumber", "SpecFlow", "TestNG", "JUnit", "Mocha", "Jest"],
      colors: ["bg-green-50 text-green-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700", "bg-red-50 text-red-700"]
    },
    {
      category: "AI-Powered & Self-Healing Testing",
      skills: ["Testim", "Mabl", "Applitools", "Healenium", "Katalon Studio", "Copado"],
      colors: ["bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-teal-50 text-teal-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Slack", "Confluence"],
      colors: ["bg-orange-50 text-orange-700", "bg-gray-100 text-gray-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-sky-50 text-sky-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated automation tester is fully onboarded and writing test scripts within 72 hours of selection. This includes repository access, CI/CD pipeline setup, tool configuration, and a kickoff sync with your development team. Traditional QA hiring takes 2–4 months. Teams24 compresses that to 3 days."
    },
    {
      question: "What about team chemistry?",
      answer: "Every automation tester at Teams24 is evaluated not just for technical QA skills, but for communication, collaboration, and cultural fit. During our 5-hour vetting process, we assess how candidates work alongside developers, handle feedback loops, and adapt to different project management styles like Agile and Scrum. You also get to interview candidates before making your decision."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more automation testers, manual QA engineers, or performance specialists as your project grows — or scale down after a major release. No long-term contracts, no rigid headcount commitments. Your QA team adapts to your sprint cycle."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every automation tester goes through a 5-hour evaluation that covers test framework design, scripting proficiency in at least two languages, CI/CD integration, API testing, debugging, and real-world scenario problem-solving. Only the top-performing candidates make it into our talent pool. Additionally, our QA leads conduct regular code reviews and test coverage audits."
    },
    {
      question: "What automation frameworks do your testers work with?",
      answer: "Our automation testers have deep expertise across all major frameworks including Selenium WebDriver, Playwright, Cypress, Appium, REST Assured, Postman, JMeter, k6, Cucumber, TestNG, JUnit, and Mocha. They also work with AI-powered tools like Testim, Mabl, and Applitools for visual regression and self-healing test automation. We match the right tester to your specific framework and tech stack."
    },
    {
      question: "Can I hire a manual tester instead of an automation tester?",
      answer: "Yes. Teams24 provides dedicated manual testers, automation testers, performance engineers, security testers, and QA leads. Whether you need someone for exploratory testing, usability testing, regression testing, or building an entire automation suite from scratch — we have the right QA resource for your needs."
    },
    {
      question: "How is this different from hiring a freelance QA tester?",
      answer: "Freelancers juggle multiple clients and have inconsistent availability. Teams24 provides dedicated QA automation professionals who work exclusively on your project. They are fully embedded into your team’s repositories, attend your daily standups, and are accountable to your release timelines — just like a full-time QA hire, but without the overhead of traditional employment."
    }
  ]
};

export const salesforceDeveloperContent: HirePageContent = {
  seo: {
    title: "Hire Salesforce Developers: Certified, Dedicated Salesforce Experts in 72 Hours",
    description: "Hire certified Salesforce developers, admins & consultants from Teams24 in 72 hours. Dedicated Salesforce experts for CRM customisation, Apex development & Lightning components. 5-hour vetting process."
  },
  hero: {
    headline: "Hire Salesforce Developers: Certified, Dedicated Salesforce Experts in 72 Hours",
    subheading: "Access 50+ certified Salesforce developers, administrators, and consultants from Teams24, handpicked through a rigorous 5-hour evaluation process. From Apex development and Lightning components to Sales Cloud, Service Cloud, and Agent force. Get the Salesforce talent you need, deployed within 72 hours.",
    trustBadge: "Trusted by 20+ CEOs and CXOs",
    primaryCta: "Hire Your Dream Salesforce Team",
    secondaryCta: "Book a Free Discovery Call"
  },
  skillsTitle: "10+ Skills That Salesforce Developers at Teams24 Are Skilled At",
  skillsDescription: "Salesforce developers at Teams24 are skilled at Apex, Lightning Web Components, Salesforce Flows, and more — delivering certified CRM expertise across every Salesforce Cloud.",
  skills: [
    {
      category: "Salesforce Development",
      skills: ["Apex", "Visualforce", "LWC", "Aura Components", "SOQL", "SOSL"],
      colors: ["bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-indigo-50 text-indigo-700", "bg-sky-50 text-sky-700", "bg-blue-50 text-blue-700", "bg-cyan-50 text-cyan-700"]
    },
    {
      category: "Salesforce Clouds",
      skills: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud", "Experience Cloud", "Data Cloud"],
      colors: ["bg-blue-50 text-blue-700", "bg-teal-50 text-teal-700", "bg-orange-50 text-orange-700", "bg-emerald-50 text-emerald-700", "bg-indigo-50 text-indigo-700", "bg-sky-50 text-sky-700"]
    },
    {
      category: "Salesforce Administration",
      skills: ["User Management", "Security & Permissions", "Salesforce Flows", "Automation", "Reporting", "Data Loader"],
      colors: ["bg-blue-50 text-blue-700", "bg-red-50 text-red-700", "bg-cyan-50 text-cyan-700", "bg-purple-50 text-purple-700", "bg-green-50 text-green-700", "bg-gray-100 text-gray-700"]
    },
    {
      category: "Integration & APIs",
      skills: ["REST API", "SOAP API", "MuleSoft", "Heroku", "Salesforce Connect", "Platform Events"],
      colors: ["bg-indigo-50 text-indigo-700", "bg-gray-100 text-gray-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-cyan-50 text-cyan-700", "bg-orange-50 text-orange-700"]
    },
    {
      category: "AI & Automation",
      skills: ["Einstein AI", "Agentforce", "Flow Builder", "Einstein GPT", "Predictive Analytics", "Copilot Studio"],
      colors: ["bg-emerald-50 text-emerald-700", "bg-blue-50 text-blue-700", "bg-cyan-50 text-cyan-700", "bg-purple-50 text-purple-700", "bg-indigo-50 text-indigo-700", "bg-sky-50 text-sky-700"]
    },
    {
      category: "DevOps & Deployment",
      skills: ["Salesforce DX", "Git", "Copado", "Gearset", "VS Code", "Scratch Orgs"],
      colors: ["bg-blue-50 text-blue-700", "bg-orange-50 text-orange-700", "bg-purple-50 text-purple-700", "bg-blue-50 text-blue-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700"]
    },
    {
      category: "Customisation",
      skills: ["Managed Packages", "Custom Objects", "Custom Metadata", "Validation Rules", "Formula Fields", "Schema Design"],
      colors: ["bg-teal-50 text-teal-700", "bg-blue-50 text-blue-700", "bg-purple-50 text-purple-700", "bg-red-50 text-red-700", "bg-green-50 text-green-700", "bg-indigo-50 text-indigo-700"]
    },
    {
      category: "Testing & QA",
      skills: ["Apex Testing", "Jest (LWC)", "Provar", "Selenium", "Code Review", "Governor Limits"],
      colors: ["bg-red-50 text-red-700", "bg-orange-50 text-orange-700", "bg-blue-50 text-blue-700", "bg-green-50 text-green-700", "bg-gray-100 text-gray-700", "bg-emerald-50 text-emerald-700"]
    }
  ],
  faqs: [
    {
      question: "How fast is deployment really?",
      answer: "Your dedicated Salesforce developer is fully onboarded and embedded into your team within 72 hours of selection. This includes access setup, tool integration, workflow orientation, and a kickoff sync. Traditional Salesforce hiring takes 2–6 months. Teams24 compresses that to 3-4 days."
    },
    {
      question: "What about team chemistry?",
      answer: "Every Salesforce developer at Teams24 is evaluated not just for technical Salesforce skills, but for communication, collaboration, and cultural fit. During our 5-hour vetting process, we assess how candidates work in team environments, handle feedback, and adapt to different project management styles. You also get to interview candidates before making your decision."
    },
    {
      question: "Can we scale dynamically?",
      answer: "Absolutely. Teams24 operates on a subscription-based model, which means you can add more Salesforce developers, admins, or consultants as your project grows — or scale down when the sprint is complete. No long-term contracts, no rigid headcount commitments. Your Salesforce team adapts to your business needs."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every Salesforce developer goes through a 5-hour evaluation that covers Apex coding, Salesforce platform configuration, SOQL queries, Lightning component development, and real-world scenario problem-solving. Only the top-performing candidates make it into our talent pool. Additionally, our team leads conduct regular code reviews and performance check-ins."
    },
    {
      question: "Can I hire a Salesforce admin instead of a developer?",
      answer: "Yes. Teams24 provides dedicated Salesforce administrators, consultants, architects, and developers. Whether you need someone to manage user permissions, build reports, configure automations with Flow Builder, or develop custom Apex applications. We have the right Salesforce resource for your needs."
    },
    {
      question: "Do your Salesforce developers work in my time zone?",
      answer: "Yes. We match Salesforce developers to your preferred time zone and working hours. Whether you are based in the United States, Europe, Australia, or the Middle East, your dedicated Salesforce resource will be available during your business hours for real-time collaboration."
    },
    {
      question: "What Salesforce Clouds can your developers work with?",
      answer: "Our developers have deep expertise across Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud (formerly Community Cloud), Data Cloud, and the new Agent force platform. We also have specialists in Revenue Cloud, CPQ, and Industry-specific Salesforce solutions for healthcare, financial services, and manufacturing."
    },
    {
      question: "How is this different from hiring a Salesforce freelancer?",
      answer: "Freelancers juggle multiple clients and have inconsistent availability. Teams24 provides dedicated Salesforce professionals who work exclusively on your project. They are fully embedded into your team’s tools, attend your stand ups, and are accountable to your delivery timelines just like a full-time hire, but without the overhead of traditional employment."
    },
    {
      question: "What if I need Salesforce integration with other systems?",
      answer: "Our Salesforce developers are proficient in connecting Salesforce to external systems using REST APIs, SOAP APIs, MuleSoft, Heroku, and middleware platforms. Whether you need ERP integration, marketing automation sync, custom API development, or data migration. Our team handles end-to-end Salesforce integration services."
    }
  ]
};

export const contentMap: Record<string, HirePageContent> = {
  "full-stack-developer": fullStackDeveloperContent,
  "customer-support-specialist": customerSupportContent,
  "python-developer": pythonDeveloperContent,
  "express.js-developer": expressJsContent,
  "automation-tester": automationTestingContent,
  "salesforce-developer": salesforceDeveloperContent,
};

export const getContentBySlug = (slug: string): HirePageContent => {
  return contentMap[slug] || defaultContent;
};
