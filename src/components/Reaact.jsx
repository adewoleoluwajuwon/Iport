import React from 'react';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei";
import ReactTD from './3d/ReactTD'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background: #fff;
    color: #000;
    border-radius: 5px;
    position: absolute;
    bottom: 100px;
    right: 100px;

    @media only screen and (max-width: 768px) {
       display: none;
    }
`;


export default function Reaact () {
    return(
        <>        
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <ReactTD />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                React, a powerful toolkit that empowers me to create UI components, integrating functionality & aesthetics.         
            </Desc>
        </>

    );
};
