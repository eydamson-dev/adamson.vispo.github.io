import classNames from 'classnames'
import styles from './Greetings.module.scss'

const baseUrl = import.meta.env.BASE_URL

export default function Greetings() {
  return (
    <section className="hero-section min-h-svh grid w-full snap-start grid-rows-1 place-items-center text-center tracking-wide @container md:text-left">
      <div className="grid justify-items-center gap-[24px] @2xl:grid-flow-col">
        <h1 className="text-center font-dm-sans text-3xl font-medium leading-snug @3xl:text-4xl @3xl:leading-snug @4xl:text-5xl @4xl:leading-snug">
          Hey there! I’m <span className='text-red-500'>Adam</span>. With 8 years in web development, including game dev, React, Next.js, and REST APIs, I thrive on creating efficient solutions, managing sprints, and supporting full-stack development.
        </h1>
        <div className={classNames(styles.cvContainer, "max-h-96 rounded-2xl")}>
          <a href={`${baseUrl}files/adamson-vispo-cv.pdf`} target='_blank'>
            <img className='max-h-96 w-[256px] rounded-2xl' src={`${baseUrl}images/adamson-vispo-cv.jpg`} />
          </a>
          <div className={classNames(styles.cvReveal, "max-h-96 rounded-2xl shadow-md shadow-black")}>
            <img className='max-h-96 rounded-2xl' src={`${baseUrl}images/portfolio-photo.jpg`} />
          </div>
        </div>
      </div>
      <a href="#my-projects-section" className="scroll-to">
        see what I have worked on so far
        <span className="arrow-scroll-down"></span>
      </a>
    </section>
  )
}
