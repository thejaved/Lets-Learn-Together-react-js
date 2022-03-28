import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    & h2{
        font-size: 8rem;
    }
    & p{
        font-size: 2rem;
    }
    & a{
        padding: 1rem 3rem;
        background: var(--primary-gradient-color);
        margin-top: 1.5rem;
        color: var(--white-color);
        border-radius: 1rem;
    }
`
const Error = () => {
    return (
        <ErrorPage>
            <h2>404</h2>
            <p>The page you are looking for can’t be found.</p>
            <NavLink to='/'>Back To Home</NavLink>
        </ErrorPage>
    )
}
export default Error;