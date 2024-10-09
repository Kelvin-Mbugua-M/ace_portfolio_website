import { BsAndroid2, BsBootstrapFill } from "react-icons/bs";
import { DiCss3, DiNodejs } from "react-icons/di";
import { FaFigma, FaHtml5, FaReact } from "react-icons/fa6";
import { GiMongolia } from "react-icons/gi";
import { MdJavascript } from "react-icons/md";
import {
  SiCss3,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbSql } from "react-icons/tb";
import galImage from "./files/indoor-shot-attractive-dark-skinned-girl-with-toothy-smile.png";
import imageGal from "./files/sassy-great-looking-african-american-girl-wearing-sunglasses.png";
import africanMan from "./files/african-man.png";
const profileData = [
  {
    data: {
      name: "Kelvin Mbugua",
      title: "Junior full stack developer",
      image: africanMan,
      experience: "2 years",
      strengths: [
        <DiNodejs />,
        <SiExpress />,
        <FaReact />,
        <TbBrandReactNative />,
        <SiNextdotjs />,
        <SiTailwindcss />,
        <MdJavascript />,
        <FaHtml5 />,
        <DiCss3 />,
        <BsBootstrapFill />,
        <SiCss3 />,
        <FaFigma />,
        <GiMongolia />,
        <TbSql />,
        <TbApi />,
      ],
    },
  },
  {
    data: {
      name: "Idk Mulandi",
      title: "Front end developer",
      image: imageGal,
      experience: "1.5 years",
      strengths: [
        <FaFigma />,
        <FaReact />,
        <DiNodejs />,
        <SiExpress />,
        <MdJavascript />,
        <DiCss3 />,
        <FaHtml5 />,
      ],
    },
  },
  {
    data: {
      name: "Idk Willy",
      title: "UI/UX ,back-end developer",
      image: galImage,
      experience: "1.5 years",
      strengths: [
        <FaFigma />,
        <FaReact />,
        <DiNodejs />,
        <SiExpress />,
        <MdJavascript />,
        <DiCss3 />,
        <FaHtml5 />,
      ],
    },
  },
  {
    data: {
      name: "Idk Madam",
      title: "UI Designer",
      image: imageGal,
      experience: "1.5 years",
      strengths: [
        <FaFigma />,
        <FaReact />,
        <DiNodejs />,
        <SiExpress />,
        <MdJavascript />,
        <DiCss3 />,
        <FaHtml5 />,
      ],
    },
  },
];
const projectsData = [
  {
    data: {
      name: "Laroft",
      state: "development",
      organisation: "Larvey",
      techStack: [
        <SiNextdotjs />,
        <SiTailwindcss />,
        <SiRedux />,
        <SiExpress />,
        <TbSql />,
        <TbApi />,
      ],
    },
  },
  {
    data: {
      name: "wasome e-Learning",
      state: "development",
      organisation: "GNU",
      techStack: [
        <SiNextdotjs />,
        <SiTailwindcss />,
        <SiRedux />,
        <SiExpress />,
        <BsAndroid2 />,
        <TbSql />,
        <TbApi />,
      ],
    },
  },
];
const serviceData = [
  {
    umbrellaName: "Web Development",
    umbrellaChildren: {
      services: [
        {
          service: "UI/UX designs",
          description:
            "Creating intuitive and visually appealing designs that enhance user experience and engagement.",
        },
        {
          service: "SPA site development",
          description:
            "Building fast, dynamic single-page applications using modern JavaScript frameworks like React, Angular, or Vue.",
        },
        {
          service: "SEO integration",
          description:
            "Optimizing websites for search engines to improve visibility and organic traffic through on-page and technical SEO strategies.",
        },
      ],
      footNote:
        "All web development services are responsive and optimized for both desktop and mobile devices.",
    },
    sideNote:
      "Specializing in custom websites, e-commerce solutions, and content management systems.",
  },
  {
    umbrellaName: "Android Application Development",
    umbrellaChildren: {
      services: [
        {
          service: "Native Android App Development",
          description:
            "Developing high-performance, native Android apps tailored to your business needs using Kotlin and Java.",
        },
        {
          service: "Cross-platform App Development",
          description:
            "Building Android apps that run seamlessly across multiple platforms using frameworks like Flutter or React Native.",
        },
        {
          service: "App Store Optimization (ASO)",
          description:
            "Improving app visibility on the Google Play Store to boost downloads and user engagement.",
        },
      ],
      footNote:
        "Apps are developed with a focus on scalability, performance, and security.",
    },
    sideNote:
      "We ensure apps are compatible with the latest Android versions and devices.",
  },
  {
    umbrellaName: "iOS Application Development",
    umbrellaChildren: {
      services: [
        {
          service: "Native iOS App Development",
          description:
            "Creating high-performance iOS applications using Swift and Objective-C, tailored to Apple’s ecosystem.",
        },
        {
          service: "Cross-platform iOS App Development",
          description:
            "Developing iOS apps that work across platforms using frameworks like Flutter or React Native.",
        },
        {
          service: "App Store Optimization (ASO)",
          description:
            "Boosting app visibility on the Apple App Store to increase user downloads and engagement.",
        },
      ],
      footNote:
        "iOS apps are developed with focus on performance, security, and compatibility with the latest devices and iOS versions.",
    },
    sideNote:
      "We follow Apple's best practices to ensure seamless user experiences.",
  },
  {
    umbrellaName: "Cloud Solutions",
    umbrellaChildren: {
      services: [
        {
          service: "Cloud Infrastructure Setup",
          description:
            "Setting up and managing cloud infrastructure using providers like AWS, Azure, and Google Cloud.",
        },
        {
          service: "Cloud Application Development",
          description:
            "Building scalable cloud-based applications that allow for flexible growth and seamless user access.",
        },
        {
          service: "Cloud Migration",
          description:
            "Helping businesses migrate their legacy systems to the cloud securely and efficiently.",
        },
      ],
      footNote:
        "We ensure high availability, security, and cost-efficiency in all cloud services.",
    },
    sideNote: "Expertise in hybrid cloud setups and multi-cloud strategies.",
  },
  {
    umbrellaName: "Digital Marketing",
    umbrellaChildren: {
      services: [
        {
          service: "Search Engine Marketing (SEM)",
          description:
            "Running paid advertising campaigns on Google and Bing to drive traffic and increase conversions.",
        },
        {
          service: "Social Media Marketing",
          description:
            "Managing targeted social media campaigns across platforms like Facebook, Instagram, and LinkedIn.",
        },
        {
          service: "Email Marketing",
          description:
            "Designing and executing email marketing campaigns to engage customers and drive sales.",
        },
      ],
      footNote:
        "We leverage data-driven strategies to maximize ROI on all digital marketing efforts.",
    },
    sideNote: "Tailored marketing solutions for businesses of all sizes.",
  },
  {
    umbrellaName: "DevOps and Automation",
    umbrellaChildren: {
      services: [
        {
          service: "CI/CD Pipeline Setup",
          description:
            "Implementing Continuous Integration and Continuous Deployment pipelines for faster and more reliable software delivery.",
        },
        {
          service: "Infrastructure as Code (IaC)",
          description:
            "Automating infrastructure provisioning and management using tools like Terraform and Ansible.",
        },
        {
          service: "Monitoring and Performance Optimization",
          description:
            "Setting up monitoring solutions to track application performance and optimize resource usage.",
        },
      ],
      footNote:
        "All DevOps services focus on enhancing development speed, stability, and collaboration.",
    },
    sideNote:
      "We help streamline operations through automation and modern DevOps practices.",
  },
  {
    umbrellaName: "E-commerce Solutions",
    umbrellaChildren: {
      services: [
        {
          service: "E-commerce Platform Development",
          description:
            "Developing custom e-commerce websites and online stores using platforms like Shopify, WooCommerce, and Magento.",
        },
        {
          service: "Payment Gateway Integration",
          description:
            "Integrating secure payment gateways like Stripe, PayPal, and Square into your online store.",
        },
        {
          service: "Inventory and Order Management Solutions",
          description:
            "Building custom solutions for efficient product inventory and order management.",
        },
      ],
      footNote:
        "We ensure seamless shopping experiences with a focus on security and scalability.",
    },
    sideNote:
      "We specialize in custom e-commerce solutions to meet the unique needs of your business.",
  },
];

const servicesGeneral = [
  "Custom Web Development Services",
  "E-commerce Website Design and Development",
  "Search Engine Optimization (SEO) and Digital Marketing Solutions",
  "UI/UX Design and Frontend Development",
  "AI Integration and Automation Services",
  "Custom Chatbot Development for Business",
  "Android App Development and Custom Mobile Solutions",
];
const sdlcData = {
  aboutUs: {
    welcomeMessage:
      "Welcome to ace developers, your partner in custom website development and innovative software solutions.",
    description:
      "We specialize in creating tailored digital experiences that drive business growth and enhance user engagement. Our systematic approach ensures quality and efficiency at every stage of the development process.",
      phases: [
        {
          phase: "Discovery",
          description:
            "In the Discovery phase, we thoroughly analyze your business needs and project goals to create a tailored development strategy. This critical step ensures we fully understand your vision and objectives, paving the way for a customized software solution that aligns with your business growth and user engagement goals."
        },
        {
          phase: "Planning",
          description:
            "During the Planning phase, we develop a detailed roadmap outlining the project timeline, resources, and deliverables. This comprehensive project plan ensures every aspect of your website or software development process is clearly defined, maximizing efficiency and ensuring the solution is scalable and aligned with your long-term business objectives."
        },
        {
          phase: "Design",
          description:
            "Our Design phase focuses on crafting visually appealing, user-centric interfaces that improve engagement and deliver an intuitive user experience. By integrating modern design principles, we create responsive and aesthetically pleasing layouts that captivate your audience and reflect your brand, helping to enhance online visibility and customer satisfaction."
        },
        {
          phase: "Development",
          description:
            "In the Development phase, our expert developers build robust, scalable software solutions that meet your current needs and future growth. We prioritize coding best practices, security, and performance to create high-quality software that drives business success, ensuring a seamless user experience across all platforms and devices."
        },
        {
          phase: "Testing",
          description:
            "Our Testing phase includes rigorous quality assurance to ensure your software or website performs flawlessly. We conduct comprehensive testing for functionality, security, performance, and compatibility, identifying and resolving any issues before launch. This ensures your digital solution delivers a reliable, fast, and secure experience for users."
        },
        {
          phase: "Launch",
          description:
            "In the Launch phase, we seamlessly deploy your software or website, ensuring a smooth transition to the live environment. We handle all the technical aspects, including final optimizations and performance checks, to ensure your platform is fully operational and ready for users, with minimal downtime and maximum impact."
        },
        {
          phase: "Support",
          description:
            "Our Support phase ensures long-term success by providing continuous maintenance, updates, and troubleshooting for your software or website. We are dedicated to keeping your platform up-to-date with the latest features and technologies, ensuring optimal performance, security, and user satisfaction as your business evolves."
        }
      ],
    commitment:
      "At ace devs, we are committed to delivering professional web development and software solutions that drive results. Contact us today to discuss how we can help you achieve digital success!",
  },
  customerReviews: [
    {
      name: "Jane D.",
      review:
        "Working with ace developers transformed our online presence! Their attention to detail and understanding of our needs were impressive.",
        star: 3 ,
    },
    {
      name: "Mark S.",
      review:
        "The team delivered on time and exceeded our expectations. Our new software solution is robust and user-friendly!",
        star:5,
    },
    {
      name: "Linda T.",
      review:
        "I highly recommend ace developers. Their systematic approach made the development process seamless and enjoyable.",
        star:5,

    },
    {
      name: "David R.",
      review:
        "Excellent support and maintenance! The team is always quick to respond to our questions and provides effective solutions.",
        star:4 ,
    }
  ]
};


export default profileData;
export { projectsData, serviceData, servicesGeneral, sdlcData };
