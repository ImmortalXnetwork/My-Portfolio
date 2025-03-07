import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";

/**
 * Represents the hero section of the page.
 *
 * @component
 * @param {string} name - The name to be displayed in the hero section.
 */

const Hero = ({ name }) => {
  // Styles for various elements
  const styles = {
    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "var(--text-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        {/* Animated name */}
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>
        {/* Animated description */}
        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Typewriter effect for dynamic text animation without a cursor */}
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("I am a 22-year-old B.E. Student specializing in Electrical and Electronics Engineering. I am passionate about electrical systems, electronics, and innovative technology. Always eager to learn, collaborate, and work on exciting projects, I’m open to discussions, idea exchanges, and exploring new opportunities in the field. Feel free to reach out!")
                .start();
            }}
          />
        </motion.div>
      </div>
      {/* Displaying social icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;
