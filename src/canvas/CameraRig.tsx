import React, { useRef } from 'react';
import * as THREE from 'three';
import { useSnapshot } from 'valtio';
import state from '../store';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath'

export interface ICameraRigProps {
   children: React.ReactNode;
}

const CameraRig: React.FC<ICameraRigProps> = ({
   children
}) => {

   const group = useRef<THREE.Group | any>();
   const snap = useSnapshot(state);

   useFrame((state, delta) => {
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

      let targetPosition = [-0.1, 0, 0.25] as [number, number, number]

      if (snap.home) {
         if (isBreakpoint) targetPosition = [0, -0.035, 0.2]
         if (isMobile) targetPosition = [0, -0.065, 0.25]
      } else {
         if (isBreakpoint) targetPosition = [0, 0, 0.25]
         else targetPosition = [0, 0, 0.2]
      }

      easing.damp3(state.camera.position, targetPosition, 0.25, delta)

      easing.dampE(
         group.current.rotation,
         [state.pointer.y / 5, -(state.pointer.x / 2.5), 0],
         0.25,
         delta
      )
   })

   return <>
      <group ref={group}>
         {children}
      </group>
   </>
}

export default CameraRig;