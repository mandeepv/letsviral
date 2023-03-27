import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SimpleContactUs({roundedHeaderButton = false})  {

  const emailDataFromLandingPage = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(emailDataFromLandingPage.state.email || "");
  const [isFormsubmitted, setIsFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const Container = tw.div`relative`;
  const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
  Content.defaultProps = {
    // set default padding to 0
    style: { padding: 0 }
  };

  const FormContainer = styled.div`
    ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
    form {
      ${tw`mt-4`}
    }
    h2 {
      ${tw`text-3xl sm:text-4xl font-bold`}
    }
    input,textarea {
      ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

      ::placeholder {
        ${tw`text-gray-500`}
      }
    }
  `;

  const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
  const Column = tw.div`sm:w-5/12 flex flex-col`;
  const InputContainer = tw.div`relative py-5 mt-6`;
  const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
  const Input = tw.input``;
  const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
  const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
  const CancelButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

  const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);


    fetch('https://c1-europe.altogic.com/e:6418617af22caba24c54c0a2/landers', {
      method: form.method,
      body: formData})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      navigate('/success', { state: { submittedData: data } });
    })
    .catch(error => {
      console.error('Error:', error);
    });
    

  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Get Started</h2>
            <form method="post" onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input type="email" name="email"  placeholder="E.g. john@mail.com"  defaultValue={email}/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input type="text" name="name" placeholder="E.g. John Doe"/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="business-name-input">Your Business' Name</Label>
                    <Input type="text" name="businessName"   placeholder="E.g. Hari Textiles"/>
                  </InputContainer>
                </Column>
                <Column>
                <InputContainer>
                    <Label htmlFor="business-industry-input">Your Business' Industry</Label>
                    <Input type="text" name="businessIndustry"  placeholder="E.g. Textiles"/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="phone-number-input">Your Phone Number</Label>
                    <Input type="text" name="number"   placeholder="E.g. +91 90009 90009"/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="location-input">Your Location</Label>
                    <Input type="text" name="location" placeholder="E.g. Delhi"/>
                  </InputContainer>
                </Column>
              </TwoColumn>
                <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
}

export default SimpleContactUs;