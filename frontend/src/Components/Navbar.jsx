import React from 'react'
import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
   const [sticky, setSticky] = useState(false);
  const { openSignIn } = useClerk();
  const location = useLocation();
  const { user, navigate } = useAppContext();

    useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "AboutUs", href: "/aboutUs" },
    { label: "ContactUs", href: "/contactUs" },
    { label: "ContactUs", href: "/contactUs" },
    { label: "ContactUs", href: "/contactUs" },
    // Removed "About"
  ];
  return (
    <div>Navbar</div>
  )
}

export default Navbar