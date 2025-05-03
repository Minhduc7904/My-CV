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

const Company = styled.h4`
  font-size: 14px; /* Smaller font size */
  margin: 0 0 2px 0; /* Reduced margin */
  color: #333;
  font-weight: bold;
`;

const Position = styled.div`
  font-size: 13px; /* Smaller font size */
  margin: 0 0 2px 0; /* Reduced margin */
  font-weight: 500;
`;

const Period = styled.div`
  font-size: 12px; /* Smaller font size */
  color: #666;
  font-style: italic;
  margin-bottom: 2px; /* Reduced margin */
  display: inline-block;
`;

const Description = styled.div`
  font-size: 12px; /* Smaller font size */
  color: #444;
  line-height: 1.3; /* Tighter line height */
  margin-bottom: 4px;
`;

const Technologies = styled.div`
  font-size: 11px; /* Smaller font size */
  color: #0066cc;
  font-style: italic;
  margin-bottom: 3px;
`;

const GithubLink = styled.a`
  font-size: 11px; /* Smaller font size */
  color: #0066cc;
  text-decoration: none;
  display: block;
  margin-bottom: 3px;

  &:hover {
    text-decoration: underline;
  }
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

const ExperienceItem = ({ company, position, period, description, responsibilities, technologies, github }) => {
  // Function to convert URLs in text to clickable links
  const createMarkup = (text) => {
    if (!text) return { __html: '' };

    // Regular expression to find URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Replace URLs with anchor tags
    const htmlContent = text.replace(urlRegex, url =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: none;">${url}</a>`
    );

    return { __html: htmlContent };
  };
  return (
    <ItemContainer>
      <LeftColumn>
        <Company>{company}</Company>
        <Position>{position}</Position>
        <Period>{period}</Period>
      </LeftColumn>
      <RightColumn>
        {description && <Description dangerouslySetInnerHTML={createMarkup(description)} />}
        {github && <GithubLink href={github} target="_blank" rel="noopener noreferrer"><strong>GitHub:</strong> {github}</GithubLink>}
        {technologies && <Technologies><strong>Technologies:</strong> {technologies}</Technologies>}
        {responsibilities && responsibilities.length > 0 && (
          <BulletList>
            {responsibilities.map((responsibility, index) => (
              <BulletItem key={index}>{responsibility}</BulletItem>
            ))}
          </BulletList>
        )}
      </RightColumn>
    </ItemContainer>
  );
};

export default ExperienceItem;
