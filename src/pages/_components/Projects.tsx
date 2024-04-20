import { getCollection } from 'astro:content';
const projects = await getCollection('projects')

import ProjectCard from '../../components/ProjectCard';

import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <section id="my-projects-section" className="snap-start h-screen">
      <h2 className="title font-dm-sans font-bold text-5xl my-9">
        Projec<span className="text-red-500">t</span>s
      </h2>
      <div className={styles.container}>
        {projects.map((p, index) => <ProjectCard key={index} data={p.data}></ProjectCard>)}
      </div>
    </section>
  )
}
