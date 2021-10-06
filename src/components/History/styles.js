import styled from 'styled-components';
import { Link } from "gatsby";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 6rem;
`;

export const BoxLink = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
`;

export const LinkRota = styled(Link)`
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 600;
    color: #e6cb57;

    &:hover {
        color: #FFF;
    }
`;

export const Image = styled.img`
    width: 20%;
`;

export const BoxText = styled.div`
    display: flex;
    justify-content: center;
`;

export const Text = styled.p`
    width: 70%;
    font-size: 1em;
    color: #FFF;
    line-height: 24px;
    text-align: center;
`;