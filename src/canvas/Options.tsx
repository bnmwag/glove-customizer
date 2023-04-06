import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { SketchPicker } from 'react-color';
import { delay, motion } from 'framer-motion';

import { fadeAnimation } from '../config/motion';

import state from '../store';
import { Html } from '@react-three/drei';

export interface IOptionsProps { }

const Options: React.FC<IOptionsProps> = (props) => {

   const snap = useSnapshot(state) as any
   const [panelOpen, setPanelOpen] = useState(false);

   return <Html position={[0.05, 0, 0]}>
      <motion.div {...fadeAnimation}>
         <div className="option"
            onClick={() => { setPanelOpen(!panelOpen) }}
         >
            <div className="option__icon"></div>
         </div>
         {panelOpen &&
            <SketchPicker
               color={snap.color}
               disableAlpha
               onChange={(color: any) => state.color = color.hex}
               presetColors={[]}
            />
         }
      </motion.div>
   </Html>
}

export default Options;