import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 7px;
`;

const SectionTitle = styled.h3`
  font-size: 15px;
  margin: 0 0 4px 0;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2px;
`;

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

export default Section;
