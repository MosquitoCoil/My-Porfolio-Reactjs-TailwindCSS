import Carousel from "./carousel";
import "../../src/try.css";

{
  /* import demoVideo from '/video.mp4'*/
}

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
      <section className="bg-gray-950 font-mono" id="about-me">
        <div className="font-poppins mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-16 lg:px-16 lg:py-36">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="ml-36 relative h-80 overflow-hidden sm:h-80 lg:order-last lg:h-full">
              <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden w-full h-full object-cover">
                    <img
                      src="/QCU_07695.jpg"
                      class="w-full h-full"
                      className="absolute inset-0 h-full w-full "
                    />
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src="/roco.png"
                        class="w-full h-full"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:py-36">
              <h2 className="text-3xl font-bold sm:text-4xl mb-2 text-white">
                Jaymar Roco
              </h2>
              <h3
                className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-gray-950 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-cyan-400 text-white text-2xl font-bold sm:text-2xl"
              >
                I'm a Web developer  ..
              </h3>
              <p className="mt-4 text-white">
                "Hi, I’m Jaymar Roco, a web developer with a strong foundation
                in Information Technology. I’m passionate about using my skills
                to build practical, user-friendly solutions and excited to take
                on new challenges that help me grow and contribute to meaningful
                projects."
              </p>
              {/* button <a href="#" className="mt-8 inline-block rounded bg-gray-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-800 ">
          View my Portfolio
        </a>*/}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-950 text-white font-mono" id="MyPortfolio">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-35">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>
            <p className="m-4 text-gray-300">
              Welcome to my projects! Discover my projects and expertise in
              Information Technology, where innovation meets functionality.
              Explore, connect, and experience the world of tech through my work
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition 
        hover:border-cyan-400/10 hover:shadow-cyan-400/10"
            >
              <a
                href="https://github.com/MosquitoCoil/projectpy"
                className="group relative block"
              >
                <div className="absolute inset-0 grid md:grid-cols-3 gap-4">
                  <img
                    alt=""
                    src="images/pyfmobile/pyfm1.jpg"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="images/pyfmobile/pyfm2.jpg"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="images/pyfmobile/pyfm3.jpg"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                </div>
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    React Native, REST API
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Mobile Version of CRUD Python Flask
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        For the mobile side, I built a companion app using React
                        Native, connected to the same Flask backend via RESTful
                        APIs. The mobile app allows users to perform CRUD
                        operations in real-time, ensuring data consistency
                        across platforms. This version focuses on simplicity and
                        ease of use, providing a smooth experience even on
                        limited devices, while showcasing cross-platform
                        integration skills.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
              <a
                href="https://github.com/MosquitoCoil/projectpy"
                className="group relative block"
              >
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                  {pyfslides.map((s) => (
                    <img
                      className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                      src={s}
                    />
                  ))}
                </Carousel>
                {/* logo <img className="size-10" src='public/logoJ.png'/>  */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    Python Flask, REST API, Bootstrap, CSS & MySQL
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    CRUD Python Flask
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        I developed a CRUD system using Python Flask and MySQL
                        as the backend, focusing on efficient data management
                        through a web interface. The system features a
                        user-friendly admin panel that allows for creating,
                        reading, updating, and deleting records. I used Flask’s
                        routing and templating to build a responsive and
                        intuitive interface, making data handling seamless and
                        secure.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/*<div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
              <a
                href="https://www.youtube.com/watch?v=yaTyTw99zLs"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/Screenshot/Axie.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='public/logoJ.png'/>    
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    Visual Basic
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Visual Basic Axie Data Entry
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        I developed a small CRUD system using Visual Basic and
                        MySQL for the database, focusing on efficient data
                        management and user interaction. This project
                        demonstrates my ability to create functional desktop
                        applications and reinforces my understanding of database
                        integration.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>*/}

            <div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
              <a
                href="https://github.com/MosquitoCoil/StudentRegistration-HTML-CSS-PHP"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/Screenshot/Student Registration QCU.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8 object-contain">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    HTML, CSS, MySQL & PHP
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Student Registration QCU
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        I created a small student registration system using
                        HTML, CSS, PHP, and MySQL, focusing on the creation and
                        retrieval of student data. This project showcases my
                        skills in web development and emphasizes my ability to
                        build functional, user-friendly applications.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition 
        hover:border-cyan-400/10 hover:shadow-cyan-400/10"
            >
              <a
                href="https://github.com/MosquitoCoil/AXGG-ReactNative"
                className="group relative block"
              >
                <div className="absolute inset-0 grid md:grid-cols-3 gap-4">
                  <img
                    alt=""
                    src="/screen1.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="/screen2.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="/screen3.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                </div>
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    React Native
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Mobile App UI
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        I developed a mobile app using React Native, designing
                        the interface in Figma to ensure an intuitive and
                        visually appealing user experience. This project
                        showcases my skills in mobile app development and
                        design, with a focus on functionality and aesthetics.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
              <a
                href="https://jaymarportfolio.netlify.app/"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/Screenshot/My portfolio.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    Reactjs & TailwindCSS
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    My Portfolio
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        I built my portfolio website using ReactJS (JSX syntax)
                        and Tailwind CSS to showcase my projects and skills in a
                        clean, responsive design. This project highlights my
                        proficiency in front-end development and my ability to
                        create user-friendly interfaces with modern web
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition 
        hover:border-cyan-400/10 hover:shadow-cyan-400/10"
            >
              <a
                href="https://drive.google.com/drive/folders/1OzrYhKDmK6XgZI6CWwFyv7I_L_JkIqCT?usp=sharing"
                className="group relative block"
              >
                <Carousel autoSlide={true} autoSlideInterval={3000}>
                  {slides.map((s) => (
                    <img
                      className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                      src={s}
                    />
                  ))}
                </Carousel>
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8 object-contain">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    Adobe Photoshop
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Tarpaulin & Brochure
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        During my internship, I focused on graphic design
                        projects for a truck company, creating impactful
                        tarpaulins and brochures using Adobe Photoshop. This
                        experience allowed me to develop practical design skills
                        and understand how to visually communicate brand
                        messages effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10">
              <a
                href="https://www.figma.com/community/file/1432685041631817472/maternal-system"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/Screenshot/figma.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='public/logoJ.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    Figma
                  </p>
                  <p className="absolute text-xl font-bold text-white sm:text-2xl">
                    Maternal Health System
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        A user-friendly system that streamlines maternal
                        healthcare, improving communication, appointment
                        tracking, and access to essential resources. I focused
                        on UI/UX design, ensuring an intuitive and seamless
                        experience for both mothers and healthcare providers.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
