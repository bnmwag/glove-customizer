import React from 'react';
import { Canvas } from '@react-three/fiber';
import Glove from './Glove';
import { Center, Environment } from '@react-three/drei';
import CameraRig from './CameraRig';
import Options from './Options';
import { useSnapshot } from 'valtio';

import state from '../store';
import { AnimatePresence } from 'framer-motion';


export interface ICNVSProps { }

const CNVS: React.FC<ICNVSProps> = (props) => {
   const snap = useSnapshot(state) as any

   return <>
      <Canvas
         className='webgl'
      >
         <ambientLight intensity={0.5} />
         <Environment preset="city" />

         <CameraRig>
            <AnimatePresence>
               <Center>
                  <Glove />
               </Center>
               {!snap.home ? <Options /> : null}
            </AnimatePresence>
         </CameraRig>
      </Canvas>
   </>
}

export default CNVS;