import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-size: 12px;
  line-height: 1.4;
  margin: 0 0 8px 0;
  color: #333;
  text-align: justify;
`;

const HighlightsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const HighlightItem = styled.span`
  background-color: #f0f0f0;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  color: #333;
`;

const Profile = ({ summary, highlights }) => {
  return (
    <ProfileContainer>
      <Summary>{summary}</Summary>
      {highlights && highlights.length > 0 && (
        <HighlightsList>
          {highlights.map((highlight, index) => (
            <HighlightItem key={index}>{highlight}</HighlightItem>
          ))}
        </HighlightsList>
      )}
    </ProfileContainer>
  );
};

export default Profile;
