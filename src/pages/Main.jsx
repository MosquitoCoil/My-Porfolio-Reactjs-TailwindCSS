import Carousel from "./carousel";
import "../assets/try.css";

{
  /* import demoVideo from './assets/video.mp4'*/
}

const slides = [
  "/src/assets/carousel/sbi1.png",
  "/src/assets/carousel/sbi2.png",
  "/src/assets/carousel/sbi3.jpg",
  "/src/assets/carousel/sbi4.jpg",
  "/src/assets/carousel/sbi5.jpg",
  "/src/assets/carousel/sbiwall.png",
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
                      src="/src/assets/QCU_07695.jpg"
                      class="w-full h-full"
                      className="absolute inset-0 h-full w-full "
                    />
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src="/src/assets/roco.png"
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
                UI and UX Designer    
              </h3>
              <p className="mt-4 text-white">
                Hi, I’m Jaymar Roco, and I recently graduated with a degree in
                Information Technology from Quezon City University. I’m eager to
                put my IT skills to use in new and exciting ways.
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
          <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10"
              href="#"
            >
              <a
                href="https://www.youtube.com/watch?v=yaTyTw99zLs"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/src/assets/Screenshot/Axie.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='/src/assets/play.png'/>    */}
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
            </div>

            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10"
              href="#"
            >
              <a
                href="https://www.youtube.com/watch?v=bHx47ufdZlQ"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/src/assets/Screenshot/Student Registration QCU.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* <img className="size-10" src='/src/assets/play.png'/>    */}
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
              href="#"
            >
              <a
                href="https://www.youtube.com/watch?v=Wgo8yktOc1w"
                className="group relative block"
              >
                <div className="absolute inset-0 grid md:grid-cols-3 gap-4">
                  <img
                    alt=""
                    src="/src/assets/screen1.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="/src/assets/screen2.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                  <img
                    alt=""
                    src="/src/assets/screen3.png"
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-50"
                  />
                </div>
                {/* logo <img className="size-10" src='/src/assets/play.png'/>    */}
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
            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition 
        hover:border-cyan-400/10 hover:shadow-cyan-400/10"
              href="#"
            >
              <a
                href="https://drive.google.com/drive/folders/1OzrYhKDmK6XgZI6CWwFyv7I_L_JkIqCT?usp=sharing"
                className="group relative block"
              >
                <div className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50">
                  <main className="carousel">
                    <div className="max-w-lg object-contain">
                      <Carousel autoSlide={true} autoSlideInterval={1000}>
                        {slides.map((s) => (
                          <img src={s} />
                        ))}
                      </Carousel>
                    </div>
                  </main>
                </div>
                {/* logo <img className="size-10" src='/src/assets/play.png'/>    */}
                <div className="relative p-4 sm:p-6 lg:p-8">
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
            <div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10"
              href="#"
            >
              <a
                href="https://www.youtube.com/watch?v=3NTtNt5WtO4"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/src/assets/Screenshot/My portfolio.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                {/* logo <img className="size-10" src='/src/assets/play.png'/>    */}
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
                        I built my portfolio website using ReactJS, JSX, and
                        Tailwind CSS to showcase my projects and skills in a
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

            {/*<div
              className="hover:bg-gray-500/5 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-cyan-400/10 hover:shadow-cyan-400/10"
              href="#"
            >
              <a
                href="#"
                className="group relative block"
              >
                <img
                  alt=""
                  src="/src/assets/Screenshot/CMS.png"
                  className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-50"
                />
                 <img className="size-10" src='/src/assets/play.png'/>    
                <div className="relative p-4 sm:p-6 lg:p-8 object-contain">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
                    HTML, CSS, MySQL & PHP
                  </p>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Barangay Complaint Management System
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        This Complaint Management System, originally based on an
                        internet template, has been customized and refactored
                        using HTML, CSS, PHP, and MySQL to fit our project’s
                        specific needs. It offers an accessible platform for
                        submitting and tracking complaints, improving
                        organization and response time.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>*/}
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Main;
