import React from 'react';
import { createGlobalStyle } from 'styled-components'

import { TodoProvider } from './TodoContext';
import SignupForm from './components/SignupForm'
import SignupTemplate from './components/SignupTemplate'

const GlobalStyle = createGlobalStyle `
    body {
        background: #e9ecef;
    }
`;


function App() {
    return (
        <TodoProvider>
          <GlobalStyle />
          <SignupTemplate>
              <SignupForm/>
          </SignupTemplate>
        </TodoProvider>
    );
}

export default App;