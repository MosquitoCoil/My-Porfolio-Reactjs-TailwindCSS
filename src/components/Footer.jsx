import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.section
      className="bg-gray-950"
      id="Contacts"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img
                className="mr-6 h-12 sm:h-12"
                src="/logoJ.png"
                alt="mylogo"
              />
              <span className="self-center text-xl whitespace-nowrap text-white">
                Jaymar Roco
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Thank you for visiting my portfolio! I hope you enjoyed exploring
              my work as much as I enjoyed creating it. Feel free to reach out
              if you have any questions or opportunities. Looking forward to
              connecting with you!
            </p>

            {/* Social Links */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/roco.me16"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73
                      c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359
                      c-0.548-0.074-1.707-0.236-3.897-0.236
                      c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729
                      C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/_virus16/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="grad1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fd5" />
                      <stop offset=".328" stopColor="#ff543f" />
                      <stop offset=".348" stopColor="#fc5245" />
                      <stop offset=".504" stopColor="#e64771" />
                      <stop offset=".643" stopColor="#d53e91" />
                      <stop offset=".761" stopColor="#cc39a4" />
                      <stop offset=".841" stopColor="#c837ab" />
                    </radialGradient>
                    <path
                      fill="url(#grad1)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992
                      l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019
                      c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20
                      C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7
                      S27.859,31,24,31z"
                    ></path>
                  </svg>
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/MosquitoCoil"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-400 hover:text-white"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#f0f6fc"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865
                      8.18 6.839 9.504.5.092.682-.217.682-.483
                      0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343
                      -.454-1.158-1.11-1.466-1.11-1.466
                      -.908-.62.069-.608.069-.608
                      1.003.07 1.531 1.032 1.531 1.032
                      .892 1.53 2.341 1.088 2.91.832
                      .092-.647.35-1.088.636-1.338
                      -2.22-.253-4.555-1.113-4.555-4.951
                      0-1.093.39-1.988 1.029-2.688
                      -.103-.253-.446-1.272.098-2.65
                      0 0 .84-.27 2.75 1.026A9.564 9.564
                      0 0112 6.844c.85.004 1.705.115
                      2.504.337 1.909-1.296 2.747-1.027
                      2.747-1.027.546 1.379.202 2.398.1
                      2.651.64.7 1.028 1.595 1.028
                      2.688 0 3.848-2.339 4.695-4.566
                      4.943.359.309.678.92.678 1.855
                      0 1.338-.012 2.419-.012 2.747
                      0 .268.18.58.688.482A10.019 10.019
                      0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </li>

              {/* Figma */}
              <li>
                <a
                  href="https://www.figma.com/@rocojaymars"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Figma</span>
                  <svg
                    className="size-6"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                  >
                    <path
                      fill="#e64a19"
                      d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,
                    3.134-7,7-7h8V17z"
                    />
                    <path
                      fill="#7c4dff"
                      d="M25,31h-7c-3.866,0-7-3.134-7-7v0
                    c0-3.866,3.134-7,7-7h7V31z"
                    />
                    <path
                      fill="#66bb6a"
                      d="M18,45L18,45c-3.866,0-7-3.134-7-7v0
                    c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                    />
                    <path
                      fill="#ff7043"
                      d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0
                    C39,13.866,35.866,17,32,17z"
                    />
                    <circle cx="32" cy="24" r="7" fill="#29b6f6" />
                  </svg>
                </a>
              </li>

              {/* YouTube */}
              <li>
                <a
                  href="https://www.youtube.com/@rocojaymars.7879"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-gray-400 hover:text-white"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="size-10"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff0033"
                      d="M15,4c-4.186,0-9.619,1.049-9.619,1.049
                      -1.907.305-3.367,1.943-3.367,3.936v6v6c0,1.966,1.435,3.637,
                      3.377,3.943,0,0,5.433,1.051,9.619,1.051
                      4.186,0,9.619-1.051,9.619-1.051
                      1.944-.306,3.377-1.979,3.379-3.947v-12
                      c0-1.966-1.435-3.639-3.377-3.945
                      0,0-5.433-1.049-9.619-1.049zM12,10.398l8,4.602-8,4.602z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Sections */}
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* About Me */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Me</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="transition text-gray-400 hover:text-white"
                    href="https://github.com/MosquitoCoil"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <p className="text-gray-400">Resume:</p>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-850 text-gray-400 border border-gray-800 shadow-md hover:border-cyan-400 hover:shadow-cyan-400 rounded-lg transition-all duration-300"
                    href="/JAYMAR ROCO - RESUME.pdf"
                    download
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8
                        m0 0l-4-4m4 4l4-4M12 4v8"
                      />
                    </svg>
                    <span>Download Resume</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">My Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="text-gray-400">Web Development</li>
                <li className="text-gray-400">Web Design</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Me</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0
                      002-2V7a2 2 0 00-2-2H5a2 2 0
                      00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">jaymarroco.j@gmail.com</span>
                </li>

                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0
                      01.948.684l1.498 4.493a1 1 0
                      01-.502 1.21l-2.257 1.13a11.042
                      11.042 0 005.516 5.516l1.13-2.257a1
                      1 0 011.21-.502l4.493 1.498a1 1 0
                      01.684.949V19a2 2 0 01-2 2h-1C9.716
                      21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">09097725490</span>
                </li>

                <li className="flex items-start gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998
                      1.998 0 01-2.827 0l-4.244-4.243a8 8
                      0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    Dasmariñas City, Cavite, Philippines
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <p className="text-center text-xs leading-relaxed text-gray-400">
            © 2024 Jaymar Roco. All rights reserved.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Footer;
