import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Reduced gap */
`;

const SkillCategory = styled.div`
  margin-bottom: 5px; /* Reduced margin */
  width: 100%;
`;

const CategoryTitle = styled.h4`
  font-size: 13px; /* Smaller font size */
  margin: 0 0 3px 0; /* Reduced margin */
  color: #333;
  font-weight: bold;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Reduced gap */
`;

const Skill = styled.span`
  background-color: #f0f0f0;
  padding: 2px 6px; /* Reduced padding */
  border-radius: 10px; /* Smaller border radius */
  font-size: 11px; /* Smaller font size */
  color: #333;
`;

const Skills = ({ categories }) => {
  return (
    <SkillsContainer>
      {categories.map((category, index) => (
        <SkillCategory key={index}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <SkillList>
            {category.skills.map((skill, skillIndex) => (
              <Skill key={skillIndex}>{skill}</Skill>
            ))}
          </SkillList>
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
