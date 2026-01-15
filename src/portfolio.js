/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ritik's Portfolio",
  description:
    "Machine Learning Engineer (MSc Distinction). I specialize in building scalable infrastructure and processing high-frequency transaction data to turn messy consumer data into reliable operational insights.",
  og: {
    title: "Ritik R Mohapatra's Portfolio",
    type: "website",
    url: "https://github.com/Foxtrot123-png",
  },
};

//Home Page
const greeting = {
  title: "Ritik R Mohapatra",
  logo_name: "RitikRMohapatra",
  nickname: "Kragster",
  subTitle:
    "Machine Learning Engineer (MSc Distinction). I specialize in building scalable infrastructure (Azure/Docker) and processing high-frequency transaction data. From migrating 22 million records at Deloitte to architecting Agentic AI workflows, I turn raw data into reliable operational insights.",
  resumeLink:
    "https://docs.google.com/document/d/1jWxeCl0QjrrbSc_T0HWQk9fK1kLJZKOd/edit?usp=drive_link&ouid=111289477077932397351&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/Foxtrot123-png/masterPortfolio#",
  githubProfile: "https://github.com/Foxtrot123-png",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Foxtrot123-png",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ritik-r-mohapatra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ritikmohapatra94@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI, Machine Learning & Generative AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Architecting Agentic AI workflows and RAG systems for autonomous documentation querying",
        "⚡ Developing Multi-Modal Bias Detection Systems using BERT and ResNet-34",
        "⚡ Certified in OCI Generative AI and OCI Data Science",
        "⚡ Benchmarking LLM performance and reducing hallucinations",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Data Engineering & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Engineered production-grade data pipelines for 22 million transaction records",
        "⚡ Optimizing SQL and Python scripts to reduce manual processing time by 40%",
        "⚡ Designing anomaly detection logic to identify data quality issues upstream",
        "⚡ Hands-on experience with Azure, Oracle Cloud, and CI/CD pipelines",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Oracle Cloud",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/cayoti",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ritikmohapatra94",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#C21325",
      },
      profileLink: "https://tryhackme.com/p/HiitsKrag",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Hertfordshire",
      subtitle: "MSc, Data Science",
      logo_path: "University_of_Hertfordshire_logo.png",
      alt_name: "University of Hertfordshire",
      duration: "Sept 2024 - Sept 2025",
      descriptions: [
        "⚡ Result: Distinction",
        "⚡ Focusing on Machine Learning, AI, and Advanced Data Analytics.",
      ],
      website_link: "https://www.herts.ac.uk/",
    },
    {
      title: "Veer Surendra Sai University of Technology",
      subtitle: "B. Tech, Electrical Engineering",
      logo_path: "VSSUT.png",
      alt_name: "VSSUT",
      duration: "July 2018 - May 2022",
      descriptions: [
        "⚡ Secured 8.02 CGPA.",
        "⚡ Founded the IEEE Student Branch to bridge the gap between academic theory and industry tech.",
        "⚡ Organized large-scale workshops on Embedded Systems and IoT.",
      ],
      website_link: "https://www.vssut.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI 2025 Generative AI Professional",
      subtitle: "- Oracle Cloud Infrastructure",
      logo_path: "oracle_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-W4BUALuV8UAO-sqHznCrAwSDvCkwMZh/view?usp=drive_link",
      alt_name: "Oracle",
      color_code: "#C74634",
    },
    {
      title: "GenAI Engineering & Fine-Tuning Transformers",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/M6JVZH5UWSLF",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Building Neural Networks with PyTorch",
      subtitle: "- Packt",
      logo_path: "packt_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/07634FYRGFVU",
      alt_name: "Packt",
      color_code: "#fd6f20",
    },
    {
      title: "Certified Network Security Specialist",
      subtitle: "- DefensityOne",
      logo_path: "icsi_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1PnzRvchCQ8BY5taol3ReaHX17B427jn4/view?usp=drivesdk",
      alt_name: "DefensityOne",
      color_code: "#00000099",
    },
    {
      title: "Dynamics 365 Fundamentals (CRM)",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1BwHopnPx_xRk-0C8-oDTlGZFjrKeTz8r/view?usp=drive_link",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "My career is defined by action. From managing high-frequency transaction data at Deloitte to architecting Agentic AI workflows at CoreDefense.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Research Affiliate (Advisory)",
          company: "CoreDefense",
          company_url: "",
          // Using google_logo.png because we know it exists.
          // Replace with "coredefense_logo.png" only AFTER you add that image to your folder.
          logo_path: "coredefense_logo.jpg",
          duration: "Nov 2025 – Present",
          location: "Remote",
          description:
            "Architecting Agentic AI workflows that autonomously query documentation (RAG) and validate outputs. Benchmarking LLM performance and reducing hallucinations.",
          color: "#000000",
        },
        {
          title: "Data Analyst / Data Engineer",
          company: "Deloitte USI Ltd.",
          company_url: "https://www2.deloitte.com/",
          logo_path: "deloitte_logo.png",
          duration: "July 2022 – July 2024",
          location: "Hyderabad, India",
          description:
            "Engineered production-grade data pipelines for 22 million transaction records. Optimized SQL queries to reduce reporting latency by 40% and designed anomaly detection logic ensuring 100% data integrity.",
          color: "#86BC25",
        },
      ],
    },
    {
      title: "Internships and Volunteerships",
      work: false,
      experiences: [
        {
          title: "Intern",
          company: "National Instruments",
          company_url:
            "https://www.ni.com/en.html?srsltid=AfmBOoqR_c9znVCaUvYTFeJ6VHYK3wFNkq3Q9bS4rK7IZkcrBd1DENFD",
          logo_path: "ni_logo.jpg",
          duration: "Jun 2019 - July 2019",
          location: "New Delhi, India",
          description:
            "Conducted early-stage research on Zigbee Technology and IoT protocols. Delivered comprehensive documentation and technical presentations to senior engineering teams.",
          color: "#00ADEF",
        },
        {
          title: "Tutor and Intern Manager",
          company: "SEW (Smart Educational Workshop)",
          company_url: "",
          logo_path: "sew_logo.jpg",
          duration: "Apr 2019 - Dec 2020",
          location: "Cuttack, Odisha",
          description:
            "Took on a management role while studying, overseeing the training and performance of 12+ interns. Simultaneously provided mathematics and programming tuition to underprivileged students.",
          color: "#000000",
        },
        {
          title: "Volunteer Animal Carer",
          company: "Blue Cross",
          company_url: "https://bluecrosshyd.org/",
          logo_path: "bluecross_logo.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Hyderabad, Telangana",
          description:
            "Regular visits and a love for animals contributed to the well-being of animals through regular visits and maintained health and surroundings with care.",
          color: "#005baa",
        },
        {
          title: "Global Youth Volunteer",
          company_url: "",
          logo_path: "GYV.jpg",
          duration: "April 2019 – December 2019",
          location: "Cuttack, Odisha",
          description:
            "Taught kids from unprivileged parts of society and successfully developed 10+ projects using basic tools.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Focusing on high-impact Technical Projects including: 1) A Multi-Modal Bias Detection System using BERT & ResNet-34, and 2) A Vulnerability Scanner for Google Chrome Extensions identifying SQLi and XSS threats.",
  avatar_image_path: "projects_image.svg",
};

// Publications Section
const publicationsHeader = {
  title: "Publications",
  description: "Research and technical articles.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PROFILKE_.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Science, Machine Learning, and Cloud Infrastructure.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.But its still not ready yet . Will be adding it shortly",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Stevenage, UK",
    locality: "Stevenage",
    country: "UK",
    region: "Hertfordshire",
    postalCode: "",
    streetAddress: "Stevenage",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Stevenage,+UK/",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "07553879935",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
