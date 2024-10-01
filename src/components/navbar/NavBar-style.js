import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #17191f;
`

export const Title = styled.h2`
    opacity: 1;
`

export const LinkStyle = styled(Link)`
    color: #fff;
    text-decoration: none;
    opacity: 0.7;
`

export const LinkNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
`

export const Button = styled.li`
    font-weight: bold;
    border: 1px solid #fff;
    padding: .5rem 1rem;
    border-radius: 1rem;
`