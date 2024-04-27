import React from 'react';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei";
import Html from '../components/3d/Html'



const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background: #fff;
    color: #333;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    right: 100px;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export default function HTML () {
    return(
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Html />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                In my toolkit, HTML isn't just a language; it's a medium through which I weave creativity and functionality.                
            </Desc>
        </>
    );
};