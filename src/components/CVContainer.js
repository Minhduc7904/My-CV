import React from 'react';
import styled from 'styled-components';

// A4 paper dimensions: 210mm × 297mm
const CVWrapper = styled.div`
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 8mm 10mm; /* Further reduced padding on all sides to maximize space */
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  position: relative;
  font-size: 0.95em; /* Slightly smaller font size to fit more content */

  @media print {
    box-shadow: none;
    margin: 0;
    width: 210mm;
    height: 297mm;
    background: white;
    background-color: white;
    padding: 3mm 3mm; /* Minimal padding for printing */
  }
`;

const CVContainer = ({ children }) => {
  return (
    <CVWrapper className="cv-wrapper">
      {children}
    </CVWrapper>
  );
};

export default CVContainer;
