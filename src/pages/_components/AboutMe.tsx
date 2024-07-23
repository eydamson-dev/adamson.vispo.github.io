import classNames from "classnames"

export default function AboutMe() {
  return (
    <section id="aboutme-section" className={classNames("min-h-svh w-full pt-10 font-dm-sans @container")}>
      <h2 className="title my-9 font-dm-sans text-5xl font-bold">
        About <span className="text-red-500">Me</span>
      </h2>
        <p className="text-2xl leading-snug">
          I'm a seasoned web developer with 8 years of experience, specializing in React and Next.js. My journey began in game development, honing my skills in coding and project management. Transitioning to web development, I've crafted efficient, maintainable solutions and led successful projects. I thrive in planning and collaboration, mentoring new developers, and sharing knowledge. Outside of coding, I explore new technologies and enjoy a good book. Let's connect and create something amazing together!
        </p>
    </section>
  )
}

