import Navbar from './Navbar';
import styled from 'styled-components';
import React from 'react'
import { MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    height: 150vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-item: center;
    justify-content: center;
  }
`;
//Left side of hero
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 2;

  @media only screen and (max-width: 768px){
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  @media only screen and (max-width: 768px){
    text-align: center;
    font-size: 25px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px){
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px){
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px){
    width: 300px;
    height: 300px;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>
            Think. Make. Solve
          </Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>
            I enjoy creating delightful, human centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial 
                color="#fff"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}
