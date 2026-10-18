/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ritik R Mohapatra | Data & Machine Learning Engineer",
  description:
    "Data and machine learning engineer, MSc Data Science with Distinction. I migrate HR data for 38 schools onto iTrent at Ark Schools using Azure Data Factory and Databricks. Before that I built pipelines at Deloitte that carried 22 million transaction records. On the side I build NLP systems, including a retrieval chatbot that runs on my own hardware.",
  og: {
    title: "Ritik R Mohapatra | Data & Machine Learning Engineer",
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
    "Data and machine learning engineer. MSc Data Science with Distinction. By day I migrate HR data for 38 schools onto iTrent at Ark Schools, working in Azure Data Factory and Databricks. Before that I built pipelines at Deloitte that carried 22 million transaction records. My evenings go on NLP: a retrieval chatbot I host on a Raspberry Pi at home, and language models written from scratch in NumPy and PyTorch.",
  resumeLink:
    "https://docs.google.com/document/d/1jWxeCl0QjrrbSc_T0HWQk9fK1kLJZKOd/edit?usp=drive_link&ouid=111289477077932397351&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/Foxtrot123-png/Ritik-Portfolio",
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
      title: "AI, Machine Learning & NLP",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I build retrieval systems from the ground up: TF-IDF, BM25 and embeddings, wired into a working RAG chatbot that I host myself",
        "⚡ Language models written from scratch in NumPy and PyTorch, starting from bigram counts and working up",
        "⚡ Multi-modal bias detection with BERT and ResNet-34, built for my MSc dissertation",
        "⚡ Certified in OCI Generative AI and OCI Data Science",
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
        "⚡ I am migrating HR data for 38 schools at Ark, built on Azure Data Factory, Databricks and DevOps",
        "⚡ At Deloitte I ran production pipelines that carried 22 million transaction records",
        "⚡ SQL and Python tuning that cut reporting time by 40%",
        "⚡ Anomaly checks that catch data quality problems before they reach the load",
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
          skillName: "Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            color: "#FF3621",
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
        "⚡ Focus on machine learning, AI and advanced data analytics.",
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
        "⚡ Founded the IEEE Student Branch so students could get closer to industry tech.",
        "⚡ Ran large workshops on embedded systems and IoT.",
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
    "Migration work at Ark Schools, data pipelines at Deloitte, and AI research on the side.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Migration Officer",
          company: "Ark Schools",
          logo_path: "ark.jpg",
          company_url: "https://arkonline.org/",
          duration: "May 2026 – Present",
          location: "London, UK",
          description:
            "I am migrating HR and payroll data for 38 schools from Cezanne into iTrent. The pipelines run on Azure Data Factory, Databricks and Azure DevOps, and every batch goes through validation checks before it loads.",
          color: "#8C1D40",
        },
        {
          title: "AI Research Affiliate (Advisory)",
          company: "CoreDefense",
          company_url: "",
          logo_path: "coredefense_logo.jpg",
          duration: "Nov 2025 – Present",
          location: "Remote",
          description:
            "I advise on agentic AI workflows that query documentation through RAG and check their own outputs. I also benchmark LLMs and work on cutting hallucination rates.",
          color: "#000000",
        },
        {
          title: "Data Scientist | Data Engineer",
          company: "Deloitte USI Ltd.",
          company_url: "https://www2.deloitte.com/",
          logo_path: "deloitte_logo.png",
          duration: "July 2022 – July 2024",
          location: "Hyderabad, India",
          description:
            "I built production pipelines that carried 22 million transaction records. I tuned SQL and Python jobs so reports ran 40% faster, and wrote anomaly checks that caught data problems before they reached the warehouse.",
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
            "I researched Zigbee and IoT protocols at an early stage and wrote up the findings for the senior engineering team, then presented them.",
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
            "While studying, I managed the training of 12 interns and taught maths and programming to students who could not afford tuition.",
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
            "I visited the shelter regularly to feed the animals and keep their enclosures clean.",
          color: "#005baa",
        },
        {
          title: "Global Youth Volunteer",
          company_url: "",
          logo_path: "GYV.jpg",
          duration: "April 2019 – December 2019",
          location: "Cuttack, Odisha",
          description:
            "I taught kids from underprivileged parts of society and built 10+ small projects with them using basic tools.",
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
    "Current work: Ritik.io, a retrieval chatbot I built and host on a Raspberry Pi 5, and a ladder of language models written from scratch in NumPy. From my MSc: a multi-modal bias detection system using BERT and ResNet-34.",
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
      "You can reach me on any of these and I usually reply within a day. Happy to talk about data engineering, machine learning, or anything you see on this site.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Write-ups from work and side projects. Coming soon.",
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