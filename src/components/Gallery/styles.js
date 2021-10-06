import styled from 'styled-components';
import { Link } from "gatsby";

export const BoxAll = styled.div`
    padding: 4rem 0;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
`;

export const Box = styled.div`
    width: 30%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 0;
    margin: 1rem;
    cursor: pointer;
    border-radius: 25%;
`;

export const Image = styled.img`
    width: 16rem;
    height: 20rem;
`;

export const Text = styled.p`
    font-size: 1.1em;
    font-weight: 600;
`;

export const LinkRota = styled(Link)`
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 600;
    color: #e6cb57;
    padding: 4rem;
    margin-top: 4rem;

    &:hover {
        color: #FFF;
    }
`;