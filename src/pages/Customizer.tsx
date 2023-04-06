import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import Button from '../components/Button';

import { fadeAnimation, slideAnimation } from '../config/motion';
import store from '../store';


export interface ICustomizerProps { }

const Customizer: React.FC<ICustomizerProps> = (props) => {
    const snap = useSnapshot(store);

    return <>
        <AnimatePresence>
            {!snap.home &&
                <motion.div className='absolute left-16 xl:left-60 md:left-30 bottom-20' {...slideAnimation("down")}>
                    <motion.div {...fadeAnimation}>
                        <Button label='Go Back' handleClick={() => store.home = true} icon='arrow-left' />
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </>
}

export default Customizer;