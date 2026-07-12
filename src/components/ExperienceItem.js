import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  margin-bottom: 9px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const LeftColumn = styled.div`
  flex: 0 0 30%;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Company = styled.h4`
  font-size: 14px;
  margin: 0 0 2px 0;
  color: #222;
  font-weight: bold;
`;

const Position = styled.div`
  font-size: 13px;
  margin: 0 0 2px 0;
  font-weight: 600;
`;

const Period = styled.div`
  font-size: 11.5px;
  color: #666;
  font-style: italic;
  margin-bottom: 2px;
  display: inline-block;
`;

const Description = styled.div`
  font-size: 12px;
  color: #333;
  line-height: 1.28;
  margin-bottom: 3px;
`;

const GithubLink = styled.a`
  font-size: 10px;
  color: #0066cc;
  text-decoration: none;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`;

const TechnologiesLeft = styled.div`
  font-size: 10px;
  color: #555;
  font-style: italic;
  margin-top: 3px;
  line-height: 1.25;
`;

const GithubLinks = styled.div`
  margin-top: 3px;
  font-size: 10px;
  line-height: 1.25;
`;

const BulletList = styled.ul`
  margin: 2px 0 0 0;
  padding-left: 16px;
`;

const BulletItem = styled.li`
  margin-bottom: 1px;
  font-size: 12px;
  line-height: 1.28;
`;

const ExperienceItem = ({ company, position, period, description, responsibilities, technologies, github, githubLinks }) => {
  const createMarkup = (text) => {
    if (!text) return { __html: '' };
    const urlRegex = /(https?:\/\/[^\s]+)/g;
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
        {githubLinks && githubLinks.length > 0 ? (
          <GithubLinks>
            <span style={{ fontWeight: 'bold' }}>GitHub:</span>{' '}
            {githubLinks.map((link, index) => (
              <React.Fragment key={link.url}>
                <GithubLink href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </GithubLink>
                {index < githubLinks.length - 1 ? ' | ' : ''}
              </React.Fragment>
            ))}
          </GithubLinks>
        ) : github ? (
          <GithubLink href={github} target="_blank" rel="noopener noreferrer" style={{ marginTop: '4px' }}>
            <strong>GitHub:</strong> {github}
          </GithubLink>
        ) : null}
        {technologies && (
          <TechnologiesLeft><strong>Tech:</strong> {technologies}</TechnologiesLeft>
        )}
      </LeftColumn>
      <RightColumn>
        {description && <Description dangerouslySetInnerHTML={createMarkup(description)} />}
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
