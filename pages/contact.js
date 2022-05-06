import { useRef, useState } from 'react';
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textTwo};
`;
const HeaderStyled = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  font-size: 2.5em;
  color: ${({ theme }) => theme.textOne};
`;
const FormStyled = styled.form`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
`;
const ContactPicksStyled = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.textOne};
  border: 10px solid ${({ theme }) => theme.primaryColor};
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

const MainContentStyled = styled.div`
  justify-self: center;
  display: grid;
  width: 80%;
  grid-template-columns: 2fr 1fr;
  grid-column: span 2;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  margin: 2rem;
`;

const LabelStyled = styled.label`
  text-align: start;
  font-size: 2em;
  color: ${({ theme }) => theme.textTwo};
`;

const SpacerStyled = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 5rem;
  grid-column: span 2;
`;
const InputStyled = styled.input`
  font-size: 2em;
`;
const TextAreaStyled = styled.textarea`
  font-size: 2em;
`;
const SubmitStyled = styled.input`
  justify-self: end;
  text-align: center;
  font-size: 2em;
  padding: 5px;
  width: 30%;
`;
export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
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
          setLoading(false);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContainerStyled>
      <HeaderStyled>
        {loading === true ? <h1>Sending Email</h1> : <h1>Contact Me</h1>}
      </HeaderStyled>
      <SpacerStyled />
      <MainContentStyled>
        <FormStyled ref={form} onSubmit={sendEmail} id='contact-form'>
          <LabelStyled>Name:</LabelStyled>
          <InputStyled type='text' name='from_name' />
          <LabelStyled>Email:</LabelStyled>
          <InputStyled type='email' name='from_email' />
          <LabelStyled>Phone Number:</LabelStyled>
          <InputStyled
            type='tel'
            name='from_phone'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          />
          <LabelStyled tyled>Message:</LabelStyled>
          <TextAreaStyled name='message' />
          <SubmitStyled type='submit' value='Send' />
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
      </MainContentStyled>

      <Navbar />
    </ContainerStyled>
  );
}
