// import React from 'react';
// // Updated imports to remove unused icons
// import { Mail, Send } from 'lucide-react';

// /**
//  * A creative and attractive Contact Us page component
//  * for Aarogya Saathi.
//  */
// const ContactUs = () => {

//   return (
//     // Main container with padding and a subtle background
//     <div className="bg-gradient-to-b from-white to-gray-100 font-sans py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Page Header */}
//         <div className="text-center mb-16">
//           <h1 
//             className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#14b8a6] to-[#2563eb] bg-clip-text text-transparent"
//           >
//             Contact Us
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
//             We're here to help. Reach out to us with any questions or feedback.
//           </p>
//         </div>

//         {/* Main Content Area: Form + Info */}
//         <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">

//           {/* Contact Information Section */}
//           <div className="lg:w-1/3 bg-gradient-to-br from-[#14b8a6] to-[#2563eb] p-8 text-white">
//             <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//             <p className="mb-8 text-gray-100">
//               Fill up the form and our team will get back to you within 24 hours.
//             </p>
            
//             <ul className="space-y-6">
//               {/* Email Section */}
//               <li className="flex items-start">
//                 <Mail size={20} className="mt-1 mr-4 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   {/* Added mailto link for the email */}
//                   <a 
//                     href="mailto:ai.aarogyasaathi@gmail.com" 
//                     className="text-gray-100 hover:text-white transition-colors"
//                   >
//                     ai.aarogyasaathi@gmail.com
//                   </a>
//                 </div>
                
//               </li>
//               {/* Phone and Address sections are now removed */}
//               <li className="flex items-start">
//                 <Mail size={20} className="mt-1 mr-4 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold">Phone No</h3>
//                   {/* Added mailto link for the email */}
//                   <a 
//                     href="mailto:ai.aarogyasaathi@gmail.com" 
//                     className="text-gray-100 hover:text-white transition-colors"
//                   >
//                    9045145634
//                   </a>
//                 </div>
                
//               </li>
//             </ul>
//           </div>

//           {/* Contact Form Section */}
//           <div className="lg:w-2/3 p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
//             <form 
//               action="#" 
//               method="POST" 
//               onSubmit={(e) => {
//                 e.preventDefault(); 
//                 // Handle form submission logic here
//               }}
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* First Name */}
//                 <div>
//                   <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="first-name"
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
//                     placeholder="John"
//                   />
//                 </div>
                
//                 {/* Last Name */}
//                 <div>
//                   <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="last-name"
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="mt-6">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               {/* Message */}
//               <div className="mt-6">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
//                   placeholder="Your message..."
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 text-right">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#14b8a6] to-[#2563eb] hover:from-[#14b8a6] hover:to-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14b8a6] transition-all transform hover:scale-105"
//                 >
//                   <Send size={18} className="mr-2" />
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;

import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";
/**
 * A creative and attractive Contact Us page component
 * for Aarogya Saathi.
 */
const ContactUs = () => {
   const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setResponseMessage("");

  try {
    const res = await axios.post("http://localhost:4000/api/contact", formData, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      setResponseMessage("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      setResponseMessage(`❌ ${res.data?.error || "Something went wrong"}`);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    if (error.response && error.response.data?.error) {
      setResponseMessage(`❌ ${error.response.data.error}`);
    } else {
      setResponseMessage("❌ Failed to send message. Please try again later.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
     <div className="bg-gradient-to-b from-white to-gray-100 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#14b8a6] to-[#2563eb] bg-clip-text text-transparent">
            {t("contact.contact_us")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.help_text")}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Information */}
<div className="lg:w-1/3 bg-gradient-to-br from-[#14b8a6] to-[#2563eb] p-8 text-white">
  <h2 className="text-3xl font-bold mb-6">{t("contact.contact_info")}</h2>
  <p className="mb-8 text-gray-100">
    {t("contact.fill_form_text")}
  </p>

  <ul className="space-y-6">
    <li className="flex items-start">
      <Mail size={20} className="mt-1 mr-4 flex-shrink-0" />
      <div>
        <h3 className="font-semibold">{t("contact.email_label")}</h3>
        <a
          href="mailto:ai.aarogyasaathi@gmail.com"
          className="text-gray-100 hover:text-white transition-colors"
        >
          ai.aarogyasaathi@gmail.com
        </a>
      </div>
    </li>

    <li className="flex items-start">
      <Mail size={20} className="mt-1 mr-4 flex-shrink-0" />
      <div>
        <h3 className="font-semibold">{t("contact.phone_label")}</h3>
        <p className="text-gray-100">9045145634</p>
      </div>
    </li>
  </ul>
</div>


          {/* Contact Form */}
<div className="lg:w-2/3 p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">{t("contact.get_in_touch")}</h2>
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          {t("contact.first_name")}
        </label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
          placeholder="John"
          required
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          {t("contact.last_name")}
        </label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
          placeholder="Doe"
          required
        />
      </div>
    </div>

    <div className="mt-6">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {t("contact.email")}
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
        placeholder="you@example.com"
        required
      />
    </div>

    <div className="mt-6">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        {t("contact.message")}
      </label>
      <textarea
        id="message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#14b8a6] focus:border-[#14b8a6]"
        placeholder={t("contact.message")}
        required
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="mt-8 text-right">
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-[#14b8a6] to-[#2563eb] hover:from-[#14b8a6] hover:to-[#1d4ed8]"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14b8a6] transition-all transform hover:scale-105`}
      >
        {loading ? (
          t("contact.sending")
        ) : (
          <>
            <Send size={18} className="mr-2" />
            {t("contact.send_message")}
          </>
        )}
      </button>
    </div>
  </form>

  {/* Response Message */}
  {responseMessage && (
    <p
      className={`mt-4 text-center font-medium ${
        responseMessage.startsWith("✅")
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {responseMessage}
    </p>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
