import React from 'react'
import { FooterContainer, FooterNav, FooterNavItem } from './styles'

const Footer: React.FC = () => {
    return(
        <FooterContainer>
        <FooterNav>
            <FooterNavItem>Terms and Conditions</FooterNavItem>
            <FooterNavItem>Privacy Notice</FooterNavItem>
        </FooterNav>
        </FooterContainer>
    )
}

export default Footer