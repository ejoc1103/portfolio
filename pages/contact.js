import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LinkedIn from '../public/LinkedIn.png';
import Github from '../public/github.png';
import { FaPaperPlane } from 'react-icons/fa';

const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  background: ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.textTwo};
  width: 100vw;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  justify-self: center;
`;
const HeaderStyled = styled(motion.div)`
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  grid-column: span 2;
  color: ${({ theme }) => theme.textOne};
`;
const FormStyled = styled(motion.form)`
  display: grid;
  grid-area: form;
  padding: 10px;
  grid-template-columns: 1fr;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  @media (max-width: 400px) {
    justify-items: center;
  }
`;
const ContactPicksStyled = styled(motion.div)`
  display: grid;
  padding: 10px;
  grid-area: soc;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: space-around;
  background-color: ${({ theme }) => theme.textOne};
  border: 10px solid ${({ theme }) => theme.primaryColor};
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
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
  grid-template-areas: 'form form soc';
  grid-column: span 2;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  margin: 2rem;
  @media (max-width: 800px) {
    grid-template-areas: "form" "soc";
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const SendStyled = styled(motion.div)`
  justify-self: center;
  display: grid;
  width: 80%;
  grid-column: span 2;
  overflow: visible;
  border: 10px solid ${({ theme }) => theme.primaryColor};
  margin: 2rem;
  justify-content: center;
  align-content: center;
`;

const SendIconStyled = styled(motion.div)`
  margin: 2rem;
  transform: rotate(45deg);
  justify-content: center;
  align-content: center;
`;

const LabelStyled = styled.label`
  text-align: start;
  font-size: 2em;
  color: ${({ theme }) => theme.textTwo};
  @media (max-width: 400px) {
    font-size: 1em;
    width: 70%;
  }
`;

const SpacerStyled = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 5rem;
  grid-column: span 2;
`;
const InputStyled = styled.input`
  font-size: 2em;
  @media (max-width: 400px) {
    font-size: 1em;
    width: 70%;
  }
`;
const TextAreaStyled = styled.textarea`
  font-size: 2em;
  @media (max-width: 400px) {
    font-size: 1em;
    width: 70%;
  }
`;
const SubmitStyled = styled.input`
  justify-self: end;
  text-align: center;
  font-size: 2em;
  padding: 5px;
  margin-top: 10px;
  width: 30%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textOne};
  @media (max-width: 400px) {
    font-size: 1em;
    width: 70%;
    justify-self: center;
  }
`;
export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendVar = {
    start: {
      x: 0,
      rotate: 45,
    },
    send: {
      rotate: 45,
      x: 2000,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
  };

  const headerVar = {
    start: {
      x: -2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const socialVar = {
    start: {
      x: 2000,
    },
    show: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const formVar = {
    start: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  const sendEmail = (e) => {
    console.log(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);
    console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
    console.log(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
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
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContainerStyled>
      <HeaderStyled variants={headerVar} initial="start" animate="show">
        {loading === true ? <h1>Sending Email</h1> : <h1>Contact Me</h1>}
      </HeaderStyled>
      <SpacerStyled />

      {loading === false ? (
        <MainContentStyled>
          <FormStyled
            variants={formVar}
            initial="start"
            animate="show"
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
          >
            <LabelStyled>Name:</LabelStyled>
            <InputStyled type="text" name="from_name" />
            <LabelStyled>Email:</LabelStyled>
            <InputStyled type="email" name="from_email" />
            <LabelStyled>Phone Number: xxx-xxx-xxxx</LabelStyled>
            <InputStyled
              type="tel"
              name="from_phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <LabelStyled>Message:</LabelStyled>
            <TextAreaStyled name="message" />
            <SubmitStyled type="submit" value="Send" />
          </FormStyled>
          <ContactPicksStyled
            variants={socialVar}
            initial="start"
            animate="show"
          >
            <ImageContainer>
              <a
                href="https://github.com/ejoc1103"
                target="_blank"
                rel="noreferrer"
              >
                <ImageStyled src={Github} alt="Github" />
              </a>
            </ImageContainer>
            <ImageContainer>
              <a
                href="https://www.linkedin.com/in/edjoconnor"
                target="_blank"
                rel="noreferrer"
              >
                <ImageStyled src={LinkedIn} alt="LinkedIn" />
              </a>
            </ImageContainer>
          </ContactPicksStyled>
        </MainContentStyled>
      ) : (
        <SendStyled onChange={() => handleChange()}>
          <SendIconStyled variants={sendVar} initial="start" animate="send">
            <FaPaperPlane size={200} />
          </SendIconStyled>
        </SendStyled>
      )}
      <SpacerStyled />
      <Navbar />
    </ContainerStyled>
  );
}
