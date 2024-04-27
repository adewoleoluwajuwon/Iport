import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei";
import Css from '../components/3d/Css'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background: #fff;
    color: #333;
    border-radius: 5px;
    position: absolute;
    top: 200px;
    right: 100px;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export default function CSS () {
    return(
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Css />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                With CSS, I transform static HTML structures into captivating and immersive user experiences.             
            </Desc>        
        </>
    );
};