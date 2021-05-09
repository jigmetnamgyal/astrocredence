import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffafcc;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? "0": "-100%")};
    z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled(FaTimes)`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fff;

`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 960px) {
        grid-template-rows: repeat(6, 60px);
    }
`
export const SideBarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover{
        color: #10bf71;
        transition: 0.2s all ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 40px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline none;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    text-decoration: none;
    &:hover{
        color: #010606;
        transition: 0.2s all ease-in-out;
        background: #fff;
    }

`
