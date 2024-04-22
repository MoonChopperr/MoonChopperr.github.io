import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.gif";
import work2 from "../assets/images/work_images/2.gif";
import work3 from "../assets/images/work_images/3.gif";

// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
// import iconPhone from "../assets/images/contact/phone-call 1.png";
// import iconEmail from "../assets/images/contact/email 1.png";
// import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Full Stack",
      title: "Ice",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      github: "https://github.com/MoonChopperr/Ice",
      ghLinkText: "Ice",
      langages: "JavaScript, Python, React, Redux",
      link: "https://a-a-capstone.onrender.com/",
      linkText: "www.ice.com",
      description:
        "Full stack small scale clone of Steam. Users are able to browser a collection of games, publish their own games, add games to their cart or wishlist and seamlessly checkout to add their purchased games to their person library. Additionally users can leave reviews on purchased games and rate reviews based on how funny or helpful they were."
    },
    {
      id: "2",
      tag: "Full Stack",
      title: "Munch",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      github: "https://github.com/JohnnyHa1017/munch",
      ghLinkText: "Munch",
      langages: "JavaScript, Python, React, Redux",
      link: "https://aa-munch.onrender.com/",
      linkText: "www.Munch.com",
      description:
        "Full stack small scale clone of yelp. My First group project utilizing flask for the backend after learning python in a week. Users are able to create a menu, restaurant, post reviews, and establish amenities"
      },
    {
      id: "3",
      tag: "Full Stack",
      title: "EldenLodges",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      github: "https://github.com/MoonChopperr/EldenLodge",
      ghLinkText: "EldenLodges",
      langages: "JavaScript, Express, React, Redux",
      link: "https://ground-dnd.onrender.com/",
      linkText: "www.EldenLodges.com",
      description:
        "Full stack small scale clone of Airbnb.My first project during my time at app academy. Inspired by the theme of the critically acclaimed game 'Elden Ring'. Similar to Airbnb, users can create listings for unique spots and provide reviews."
      },
  ];
  const [data, setData] = useState(workItems);

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "Leadership",
      des: "Multiple years of leading teams usually encompassing of atleast 4 others within a competitive environment.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon2,
      title: "UI/UX Design",
      des: "Understanding what makes a good user experience from personal experience spanning over 5 years of seeing how games I worked in the past change over time",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "3",
      icon: icon4,
      title: "Database Design",
      des: "Designing databases with scalability in mind to handle further implementation in the future whether it be a new features or for horizontal scaling",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "4",
      icon: icon5,
      title: "Restful API",
      des: "Implmenting RESTful API with clear, resource-oriented URLs, utilizing appropriate HTTP methods and status codes for CRUD operations to ensure predictability and ease of understanding",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  // const educationArray = [
  //   {
  //     id: 1,
  //     date: "2023 - 2024",
  //     title: "App Academy",
  //     place: "App Academy",
  //     bg: "#FFF4F4",
  //   },
  // ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2022-2023",
      title: "Head Coach",
      place: "OverActive Media",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2020-2022",
      title: "Head Coach",
      place: "Cloud9",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "2018-2020",
      title: "Professional Player",
      place: "Renegades",
      bg: "#EEF5FA",
    },
    {
      id: 4,
      date: "2017-2018",
      title: "Professional Player",
      place: "Splyce",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  // const awardsArray = [
  //   {
  //     id: 1,
  //     date: "2015-2017",
  //     title: "  Graphic Designer",
  //     place: "Web Graphy, Los Angeles, CA",
  //     bg: "#FCF4FF",
  //   },

  //   {
  //     id: 2,
  //     date: "2014 - 2015",
  //     title: "Jr. Web Developer",
  //     place: "Creative Gigs.",
  //     bg: "#FCF9F2",
  //   },

  //   {
  //     id: 3,
  //     date: "2015-2017",
  //     title: "Best Freelancer",
  //     place: "Fiver & Upwork Level 2 & Top Rated",
  //     bg: "#FCF4FF",
  //   },
  // ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "React/Redux",
      number: "70",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "JavaScript",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Python",
      number: "80",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Photoshop",
      number: "75",
    },
  ];

  // Personal information for contact pages
  // const contactArray = [
  //   {
  //     id: "01",
  //     icon: iconPhone,
  //     title: "Phone ",
  //     item1: "+452 666 386",
  //     item2: "+452 666 386",
  //     bg: "#FCF4FF",
  //   },
  //   {
  //     id: "02",
  //     icon: iconEmail,
  //     title: "Email ",
  //     item1: "support@gmail.com",
  //     item2: "example@gmail.com",
  //     bg: "#EEFBFF",
  //   },
  //   {
  //     id: "03",
  //     icon: iconMap,
  //     title: "Address ",
  //     item1: "Maount View, Oval",
  //     item2: "Road, New York, USA",
  //     bg: "#F2F4FF",
  //   },
  // ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    experiencesArray,
    // awardsArray,
    lineArray,
    // contactArray,
  };
};

export default AllData;
