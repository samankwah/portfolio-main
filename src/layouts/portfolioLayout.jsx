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
  const [loading, setLoading] = useState(true); // Start with loading true
  const { userDetails, setUserDetails } = useUser(); // Use context
  const { username } = useParams();

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const response = await apiGetUser(username);
      if (response.status === 200) {
        if (response.data.username === "supafuture") {
          const profilePic = future.userProfile.profilePicture;
          setUserDetails({
            ...response.data,
            projects: future.projects,
            achievements: future.achievements,
            education: future.education,
            userProfile: {
              ...response.data.userProfile,
              profilePicture: profilePic,
            },
          });
        } else {
          setUserDetails(response.data);
        }
        console.log("Portfolio user details -->", response.data);
      } else {
        setUserDetails(null); // User not found, clear userDetails
      }
    } catch (error) {
      console.error("Error fetching user details", error);
      setUserDetails(null); // Error occurred, clear userDetails
    } finally {
      setLoading(false); // Loading is complete
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserDetails();
    } else {
      setUserDetails(null);
      setLoading(false); // Set loading to false if no username is provided
    }
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
