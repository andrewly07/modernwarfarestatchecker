import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const ContactMain = styled.section`
    padding-top: 2rem;
    width: 80vw;
    margin: 0 auto;
`

const Email = styled.a`
    color: #fff;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    @media (max-width: 500px) {
        font-size: .7rem;
    }
`

const Contact = () => {
    return (
        <ContactMain>
            <Header title="Questions?" subtitle="Shoot Me An Email"/>
            <Email href="mailto:mwstatsquestions@gmail.com">
                mwstatsquestions@gmail.com
            </Email>
        </ContactMain>
    )
}

export default Contact
