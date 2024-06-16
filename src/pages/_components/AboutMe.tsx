import classNames from "classnames"

export default function AboutMe() {
  return (
    <section id="aboutme-section" className={classNames("snap-start h-screen w-full font-dm-sans pt-10")}>
      <h2 className="title font-dm-sans font-bold text-5xl my-9">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="flex flex-row">
        <div>
          <p className="pb-5">Hey there! I'm [Your Name], a seasoned web developer fueled by a fervent passion for coding and an insatiable curiosity for emerging tech stacks. With 8 years of experience predominantly in web development, my journey commenced in the dynamic realm of game development, where I refined my skills in coding patterns and adept project management. Transitioning into web development, I discovered my forte in crafting efficient and maintainable solutions to real-world challenges, relishing the opportunity to elevate every project I tackle with innovative approaches.</p>

          <p>My expertise encompasses a diverse array of frontend technologies, yet I feel most at home with React and Next.js, having spearheaded numerous successful projects with these frameworks. Beyond coding, I actively contribute to project planning and management, leveraging my experience to drive successful sprints and foster effective collaboration among team members. A particularly fulfilling aspect of my journey has been the chance to mentor and guide fellow developers, particularly new hires, creating a nurturing environment where everyone can flourish and evolve. Passionate about knowledge sharing, I relish empowering others to excel in our collective endeavors. When I'm not immersed in coding adventures, I'm either exploring new technologies, delving into the latest development trends, or simply unwinding with a good book. Let's connect and embark on thrilling coding adventures together!</p>
        </div>
        <img src="https://placehold.co/600x400" alt="about me" />
      </div>
    </section>
  )
}

