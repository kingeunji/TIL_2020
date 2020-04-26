import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import { createGlobalStyle } from 'styled-components'

import { TodoProvider } from './TodoContext';
import SignupForm from './components/SignupForm'
import SignupTemplate from './components/SignupTemplate'

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle `
    body {
        background: #e9ecef;
    }
`;


function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path="/signup">
                    <SignupTemplate>
                        <SignupForm/>
                    </SignupTemplate>
                </Route>
                <Route path="/todo">
                    <TodoProvider>
                      <TodoTemplate>
                          <TodoHead/>
                          <TodoList>
                              <TodoItem/>
                          </TodoList>
                          <TodoCreate/>
                      </TodoTemplate>
                    </TodoProvider>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;