interface Props {
  data: any
}

import classNames from 'classnames';
import styles from './ProjectCard.module.scss'
import { motion } from 'framer-motion';

export default function ProjectCard({ data }: Props) {
  console.log({data})
  return (
    <motion.div
      className={styles.container}
      initial={{
        opacity: 0,
        y: 100
      }}
      viewport={{
        once: true, 
        amount: 0.3
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        type: 'spring',
        bounce: 0.5,
      }}
    >
      <div className={styles.carousel}>
        <img className='block rounded-lg shadow-md shadow-black' src={data.images[0]} alt="image" />
      </div>
      <div className={classNames(styles.info)}>
        <div className={classNames("title font-bold text-2xl", styles.title)}>
          {data.title}
        </div>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.stacksContainer}>
          {data.stacks.map((s: string) => <span className={classNames(styles.stack, 'rounded-full px-2 py-1 text-white')}>{s}</span>)}
        </div>
      </div>
    </motion.div>
  );
}
