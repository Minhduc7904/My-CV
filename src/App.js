import React from 'react';
import './App.css';
import styled from 'styled-components';
import CVContainer from './components/CVContainer';
import Header from './components/Header';
import Section from './components/Section';
import Profile from './components/Profile';
import EducationItem from './components/EducationItem';
import ExperienceItem from './components/ExperienceItem';
import Qualifications from './components/Qualifications';
// Import CV data from separate file
import cvData from './data/cvData';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const PrintButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }

  @media print {
    display: none;
  }
`;

function App() {
  // CV data is now imported from './data/cvData.js'

  const handlePrint = () => {
    window.print();
  };

  return (
    <AppContainer>
      <PrintButton onClick={handlePrint}>Print CV</PrintButton>
      <CVContainer>
        <Header {...cvData.personalInfo} photoUrl={'470224468_1536748773663994_5966152628384594354_n.jpg'} />

        <Section title="Profile">
          <Profile {...cvData.profile} />
        </Section>

        <Section title="Employment History">
          {cvData.employmentHistory.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </Section>

        <Section title="Education">
          {cvData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </Section>

        <Section title="Qualifications">
          <Qualifications {...cvData.details} />
        </Section>
      </CVContainer>
    </AppContainer>
  );
}

export default App;
