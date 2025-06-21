export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'media', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
];

export const stats = [
  { value: '10M+', label: 'Images Annotated' },
  { value: '99.5%', label: 'Accuracy Rate' },
  { value: '50+', label: 'Satisfied Clients' },
  { value: '24/7', label: 'Support Available' }
];

export const aboutCards = [
  {
    title: "Our Mission",
    content: "To accelerate AI development by providing the most accurate training data with uncompromising data security."
  },
  {
    title: "Our Vision",
    content: "To become the global benchmark for quality and reliability in data annotation services."
  },
  {
    title: "Our Team",
    content: "150+ trained annotation specialists supervised by AI experts with PhDs in computer vision."
  }
];

export const features = [
  { emoji: "🏆", title: "Industry-Leading Accuracy", content: "Our multi-tier QA process ensures 99.5% annotation accuracy across all projects." },
  { emoji: "🔒", title: "Data Security", content: "GDPR & ISO 27001 compliant processes with end-to-end encryption." },
  { emoji: "📈", title: "Scalable Solutions", content: "Capacity to handle projects from 1,000 to 10 million+ images with consistent quality." },
  { emoji: "🌐", title: "Global Workforce", content: "24/7 operations with teams across 3 continents for round-the-clock productivity." },
  { emoji: "⚡", title: "Fast Turnaround", content: "Standard delivery within 48 hours, with rush options available." },
  { emoji: "💡", title: "Domain Expertise", content: "Specialized teams for medical, automotive, retail, and agricultural applications." }
];

export const services = [
  {
    title: "2D Bounding Boxes",
    description: "Precise rectangular annotations for object detection tasks with attribute tagging.",
    items: ["Vehicle detection", "Retail product recognition", "Medical imaging"],
    startingPrice: 0.10
  },
  {
    title: "Semantic Segmentation",
    description: "Pixel-level annotation for computer vision applications requiring high precision.",
    items: ["Autonomous driving", "Medical diagnostics", "Satellite imagery analysis"],
    startingPrice: 0.25
  },
  {
    title: "3D Point Cloud Annotation",
    description: "Accurate labeling for LiDAR data used in autonomous vehicles and robotics.",
    items: ["Obstacle detection", "Scene understanding", "Path planning"],
    startingPrice: 0.50
  },
  {
    title: "Text Annotation",
    description: "Natural language processing data labeling for AI language models.",
    items: ["Sentiment analysis", "Named entity recognition", "Intent classification"],
    startingPrice: 0.05
  },
  {
    title: "Video Annotation",
    description: "Frame-by-frame labeling for temporal analysis and tracking applications.",
    items: ["Activity recognition", "Surveillance systems", "Sports analytics"],
    startingPrice: 0.30
  },
  {
    title: "Keypoint Annotation",
    description: "Precise landmark identification for pose estimation and facial recognition.",
    items: ["Facial feature detection", "Human pose estimation", "Gesture recognition"],
    startingPrice: 0.15
  }
];

export const useCases = [
  { 
    title: "Autonomous Vehicles", 
    content: "High-precision labeling for pedestrian detection, traffic sign recognition, and lane keeping systems.",
    examples: [
      "LiDAR point cloud annotation for obstacle detection",
      "Semantic segmentation for drivable areas",
      "Traffic light recognition datasets"
    ]
  },
  { 
    title: "Medical Imaging", 
    content: "Accurate annotation for diagnostic AI models in radiology and pathology.",
    examples: [
      "Tumor segmentation in MRI scans",
      "Organ identification in CT scans",
      "Cell classification in microscopy images"
    ]
  },
  { 
    title: "Retail & E-commerce", 
    content: "Product recognition and attribute tagging for visual search and recommendation systems.",
    examples: [
      "Fashion item categorization",
      "Product size and color tagging",
      "Shelf monitoring analytics"
    ]
  }
];

export const testimonials = [
  {
    quote: "Zentron.Lab delivered exceptional quality annotations that significantly improved our model's performance.",
    name: "Dr. Sarah Chen",
    position: "AI Research Lead, TechAuto",
    rating: 5
  },
  {
    quote: "Their attention to detail and quick turnaround helped us meet our tight project deadlines.",
    name: "Mark Johnson",
    position: "CTO, MediScan",
    rating: 4
  },
  {
    quote: "The best data annotation partner we've worked with. Highly recommended for complex projects.",
    name: "Lisa Wong",
    position: "Product Manager, Urban Robotics",
    rating: 5
  }
];

export const teamMembers = [
  {
    name: "Dr. Alan Turing",
    position: "Chief Technology Officer",
    bio: "PhD in Computer Vision with 15+ years of experience in AI and machine learning.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Grace Hopper",
    position: "Head of Operations",
    bio: "Expert in large-scale data annotation workflows and quality assurance.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "John McCarthy",
    position: "Lead Data Scientist",
    bio: "Specializes in developing annotation guidelines for complex AI applications.",
    linkedin: "#",
    twitter: "#"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    period: "month",
    description: "Perfect for small projects and startups",
    features: [
      "Up to 10,000 images/month",
      "Basic annotation types",
      "Standard quality assurance",
      "3-day turnaround time",
      "Email support"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: "1,999",
    period: "month",
    description: "For growing businesses with regular annotation needs",
    features: [
      "Up to 100,000 images/month",
      "All annotation types",
      "Enhanced quality assurance",
      "2-day turnaround time",
      "Priority support"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "Tailored solutions for large-scale projects",
    features: [
      "Unlimited volume",
      "Custom annotation types",
      "Dedicated QA team",
      "24-hour rush service",
      "Dedicated account manager"
    ],
    featured: false
  }
];

export const faqs = [
  {
    question: "What is your data security policy?",
    answer: "We adhere to strict GDPR and ISO 27001 compliance standards. All data is encrypted in transit and at rest, with access limited to authorized personnel only."
  },
  {
    question: "How do you ensure annotation quality?",
    answer: "We use a multi-tier QA process with automated checks, manual review by senior annotators, and statistical sampling to maintain 99.5%+ accuracy."
  },
  {
    question: "What file formats do you support?",
    answer: "We support all common formats including JPEG, PNG, TIFF, COCO, Pascal VOC, YOLO, and can work with custom formats as needed."
  },
  {
    question: "Can you handle specialized domains?",
    answer: "Yes, we have teams specialized in medical, automotive, retail, and agricultural applications with domain experts available for consultation."
  },
  {
    question: "What is your turnaround time?",
    answer: "Standard projects are delivered within 48 hours. Rush services with 24-hour turnaround are available for urgent needs."
  },
  {
    question: "Do you offer API integration?",
    answer: "Yes, we provide REST API endpoints for seamless integration with your existing workflows and platforms."
  }
];

export const contactInfo = {
  email: "info@zentronlab.com",
  phone: "+91-9544587196",
  address: "Tech Park, Bangalore, India",
  socialLinks: [
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Facebook", url: "#" }
  ]
};