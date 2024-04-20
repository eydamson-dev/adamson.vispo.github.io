export default function Greetings() {
  return (
    <section className="hero-section grid grid-rows-1 place-items-center snap-start h-screen">
      <h1 className="text-6xl text-center font-medium font-dm-sans leading-snug">
        Hi I’m <span className="text-red-500">Adam</span>, I can help you build projects and maintain them.
      </h1>
      <a href="#my-projects-section" className="scroll-to">
        see what I have worked on so far
        <span className="arrow-scroll-down"></span>
      </a>
    </section>
  )
}
