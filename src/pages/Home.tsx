import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useSnapshot } from 'valtio';
import Button from '../components/Button';

import { slideAnimation, fadeAnimation } from '../config/motion';
import store from '../store';

export interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) => {

   const snap = useSnapshot(store);

   return <>
      <AnimatePresence>
         {snap.home &&
            <motion.section className='flex items-end h-screen px-16 py-20 xl:items-center xl:px-60 md:px-30' {...fadeAnimation}>
               <motion.div {...slideAnimation("up")}>
                  <motion.h1 className='text-[72px] leading-[72px] font-thin text-neutral-50 mb-12'>
                     Custom Fit,
                     <br className='hidden xl:block' />
                     Maximum Comfort!
                  </motion.h1>
                  <motion.div className='flex gap-4'>
                     <Button label='Go Customize' handleClick={() => store.home = false} />
                     <Button label='Contact us' handleClick={() => { }} variant='secondary' />
                  </motion.div>
               </motion.div>
            </motion.section>
         }
      </AnimatePresence>
   </>
}

export default Home;