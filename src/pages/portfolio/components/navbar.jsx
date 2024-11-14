// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useUser } from "../../../contexts/UserContext";
// import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu button
// import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

// const navLinks = [
//   { name: "Profile", to: "profile" },
//   { name: "Skills", to: "skills" },
//   { name: "Projects", to: "projects" },
//   { name: "Education", to: "education" },
//   { name: "Experience", to: "experience" },
//   { name: "Achievements", to: "achievements" },
//   { name: "Volunteer", to: "volunteers" },
//   { name: "Contact", to: "contact" },
// ];

// const Navbar = () => {
//   const { userDetails } = useUser();
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     if (navbarRef.current) {
//       setNavbarHeight(navbarRef.current.offsetHeight);
//     }
//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -navbarHeight; // Adjust this value to the desired offset (negative value moves the element down)
//       const yPosition =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: yPosition, behavior: "smooth" });
//       setDrawerOpen(false);
//     }
//   };
//   return (
//     <div className="relative">
//       <div style={{ height: navbarHeight }} className="bg-white" />

//       <div ref={navbarRef} className="navbar fixed top-0 z-50 shadow-lg w-full">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <div className="flex gap-4 align-middle items-center">
//             <div className="p-1 bg-blue-600 rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
//               <img
//                 src={userDetails.userProfile.profilePicture}
//                 alt={userDetails.firstname}
//                 className="w-full h-full rounded-full"
//               />
//             </div>
//             <Link
//               to="/"
//               className="font-bold text-xl text-gray-800 hover:text-blue-800"
//             >
//               {userDetails.firstname} {userDetails.lastname}
//             </Link>
//           </div>
//           <div className="hidden md:flex gap-10 items-center">
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleScroll(link.to)}
//                 className="font-semibold text-gray-600 text-sm hover:text-blue-600"
//               >
//                 {link.name.toUpperCase()}
//               </button>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <FaBars
//               className="text-2xl cursor-pointer"
//               onClick={toggleDrawer}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Side Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } w-64`}
//       >
//         <div className="flex justify-end p-4">
//           <FaTimes className="text-2xl cursor-pointer" onClick={toggleDrawer} />
//         </div>
//         <div className="flex flex-col items-center mt-10 space-y-6">
//           {navLinks.map((link, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(link.to)}
//               className="font-semibold text-gray-600 text-lg hover:text-blue-600"
//             >
//               {link.name.toUpperCase()}
//             </button>
//           ))}
//         </div>
//         {/* -------------Socials --------------------- */}
//         <div className="flex justify-center align-middle items-center mt-8">
//           <div className="flex flex-col justify-center align-middle gap-4 items-center bg-white p-3 shadow-lg rounded-r-xl">
//             <Link
//               to={userDetails.userProfile.githubLink}
//               className="p-3 rounded-lg hover:bg-blue-300"
//             >
//               <FaGithub size={40} />
//             </Link>
//             <Link
//               to={userDetails.userProfile.linkedinLink}
//               className="p-3 rounded-lg hover:bg-blue-300"
//             >
//               <FaLinkedinIn size={40} />
//             </Link>
//             <Link
//               to={userDetails.userProfile.twitterLink}
//               className="p-3 rounded-lg hover:bg-blue-300"
//             >
//               <FaTwitter size={40} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useUser } from "../../../contexts/UserContext";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6"; // Updated import

// const navLinks = [
//   { name: "Profile", to: "profile" },
//   { name: "Skills", to: "skills" },
//   { name: "Projects", to: "projects" },
//   { name: "Education", to: "education" },
//   { name: "Experience", to: "experience" },
//   { name: "Achievements", to: "achievements" },
//   { name: "Volunteer", to: "volunteers" },
//   { name: "Contact", to: "contact" },
// ];

// const Navbar = () => {
//   const { userDetails } = useUser();
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     if (navbarRef.current) {
//       setNavbarHeight(navbarRef.current.offsetHeight);
//     }
//   }, []);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -navbarHeight;
//       const yPosition =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: yPosition, behavior: "smooth" });
//       setDrawerOpen(false);
//     }
//   };

//   return (
//     <div className="relative">
//       <div style={{ height: navbarHeight }} className="bg-white" />

//       <nav
//         ref={navbarRef}
//         className="fixed top-0 z-50 shadow-lg w-full bg-white"
//       >
//         <div className="container mx-auto flex justify-between items-center p-4">
//           {/* Logo and Name */}
//           <div className="flex items-center gap-4">
//             <div className="p-1 bg-blue-600 rounded-full h-14 w-14 md:h-20 md:w-20">
//               <img
//                 src={userDetails.userProfile.profilePicture}
//                 alt={`${userDetails.firstname} ${userDetails.lastname}`}
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//             <Link
//               to="/"
//               className="font-bold text-xl text-gray-800 hover:text-blue-800"
//             >
//               {userDetails.firstname} {userDetails.lastname}
//             </Link>
//           </div>

//           {/* Nav Links - Desktop */}
//           <div className="hidden md:flex gap-8 items-center">
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleScroll(link.to)}
//                 className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
//                 aria-label={`Navigate to ${link.name}`}
//               >
//                 {link.name.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* Menu Icon - Mobile */}
//           <div className="md:hidden">
//             <FaBars
//               className="text-2xl cursor-pointer"
//               onClick={toggleDrawer}
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Side Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } w-64`}
//       >
//         <div className="flex justify-between p-4 border-b">
//           <h3 className="text-lg font-bold">Menu</h3>
//           <FaTimes className="text-2xl cursor-pointer" onClick={toggleDrawer} />
//         </div>

//         <div className="flex flex-col items-center mt-6 space-y-4">
//           {navLinks.map((link, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(link.to)}
//               className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
//               aria-label={`Navigate to ${link.name}`}
//             >
//               {link.name.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mt-8 border-t pt-4">
//           <Link
//             to={userDetails.userProfile.githubLink}
//             aria-label="Github"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaGithub size={30} />
//           </Link>
//           <Link
//             to={userDetails.userProfile.linkedinLink}
//             aria-label="LinkedIn"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaLinkedinIn size={30} />
//           </Link>
//           <Link
//             to={userDetails.userProfile.twitterLink}
//             aria-label="Twitter"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaTwitter size={30} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useUser } from "../../../contexts/UserContext";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";

// const navLinks = [
//   { name: "Profile", to: "profile" },
//   { name: "Skills", to: "skills" },
//   { name: "Projects", to: "projects" },
//   { name: "Education", to: "education" },
//   { name: "Experience", to: "experience" },
//   { name: "Achievements", to: "achievements" },
//   { name: "Volunteer", to: "volunteers" },
//   { name: "Contact", to: "contact" },
// ];

// const Navbar = () => {
//   const { userDetails } = useUser();
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false); // Modal state
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     if (navbarRef.current) {
//       setNavbarHeight(navbarRef.current.offsetHeight);
//     }
//   }, []);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -navbarHeight;
//       const yPosition =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: yPosition, behavior: "smooth" });
//       setDrawerOpen(false);
//     }
//   };

//   // Open the modal when the profile image is clicked
//   const openModal = () => setModalOpen(true);

//   // Close the modal
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="relative">
//       <div style={{ height: navbarHeight }} className="bg-white" />

//       <nav
//         ref={navbarRef}
//         className="fixed top-0 z-50 shadow-lg w-full bg-white"
//       >
//         <div className="container mx-auto flex justify-between items-center p-4">
//           {/* Logo and Name */}
//           <div className="flex items-center gap-4">
//             <div
//               onClick={openModal} // Open modal on click
//               className="p-1 bg-blue-600 rounded-full h-14 w-14 md:h-20 md:w-20 cursor-pointer"
//             >
//               <img
//                 src={userDetails.userProfile.profilePicture}
//                 alt={`${userDetails.firstname} ${userDetails.lastname}`}
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//             <Link
//               to="/"
//               className="font-bold text-xl text-gray-800 hover:text-blue-800"
//             >
//               {userDetails.firstname} {userDetails.lastname}
//             </Link>
//           </div>

//           {/* Nav Links - Desktop */}
//           <div className="hidden md:flex gap-8 items-center">
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleScroll(link.to)}
//                 className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
//                 aria-label={`Navigate to ${link.name}`}
//               >
//                 {link.name.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* Menu Icon - Mobile */}
//           <div className="md:hidden">
//             <FaBars
//               className="text-2xl cursor-pointer"
//               onClick={toggleDrawer}
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Side Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } w-64`}
//       >
//         <div className="flex justify-between p-4 border-b">
//           <h3 className="text-lg font-bold">Menu</h3>
//           <FaTimes className="text-2xl cursor-pointer" onClick={toggleDrawer} />
//         </div>

//         <div className="flex flex-col items-center mt-6 space-y-4">
//           {navLinks.map((link, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(link.to)}
//               className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
//               aria-label={`Navigate to ${link.name}`}
//             >
//               {link.name.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mt-8 border-t pt-4">
//           <Link
//             to={userDetails.userProfile.githubLink}
//             aria-label="Github"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaGithub size={30} />
//           </Link>
//           <Link
//             to={userDetails.userProfile.linkedinLink}
//             aria-label="LinkedIn"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaLinkedinIn size={30} />
//           </Link>
//           <Link
//             to={userDetails.userProfile.twitterLink}
//             aria-label="Twitter"
//             className="p-3 rounded-full hover:bg-blue-300 transition-colors"
//           >
//             <FaTwitter size={30} />
//           </Link>
//         </div>
//       </div>

//       {/* Profile Image Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//               aria-label="Close modal"
//             >
//               &times;
//             </button>
//             <div className="flex flex-col items-center gap-4">
//               <img
//                 src={userDetails.userProfile.profilePicture}
//                 alt={`${userDetails.firstname} ${userDetails.lastname}`}
//                 className="w-40 h-40 rounded-md object-cover"
//               />
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {userDetails.firstname} {userDetails.lastname}
//               </h2>
//               <p className="text-gray-600 text-center">
//                 {userDetails.userProfile.bio || "Frontend Web Developer"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";

const navLinks = [
  { name: "Profile", to: "profile" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Achievements", to: "achievements" },
  { name: "Volunteer", to: "volunteers" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const { userDetails } = useUser();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -navbarHeight;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  // Open the modal when the profile image is clicked
  const openModal = () => setModalOpen(true);

  // Close the modal
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative">
      <div style={{ height: navbarHeight }} className="bg-white" />

      <nav
        ref={navbarRef}
        className="fixed top-0 z-50 shadow-lg w-full bg-white"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <div
              onClick={openModal} // Open modal on click
              className="cursor-pointer rounded-full bg-blue-600 p-1 
                h-12 w-12 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
            >
              <img
                src={userDetails.userProfile.profilePicture}
                alt={`${userDetails.firstname} ${userDetails.lastname}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <Link
              to="/"
              className="font-bold text-xl text-gray-800 hover:text-blue-800"
            >
              {userDetails.firstname} {userDetails.lastname}
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.to)}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Menu Icon - Mobile */}
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        <div className="flex justify-between p-4 border-b">
          <h3 className="text-lg font-bold">Menu</h3>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleDrawer} />
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.to)}
              className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 border-t pt-4">
          <Link
            to={userDetails.userProfile.githubLink}
            aria-label="Github"
            className="p-3 rounded-full hover:bg-blue-300 transition-colors"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            to={userDetails.userProfile.linkedinLink}
            aria-label="LinkedIn"
            className="p-3 rounded-full hover:bg-blue-300 transition-colors"
          >
            <FaLinkedinIn size={30} />
          </Link>
          <Link
            to={userDetails.userProfile.twitterLink}
            aria-label="Twitter"
            className="p-3 rounded-full hover:bg-blue-300 transition-colors"
          >
            <FaTwitter size={30} />
          </Link>
        </div>
      </div>

      {/* Profile Image Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full md:w-full lg:w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-4">
              <img
                src={userDetails.userProfile.profilePicture}
                alt={`${userDetails.firstname} ${userDetails.lastname}`}
                className="w-32 h-32 md:w-full md:h-full lg:w-full lg:h-full rounded-md object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                {userDetails.firstname} {userDetails.lastname}
              </h2>
              <p className="text-gray-600 text-center">
                {userDetails.userProfile.bio || "Frontend Web Developer"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
