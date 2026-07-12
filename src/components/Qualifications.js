import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11.5px;
`;

const SkillRow = styled.div`
  line-height: 1.35;
`;

const SkillCategory = styled.span`
  font-weight: bold;
  color: #222;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 14px;
  margin-top: 4px;
`;

const SubSectionTitle = styled.h4`
  font-size: 12px;
  margin: 0 0 3px 0;
  color: #333;
  font-weight: bold;
`;

const AwardItem = styled.div`
  margin-bottom: 3px;
`;

const AwardName = styled.div`
  font-weight: bold;
  font-size: 11px;
  color: ${({ $highlighted }) => ($highlighted ? '#c99700' : 'inherit')};
`;

const AwardIssuer = styled.div`
  font-size: 10px;
  color: #444;
`;

const LanguageItem = styled.div`
  margin-bottom: 3px;
  line-height: 1.3;
`;

const LanguageNote = styled.div`
  font-size: 10px;
  font-style: italic;
  color: #555;
`;

const Qualifications = ({ skills, languages, awards }) => {
  return (
    <DetailsContainer>
      {skills && skills.length > 0 && (
        <div>
          {skills.map((category, index) => (
            <SkillRow key={index}>
              <SkillCategory>{category.name}:</SkillCategory> {category.skills.join(', ')}
            </SkillRow>
          ))}
        </div>
      )}

      <MetaGrid>
        {awards && awards.length > 0 && (
          <div>
            <SubSectionTitle>Awards</SubSectionTitle>
            {awards.map((award, index) => (
              <AwardItem key={index}>
                <AwardName $highlighted={index === 0}>{award.name} ({award.year})</AwardName>
                <AwardIssuer>{award.issuer}</AwardIssuer>
              </AwardItem>
            ))}
          </div>
        )}

        {languages && languages.length > 0 && (
          <div>
            <SubSectionTitle>Languages</SubSectionTitle>
            {languages.map((lang, index) => (
              <LanguageItem key={index}>
                <div><strong>{lang.language}:</strong> {lang.proficiency}</div>
                {lang.note && <LanguageNote>{lang.note}</LanguageNote>}
              </LanguageItem>
            ))}
          </div>
        )}
      </MetaGrid>
    </DetailsContainer>
  );
};

export default Qualifications;
