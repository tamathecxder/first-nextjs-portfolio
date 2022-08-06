import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-111">111-111-111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yudistiraeka.pratama012@gmail.com">yudistiraeka.pratama012@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target={'_blank'} href="https://github.com/tamathecxder">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://linkedin.com/in/yudistira-eka-pratama012">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://instagram.com/distyouugly">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
