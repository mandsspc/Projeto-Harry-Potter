import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
`;

export const Box = styled.div`
    background-color: #FFF;
    border: 3px solid #e6cb57;
    width: 20%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 0;
    margin: 1rem;
    cursor: pointer;
    border-radius: 25%;

    :hover {
        background: #e6cb57;
        border: 3px solid black;
        -webkit-transform: scale(1.1);
    }
`;

export const Image = styled.img`
    width: 10rem;
    height: 14rem;
    border: 3px solid #e6cb57;
    border-radius: 50%;
`;

export const Text = styled.p`
    font-size: 1.1em;
    font-weight: 600;
`;

