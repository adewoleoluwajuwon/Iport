/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 css.gltf --transform 
Files: css.gltf [20.11KB] > C:\Users\USER\Documents\csslogo\css-transformed.glb [9.9KB] (51%)
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/css-logo-3d-model-17b34c2b98714c6799544939f476eed3
Title: CSS logo 3d model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/css-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.005']} position={[-9.985, 195.975, 19.288]} rotation={[0, -0.007, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} position={[-10.701, 117.48, 23.975]} rotation={[Math.PI / 2, 0, 1.578]} scale={0.01} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.003']} position={[-10.701, 117.48, 23.975]} rotation={[Math.PI / 2, 0, 1.578]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/css-transformed.glb')
