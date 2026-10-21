// Single source of truth for portfolio text. Content is drawn from public/documents/content.md.
// Edit this file to update the site; components only render what is defined here.

// ---------------------------------------------------------------------------
// CONTACT LINKS - replace the placeholder values below with your real details.
// ---------------------------------------------------------------------------
export const profile = {
  name: 'Jyothis Francis',
  headline: 'Senior Developer & Systems Analyst',
  subtitle:
    'Full-stack .NET, AI, Data, and Analytics solutions for enterprise and public-sector delivery, with 6+ years of Ontario Public Service experience.',
  email: 'jyothifr88@gmail.com', // TODO: insert your email address
  linkedin: 'https://www.linkedin.com/in/jyothisf/', // TODO: insert your LinkedIn URL
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const aboutParagraphs = [
  'Senior Developer and Systems Analyst with over 6 years of Ontario Public Service experience delivering full-stack applications, data analytics, and AI-driven solutions.',
  'I work across the stack, from ASP.NET Blazor, .NET Core, and SQL Server to Python, Databricks, and PySpark data pipelines, with Power BI reporting on top.',
  'My work covers requirements analysis, solution design, technical risk assessment, stakeholder engagement, and end-to-end delivery using Agile and Waterfall methodologies.',
]

export const skillGroups = [
  {
    title: 'Full-Stack Development',
    items: ['C#', '.NET Core', 'ASP.NET Blazor', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Entity Framework'],
  },
  {
    title: 'AI & Data Engineering',
    items: ['Python', 'PySpark', 'Databricks', 'AI model integration', 'Prompt engineering', 'IBM watsonx'],
  },
  {
    title: 'Analytics & Reporting',
    items: ['Power BI', 'Dashboard development', 'Data visualization', 'Microsoft Excel'],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'Data modeling', 'SQL', 'Stored procedures'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Azure DevOps', 'Azure Repos (Git)', 'CI/CD', 'SharePoint Online', 'Microsoft 365'],
  },
  {
    title: 'Delivery & Quality',
    items: [
      'Agile / Scrum',
      'Waterfall SDLC',
      'Requirements analysis',
      'Solution design',
      'Technical risk assessment',
      'Unit, integration, system, regression, and UAT testing',
    ],
  },
]

export const experience = [
  {
    role: 'Senior Developer',
    organization: 'Ministry of Public and Business Service Delivery and Procurement',
    period: 'Jan 2026 - Present',
    highlights: [
      'Design and develop Python- and PySpark-based data and AI solutions in Databricks that address operational needs.',
      'Perform data cleaning, transformation, validation, and preparation in Databricks to improve data quality and support analytics and downstream solution development.',
      'Integrate AI model endpoints to implement summarization functionality and other intelligent solution capabilities.',
      'Support data analytics initiatives using IBM watsonx capabilities, Databricks, and related tools to generate actionable business insights.',
      'Work with data stored in Databricks volumes to support data processing, analysis, and solution development.',
      'Contribute to Business Requirements Documentation (BRD), Technical Risk Assessments (TRA), development, testing, and iterative solution refinement.',
      'Manage and maintain prompts in Azure Repos using version control practices to support traceability and controlled changes.',
      'Collaborate with business stakeholders to clarify requirements, evaluate solution approaches, and align technical deliverables with business objectives.',
      'Support end-to-end delivery activities, including requirements analysis, development, testing, issue investigation, and ongoing enhancements.',
    ],
  },
  {
    role: 'Developer',
    organization: 'Ministry of the Solicitor General',
    period: 'Jan 2024 - Feb 2026',
    highlights: [
      'Design and develop full-stack web applications using ASP.NET Blazor, delivering robust front-end and back-end solutions.',
      'Lead and manage work items using Azure DevOps Boards; provide project status updates, ensure timely task completion, and maintain agile workflows.',
      'Manage codebase in Azure Repos with regular commits, pull requests, and version control practices.',
      'Gather business requirements and conduct feedback sessions during regular client meetings, including on-site interactions at client locations.',
      'Perform SQL Server database design, query optimization, and troubleshooting using DB Forge Studio.',
      'Execute unit testing, integration testing, and coordinate deployment of applications to different environments.',
      'Manage SharePoint content by updating pages, posting new documents, and resolving external/internal user access issues; coordinate with external municipal clients for resolving their issues.',
      'Provide ongoing system support, issue resolution, and documentation of technical specifications.',
    ],
  },
  {
    role: 'Application Analyst Developer',
    organization: 'Ontario Treasury Board Secretariat',
    project: 'AdPro-OATS Replacement Implementation in Cloud (Azure)',
    period: 'Jan 2020 - Jan 2024',
    highlights: [
      'Designed features using OutSystems Reactive Web and Case Management Framework.',
      'Developed custom .NET (C#) extensions integrated with OutSystems.',
      'Wrote complex SQL queries for data management and analysis (SQL Server).',
      'Consumed REST APIs from Azure Logic Apps and assisted in building ASP.NET Core OData APIs hosted in Azure Web App.',
      'Developed interactive Power BI dashboards and reports to visualize operational, business, and data-quality metrics for stakeholders.',
      'Conducted unit testing and collaborated on project delivery using Agile methodology.',
      'Engaged with project managers and BAs to gather requirements and propose cost-effective, scalable technical solutions.',
      'Led UI/UX design discussions with stakeholders to align with user needs.',
    ],
  },
  {
    role: 'Application Analyst Developer',
    organization: 'Ontario Treasury Board Secretariat',
    project: 'OntTax Benefit Applications',
    period: 'Jan 2020 - Jan 2024',
    highlights: [
      'Assisted with the design, development, configuration, and implementation of Ontario tax benefit application change requests and enhancements.',
      'Implemented configuration changes for OntTax to set up alerts for web service errors.',
      'Analyzed technical issues, debugged code, and provided technical solutions.',
      'Managed incidents and configuration changes using the FCR tool.',
    ],
  },
  {
    role: 'Lecturer',
    organization: 'Kannur University',
    period: 'June 2010 - March 2014',
    highlights: [
      'Taught Electrical classes for graduate students.',
      'Guided graduate projects and seminars.',
    ],
  },
]

// Representative projects. These are illustrative summaries of work types, not public projects,
// and contain no confidential or client-specific details.
export const projects = [
  {
    title: 'AI-Enabled Data Solutions',
    category: 'Representative project',
    summary:
      'Python and PySpark solutions in Databricks that prepare and validate data, integrate AI model endpoints for summarization, and use IBM watsonx to support insight generation.',
    tech: ['Python', 'PySpark', 'Databricks', 'IBM watsonx', 'AI model integration', 'Azure Repos'],
    // TODO: add a public link (e.g. GitHub repo or demo) here, or leave null to hide the button.
    link: null,
  },
  {
    title: 'Business Intelligence & Reporting',
    category: 'Representative project',
    summary:
      'Interactive Power BI dashboards and reports that visualize operational, business, and data-quality metrics for stakeholders, with supporting SQL Server data analysis.',
    tech: ['Power BI', 'SQL Server', 'Microsoft Excel', 'Data visualization', 'KPI reporting'],
    // TODO: add a public link (e.g. GitHub repo or demo) here, or leave null to hide the button.
    link: null,
  },
  {
    title: 'Enterprise Full-Stack Development',
    category: 'Representative project',
    summary:
      'ASP.NET Blazor web applications with REST API integration, SQL Server database design, and Azure DevOps-managed delivery, including unit and integration testing and environment deployments.',
    tech: ['ASP.NET Blazor', '.NET Core', 'C#', 'REST APIs', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
    // TODO: add a public link (e.g. GitHub repo or demo) here, or leave null to hide the button.
    link: null,
  },
]

export const certifications = [
  { name: 'Microsoft Certified: Azure AI Fundamentals', date: 'May 2026' },
  { name: 'Databricks Certified Generative AI Engineer Associate', date: 'Sept 2026' },
]

export const education = [
  {
    credential: 'Diploma in Software Engineering',
    institution: 'Centennial College, Toronto, ON',
    period: 'Sept 2018 - Dec 2020',
    detail: 'GPA 4.1 / 4.5',
  },
  {
    credential: 'Bachelor of Engineering, Electrical and Electronics Engineering',
    institution: 'Calicut University, Kerala',
    period: 'June 2006 - May 2010',
    detail: 'Graduated with Honors',
  },
]

export const awards = [
  'Academics and Leadership Award 2019, Centennial College',
]
