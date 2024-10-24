import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with a beautiful butterfly and text.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Automatically hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    // Show "Web Portfolio" after the butterfly animation
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Delay before showing the text

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [setShowLoader]);

  // Animation variants for the butterfly wings
  const butterflyVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the text
  const textVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      {/* Animated Butterfly */}
      <motion.div
        variants={butterflyVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ position: "relative", width: "150px", height: "150px", marginBottom: "20px" }} // Positioned slightly above
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="150px"
          height="150px"
        >
          {/* Left Wing */}
          <motion.path
            d="M 50 50 Q 20 20, 20 60 T 50 90 Z"
            fill="#00ced1" // Teal base color
            stroke="#008080"
            strokeWidth="2"
            initial={{ rotate: -45, x: -30, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Left Wing Pattern */}
          <motion.circle
            cx="30"
            cy="50"
            r="8"
            fill="#ffeb3b" // Yellow pattern
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.circle
            cx="40"
            cy="70"
            r="4"
            fill="#ffeb3b"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          
          {/* Right Wing */}
          <motion.path
            d="M 50 50 Q 80 20, 80 60 T 50 90 Z"
            fill="#00ced1"
            stroke="#008080"
            strokeWidth="2"
            initial={{ rotate: 45, x: 30, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Right Wing Pattern */}
          <motion.circle
            cx="70"
            cy="50"
            r="8"
            fill="#ffeb3b"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.circle
            cx="60"
            cy="70"
            r="4"
            fill="#ffeb3b"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          
          {/* Butterfly Body */}
          <motion.rect
            x="47"
            y="50"
            width="6"
            height="30"
            fill="#444"
            rx="3"
            ry="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Animated "Web Portfolio" Text */}
      {showText && (
        <motion.h1
          variants={textVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            color: "#00ced1",
            fontSize: "40px", // Smaller font size
            fontWeight: "bold",
            fontFamily: "'Arial', sans-serif",
            textAlign: "center", // Center the text
          }}
        >
          Web Portfolio
        </motion.h1>
      )}
    </div>
  );
};

export default Loader;
