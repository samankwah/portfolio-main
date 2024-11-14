// /* eslint-disable react/prop-types */
// import { useUser } from "../../../contexts/UserContext";
// import Socials from "../components/socials";

// const Hero = () => {
//   const handleScroll = () => {
//     const element = document.getElementById("projects");
//     if (element) {
//       const yOffset = -80; // Adjust this value to the desired offset (negative value moves the element down)
//       const yPosition =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: yPosition, behavior: "smooth" });
//       // setDrawerOpen(false);
//     }
//   };
//   const { userDetails } = useUser();
//   return (
//     <div className="relative flex flex-col align-middle items-center justify-center w-full h-screen portfolio-hero">
//       <div className="flex flex-col md:w-[50%] gap-10 items-center text-center">
//         <h1 className="font-bold text-4xl md:text-6xl text-gray-900 leading-tight capitalize">
//           Hello, I&apos;m
//           <span className="font-extrabold text-blue-600">
//             {" "}
//             {userDetails.firstname} {userDetails.lastname}
//           </span>
//         </h1>
//         <p className="w-[80%] mx-auto font-medium text-gray-600 text-lg md:text-2xl leading-relaxed">
//           {userDetails.userProfile.about}
//         </p>
//         <button
//           onClick={handleScroll}
//           className="border w-3/4 md:w-1/4 bg-blue-600 p-4 px-8 text-xl text-white font-bold shadow-md rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
//         >
//           View Projects
//         </button>
//       </div>

//       {/* -----------side - socials ------------------- */}
//       <div className="absolute top-[50%] left-0 transform -translate-x-">
//         <Socials userDetails={userDetails} />
//       </div>
//       <div>//mousescroll here</div>
//     </div>
//   );
// };

// export default Hero;

/* eslint-disable react/prop-types */
import { useUser } from "../../../contexts/UserContext";
import Socials from "../components/socials";

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -80; // Adjust this value to the desired offset
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const { userDetails } = useUser();

  return (
    <div className="relative flex flex-col align-middle items-center justify-center w-full h-screen portfolio-hero">
      <div className="flex flex-col md:w-[50%] gap-8 items-center text-center">
        <h1 className="font-bold text-4xl md:text-6xl text-gray-900 leading-tight capitalize">
          Hello, I&apos;m
          <span className="font-extrabold text-blue-600">
            {" "}
            {userDetails.firstname} {userDetails.lastname}
          </span>
        </h1>
        <p className="w-[80%] mx-auto font-medium text-gray-600 text-lg md:text-2xl leading-relaxed">
          {userDetails.userProfile.about}
        </p>
        <button
          onClick={handleScroll}
          className="border w-3/4 md:w-1/4 bg-blue-600 py-3 px-8 text-xl text-white font-bold shadow-md rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          View Projects
        </button>
      </div>

      {/* Social Icons on the side */}
      <div className="absolute top-[50%] left-0 transform -translate-x-">
        <Socials userDetails={userDetails} />
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="mouse-scroll-cont flex flex-col items-center gap-1">
          <div className="border-2 border-gray-500 rounded-full w-6 h-12 flex items-center justify-center">
            {/* Inner circle with top-to-bottom bounce */}
            <div className="bg-gray-500 rounded-full w-2 h-2 mb-1 animate-bounce-vertical"></div>
          </div>
          <p className="text-gray-500 text-sm"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
