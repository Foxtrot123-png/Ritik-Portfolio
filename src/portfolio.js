/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ritik's Portfolio",
  description:
    "Data Developer. AI Researcher. Builder. I bridge the gap between complex data and real-world solutions. With experience in CRM development and AI research, I turn curiosity into code and raw data into actionable insights.",
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
    "Data Developer. AI Researcher. Builder. I bridge the gap between complex data and real-world solutions. With experience in CRM development and AI research, I turn curiosity into code and raw data into actionable insights.",
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
    link: "mailto:ritikmohapatra98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
  /*
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "AI, Machine Learning & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and deploying Machine Learning models and Generative AI applications",
        "⚡ Certified in OCI Generative AI and OCI Data Science",
        "⚡ Analysis and cleaning of data using Power BI and Tableau",
        "⚡ Integration of Python scripts for complex data processing and automation",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-src/assets/images/python.jpg",
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
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
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
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "CRM & Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creative website plugin development using C#, HTML, and JavaScript ",
        "⚡ Designing workflows, views, and forms in Microsoft Dynamics 365 CRM ",
        "⚡ Migrated 10 million data directly to Production server using Python in SSIS packages ",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Microsoft Dynamics",
          fontAwesomeClassname: "logos-src/assets/images/msd365.jpg",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Hardware, IoT & Cybersecurity",
      fileName: "CloudInfraImg", 
      skills: [
        "⚡ Hands-on experience with Zigbee Technology and Embedded System Design (Tiva) ",
        "⚡ Certified Network Security Specialist (CNSS) with a passion for ethical hacking ",
        "⚡ Strong Electrical Engineering foundation applied to IoT projects ",
      ],
      softwareSkills: [
        {
          skillName: "C++", // Standard for Hardware/Arduino
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Linux", 
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#C21325", 
      },
      profileLink: "https://tryhackme.com/p/HiitsKrag", 
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
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/cayoti",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Veer Surendra Sai University of Technology",
      subtitle: "B. Tech, Electrical Engineering",
      logo_path: "VSSUT.png", 
      alt_name: "VSSUT",
      duration: "May 2018 - May 2022",
      descriptions: [
        "⚡ Secured 8.02 CGPA while simultaneously managing student organizations.",
        "⚡ Founded the IEEE Student Branch at VSSUT (Kolkata Chapter) to bridge the gap between academic theory and industry tech.",
        "⚡ Served as Managerial & Technical Head, organizing large-scale workshops on Embedded Systems and IoT for peers[cite: 58, 59].",
      ],
      website_link: "https://www.vssut.ac.in/",
    },
    {
      title: "University of Hertfordshire",
      subtitle: "MSc, Data Science",
      logo_path: "University_of_Hertfordshire_logo.png",
      alt_name: "University of Hertfordshire",
      duration: "Sept 2024 - Sept 2025",
      descriptions: [
        "⚡ Pursuing Master's in Data Science, Hatfield, UK.",
        "⚡ Focusing on Machine Learning, AI, and Advanced Data Analytics.",],
      website_link: "https://www.herts.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI 2025 Generative AI Professional",
      subtitle: "- Oracle Cloud Infrastructure",
      logo_path: "oracle_logo.png",
      certificate_link: "https://drive.google.com/file/d/1-W4BUALuV8UAO-sqHznCrAwSDvCkwMZh/view?usp=drive_link",
      alt_name: "Oracle",
      color_code: "#C74634",
    },
    {
      title: "GenAI Engineering & Fine-Tuning Transformers",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/records/M6JVZH5UWSLF",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Building Neural Networks with PyTorch",
      subtitle: "- Packt",
      logo_path: "packt_logo.png", 
      certificate_link: "https://www.coursera.org/account/accomplishments/records/07634FYRGFVU",
      alt_name: "Packt",
      color_code: "#fd6f20",
    },
    {
      title: "Generative AI Language Modeling",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/records/D47QMIXYLFV4",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Dynamics 365 Fundamentals (CRM)",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://drive.google.com/file/d/1BwHopnPx_xRk-0C8-oDTlGZFjrKeTz8r/view?usp=drive_link",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Certified Network Security Specialist",
      subtitle: "- DefensityOne",
      logo_path: "icsi_logo.png", 
      certificate_link: "https://drive.google.com/file/d/1PnzRvchCQ8BY5taol3ReaHX17B427jn4/view?usp=drivesdk",
      alt_name: "DefensityOne",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
"My career is defined by action. From managing intern teams as a student to migrating 22 million records at Deloitte, I focus on delivering tangible results.",  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data and CRM Developer",
          company: "Deloitte USI Ltd.",
          company_url: "https://www2.deloitte.com/",
          logo_path: "deloitte_logo.png", // Ensure this image is in your assets
          duration: "July 2022 – July 2024",
          location: "Hyderabad, India",
          description:
            "Applied advanced C# methodologies to migrate 22 million data records to Microsoft Dataverse with 90% accuracy. Migrated 10 million data records directly to Production using Python in SSIS packages.",
          color: "#86BC25",
        },
      ],
    },
    {
      title: "Internships and Volunteerships",
      experiences: [
        {
          title: "Intern",
          company: "National Instruments",
          company_url: "https://www.ni.com/en.html?srsltid=AfmBOoqR_c9znVCaUvYTFeJ6VHYK3wFNkq3Q9bS4rK7IZkcrBd1DENFD",
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
          title: "Global Youth Volunteer",
          company: "Intel Indexer LLC",
          company_url:
            "",
          logo_path: "GYV.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        {
          title: "Volunteer Animal Carer",
          company: "Blue Cross",
          company_url: "https://bluecrosshyd.org/",
          logo_path: "bluecross_logo.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Hyderabad, Telangana",
          description:
            "Regular visits and a love for animals helped in maintaining the health and the surroundings of the animals.",
          color: "#005baa",
        }
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
"My projects range from large-scale industrial data migrations to automated security hardware. I combine coding skills with practical implementation.",  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PROFILKE_.jpg",
    description:
"I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Science, Machine Learning, CRM Development, and Cloud Infrastructure.",  },
  blogSection: {
    title: "Blogs",
    subtitle:
      
    "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",    
link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "26 Brickdale House, Stevenage, UK",
    locality: "Stevenage",
    country: "UK",
    region: "Hertfordshire",
    postalCode: "", // Optional
    streetAddress: "26 Brickdale House",
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
