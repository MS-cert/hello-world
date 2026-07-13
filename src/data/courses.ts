export type Course = {
  title: string;
  provider: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  cost: "Fully Free" | "Free Course, Paid Cert" | "Free with Aid";
  url: string;
  blurb: string;
};

// Provider catalog base URLs used to build search links
const P = {
  hubspot: "https://academy.hubspot.com/courses",
  hubspotSearch: (q: string) => `https://academy.hubspot.com/search?q=${encodeURIComponent(q)}`,
  google: "https://learndigital.withgoogle.com/digitalgarage/courses",
  googleCloud: "https://www.cloudskillsboost.google/catalog",
  cisco: "https://www.netacad.com/courses/all-courses",
  ibm: "https://skillsbuild.org",
  msLearn: (q: string) => `https://learn.microsoft.com/en-us/training/browse/?terms=${encodeURIComponent(q)}`,
  meta: "https://www.facebook.com/business/learn/courses",
  aws: (q: string) => `https://explore.skillbuilder.aws/learn/course/search?q=${encodeURIComponent(q)}`,
  greatLearning: (q: string) => `https://www.mygreatlearning.com/academy/search?query=${encodeURIComponent(q)}`,
  simplilearn: "https://www.simplilearn.com/skillup-free-online-courses",
  alison: (q: string) => `https://alison.com/courses?query=${encodeURIComponent(q)}`,
  coursera: (q: string) => `https://www.coursera.org/search?query=${encodeURIComponent(q)}&price=1`,
  edx: (q: string) => `https://www.edx.org/search?q=${encodeURIComponent(q)}&availability=Available%20now`,
  fcc: "https://www.freecodecamp.org/learn",
  kaggle: "https://www.kaggle.com/learn",
  linkedin: (q: string) => `https://www.linkedin.com/learning/search?keywords=${encodeURIComponent(q)}`,
  saylor: "https://learn.saylor.org",
  udacity: (q: string) => `https://www.udacity.com/courses/all?price=Free&search=${encodeURIComponent(q)}`,
};

const FREE: Course["cost"] = "Fully Free";
const PAID_CERT: Course["cost"] = "Free Course, Paid Cert";
const AID: Course["cost"] = "Free with Aid";

// Helper for compact course creation
const c = (
  title: string,
  provider: string,
  category: string,
  duration: string,
  level: Course["level"],
  cost: Course["cost"],
  url: string,
  blurb: string,
): Course => ({ title, provider, category, duration, level, cost, url, blurb });

export const COURSES: Course[] = [
  // ===== HUBSPOT ACADEMY (all fully free with cert) =====
  c("Inbound Marketing Certification", "HubSpot Academy", "Marketing", "4h", "Beginner", FREE, `${P.hubspot}/inbound-marketing`, "The classic HubSpot cert — recognized on CVs worldwide."),
  c("Content Marketing Certification", "HubSpot Academy", "Marketing", "6h", "Beginner", FREE, `${P.hubspot}/content-marketing`, "Build a content engine: storytelling, promotion, analytics."),
  c("SEO Certification", "HubSpot Academy", "SEO", "3h", "Intermediate", FREE, `${P.hubspot}/seo-training`, "On-page, off-page, technical SEO and link-building strategy."),
  c("Email Marketing Certification", "HubSpot Academy", "Marketing", "3h", "Beginner", FREE, `${P.hubspot}/email-marketing`, "Design email campaigns that actually get opened and clicked."),
  c("Social Media Marketing Certification", "HubSpot Academy", "Social Media", "6h", "Beginner", FREE, `${P.hubspot}/social-media`, "A full social strategy course from research to reporting."),
  c("Digital Marketing Certification", "HubSpot Academy", "Marketing", "5h", "Intermediate", FREE, `${P.hubspot}/digital-marketing`, "Cross-channel digital marketing — the modern playbook."),
  c("Inbound Sales Certification", "HubSpot Academy", "Sales", "3h", "Beginner", FREE, `${P.hubspot}/inbound-sales`, "Modern buyer-first sales methodology."),
  c("Sales Enablement Certification", "HubSpot Academy", "Sales", "5h", "Intermediate", FREE, `${P.hubspot}/sales-enablement`, "Align marketing and sales to close more deals."),
  c("Frictionless Sales Certification", "HubSpot Academy", "Sales", "2h", "Beginner", FREE, `${P.hubspot}/frictionless-sales`, "Remove friction from your sales process."),
  c("Sales Management Training", "HubSpot Academy", "Sales", "4h", "Intermediate", FREE, `${P.hubspotSearch("sales management")}`, "Coach and scale a high-performing sales team."),
  c("Service Hub Software Certification", "HubSpot Academy", "CRM", "3h", "Intermediate", FREE, `${P.hubspot}/service-hub-software`, "Master HubSpot Service Hub end-to-end."),
  c("HubSpot CMS for Marketers", "HubSpot Academy", "CMS", "3h", "Beginner", FREE, `${P.hubspot}/hubspot-cms-for-marketers`, "Build and publish pages on HubSpot CMS with confidence."),
  c("HubSpot Reporting Certification", "HubSpot Academy", "Analytics", "4h", "Intermediate", FREE, `${P.hubspot}/hubspot-reporting`, "Turn CRM data into dashboards leaders actually read."),
  c("Revenue Operations Certification", "HubSpot Academy", "Operations", "5h", "Advanced", FREE, `${P.hubspot}/revenue-operations`, "Unite sales, marketing and success under one RevOps engine."),
  c("Growth-Driven Design Certification", "HubSpot Academy", "Web Design", "4h", "Intermediate", FREE, `${P.hubspot}/growth-driven-design`, "Ship a launchpad site, then iterate with real data."),
  c("Delivering Client Success", "HubSpot Academy", "Agency", "3h", "Intermediate", FREE, `${P.hubspot}/delivering-client-success`, "Retain agency clients by managing outcomes, not activities."),
  c("Digital Advertising Certification", "HubSpot Academy", "Ads", "5h", "Intermediate", FREE, `${P.hubspot}/digital-advertising`, "Search, display, social and video ads across platforms."),
  c("Objectives-Based Selling", "HubSpot Academy", "Sales", "2h", "Beginner", FREE, `${P.hubspot}/objectives-based-selling`, "Sell against a buyer's objective, not a product feature."),
  c("Contextual Marketing Certification", "HubSpot Academy", "Marketing", "4h", "Intermediate", FREE, `${P.hubspot}/contextual-marketing`, "Personalize the web experience for each visitor."),
  c("Sales Hub Software Certification", "HubSpot Academy", "Sales", "3h", "Beginner", FREE, `${P.hubspot}/sales-hub-software`, "Deep-dive on Sales Hub features and workflows."),
  c("Marketing Hub Software Certification", "HubSpot Academy", "Marketing", "4h", "Intermediate", FREE, `${P.hubspot}/marketing-software`, "Ship campaigns end-to-end inside Marketing Hub."),
  c("Guided Client Onboarding Certification", "HubSpot Academy", "Agency", "3h", "Intermediate", FREE, `${P.hubspot}/guided-client-onboarding`, "Onboard agency clients faster, with fewer surprises."),

  // ===== GOOGLE =====
  c("Fundamentals of Digital Marketing", "Google Digital Garage", "Marketing", "40h", "Beginner", FREE, `${P.google}/digital-marketing-course`, "26 modules, IAB Europe accredited. The flagship free cert."),
  c("Google AI Essentials", "Google", "AI", "10h", "Beginner", AID, "https://grow.google/ai-essentials/", "Use generative AI at work — prompts, workflows, responsible use."),
  c("Google Analytics Certification", "Google", "Analytics", "6h", "Beginner", FREE, "https://skillshop.exceedlms.com/student/path/2938", "Free official GA4 certification via Skillshop."),
  c("Google Ads Search Certification", "Google", "Ads", "5h", "Beginner", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Official Google Ads Search cert via Skillshop."),
  c("Google Ads Display Certification", "Google", "Ads", "4h", "Beginner", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Official Google Ads Display cert via Skillshop."),
  c("Google Ads Video Certification", "Google", "Ads", "4h", "Beginner", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Run YouTube video ad campaigns like a pro."),
  c("Google Ads Shopping Certification", "Google", "Ads", "4h", "Intermediate", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Merchant Center + Shopping campaigns for e-commerce."),
  c("Google Ads Measurement Certification", "Google", "Analytics", "3h", "Intermediate", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Attribution, conversion tracking, and measurement strategy."),
  c("Google Ads Apps Certification", "Google", "Ads", "3h", "Intermediate", FREE, "https://skillshop.exceedlms.com/student/catalog/list?category_ids=8226", "Universal App Campaigns for mobile app growth."),
  c("Google Cloud Digital Leader (prep)", "Google Cloud", "Cloud", "20h", "Beginner", PAID_CERT, `${P.googleCloud}`, "Free learning path; paid proctored exam for the badge."),
  c("Generative AI Learning Path", "Google Cloud Skills Boost", "AI", "16h", "Intermediate", FREE, "https://www.cloudskillsboost.google/paths/118", "Free skill badges: LLMs, transformers, responsible AI."),
  c("Introduction to Generative AI", "Google Cloud", "AI", "45m", "Beginner", FREE, "https://www.cloudskillsboost.google/course_templates/536", "Short intro course with a shareable skill badge."),
  c("Introduction to Large Language Models", "Google Cloud", "AI", "45m", "Beginner", FREE, "https://www.cloudskillsboost.google/course_templates/539", "How LLMs work and how to use them responsibly."),
  c("Introduction to Responsible AI", "Google Cloud", "AI", "45m", "Beginner", FREE, "https://www.cloudskillsboost.google/course_templates/554", "Google's AI principles applied to real product decisions."),
  c("Attention Mechanism", "Google Cloud", "AI", "45m", "Intermediate", FREE, "https://www.cloudskillsboost.google/course_templates/537", "The math intuition behind transformers."),
  c("Transformer Models and BERT Model", "Google Cloud", "AI", "45m", "Intermediate", FREE, "https://www.cloudskillsboost.google/course_templates/538", "Encoder architectures explained with hands-on labs."),
  c("Encoder-Decoder Architecture", "Google Cloud", "AI", "45m", "Intermediate", FREE, "https://www.cloudskillsboost.google/course_templates/543", "Seq2seq deep-dive from Google engineers."),
  c("Image Generation", "Google Cloud", "AI", "45m", "Intermediate", FREE, "https://www.cloudskillsboost.google/course_templates/541", "Diffusion models and image generation basics."),

  // ===== CISCO NETACAD =====
  c("Introduction to Cybersecurity", "Cisco Networking Academy", "Cybersecurity", "15h", "Beginner", FREE, "https://www.netacad.com/courses/introduction-to-cybersecurity", "Cisco-issued cert. First stop before CompTIA Security+."),
  c("Cybersecurity Essentials", "Cisco Networking Academy", "Cybersecurity", "30h", "Intermediate", FREE, "https://www.netacad.com/courses/cybersecurity-essentials", "Encryption, access control, IR — hands-on labs included."),
  c("Networking Basics", "Cisco Networking Academy", "Networking", "25h", "Beginner", FREE, "https://www.netacad.com/courses/networking-basics", "IPv4, subnetting, topologies — the IT foundation."),
  c("Networking Devices and Initial Configuration", "Cisco Networking Academy", "Networking", "60h", "Intermediate", FREE, `${P.cisco}`, "Switches, routers and initial config walkthroughs."),
  c("Endpoint Security", "Cisco Networking Academy", "Cybersecurity", "27h", "Intermediate", FREE, `${P.cisco}`, "Protect endpoints against modern malware and threats."),
  c("Python Essentials 1", "Cisco / OpenEDG", "Programming", "30h", "Beginner", FREE, "https://www.netacad.com/courses/python-essentials-1", "PCEP-aligned. Free official completion badge."),
  c("Python Essentials 2", "Cisco / OpenEDG", "Programming", "40h", "Intermediate", FREE, "https://www.netacad.com/courses/python-essentials-2", "OOP, modules, exceptions — bridge to PCAP."),
  c("JavaScript Essentials 1", "Cisco / OpenEDG", "Programming", "30h", "Beginner", FREE, `${P.cisco}`, "JS fundamentals with a formal completion badge."),
  c("Linux Unhatched", "Cisco / NDG", "Linux", "8h", "Beginner", FREE, `${P.cisco}`, "Free intro to Linux CLI, filesystem and permissions."),
  c("IoT Fundamentals: Connecting Things", "Cisco Networking Academy", "IoT", "30h", "Intermediate", FREE, `${P.cisco}`, "Wire real sensors and actuators to the internet."),
  c("Get Connected", "Cisco Networking Academy", "Digital Literacy", "30h", "Beginner", FREE, `${P.cisco}`, "Basic digital literacy for total newcomers to computers."),
  c("Data Analytics Essentials", "Cisco Networking Academy", "Data", "40h", "Beginner", FREE, `${P.cisco}`, "Excel, SQL, Tableau and Python for entry-level analytics."),

  // ===== IBM SKILLSBUILD =====
  c("AI Fundamentals", "IBM SkillsBuild", "AI", "20h", "Beginner", FREE, `${P.ibm}`, "IBM digital credential via Credly."),
  c("Data Analytics Fundamentals", "IBM SkillsBuild", "Data", "18h", "Beginner", FREE, `${P.ibm}`, "Excel, SQL, viz basics. Credly badge on completion."),
  c("Cybersecurity Fundamentals", "IBM SkillsBuild", "Cybersecurity", "16h", "Beginner", FREE, `${P.ibm}`, "SOC, threat intel, incident response basics."),
  c("Cloud Computing Fundamentals", "IBM SkillsBuild", "Cloud", "12h", "Beginner", FREE, `${P.ibm}`, "Deployment models, IaaS/PaaS/SaaS with an IBM badge."),
  c("Design Thinking Practitioner", "IBM SkillsBuild", "Product", "10h", "Beginner", FREE, `${P.ibm}`, "IBM's own design thinking method with Credly badge."),
  c("Enterprise Design Thinking Team Essentials", "IBM SkillsBuild", "Product", "6h", "Beginner", FREE, `${P.ibm}`, "Facilitate design thinking sessions with your team."),
  c("Web Development Fundamentals", "IBM SkillsBuild", "Web Dev", "20h", "Beginner", FREE, `${P.ibm}`, "HTML, CSS, JS — IBM-issued completion badge."),
  c("Explore Emerging Tech", "IBM SkillsBuild", "Tech", "8h", "Beginner", FREE, `${P.ibm}`, "Quantum, blockchain, AR/VR overview for beginners."),
  c("Project Management Fundamentals", "IBM SkillsBuild", "Project Mgmt", "12h", "Beginner", FREE, `${P.ibm}`, "IBM-badged PM primer for career switchers."),
  c("Working in a Digital World", "IBM SkillsBuild", "Career", "6h", "Beginner", FREE, `${P.ibm}`, "Modern workplace tools and remote collaboration."),

  // ===== MICROSOFT LEARN =====
  c("Azure Fundamentals (AZ-900 path)", "Microsoft Learn", "Cloud", "10h", "Beginner", PAID_CERT, "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/", "Free learn badges; AZ-900 exam paid."),
  c("Azure AI Fundamentals (AI-900 path)", "Microsoft Learn", "AI", "10h", "Beginner", PAID_CERT, `${P.msLearn("AI-900")}`, "Free content preps you for the AI-900 exam."),
  c("Azure Data Fundamentals (DP-900 path)", "Microsoft Learn", "Data", "12h", "Beginner", PAID_CERT, `${P.msLearn("DP-900")}`, "Relational and non-relational data on Azure."),
  c("Security, Compliance and Identity (SC-900)", "Microsoft Learn", "Cybersecurity", "10h", "Beginner", PAID_CERT, `${P.msLearn("SC-900")}`, "Zero Trust, IAM, and compliance basics on Microsoft 365."),
  c("Power Platform Fundamentals (PL-900)", "Microsoft Learn", "Low-Code", "10h", "Beginner", PAID_CERT, `${P.msLearn("PL-900")}`, "Apps, automations, chatbots with Power Platform."),
  c("GitHub Foundations", "Microsoft Learn", "Dev Tools", "8h", "Beginner", FREE, "https://learn.microsoft.com/en-us/training/github/", "Git, GitHub, Actions, Copilot with achievement badges."),
  c("Microsoft 365 Copilot for Productivity", "Microsoft Learn", "AI", "3h", "Beginner", FREE, `${P.msLearn("Copilot")}`, "Everyday Copilot tips for Word, Excel, Outlook, Teams."),
  c("Create serverless apps with Azure Functions", "Microsoft Learn", "Cloud", "5h", "Intermediate", FREE, `${P.msLearn("Azure Functions")}`, "Deploy production serverless workloads on Azure."),
  c("Build Web Apps with Blazor", "Microsoft Learn", "Web Dev", "6h", "Intermediate", FREE, `${P.msLearn("Blazor")}`, "C# in the browser with Blazor and .NET."),
  c("Take your first steps with C#", "Microsoft Learn", "Programming", "4h", "Beginner", FREE, `${P.msLearn("C#")}`, "The recommended C# on-ramp from Microsoft."),
  c("Take your first steps with Python", "Microsoft Learn", "Programming", "5h", "Beginner", FREE, `${P.msLearn("Python")}`, "Python fundamentals with hands-on labs."),
  c("Build machine learning models with Azure ML", "Microsoft Learn", "AI", "9h", "Intermediate", FREE, `${P.msLearn("Azure Machine Learning")}`, "Train, deploy and monitor ML models on Azure."),
  c("Get started with .NET on Azure", "Microsoft Learn", "Cloud", "6h", "Intermediate", FREE, `${P.msLearn(".NET Azure")}`, "Deploy .NET workloads on modern Azure services."),
  c("Introduction to Kubernetes on Azure", "Microsoft Learn", "DevOps", "5h", "Intermediate", FREE, `${P.msLearn("Kubernetes")}`, "AKS from first principles to production."),

  // ===== META BLUEPRINT =====
  c("Meta Certified Digital Marketing Associate (prep)", "Meta Blueprint", "Marketing", "12h", "Beginner", FREE, `${P.meta}`, "Study path for Meta's marketing associate cert."),
  c("Meta Certified Media Buying Professional (prep)", "Meta Blueprint", "Ads", "16h", "Intermediate", FREE, `${P.meta}`, "Free study path; paid proctored exam for the badge."),
  c("Instagram Marketing Basics", "Meta Blueprint", "Social Media", "3h", "Beginner", FREE, `${P.meta}`, "Content, Reels, and shopping tools on Instagram."),
  c("Facebook Ads Manager Fundamentals", "Meta Blueprint", "Ads", "4h", "Beginner", FREE, `${P.meta}`, "Set up campaigns, audiences and creative in Ads Manager."),
  c("Meta Business Suite Essentials", "Meta Blueprint", "Social Media", "2h", "Beginner", FREE, `${P.meta}`, "Manage Facebook and Instagram from one place."),
  c("Growing Your Business with WhatsApp", "Meta Blueprint", "Messaging", "2h", "Beginner", FREE, `${P.meta}`, "Use WhatsApp Business for customer support and sales."),
  c("Creative Best Practices for Ads", "Meta Blueprint", "Ads", "2h", "Beginner", FREE, `${P.meta}`, "Design mobile-first ads that stop the scroll."),
  c("Introduction to Advantage+ Shopping Campaigns", "Meta Blueprint", "Ads", "1h", "Intermediate", FREE, `${P.meta}`, "Automated e-commerce campaigns on Meta."),

  // ===== AWS SKILL BUILDER =====
  c("AWS Cloud Practitioner Essentials", "AWS Skill Builder", "Cloud", "7h", "Beginner", PAID_CERT, `${P.aws("Cloud Practitioner Essentials")}`, "Free course. Preps you for the CLF-C02 paid exam."),
  c("AWS Technical Essentials", "AWS Skill Builder", "Cloud", "5h", "Beginner", FREE, `${P.aws("Technical Essentials")}`, "Core AWS services from an SA perspective."),
  c("Machine Learning for Business Challenges", "AWS Skill Builder", "AI", "2h", "Beginner", FREE, `${P.aws("Machine Learning")}`, "How to scope ML use cases for your business."),
  c("Amazon Bedrock Getting Started", "AWS Skill Builder", "AI", "2h", "Beginner", FREE, `${P.aws("Bedrock")}`, "Build with foundation models on Bedrock."),
  c("Generative AI Learning Plan for Developers", "AWS Skill Builder", "AI", "12h", "Intermediate", FREE, `${P.aws("Generative AI Developer")}`, "GenAI hands-on labs for engineers."),
  c("Introduction to Amazon SageMaker", "AWS Skill Builder", "AI", "3h", "Intermediate", FREE, `${P.aws("SageMaker")}`, "Train and deploy models with SageMaker."),
  c("Storage Learning Plan", "AWS Skill Builder", "Cloud", "8h", "Intermediate", FREE, `${P.aws("Storage")}`, "S3, EBS, EFS, Glacier — pick the right tool."),
  c("Networking Learning Plan", "AWS Skill Builder", "Networking", "10h", "Intermediate", FREE, `${P.aws("Networking")}`, "VPCs, subnets, peering, PrivateLink in depth."),
  c("Security Learning Plan", "AWS Skill Builder", "Cybersecurity", "10h", "Intermediate", FREE, `${P.aws("Security")}`, "IAM, KMS, GuardDuty, Security Hub best practices."),
  c("Data Analytics Learning Plan", "AWS Skill Builder", "Data", "12h", "Intermediate", FREE, `${P.aws("Data Analytics")}`, "Athena, Glue, Redshift, QuickSight end-to-end."),
  c("Serverless Learning Plan", "AWS Skill Builder", "Cloud", "8h", "Intermediate", FREE, `${P.aws("Serverless")}`, "Lambda, API Gateway, Step Functions patterns."),
  c("Containers Learning Plan", "AWS Skill Builder", "DevOps", "10h", "Intermediate", FREE, `${P.aws("Containers")}`, "ECS, EKS, Fargate architecture and ops."),

  // ===== GREAT LEARNING ACADEMY =====
  c("Python for Beginners", "Great Learning Academy", "Programming", "5h", "Beginner", FREE, `${P.greatLearning("Python for Beginners")}`, "Free cert after the final quiz."),
  c("Data Science Foundations", "Great Learning Academy", "Data", "6h", "Beginner", FREE, `${P.greatLearning("Data Science")}`, "Statistics, EDA and Python for aspiring analysts."),
  c("Excel for Beginners", "Great Learning Academy", "Business", "4h", "Beginner", FREE, `${P.greatLearning("Excel")}`, "From formulas to pivot tables in one sitting."),
  c("Introduction to Machine Learning", "Great Learning Academy", "AI", "5h", "Beginner", FREE, `${P.greatLearning("Machine Learning")}`, "ML concepts and scikit-learn hands-on."),
  c("Introduction to SQL", "Great Learning Academy", "Data", "3h", "Beginner", FREE, `${P.greatLearning("SQL")}`, "SELECTs, JOINs and aggregations from zero."),
  c("Power BI for Beginners", "Great Learning Academy", "Data", "4h", "Beginner", FREE, `${P.greatLearning("Power BI")}`, "Build first dashboards in Power BI."),
  c("Tableau for Beginners", "Great Learning Academy", "Data", "4h", "Beginner", FREE, `${P.greatLearning("Tableau")}`, "Turn spreadsheets into publish-ready dashboards."),
  c("Introduction to Cybersecurity", "Great Learning Academy", "Cybersecurity", "3h", "Beginner", FREE, `${P.greatLearning("Cybersecurity")}`, "Attack surface, CIA triad and defense basics."),
  c("Ethical Hacking Fundamentals", "Great Learning Academy", "Cybersecurity", "5h", "Intermediate", FREE, `${P.greatLearning("Ethical Hacking")}`, "Reconnaissance and vuln assessment for beginners."),
  c("Digital Marketing Basics", "Great Learning Academy", "Marketing", "4h", "Beginner", FREE, `${P.greatLearning("Digital Marketing")}`, "SEO, SEM, social and email in one primer."),
  c("Java Programming", "Great Learning Academy", "Programming", "6h", "Beginner", FREE, `${P.greatLearning("Java")}`, "OOP fundamentals in modern Java."),
  c("C++ for Beginners", "Great Learning Academy", "Programming", "5h", "Beginner", FREE, `${P.greatLearning("C++")}`, "Syntax, pointers and STL walkthrough."),
  c("Introduction to Cloud Computing", "Great Learning Academy", "Cloud", "3h", "Beginner", FREE, `${P.greatLearning("Cloud Computing")}`, "IaaS, PaaS, SaaS and multi-cloud strategy."),
  c("DevOps Fundamentals", "Great Learning Academy", "DevOps", "5h", "Beginner", FREE, `${P.greatLearning("DevOps")}`, "CI/CD, Git, Docker and monitoring intro."),
  c("React JS for Beginners", "Great Learning Academy", "Web Dev", "5h", "Beginner", FREE, `${P.greatLearning("React")}`, "Components, hooks and state management."),
  c("Node.js for Beginners", "Great Learning Academy", "Web Dev", "4h", "Beginner", FREE, `${P.greatLearning("Node.js")}`, "Servers, Express and REST APIs."),
  c("Introduction to Blockchain", "Great Learning Academy", "Blockchain", "3h", "Beginner", FREE, `${P.greatLearning("Blockchain")}`, "Consensus, wallets and smart contracts explained."),
  c("Introduction to Deep Learning", "Great Learning Academy", "AI", "5h", "Intermediate", FREE, `${P.greatLearning("Deep Learning")}`, "Neural nets and Keras from the ground up."),
  c("Statistics for Data Science", "Great Learning Academy", "Data", "4h", "Beginner", FREE, `${P.greatLearning("Statistics")}`, "The stats every data scientist should know."),
  c("UI/UX Design Fundamentals", "Great Learning Academy", "Design", "4h", "Beginner", FREE, `${P.greatLearning("UI UX Design")}`, "Wireframing, prototyping and heuristics."),

  // ===== SIMPLILEARN SKILLUP =====
  c("Introduction to Data Science", "Simplilearn SkillUp", "Data", "5h", "Beginner", FREE, `${P.simplilearn}`, "Free self-paced course + certificate."),
  c("JavaScript for Beginners", "Simplilearn SkillUp", "Programming", "6h", "Beginner", FREE, `${P.simplilearn}`, "Modern JS syntax and DOM manipulation."),
  c("Introduction to Python", "Simplilearn SkillUp", "Programming", "9h", "Beginner", FREE, `${P.simplilearn}`, "Free Python cert after the final assessment."),
  c("Digital Marketing Fundamentals", "Simplilearn SkillUp", "Marketing", "4h", "Beginner", FREE, `${P.simplilearn}`, "One-hour-a-day marketing crash course."),
  c("Introduction to AI", "Simplilearn SkillUp", "AI", "3h", "Beginner", FREE, `${P.simplilearn}`, "AI applications and terminology, no math needed."),
  c("Business Analytics with Excel", "Simplilearn SkillUp", "Business", "8h", "Beginner", FREE, `${P.simplilearn}`, "Real business cases solved in Excel."),
  c("Introduction to MS Excel", "Simplilearn SkillUp", "Business", "5h", "Beginner", FREE, `${P.simplilearn}`, "Formulas, tables and dashboards from zero."),
  c("Kubernetes Basics for Developers", "Simplilearn SkillUp", "DevOps", "6h", "Intermediate", FREE, `${P.simplilearn}`, "Free K8s intro course with certificate."),
  c("Cyber Security for Beginners", "Simplilearn SkillUp", "Cybersecurity", "4h", "Beginner", FREE, `${P.simplilearn}`, "Threats, defenses and career overview."),
  c("SQL Basics for Beginners", "Simplilearn SkillUp", "Data", "3h", "Beginner", FREE, `${P.simplilearn}`, "Write your first production-ready queries."),

  // ===== ALISON =====
  c("Diploma in Project Management", "Alison", "Project Mgmt", "15h", "Intermediate", PAID_CERT, `${P.alison("Project Management")}`, "Free course; PDF certificate is paid."),
  c("Diploma in Human Resources", "Alison", "HR", "12h", "Intermediate", PAID_CERT, `${P.alison("Human Resources")}`, "HR foundations from hiring to performance."),
  c("Diploma in English Language Studies", "Alison", "Language", "10h", "Beginner", PAID_CERT, `${P.alison("English")}`, "Comprehensive English grammar and writing."),
  c("Diploma in Photography", "Alison", "Creative", "10h", "Beginner", PAID_CERT, `${P.alison("Photography")}`, "Composition, exposure and editing basics."),
  c("Diploma in Web Design", "Alison", "Design", "12h", "Beginner", PAID_CERT, `${P.alison("Web Design")}`, "HTML, CSS and UX for beginner designers."),
  c("Diploma in Business Management", "Alison", "Business", "14h", "Intermediate", PAID_CERT, `${P.alison("Business Management")}`, "Operations, finance and strategy overview."),
  c("Diploma in Nutrition", "Alison", "Health", "10h", "Beginner", PAID_CERT, `${P.alison("Nutrition")}`, "Macros, micros, meal planning basics."),
  c("Certificate in Emotional Intelligence", "Alison", "Personal Dev", "3h", "Beginner", PAID_CERT, `${P.alison("Emotional Intelligence")}`, "Build self-awareness and empathy at work."),
  c("Diploma in Accounting", "Alison", "Finance", "12h", "Beginner", PAID_CERT, `${P.alison("Accounting")}`, "Ledger to financial statements walkthrough."),
  c("Diploma in Psychology", "Alison", "Psychology", "20h", "Beginner", PAID_CERT, `${P.alison("Psychology")}`, "Intro survey across major psychology fields."),

  // ===== COURSERA (Financial Aid) =====
  c("Google IT Support Professional Certificate", "Google · Coursera", "IT", "6mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/google-it-support", "Job-ready IT credential. Apply for financial aid."),
  c("Google Data Analytics Professional Certificate", "Google · Coursera", "Data", "6mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/google-data-analytics", "Apply for aid to earn Google's data cert free."),
  c("Google UX Design Professional Certificate", "Google · Coursera", "Design", "6mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/google-ux-design", "Portfolio-driven UX certificate from Google."),
  c("Google Project Management Professional Certificate", "Google · Coursera", "Project Mgmt", "6mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/google-project-management", "Agile, waterfall and stakeholder skills."),
  c("Google Digital Marketing & E-commerce Certificate", "Google · Coursera", "Marketing", "6mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce", "Full stack marketing skills with real portfolio projects."),
  c("Meta Front-End Developer Professional Certificate", "Meta · Coursera", "Web Dev", "7mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/meta-front-end-developer", "React, HTML/CSS, JS — Meta certificate via aid."),
  c("Meta Back-End Developer Professional Certificate", "Meta · Coursera", "Web Dev", "8mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/meta-back-end-developer", "Python, Django, APIs — Meta certificate via aid."),
  c("IBM Data Science Professional Certificate", "IBM · Coursera", "Data", "11mo", "Beginner", AID, "https://www.coursera.org/professional-certificates/ibm-data-science", "10 courses to job-ready data science."),
  c("IBM AI Engineering Professional Certificate", "IBM · Coursera", "AI", "6mo", "Intermediate", AID, "https://www.coursera.org/professional-certificates/ai-engineer", "Deep learning frameworks and MLOps with IBM."),
  c("The Science of Well-Being", "Yale · Coursera", "Personal Dev", "19h", "Beginner", AID, "https://www.coursera.org/learn/the-science-of-well-being", "Yale's most popular course. Aid unlocks the cert."),
  c("Machine Learning Specialization", "Stanford · Coursera", "AI", "3mo", "Intermediate", AID, "https://www.coursera.org/specializations/machine-learning-introduction", "Andrew Ng's modernized ML course."),
  c("Deep Learning Specialization", "DeepLearning.AI · Coursera", "AI", "5mo", "Intermediate", AID, "https://www.coursera.org/specializations/deep-learning", "The canonical deep learning sequence."),
  c("Financial Markets", "Yale · Coursera", "Finance", "33h", "Beginner", AID, "https://www.coursera.org/learn/financial-markets-global", "Robert Shiller's flagship intro to finance."),
  c("Learning How to Learn", "McMaster · Coursera", "Personal Dev", "15h", "Beginner", AID, "https://www.coursera.org/learn/learning-how-to-learn", "Study techniques backed by neuroscience."),
  c("Introduction to Psychology", "Yale · Coursera", "Psychology", "15h", "Beginner", AID, "https://www.coursera.org/learn/introduction-psychology", "Paul Bloom's beloved intro survey."),
  c("Successful Negotiation", "Michigan · Coursera", "Business", "17h", "Beginner", AID, "https://www.coursera.org/learn/negotiation-skills", "Prep, negotiate, close — with practice cases."),
  c("Fundamentals of Music Theory", "Edinburgh · Coursera", "Music", "17h", "Beginner", AID, "https://www.coursera.org/learn/edinburgh-music-theory", "Read, hear, and analyze Western tonal music."),
  c("Programming for Everybody (Python)", "Michigan · Coursera", "Programming", "19h", "Beginner", AID, "https://www.coursera.org/learn/python", "Charles Severance's beloved Python on-ramp."),

  // ===== edX =====
  c("CS50's Introduction to Computer Science", "Harvard · edX", "Programming", "50h", "Beginner", PAID_CERT, "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x", "The famous CS50 — free to audit, paid for cert."),
  c("CS50's Web Programming with Python and JavaScript", "Harvard · edX", "Web Dev", "60h", "Intermediate", PAID_CERT, "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript", "Django, React, SQL — from the CS50 team."),
  c("CS50's Introduction to AI with Python", "Harvard · edX", "AI", "50h", "Intermediate", PAID_CERT, "https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python", "Classical AI to neural nets in Python."),
  c("CS50's Introduction to Cybersecurity", "Harvard · edX", "Cybersecurity", "20h", "Beginner", PAID_CERT, "https://www.edx.org/course/cs50s-introduction-to-cybersecurity", "David Malan's cybersecurity fundamentals."),
  c("Introduction to Linux (LFS101)", "Linux Foundation · edX", "Linux", "60h", "Beginner", PAID_CERT, "https://www.edx.org/course/introduction-to-linux", "Free official Linux Foundation intro."),
  c("MIT 6.00.1x Introduction to Computer Science", "MIT · edX", "Programming", "9wk", "Beginner", PAID_CERT, `${P.edx("MIT 6.00.1x")}`, "MIT's flagship intro to CS and Python."),
  c("Introduction to Data Analysis using Excel", "Microsoft · edX", "Data", "20h", "Beginner", PAID_CERT, `${P.edx("Data Analysis Excel Microsoft")}`, "Excel analytics from the Microsoft data team."),
  c("Analyzing and Visualizing Data with Power BI", "Microsoft · edX", "Data", "24h", "Intermediate", PAID_CERT, `${P.edx("Power BI Microsoft")}`, "End-to-end Power BI reporting for analysts."),
  c("English Grammar and Style", "UQx · edX", "Language", "24h", "Beginner", PAID_CERT, "https://www.edx.org/course/english-grammar-and-style", "University of Queensland writing course."),
  c("TOEFL Test Preparation", "ETSx · edX", "Language", "8wk", "Intermediate", PAID_CERT, `${P.edx("TOEFL")}`, "Official TOEFL prep from ETS."),
  c("How to Learn Online", "edX", "Personal Dev", "3h", "Beginner", FREE, `${P.edx("How to Learn Online")}`, "Meta-course on studying effectively online."),

  // ===== FREECODECAMP =====
  c("Responsive Web Design Certification", "freeCodeCamp", "Web Dev", "300h", "Beginner", FREE, `${P.fcc}/2022/responsive-web-design/`, "Flexbox, grid, accessibility — with a verifiable cert."),
  c("JavaScript Algorithms and Data Structures", "freeCodeCamp", "Programming", "300h", "Beginner", FREE, `${P.fcc}/javascript-algorithms-and-data-structures/`, "Modern JS + DS&A cert from freeCodeCamp."),
  c("Front End Development Libraries", "freeCodeCamp", "Web Dev", "300h", "Intermediate", FREE, `${P.fcc}/front-end-development-libraries/`, "React, Redux, Bootstrap, Sass — hands-on cert."),
  c("Back End Development and APIs", "freeCodeCamp", "Web Dev", "300h", "Intermediate", FREE, `${P.fcc}/back-end-development-and-apis/`, "Node, Express, MongoDB and REST design."),
  c("Data Analysis with Python Certification", "freeCodeCamp", "Data", "300h", "Intermediate", FREE, `${P.fcc}/data-analysis-with-python/`, "NumPy, Pandas, Matplotlib and Seaborn."),
  c("Scientific Computing with Python", "freeCodeCamp", "Programming", "300h", "Beginner", FREE, `${P.fcc}/scientific-computing-with-python/`, "Python 3 fundamentals + 5 build-from-scratch projects."),
  c("Machine Learning with Python Certification", "freeCodeCamp", "AI", "300h", "Intermediate", FREE, `${P.fcc}/machine-learning-with-python/`, "TensorFlow and neural networks by projects."),
  c("Information Security Certification", "freeCodeCamp", "Cybersecurity", "300h", "Intermediate", FREE, `${P.fcc}/information-security/`, "HelmetJS, pentesting basics and secure APIs."),
  c("Quality Assurance Certification", "freeCodeCamp", "QA", "300h", "Intermediate", FREE, `${P.fcc}/quality-assurance/`, "Chai testing, Advanced Node and Express."),
  c("Relational Database Certification", "freeCodeCamp", "Data", "300h", "Beginner", FREE, `${P.fcc}/relational-database/`, "Hands-on Postgres, Bash and Git."),
  c("College Algebra with Python", "freeCodeCamp", "Math", "300h", "Beginner", FREE, `${P.fcc}/college-algebra-with-python/`, "College algebra taught via Python."),
  c("Foundational C# with Microsoft", "freeCodeCamp", "Programming", "35h", "Beginner", FREE, `${P.fcc}/foundational-c-sharp-with-microsoft/`, "Joint freeCodeCamp x Microsoft C# cert."),

  // ===== KAGGLE LEARN =====
  c("Intro to Programming", "Kaggle", "Programming", "5h", "Beginner", FREE, `${P.kaggle}/intro-to-programming`, "Kaggle's free micro-course with certificate."),
  c("Python", "Kaggle", "Programming", "7h", "Beginner", FREE, `${P.kaggle}/python`, "Python essentials for data work."),
  c("Intro to Machine Learning", "Kaggle", "AI", "3h", "Beginner", FREE, `${P.kaggle}/intro-to-machine-learning`, "Build your first ML model in a notebook."),
  c("Intermediate Machine Learning", "Kaggle", "AI", "4h", "Intermediate", FREE, `${P.kaggle}/intermediate-machine-learning`, "Missing values, categoricals, XGBoost."),
  c("Feature Engineering", "Kaggle", "AI", "5h", "Intermediate", FREE, `${P.kaggle}/feature-engineering`, "The unfair advantage in ML competitions."),
  c("Data Visualization", "Kaggle", "Data", "4h", "Beginner", FREE, `${P.kaggle}/data-visualization`, "Seaborn from bar charts to heatmaps."),
  c("Pandas", "Kaggle", "Data", "4h", "Beginner", FREE, `${P.kaggle}/pandas`, "The definitive short course on Pandas."),
  c("Data Cleaning", "Kaggle", "Data", "4h", "Intermediate", FREE, `${P.kaggle}/data-cleaning`, "Handle missing values, scaling and parsing dates."),
  c("Intro to Deep Learning", "Kaggle", "AI", "4h", "Intermediate", FREE, `${P.kaggle}/intro-to-deep-learning`, "TensorFlow basics with real datasets."),
  c("Computer Vision", "Kaggle", "AI", "4h", "Intermediate", FREE, `${P.kaggle}/computer-vision`, "Convnets, transfer learning and augmentation."),
  c("Time Series", "Kaggle", "Data", "5h", "Intermediate", FREE, `${P.kaggle}/time-series`, "Forecasting with linear regression and ML."),
  c("Intro to SQL", "Kaggle", "Data", "3h", "Beginner", FREE, `${P.kaggle}/intro-to-sql`, "BigQuery SQL fundamentals."),
  c("Advanced SQL", "Kaggle", "Data", "4h", "Intermediate", FREE, `${P.kaggle}/advanced-sql`, "JOINs, unions and analytic functions."),
  c("Intro to AI Ethics", "Kaggle", "AI", "4h", "Beginner", FREE, `${P.kaggle}/intro-to-ai-ethics`, "Build ML systems responsibly."),
  c("Machine Learning Explainability", "Kaggle", "AI", "3h", "Intermediate", FREE, `${P.kaggle}/machine-learning-explainability`, "SHAP, permutation importance and partial plots."),
  c("Intro to Game AI and Reinforcement Learning", "Kaggle", "AI", "4h", "Intermediate", FREE, `${P.kaggle}/intro-to-game-ai-and-reinforcement-learning`, "Build agents that play games."),
  c("Geospatial Analysis", "Kaggle", "Data", "4h", "Intermediate", FREE, `${P.kaggle}/geospatial-analysis`, "Manipulate and visualize geographic data."),
  c("Intro to Programming (Python for Data)", "Kaggle", "Programming", "5h", "Beginner", FREE, `${P.kaggle}/python`, "Certificate-bearing Python primer."),

  // ===== LINKEDIN LEARNING (free monthly picks) =====
  c("Learning Git and GitHub", "LinkedIn Learning", "Dev Tools", "2h", "Beginner", FREE, `${P.linkedin("Git GitHub")}`, "Often free during LinkedIn's monthly promos."),
  c("Excel Essential Training", "LinkedIn Learning", "Business", "6h", "Beginner", FREE, `${P.linkedin("Excel Essential Training")}`, "Foundational Excel — free during promo windows."),
  c("SEO Foundations", "LinkedIn Learning", "SEO", "3h", "Beginner", FREE, `${P.linkedin("SEO Foundations")}`, "Frequently in LinkedIn's free-of-the-month drops."),

  // ===== SAYLOR ACADEMY =====
  c("BUS101: Introduction to Business", "Saylor Academy", "Business", "40h", "Beginner", FREE, `${P.saylor}`, "College-level intro to business with free cert."),
  c("BUS208: Principles of Management", "Saylor Academy", "Business", "40h", "Beginner", FREE, `${P.saylor}`, "Management theory to modern practice."),
  c("CS101: Introduction to Computer Science I", "Saylor Academy", "Programming", "80h", "Beginner", FREE, `${P.saylor}`, "College-level CS intro with free certificate."),
  c("CS102: Introduction to Computer Science II", "Saylor Academy", "Programming", "80h", "Intermediate", FREE, `${P.saylor}`, "Data structures and algorithm design."),
  c("ECON101: Principles of Microeconomics", "Saylor Academy", "Economics", "40h", "Beginner", FREE, `${P.saylor}`, "Supply, demand, and market structures."),
  c("ECON102: Principles of Macroeconomics", "Saylor Academy", "Economics", "40h", "Beginner", FREE, `${P.saylor}`, "GDP, inflation, monetary and fiscal policy."),
  c("PSYCH101: Introduction to Psychology", "Saylor Academy", "Psychology", "40h", "Beginner", FREE, `${P.saylor}`, "Free college-credit psychology intro."),
  c("ENGL001: English Composition I", "Saylor Academy", "Language", "40h", "Beginner", FREE, `${P.saylor}`, "Academic writing fundamentals."),
  c("MA001: Beginning Algebra", "Saylor Academy", "Math", "40h", "Beginner", FREE, `${P.saylor}`, "Free intro to algebra with certificate."),
  c("HIST101: World History", "Saylor Academy", "History", "40h", "Beginner", FREE, `${P.saylor}`, "Ancient civilizations to the modern era."),

  // ===== UDACITY (free courses) =====
  c("Intro to Machine Learning", "Udacity", "AI", "10wk", "Beginner", FREE, `${P.udacity("Machine Learning")}`, "Free content by Sebastian Thrun."),
  c("Intro to HTML and CSS", "Udacity", "Web Dev", "3wk", "Beginner", FREE, `${P.udacity("HTML CSS")}`, "Free HTML/CSS course from Udacity."),
  c("Intro to JavaScript", "Udacity", "Programming", "2wk", "Beginner", FREE, `${P.udacity("JavaScript")}`, "Free JavaScript basics with real projects."),
  c("Data Analysis with R", "Udacity", "Data", "4wk", "Intermediate", FREE, `${P.udacity("R")}`, "Free EDA course using R and ggplot2."),
  c("Version Control with Git", "Udacity", "Dev Tools", "3wk", "Beginner", FREE, `${P.udacity("Git")}`, "Free Git fundamentals course."),
  c("SQL for Data Analysis", "Udacity", "Data", "4wk", "Beginner", FREE, `${P.udacity("SQL")}`, "Free SQL course using Mode Analytics."),
  c("Intro to Deep Learning with PyTorch", "Udacity", "AI", "2mo", "Intermediate", FREE, `${P.udacity("PyTorch")}`, "Free PyTorch intro from Facebook AI."),
  c("Intro to Statistics", "Udacity", "Math", "8wk", "Beginner", FREE, `${P.udacity("Statistics")}`, "Stats fundamentals for data work."),
];

export const CATEGORIES = ["All", ...Array.from(new Set(COURSES.map((x) => x.category))).sort()];
export const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"] as const;
export const COSTS = ["All", "Fully Free", "Free Course, Paid Cert", "Free with Aid"] as const;
export const PROVIDERS = ["All", ...Array.from(new Set(COURSES.map((x) => x.provider))).sort()];
