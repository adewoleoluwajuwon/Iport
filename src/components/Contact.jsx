import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 110vh;
  }
`;

const Container = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  `;
  
  const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  `;
const Title = styled.h1`
  align-self: flex-start;
  margin-bottom: 1.5rem;
  font-weight: 200;
`;
const Input = styled.input`
  width: 500px;
  margin-bottom: 2rem;
  padding: 20px;
  background: lightgray;
  border-radius: 5px;
  

  @media only screen and (max-width: 768px) {
    width: 250px;
  }
  `;
  const Textarea = styled.textarea`
  width: 500px;
  margin-bottom: 2rem;
  padding: 20px;
  background: lightgray;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 250px;
  }
  `;
  const Button = styled.button`
  width: 500px;
  padding: 20px;
  background: #da4ea2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 290px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Mapcontainer = styled.div`
  width: 95%;
`;



export default function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
          'service_z1r65ej', 
          'template_ftv8k8n', 
          ref.current, 
          'r4kQyc504hyENaf1Q'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true)
          },
          (error) => {
            console.log(error.text);
            setSuccess(false)
          },
        );
};

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" type="text" name="from_name" />
            <Input placeholder="Email" type="email" name="user_email" />
            <Textarea placeholder="Write you message" name="message" rows="10"/>
            <Button type="submit" value="Send">Send</Button>
            {success && 
              "Your message has been sent. We'll get back to you soon :)"
            }
          </Form>
        </Left>
        <Right>
          <Mapcontainer>
            <iframe width="100%" height="600" scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12%20Ewenje%20Street%20Mafoluku%20Oshodi+(Contact%20me)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
          </Mapcontainer>
        </Right>
      </Container>
    </Section>
  );

};
