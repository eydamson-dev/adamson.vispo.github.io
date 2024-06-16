export default function Greetings() {
  return (
    <section className="hero-section min-h-svh grid w-full snap-start grid-rows-1 place-items-center text-center leading-snug tracking-wide @container md:text-left">
      <h1 className="font-dm-sans text-2xl font-medium @lg:text-5xl">
        Hey there! I'm <span className="text-red-500">Adam</span>, a web developer with 8 years of experience. Passionate about coding, problem-solving, and empowering teams. Let's create something amazing!
      </h1>
      <a href="#my-projects-section" className="scroll-to">
        see what I have worked on so far
        <span className="arrow-scroll-down"></span>
      </a>
    </section>
  )
}
