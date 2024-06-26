import React from 'react';
import styled from 'styled-components';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Skills from './components/Skills';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Skills />
      <Contact />
    </Container>
  );
}

export default App;
