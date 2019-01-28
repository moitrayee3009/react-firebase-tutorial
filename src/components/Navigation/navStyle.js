import styled from 'styled-components';

const Nav = styled.nav`
ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: black;
    padding-left: 0;
    margin: 0;
        li {
            padding: 20px;
            a {
                color: white;
                text-decoration: none;
            }
        }
}`;

export default Nav;