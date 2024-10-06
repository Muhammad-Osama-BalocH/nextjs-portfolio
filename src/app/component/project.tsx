import { link } from 'fs'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      have successfully developed a variety of web applications and websites, showcasing my skills in both frontend and backend technologies. From creating responsive portfolio websites using HTML, CSS, and JavaScript, to building dynamic single-page applications with React.js and TypeScript, my projects reflect a strong focus on user experience and clean, maintainable code. I’ve also worked with Node.js for server-side development, creating efficient APIs and backend solutions. These projects highlight my ability to solve real-world problems through innovative and scalable web solutions.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
        {/*projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative line-clamp-2">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/images.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              Personal portfolio
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              CATERING
            </h1>
            <p className="leading-relaxed line-clamp-3">
            Portfolio Website: Created a personal portfolio using HTML, CSS, and JavaScript showcasing my technical skills and projects.
            </p>
            <Link href={"https://personal-portfolio-by-muhammad-osama.vercel.app/"}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/parallax-pakistan-cover-image.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
            Parallax Website: Developed a visually engaging parallax scrolling website with HTML and CSS for smooth transitions.
            </p>
            <Link href={"https://parallex-website-create-by-osama.vercel.app/"}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/resume.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed line-clamp-3">
            Shareable Link Website: Built a platform with HTML and CSS to easily share and manage custom links.
            </p>
            <Link href={"https://shareable-resume-builder-by-osama.vercel.app/"}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/calculator.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed line-clamp-3">
            Calculator App (Next.js): Designed a functional calculator application using Next.js for quick and efficient calculations.
            </p>
            <Link href={"https://calculator-nextjs-osama-app.vercel.app/"}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/todolist.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Holden Caulfield
            </h1>
            <p className="leading-relaxed">
            To-Do List App (Next.js): Created a dynamic to-do list application with Next.js to manage daily tasks efficiently.
            </p>
            <Link href={"https://todolist-nextjs-create-by-osama.vercel.app/"}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../public/login.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Alper Kamu
            </h1>
            <p className="leading-relaxed">
            Login Page (Next.js): Developed a responsive and secure login page using Next.js with authentication features.
            </p>
            <Link href={""}>
            <p className="leading-relaxed  text-blue-400 mb-1 hover:underline ">View Project</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
