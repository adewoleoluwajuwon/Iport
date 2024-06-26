import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  scroll-snap-align: start;

  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
  }
  /* Additional styles for larger screens */
  @media only screen and (min-width: 769px){
    max-width: 1200px; /* Adjust the maximum width as needed */
    margin: 0 auto; /* Center the sections horizontally */
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 80px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px){
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background: #da4ea2;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/MyLogo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}
