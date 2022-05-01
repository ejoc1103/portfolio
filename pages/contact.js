import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Image from 'next/image';
import Twitter from '../public/twitterIcon.png';
import LinkedIn from '../public/LinkedIn.png';
import Instagram from '../public/InstagramIcon.png';
import Github from '../public/github.png';
//TODO add a loading situation for contact submission
const ContainerStyled = styled.div`
  position: relative;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  text-align: center;
  gap: 5px;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textTwo};
`;
const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 2.5em;
`;
const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;
const ContactPicksStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const ImageStyled = styled(Image)`
  height: 2rem;
  width: 2rem;
`;
const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
export default function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          document.getElementById('contact-form').reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>Contact Me</h1>
      </HeaderStyled>
      <FormStyled ref={form} onSubmit={sendEmail} id='contact-form'>
        <label>Name</label>
        <input type='text' name='from_name' />
        <label>Email</label>
        <input type='email' name='from_email' />
        <label>Phone Number</label>
        <input type='phone number' name='from_phone' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </FormStyled>
      <ContactPicksStyled>
        <ImageContainer>
          <ImageStyled src={Twitter} alt='Twitter' />
        </ImageContainer>
        <ImageContainer>
          <ImageStyled src={Github} alt='Github' />
        </ImageContainer>
        <ImageContainer>
          <ImageStyled src={Instagram} alt='Instagram' />
        </ImageContainer>
        <ImageContainer>
          <ImageStyled src={LinkedIn} alt='LinkedIn' />
        </ImageContainer>
      </ContactPicksStyled>
      <Navbar />
    </ContainerStyled>
  );
}
