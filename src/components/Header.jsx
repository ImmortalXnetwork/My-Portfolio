import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header">
      {/* Link to the home page */}
      <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Animated logo */}
        <motion.div
          initial={{ x: "-100", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          {/* Animated logo image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="logo"
            src={logo}
            alt="Mohammed Fazal' Logo"
            style={{ width: "100px", height: "auto" }} // Slightly reduced size
          />
        </motion.div>
      </NavLink>
      {/* Navigation links */}
      <NavLinks />
    </header>
  );
};

export default Header;
