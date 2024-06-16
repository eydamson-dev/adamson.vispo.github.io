import { getCollection } from 'astro:content';
const projects = await getCollection('projects')

import ProjectCard from '../../components/ProjectCard';

import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <section id="my-projects-section" className="min-h-svh w-full snap-start pb-5 leading-snug">
      <h2 className="title my-9 font-dm-sans text-5xl font-bold">
        Projec<span className="text-red-500">t</span>s
      </h2>
      <div className={styles.container}>
        {projects.map((p, index) => <ProjectCard key={index} data={p.data}></ProjectCard>)}
      </div>
    </section>
  )
}
