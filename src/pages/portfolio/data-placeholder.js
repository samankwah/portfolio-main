import project1 from "../../assets/images/project 1.png";
import project2 from "../../assets/images/project 2.png";
import project4 from "../../assets/images/project 4.png";
import project5 from "../../assets/images/project 5.png";
import project6 from "../../assets/images/project 6.png";
import ceo from "../../assets/images/ceo.jpg";
import knust from "../../assets/images/knust.png";
import Kumasi from "../../assets/images/Kumasi_high_school_crest.jpg";
import faith from "../../assets/images/faith-high-school.webp";

export const future = {
  firstname: "Stephen",
  lastname: "Amankwah",
  username: "stephen amankwah",
  email: "0269642201a@gmail.com",
  password: "$2b$12$lEDxYwgJG31WyxGK3USgXehPywhZBSyD9PEf1WfBYxlZUUsvDztZa",
  education: [
    {
      schoolName: "Kwame Nkrumah University of Science & Technology",
      location: "Kumasi, Ghana",
      description:
        "A leading science and technology university in West Africa, known for its research and innovation.",
      program: "Bachelor of Science in Computer Science",
      image: knust,
      // grade: "Second Class Honors",
      startDate: "September 2015",
      endDate: "August 2026",
    },
    {
      schoolName: "Kumasi High School",
      location: "Kumasi, Ghana",
      description:
        "One of the top secondary schools in Ghana, offering a rigorous academic curriculum.",
      program: "General Science",
      image: Kumasi,
      grade: "WASSCE Certificate",
      startDate: "September 2008",
      endDate: "June 2013",
    },
    {
      schoolName: "Faith High School",
      location: "Kumasi, Ghana",
      description:
        "A well-regarded high school providing foundational education and leadership training.",
      program: "Junior Secondary School",
      image: faith,
      grade: "BECE Certificate",
      startDate: "September 2006",
      endDate: "June 2008",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      levelOfProficiency: "Beginner",
      createdAt: "2024-07-22T23:37:06.652Z",
      updatedAt: "2024-07-22T23:37:06.652Z",
      id: "669eed22940cc069e23c9275",
    },
    {
      name: "CSS",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-22T23:37:55.770Z",
      updatedAt: "2024-07-22T23:37:55.770Z",
      id: "669eed53940cc069e23c92a7",
    },
    {
      name: "HTML",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-22T23:39:28.572Z",
      updatedAt: "2024-07-22T23:39:28.572Z",
      id: "669eedb0940cc069e23c9321",
    },
    {
      name: "ReactJS",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-26T18:16:49.877Z",
      updatedAt: "2024-07-26T18:16:49.877Z",
      id: "66a3e811205c5257ef1dbef0",
    },
    {
      name: "TailwindCSS",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-26T18:16:49.877Z",
      updatedAt: "2024-07-26T18:16:49.877Z",
      id: "66a3e811205c5257ef1dbef0",
    },
    {
      name: "GitHub",
      levelOfProficiency: "Expert",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
    {
      name: "Git",
      levelOfProficiency: "Intermediate",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
    {
      name: "SASS",
      levelOfProficiency: "Intermediate",
      createdAt: "2024-08-08T22:41:11.366Z",
      updatedAt: "2024-08-08T22:41:11.366Z",
      id: "66b5498757b9b768e0628886",
    },
    {
      name: "WordPress",
      levelOfProficiency: "Expert",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
  ],
  achievements: [
    {
      award: "Dean's List",
      description:
        "Awarded for academic excellence by maintaining a GPA of 3.8 or higher for two consecutive semesters.",
      // image: "path/to/deans-list-certificate.png",
      date: "June 2024",
      nameOfInstitution: "Kwame Nkrumah University of Science & Technology",
    },
    {
      award: "Best Final Year Project",
      description:
        "Recognized as the best final year project in the Computer Science department for developing an AI-powered chatbot.",
      // image: "path/to/project-award.png",
      date: "July 2026",
      nameOfInstitution: "Kwame Nkrumah University of Science & Technology",
    },
    {
      award: "Hackathon Winner",
      description:
        "Won first place in the annual demo hackathon by leading a team to develop a mobile application for community health monitoring.",
      // image: "path/to/hackathon-award.png",
      date: "September 2024",
      nameOfInstitution: "Kwame Nkrumah University of Science & Technology",
    },
  ],

  projects: [
    {
      projectName: "AgroPulse",
      description:
        "Created a website that provides real-time climate data and weather forecasts using integrated APIs. Built with ReactJS, Tailwind CSS and JavaScript, it features interactive maps and visualizations to make climate information accessible.",
      contribution:
        "Designed the NLP model, integrated it with a backend API, and deployed the solution on a cloud platform.",
      skills: "Express, Node.js, HTML, JavaScript, CSS",
      link: "https://agropulse.netlify.app/",
      image: project1,
      nameOfInstitution: "AgroPulse",
      startDate: "January 2019",
      endDate: "June 2019",
    },
    {
      projectName: "PortiBuilder",
      description:
        "Developed a customizable portfolio site to showcase users work. Key features include project galleries and a responsive design for all devices. Built with React, Tailwind CSS and Firebase for smooth user experience and data storage.",
      contribution:
        "Led the development team, implemented key features, and coordinated with construction professionals for testing.",
      skills: "ReactJS, Express, Node.js",
      link: "https://portibuilder.netlify.app/",
      image: project2,
      nameOfInstitution: "PortiBuilder",
      startDate: "July 2018",
      endDate: "September 2018",
    },
    {
      projectName: "Tukio",
      description:
        "Created an online platform for event management, enabling users to view and filter upcoming events based on various categories. Admins have the ability to add, edit, and delete event details as needed. This allows users to experience culture like never before, driven by a passion for African entertainment.",
      contribution:
        "Developed the backend infrastructure, managed the database, and implemented video streaming capabilities.",
      skills: "Node.js, MongoDB, Express",
      link: "https://tukioevents.netlify.app/",
      image: project4,
      nameOfInstitution: "Tukio Events",
      startDate: "March 2020",
      endDate: "August 2020",
    },
    {
      projectName: "DonaTrak",
      description:
        "Built a site for users to track their charitable donations and set goals. Key focus areas were secure data management and a simple, clear interface. Technologies used include ReactJS, Tailwind CSS, JavaScript and a secure back-end database.",
      contribution:
        "Developed the backend infrastructure, managed the database, and implemented video streaming capabilities.",
      skills: "Node.js, ReactJS,  MongoDB, Express",
      link: "https://donatrak.netlify.app/",
      image: project5,
      nameOfInstitution: "DonaTrak",
      startDate: "March 2020",
      endDate: "August 2020",
    },
    {
      projectName: "PAGÈS",
      description:
        "PAGÈS is an AI chatbot that provides real-time responses to user questions. It can understand and clarify queries, making conversations more interactive and helpful. This project highlights my skills in AI development and chatbot integration.",
      contribution:
        "Designed the frontend, integrated a payment gateway, and optimized the site for performance and security.",
      skills: "React, Node.js, Stripe API",
      link: "https://pages-client.netlify.app/",
      image: project6,
      nameOfInstitution: "PAGÈS",
      startDate: "October 2019",
      endDate: "January 2020",
    },
  ],

  volunteering: [
    {
      organisation: "ICRISAT",
      description: "I'm very good at it",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      startDate: "2024-07-05",
      endDate: "2024-08-11",
      role: "Crop Modeler",
      responsibility:
        "Running crop simulation models to predict yield outcomes based on climate and soil data, analyzing model outputs for accuracy, refining parameters to improve forecasts and collaborating with agronomists to provide actionable insights for farmers and policymakers.",
      location: "Accra",
      projectName: "Crop Yield Forecast",
      createdAt: "2024-07-28T23:13:59.963Z",
      updatedAt: "2024-07-28T23:13:59.963Z",
      id: "66a6d0b7d972de20873df27a",
    },
    {
      organisation: "FSRP",
      description: "I'm very good at it",
      skills:
        "Crop Calender and Advisory, Crop modeling, Seasonal Forecasting, Web Development",
      startDate: "2024-08-12",
      endDate: "2024-08-11",
      role: "Climate Data Analyst",
      responsibility:
        "Collect all meteorological data needed for the climate/weather cropping calendar and perform pilot analysis with past climate data (Agrometeorological Seasonal Outlook- 2020-2023) on the chosen crops and livestock the team will be working with.",
      location: "Accra",
      projectName: "Agro-Climatic Information Services",
      createdAt: "2024-07-28T23:13:59.963Z",
      updatedAt: "2024-07-28T23:13:59.963Z",
      id: "66a6d0b7d972de20873df27a",
    },
  ],
  experience: [
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Ideated detailed and meaningful statistical analyses by using data on precipitation, humidity, wind and sunshine parameters to derive evapotranspiration and solar radiation dataset.",
      location: "Accra, Ghana",
      startDate: "2019-07-28",
      endDate: "2023-09-30",
      createdAt: "2024-07-23T15:04:33.561Z",
      updatedAt: "2024-07-23T15:04:33.561Z",
      id: "669fc681885925ada2d4d18f",
    },
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Used advanced computer systems and software tools to analyze weather data, resulting in highly accurate weather forecasts and sophisticated models.",
      location: "Accra, Ghana",
      startDate: "2024-07-27",
      endDate: "2024-07-21",
      createdAt: "2024-07-23T15:04:06.471Z",
      updatedAt: "2024-07-23T15:04:06.471Z",
      id: "669fc666885925ada2d4d18a",
    },
  ],
  createdAt: "2024-07-17T20:17:32.762Z",
  updatedAt: "2024-08-08T22:44:59.183Z",
  userProfile: {
    profilePicture: ceo,
    location: "Addington Park",
    maritalStatus: "single",
    sex: "male",
    bio: "I'm the hottest web dev in africa at the moment",
    about:
      "A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product",
    contact: "0240298910",
    resume: "secure/uploads/15218",
    githubLink: "https://github.com/samankwah",
    linkedinLink: "http://linkedin.com/in/stephenamankwah ",
    twitterLink: "https://x.com/1amankwa",
    createdAt: "2024-07-22T23:36:18.298Z",
    updatedAt: "2024-07-22T23:36:18.298Z",
    id: "669eecf2940cc069e23c9254",
  },
  id: "669826dc40ae7cda2cd3cb6a",
};
