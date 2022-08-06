import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!,<br />
        I'm Yudistira Eka Pratama
      </SectionTitle>
      <SectionText>
      I am currently a Freelance Web Developer, leaning more towards the Front-end Developer with the technology stack used, namely MERN (MongoDB, Express Js, React Js, Next Js). I am also a UI/UX Designer who has recently been interested in studying design using the Figma software. Have experience building applications with PHP and Laravel programming languages ​​and have also used MySQL as the client database.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/tamathecxder'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;