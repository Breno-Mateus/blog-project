import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
`

export const DivNews = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #777;
`

export const Text = styled.p`
    margin-bottom: 1rem;
`

export const TitleNews = styled.h2`
    &::first-letter{
        text-transform: uppercase;
    }
`
export const LinkStyle = styled(Link)`
    background-color: #fff;
    color: #0e1217;
    border: 1px solid #fff;
    opacity: 1;
    padding: .5rem 1rem;
    border-radius: 1rem;
    max-width: 100px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;

    &:hover{
        color: #fff;
        background-color: #0e1217;
    }
`