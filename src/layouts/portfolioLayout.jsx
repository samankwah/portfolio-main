/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetUser } from "../services/auth";
import Loading from "../components/feedbacks/loading";
import { useUser } from "../contexts/UserContext";

import Navbar from "../pages/portfolio/components/navbar";
import Footer from "../pages/portfolio/components/footer";
import { future } from "../pages/portfolio/data-placeholder";
import { FaUserAltSlash } from "react-icons/fa"; // Importing a not found icon

const PortfolioLayout = () => {
  const [loading, setLoading] = useState(false);
  const { userDetails, setUserDetails } = useUser(); // Use context
  const { username } = useParams();

  const fetchUserDetails = async () => {
    // setLoading(true);
    setUserDetails(future);
    // try {
    //   const response = await apiGetUser(username);
    //   if (response.status === 200) {
    //     if (response.data.username.username === "supafuture") {
    //       const profilePic = future.userProfile.profilePicture;
    //       setUserDetails({
    //         ...response.data.username,
    //         projects: future.projects,
    //         achievements: future.achievements,
    //         education: future.education,
    //         userProfile: {
    //           ...response.data.username.userProfile,
    //           profilePicture: profilePic,
    //         },
    //       });
    //     } else {
    //       setUserDetails(response.data.username);
    //     }
    //     console.log("Portfolio user details-->", response.data.username);
    //   }
    // } catch (error) {
    //   console.log("Error fetching user details", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [username]); // Add username as a dependency

  return (
    <>
      {loading ? (
        <Loading />
      ) : userDetails ? (
        <div className="relative">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <FaUserAltSlash className="text-6xl text-gray-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Sorry, User <span className="text-blue-600">"{username}"</span>{" "}
              not found!
            </h1>
            <p className="text-gray-600">
              The user you are looking for might have been removed or never
              existed.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioLayout;
