import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import projects from "../../../_data/projects.json";
import Footer from "../../../components/Footer";

/**
 * Represents the ProjectDetails page component.
 * Displays details of a specific project.
 *
 * @component
 */

const ProjectDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { projectTitle } = useParams();
  const project = projects.find((project) => project.title.toLowerCase() === projectTitle);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <>
      <main className="container portfolio">
        <PageHeader title={project.title} description={project.description} />
        <div className="projectDetails">
          <div className="row">
            <div className="col-12 col-xl-4 projectImage">
              <Image src={project.image2} alt={project.name} opacity="0.5" />
            </div>
            <div className="col-12 col-xl-8 projectBodyContainer">
              <div className="projectBody">
                {project.body.split("\n").map((paragraph, i) => (
                  <motion.p
                    className="paragraph"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.3, ease: "easeInOut" }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Display Go Back button with animation */}
              <motion.div
                style={{ display: "flex", gap: "10px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.body.split("\n").length * 0.3 }}
              >
                <Link to="/portfolio">
                  <Button name="Go Back" color="var(--hl2-color)" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;

