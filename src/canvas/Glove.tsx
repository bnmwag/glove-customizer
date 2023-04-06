import React, { useRef } from 'react';
import { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';
import state from '../store';

type GLTFResult = GLTF & {
    nodes: {
        r_handMeshNode: THREE.Mesh;
    };
    materials: {
        lambert2: THREE.MeshStandardMaterial;
    };
};

export interface IGloveProps { }

const Glove: React.FC<IGloveProps> = (props) => {
    const { nodes, materials } = useGLTF("/glove.glb") as GLTFResult
    const snap = useSnapshot(state) as any;

    useFrame((state, delta) => {    
        easing.dampC(materials.lambert2.color, snap.color, 0.25, delta)
    })

    const stateString = JSON.stringify(snap);

    return <>
        <group {...props} dispose={null} key={stateString}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.r_handMeshNode.geometry}
                material={materials.lambert2}
                rotation={[0, Math.PI, Math.PI]}
            />
        </group>
    </>
}

export default Glove;