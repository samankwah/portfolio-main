// import { useUser } from "../../../contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";

// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

// const labelStyle = "block text-left text-lg font-medium text-gray-600";
// const Contact = () => {
//   const { userDetails } = useUser();
//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form className="p-8 bg-white shadow-2xl rounded-2xl">
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 className={`${inputStyle}`}
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className={`${inputStyle}`}
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Message</label>
//               <textarea
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={`${inputStyle}`}
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// src/components/Contact/Contact.jsx
// import { useRef } from "react";
// import { useUser } from "../../../../src/contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";
// import emailjs from "emailjs-com";

// // Input and label styling classes
// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
// const labelStyle = "block text-left text-lg font-medium text-gray-600";

// const Contact = () => {
//   const { userDetails } = useUser();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_51fe4pp", // Replace with your EmailJS service ID
//         "template_olqjcj8", // Replace with your EmailJS template ID
//         form.current,
//         "Stephen Amankwah" // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           alert("Failed to send message. Please try again.");
//         }
//       );

//     // Clear form fields after submission
//     e.target.reset();
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="p-8 bg-white shadow-2xl rounded-2xl"
//           >
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your Name"
//                 className={`${inputStyle}`}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your Email"
//                 className={`${inputStyle}`}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Message</label>
//               <textarea
//                 name="message"
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={`${inputStyle}`}
//                 required
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { useRef } from "react";
// // import { useUser } from "../../../../src/contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";
// import emailjs from "emailjs-com";

// // Input and label styling classes
// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
// const labelStyle = "block text-left text-lg font-medium text-gray-600";

// const Contact = () => {
//   // const { userDetails } = useUser();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_51fe4pp",
//         "template_olqjcj8",
//         form.current,
//         "KzL19vuaFdz2hBlPz" // Replace with your actual EmailJS user ID (not name)
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//         },
//         () => {
//           alert("Failed to send message. Please try again.");
//         }
//       );

//     // Clear form fields after submission
//     e.target.reset();
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="p-8 bg-white shadow-2xl rounded-2xl"
//           >
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your Name"
//                 className={inputStyle}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your Email"
//                 className={inputStyle}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Message</label>
//               <textarea
//                 name="message"
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={inputStyle}
//                 required
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import emailjs from "emailjs-com";

const inputStyle =
  "w-full p-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
const labelStyle = "block text-left text-lg font-medium text-gray-600";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_51fe4pp", // Your EmailJS service ID
        "template_olqjcj8", // Your EmailJS template ID
        form.current,
        "your_actual_user_id" // Your EmailJS user ID
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });

    e.target.reset();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
        <SectionHeader
          title="GET IN TOUCH!"
          description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
        />
        <div className="w-full mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 bg-white shadow-2xl rounded-2xl"
          >
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className={`${inputStyle}`}
                required
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className={`${inputStyle}`}
                required
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Message</label>
              <textarea
                name="message"
                placeholder="Enter your Message"
                rows="5"
                className={`${inputStyle}`}
                required
              ></textarea>
            </div>
            <div className="flex w-full justify-end items-center">
              <button
                type="submit"
                className="bg-violet-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-violet-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
