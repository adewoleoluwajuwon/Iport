import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import HTML from './HTML'
import CSS from './CSS'
import Reaact from './Reaact'


const data = [
  "HTML",
  "CSS",
  "React.js",
  "Javascript",
  "Git & Github"
];

const Section = styled.div `
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
const Left = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #fff;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #FFB6C1;
    font-size: 24px;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
            width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
export default function Skills () {
  const [skills, setSkills] = useState("HTML")
  return(
    <Section>
      <Container>
        <Left>
          <List>
            {data.map(item => (
              <ListItem key={item} text= {item} onClick={() => setSkills(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {skills === "HTML" ? (
            <HTML/>
          ) : skills === "CSS" ? (
            <CSS/>
          ) : (
            <Reaact/>
          )}
        </Right>
      </Container>
    </Section>
  )
};