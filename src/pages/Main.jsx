import { motion } from "framer-motion";
import Carousel from "../components/carousel";
import ProjectCard from "../components/ProjectCard";
import TechStack from "../components/TechStack";
import "../../src/try.css";

const ecommslides = [
  "/images/ecom/home page.png",
  "/images/ecom/login form modal.PNG",
  "/images/ecom/registration form modal.PNG",
  "/images/ecom/admin dashboard.png",
  "/images/ecom/admin product.png",
  "/images/ecom/admin order.png",
  "/images/ecom/admin user.png",
  "/images/ecom/admin report.png",
  "/images/ecom/client cart.png",
];

const slides = [
  "/images/tarp/sbi1.png",
  "/images/tarp/sbi2.png",
  "/images/tarp/sbi3.jpg",
  "/images/tarp/sbi4.jpg",
  "/images/tarp/sbi5.png",
  "/images/tarp/sbi6.png",
];

const pyfslides = [
  "/images/pythonflask/pyf1.png",
  "/images/pythonflask/pyf2.png",
  "/images/pythonflask/pyf3.png",
];

function Main() {
  return (
    <>
      {/* About Me Section */}
      <motion.section
        id="AboutMe"
        className="bg-gray-950 font-mono min-h-screen flex items-center"
        initial={{ opacity: 0.95, y: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="font-poppins mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-16 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Flip Card */}
            <div className="relative mx-auto h-72 w-64 sm:h-80 sm:w-72 lg:h-[450px] lg:w-[320px] overflow-hidden">
              <div className="w-full h-full bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src="/QCU_07695.jpg"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Back */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                    <img
                      src="/roco.png"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0.95, x: -3 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-2 text-white">
                Jaymar Roco
              </h2>
              <h3
                className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-gray-950 
                after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-cyan-400 
                text-white text-xl sm:text-2xl font-bold mx-auto lg:mx-0"
              >
                I'm a Web developer‎ ‎ ‎ ‎ ....
              </h3>
              <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                Hi, I’m Jaymar Roco, a web developer with a strong foundation in
                Information Technology. I’m passionate about using my skills to
                build practical, user-friendly solutions and excited to take on
                new challenges that help me grow and contribute to meaningful
                projects.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Project Section */}
      <motion.section
        id="Projects"
        className="bg-gray-950 text-white font-mono min-h-screen"
        initial={{ opacity: 0.95, y: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          {/* Heading */}
          <motion.div
            className="mx-auto max-w-2xl text-center mb-12"
            initial={{ opacity: 0.95, x: -3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              Welcome to my projects! Discover my work and expertise in
              Information Technology, where innovation meets functionality.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project e-commerce-website */}
            <ProjectCard
              href="https://github.com/MosquitoCoil/projectpy"
              images={
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                  {ecommslides.map((s, i) => (
                    <img
                      key={i}
                      src={s}
                      className="h-48 sm:h-64 w-full object-contain rounded-md"
                    />
                  ))}
                </Carousel>
              }
              carousel={true}
              tech="Python Flask, REST API, MySQL"
              title="Web Application CRUD Python Flask User Management"
              description="Developed a full-stack CRUD system using Python Flask and MySQL, featuring an admin panel, RESTful APIs, and a responsive UI for efficient record management."
            />

            {/* Project Mobile CRUD */}
            <ProjectCard
              href="https://github.com/MosquitoCoil/AXGG-ReactNative"
              images={[
                "/images/pyfmobile/pyfm1.jpg",
                "/images/pyfmobile/pyfm2.jpg",
                "/images/pyfmobile/pyfm3.jpg",
              ]}
              tech="React Native"
              title="Mobile Application Version of CRUD Python Flask User Management"
              description="Built a React Native mobile app integrated with the same RESTful APIs, allowing seamless access and record management on mobile devices."
            />

            {/* Project 2 */}
            <ProjectCard
              href="https://github.com/MosquitoCoil/projectpy"
              images={
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                  {pyfslides.map((s, i) => (
                    <img
                      key={i}
                      src={s}
                      className="h-48 sm:h-64 w-full object-contain rounded-md"
                    />
                  ))}
                </Carousel>
              }
              carousel={true}
              tech="Python Flask, REST API, MySQL"
              title="Web Application CRUD Python Flask User Management"
              description="Developed a full-stack CRUD system using Python Flask and MySQL, featuring an admin panel, RESTful APIs, and a responsive UI for efficient record management."
            />

            {/* Project 3 */}
            <ProjectCard
              href="https://github.com/MosquitoCoil/AXGG-ReactNative"
              images={["/screen1.png", "/screen2.png", "/screen3.png"]}
              tech="React Native"
              title="Mobile Application UI only"
              description="Designed and developed a mobile app UI using React Native, with prototypes created in Figma. Prioritized a clean interface and user-friendly experience."
            />

            {/* Project 4 */}
            <ProjectCard
              href="https://drive.google.com/drive/folders/1OzrYhKDmK6XgZI6CWwFyv7I_L_JkIqCT?usp=sharing"
              images={
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                  {slides.slice(0, 3).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="h-48 sm:h-64 w-full object-contain rounded-md"
                    />
                  ))}
                </Carousel>
              }
              carousel={true}
              tech="Adobe Photoshop"
              title="Tarpaulin & Brochure"
              description="During my internship, I created tarpaulins and brochures for a trucking company using Adobe Photoshop."
            />

            {/* Project 5 */}
            <ProjectCard
              href="https://www.figma.com/community/file/1432685041631817472/maternal-system"
              images="/Screenshot/figma.png"
              tech="Figma"
              title="Maternal Health System"
              description="Designed a user-friendly maternal healthcare system UI in Figma, with a focus on appointment tracking and accessibility."
            />

            {/* Project 6 */}
            <ProjectCard
              href="https://jaymarportfolio.netlify.app/"
              images="/Screenshot/My portfolio.png"
              tech="ReactJS & TailwindCSS"
              title="My Portfolio"
              description="Developed a personal portfolio website with ReactJS and TailwindCSS, featuring a modern and responsive design to showcase projects."
            />

            {/* Project 7 */}
            <ProjectCard
              href="https://github.com/MosquitoCoil/StudentRegistration-HTML-CSS-PHP"
              images="/Screenshot/Student Registration QCU.png"
              tech="HTML, CSS, PHP, MySQL"
              title="Student Registration QCU"
              description="Developed a student registration system using PHP and MySQL, with a responsive front-end and full CRUD functionality."
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Main;
