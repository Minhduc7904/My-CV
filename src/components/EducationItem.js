import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  margin-bottom: 12px; /* Slightly increased margin between items */
  display: flex;
  flex-direction: row;
  gap: 15px; /* Space between left and right columns */
`;

const LeftColumn = styled.div`
  flex: 0 0 30%; /* Fixed width of 30% */
`;

const RightColumn = styled.div`
  flex: 1; /* Takes the remaining space */
`;

const Institution = styled.h4`
  font-size: 14px; /* Smaller font size */
  margin: 0 0 2px 0; /* Reduced margin */
  color: #333;
  font-weight: bold;
`;

const Degree = styled.div`
  font-size: 13px; /* Smaller font size */
  margin: 0 0 2px 0; /* Reduced margin */
`;

const Period = styled.div`
  font-size: 12px; /* Smaller font size */
  color: #666;
  font-style: italic;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 12px; /* Smaller font size */
  margin: 2px 0 0 0; /* Reduced margin */
  color: #444;
  line-height: 1.3; /* Tighter line height */
`;

const BulletList = styled.ul`
  margin: 2px 0 0 0; /* Reduced margin */
  padding-left: 16px; /* Reduced padding */
`;

const BulletItem = styled.li`
  margin-bottom: 1px; /* Reduced margin */
  font-size: 12px; /* Smaller font size */
  line-height: 1.3; /* Tighter line height */
`;

const EducationItem = ({ institution, degree, period, description, achievements }) => {
  return (
    <ItemContainer>
      <LeftColumn>
        <Institution>{institution}</Institution>
        <Degree>{degree}</Degree>
        <Period>{period}</Period>
      </LeftColumn>
      <RightColumn>
        {description && <Description>{description}</Description>}
        {achievements && achievements.length > 0 && (
          <BulletList>
            {achievements.map((achievement, index) => (
              <BulletItem key={index}>{achievement}</BulletItem>
            ))}
          </BulletList>
        )}
      </RightColumn>
    </ItemContainer>
  );
};

export default EducationItem;
