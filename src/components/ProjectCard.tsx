interface Props {
  data: any
}

import classNames from 'classnames';
import styles from './ProjectCard.module.scss'
import { motion } from 'framer-motion';

export default function ProjectCard({ data }: Props) {
  return (
    <div className='w-full rounded-lg border border-gray-200 p-6 shadow @container bg-gray-100'>
      <motion.div
        className={'@lg:grid @lg:grid-cols-2 @lg:grid-rows-1 @lg:gap-3'}
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
        <div className={'mb-4 @lg:mb-0'}>
          <img className='block rounded-lg shadow-lg ' src={data.images[0]} alt="image" />
        </div>
        <div className={''}>
          <div className={classNames("title text-2xl font-bold", styles.title)}>
            {data.title}
          </div>
          <div className={styles.description}>{data.description}</div>
          <div className={styles.stacksContainer}>
            {data.stacks.map((s: string, index: number) => <span key={index} className={classNames(styles.stack, 'rounded-full px-2 py-1 text-white')}>{s}</span>)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
