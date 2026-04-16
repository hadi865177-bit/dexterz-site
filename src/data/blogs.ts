export interface Blog {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export const BlogsList: Blog[] = [
  {
    id: "ai-future-software-development",
    title: "The Future of AI in Software Development",
    author: "Sarah Johnson",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the software development landscape, from automated testing to intelligent code generation and beyond.",
    tags: ["AI", "Software Development", "Machine Learning", "Future Tech"],
  },
  {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    author: "Michael Chen",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    excerpt:
      "Learn advanced techniques to optimize your React applications, including memoization, code splitting, and bundle optimization strategies.",
    tags: ["React", "Performance", "Frontend", "Optimization"],
  },
  {
    id: "cloud-native-architecture",
    title: "Building Cloud-Native Applications: Best Practices",
    author: "Emily Rodriguez",
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    excerpt:
      "Discover the essential principles and best practices for designing and deploying cloud-native applications that scale efficiently.",
    tags: ["Cloud Computing", "Microservices", "DevOps", "Scalability"],
  },
  {
    id: "cybersecurity-web-applications",
    title: "Essential Cybersecurity Practices for Web Applications",
    author: "David Kim",
    publishDate: "2023-12-28",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    excerpt:
      "Learn critical security measures every developer should implement to protect web applications from common vulnerabilities and attacks.",
    tags: ["Cybersecurity", "Web Security", "Best Practices", "OWASP"],
  },
  {
    id: "mobile-app-development-trends",
    title: "2024 Mobile App Development Trends to Watch",
    author: "Lisa Thompson",
    publishDate: "2023-12-20",
    readTime: "9 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    excerpt:
      "Stay ahead of the curve with insights into the latest mobile development trends, from cross-platform frameworks to emerging technologies.",
    tags: ["Mobile Development", "Trends", "Cross-Platform", "Innovation"],
  },
  {
    id: "data-science-business-intelligence",
    title: "Data Science for Business Intelligence: A Practical Guide",
    author: "Alex Wong",
    publishDate: "2023-12-15",
    readTime: "14 min read",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    excerpt:
      "Transform raw data into actionable business insights with practical data science techniques and tools for modern enterprises.",
    tags: ["Data Science", "Business Intelligence", "Analytics", "Machine Learning"],
  },
  {
    id: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024: Write Better Code",
    author: "Rachel Martinez",
    publishDate: "2023-12-10",
    readTime: "11 min read",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    excerpt:
      "Master TypeScript with these essential best practices that will help you write more maintainable, scalable, and error-free code.",
    tags: ["TypeScript", "Frontend", "Best Practices", "Code Quality"],
  },
  {
    id: "microservices-architecture-patterns",
    title: "Microservices Architecture Patterns: A Comprehensive Guide",
    author: "James Wilson",
    publishDate: "2023-12-05",
    readTime: "18 min read",
    category: "Backend Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    excerpt:
      "Explore essential microservices patterns including service discovery, circuit breakers, API gateways, and event-driven architectures.",
    tags: ["Microservices", "Architecture", "Backend", "System Design"],
  },
  {
    id: "docker-kubernetes-production",
    title: "Docker and Kubernetes in Production: Best Practices",
    author: "Maria Garcia",
    publishDate: "2023-11-30",
    readTime: "16 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    excerpt:
      "Learn how to deploy and manage containerized applications in production environments with Docker and Kubernetes.",
    tags: ["Docker", "Kubernetes", "DevOps", "Containerization"],
  },
  {
    id: "api-design-rest-graphql",
    title: "API Design: REST vs GraphQL - When to Use What",
    author: "David Chen",
    publishDate: "2023-11-25",
    readTime: "13 min read",
    category: "Backend Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    excerpt:
      "Understand the differences between REST and GraphQL APIs and learn when to choose each approach for your projects.",
    tags: ["API Design", "REST", "GraphQL", "Backend"],
  },
  {
    id: "testing-strategies-react-applications",
    title: "Comprehensive Testing Strategies for React Applications",
    author: "Sarah Kim",
    publishDate: "2023-11-20",
    readTime: "15 min read",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    excerpt:
      "Implement effective testing strategies including unit tests, integration tests, and end-to-end tests for React applications.",
    tags: ["Testing", "React", "Frontend", "Quality Assurance"],
  },
  {
    id: "blockchain-web3-development",
    title: "Getting Started with Blockchain and Web3 Development",
    author: "Michael Rodriguez",
    publishDate: "2023-11-15",
    readTime: "17 min read",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
    excerpt:
      "Dive into blockchain development with practical examples of smart contracts, DApps, and Web3 integration.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "DApps"],
  },
  {
    id: "machine-learning-production-systems",
    title: "Deploying Machine Learning Models in Production",
    author: "Emily Thompson",
    publishDate: "2023-11-10",
    readTime: "19 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    excerpt:
      "Learn the essential steps to deploy, monitor, and maintain machine learning models in production environments.",
    tags: ["Machine Learning", "MLOps", "Production", "AI"],
  },
  {
    id: "progressive-web-apps-guide",
    title: "Building Progressive Web Apps: A Complete Guide",
    author: "Lisa Wang",
    publishDate: "2023-11-05",
    readTime: "14 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    excerpt:
      "Create fast, reliable, and engaging Progressive Web Apps that work seamlessly across all devices and platforms.",
    tags: ["PWA", "Mobile Development", "Web Apps", "Performance"],
  },
  {
    id: "database-design-principles",
    title: "Database Design Principles for Scalable Applications",
    author: "Robert Johnson",
    publishDate: "2023-11-01",
    readTime: "16 min read",
    category: "Backend Development",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80",
    excerpt:
      "Master database design principles including normalization, indexing strategies, and performance optimization techniques.",
    tags: ["Database Design", "SQL", "Performance", "Backend"],
  },
  {
    id: "cybersecurity-mobile-apps",
    title: "Mobile App Security: Protecting User Data and Privacy",
    author: "Jennifer Lee",
    publishDate: "2023-10-28",
    readTime: "12 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    excerpt:
      "Implement robust security measures to protect user data and maintain privacy in mobile applications.",
    tags: ["Mobile Security", "Privacy", "Data Protection", "Mobile Development"],
  },
  {
    id: "serverless-architecture-benefits",
    title: "Serverless Architecture: Benefits, Challenges, and Best Practices",
    author: "Thomas Brown",
    publishDate: "2023-10-25",
    readTime: "15 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    excerpt:
      "Explore the benefits and challenges of serverless architecture and learn how to implement it effectively.",
    tags: ["Serverless", "Cloud Computing", "AWS Lambda", "Architecture"],
  },
];
