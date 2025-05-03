import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 10px; /* Reduced margin */
`;

const SectionTitle = styled.h3`
  font-size: 16px; /* Smaller font size */
  margin: 0 0 6px 0; /* Reduced margin */
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 3px; /* Reduced padding */
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
