import { NavBarStyle, LinkNav, Title, Button, LinkStyle} from "./NavBar-style"

const NavBar = () => {
    return(
        <NavBarStyle>
            <Title>
                <LinkStyle to={'/'}>Blog</LinkStyle>
            </Title>

            <LinkNav>
                <li>
                    <LinkStyle to={'/'}>Home</LinkStyle>
                </li>
                <Button>
                    <LinkStyle to={'/new'}>Novo Post</LinkStyle>
                </Button>
            </LinkNav>
        </NavBarStyle>
    )
}

export default NavBar