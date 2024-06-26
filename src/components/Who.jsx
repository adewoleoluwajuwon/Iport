import styled from 'styled-components';

import React from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
//Left side of hero
const Left = styled.div`
  flex: 1;
  
  @media only screen and (max-width: 768px){
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 44px;

  @media only screen and (max-width: 768px){
    font-size: 25px;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
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
`;

const Button = styled.button`
  background: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Who() {
  return (
    <Section>
      <Container>
        <Left>{/* 3d model */}
          <Canvas camera={{fov:25, position:[5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>
            Think outside the square space
          </Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am i?</Subtitle>
          </WhatIDo>
          <Desc>A creative front-end developer with passion for the arts.</Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
}
