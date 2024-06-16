interface Props {
  data: any
}

import classNames from 'classnames';
import styles from './ProjectCard.module.scss'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProjectCard({ data }: Props) {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(Math.min(window.screen.width, window.screen.height) < 512)
  }, [])

  return (
    <div className='w-full rounded-lg border border-gray-200 bg-gray-100 p-6 shadow @container'>
      <motion.div
        className={'@lg:grid @lg:grid-cols-2 @lg:grid-rows-1 @lg:gap-6'}
        initial={{
          opacity: 0,
          y: 100
        }}
        viewport={{
          once: true,
          amount: isMobile ? 0.1 : 0.3
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
        <div className={'mb-6 @lg:mb-0'}>
          <img className='block rounded-lg shadow-lg ' src={data.images[0]} alt="image" />
        </div>
        <div className={'flex flex-col gap-2'}>
          <div className={classNames("title text-2xl font-bold", styles.title)}>
            {data.title}
          </div>
          <div className={classNames(styles.description, "mb-3 border-l-4 border-l-red-100 pl-3 text-slate-700")}>{data.description}</div>
          <div className={classNames(styles.stacksContainer, "flex flex-wrap gap-1")}>
            {data.stacks.map((s: string, index: number) => <span key={index} className={classNames(styles.stack, 'rounded-full px-2 py-1 text-white')}>{s}</span>)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
