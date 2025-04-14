'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import AppLogo from '../shared/AppLogo';
import AppName from '../shared/AppName';
import { FooterContainer, FooterGrid, FooterCol, FooterBottom, SocialIcons } from './styles';
import { FOOTER_CONTENT } from '@/constants/layoutConstants';

const Footer = () => {
    return (
        <FooterContainer>
            <hr />
            <AppLogo width={50} height={50} />
            <AppName />
            <p>{FOOTER_CONTENT.tagline}</p>
            <SocialIcons>
                <a href={FOOTER_CONTENT.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:instagram" />
                </a>
                <a href={FOOTER_CONTENT.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Icon icon="ic:baseline-whatsapp" />
                </a>
            </SocialIcons>
            <FooterGrid>
                {Object.entries(FOOTER_CONTENT.sections).map(([key, section]) => (
                    <FooterCol key={key}>
                        <h4>{section.title}</h4>
                        {section.links.map((link, index) => (
                            <a key={index} href={link.href}>
                                {link.text}
                            </a>
                        ))}
                    </FooterCol>
                ))}
            </FooterGrid>

            <FooterBottom>
                &copy; {new Date().getFullYear()} PetPal. All rights reserved.
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
