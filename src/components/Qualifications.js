import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 11px;
`;

const LeftColumn = styled.div`
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubSection = styled.div`
  margin-bottom: 5px;
`;

const SubSectionTitle = styled.h4`
  font-size: 12px;
  margin: 0 0 3px 0;
  color: #333;
  font-weight: bold;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Skill = styled.span`
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 10px;
  color: #333;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;

const AwardItem = styled.div`
  margin-bottom: 4px;
`;

const AwardName = styled.div`
  font-weight: bold;
  font-size: 11px;
`;

const AwardDescription = styled.div`
  font-size: 10px;
  font-style: italic;
  color: #555;
`;





const Qualifications = ({ skills, languages, awards }) => {
  return (
    <DetailsContainer>
      <LeftColumn>
        {languages && languages.length > 0 && (
          <SubSection>
            <SubSectionTitle>Languages</SubSectionTitle>
            {languages.map((lang, index) => (
              <LanguageItem key={index}>
                <span>{lang.language}</span>
                <span style={{ fontStyle: 'italic' }}>{lang.proficiency}</span>
              </LanguageItem>
            ))}
          </SubSection>
        )}
      </LeftColumn>

        {skills && skills.length > 0 && (
          <SubSection>
            <SubSectionTitle>Skills</SubSectionTitle>
            {skills.map((category, index) => (
              <div key={index}>
                <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '2px' }}>{category.name}</div>
                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <Skill key={skillIndex}>{skill}</Skill>
                  ))}
                </SkillsList>
              </div>
            ))}
          </SubSection>
        )}

        {awards && awards.length > 0 && (
          <SubSection>
            <SubSectionTitle>Awards & Achievements</SubSectionTitle>
            {awards.map((award, index) => (
              <AwardItem key={index}>
                <AwardName>{award.name} ({award.year})</AwardName>
                <div style={{ fontSize: '10px' }}>{award.issuer}</div>
                {award.description && <AwardDescription>{award.description}</AwardDescription>}
              </AwardItem>
            ))}
          </SubSection>
        )}
    </DetailsContainer>
  );
};

export default Qualifications;
