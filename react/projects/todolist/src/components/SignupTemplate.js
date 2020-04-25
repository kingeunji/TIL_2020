import React from "react";
import styled from 'styled-components';

const SignupTemplateBlock = styled.div`
  width: 512px;
  height: 512px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function SignupTemplate({children}) {
    return <SignupTemplateBlock> { children } </SignupTemplateBlock>;
}

export default SignupTemplate;