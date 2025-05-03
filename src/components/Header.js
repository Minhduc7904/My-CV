import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 12px; /* Reduced margin */
  border-bottom: 1px solid #333;
  padding-bottom: 8px; /* Reduced padding */
  display: flex;
  flex-direction: row; /* Changed to row for two-column layout */
  gap: 15px; /* Gap between photo and info */
`;

const PhotoContainer = styled.div`
  flex: 0 0 auto; /* Don't grow or shrink */
  width: 100px; /* Fixed width for photo */
  height: 120px; /* Fixed height for photo */
  overflow: hidden; /* Hide overflow */
  border: 1px solid #ddd; /* Light border */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 100%; /* Fill container */
  height: 100%; /* Fill container */
  object-fit: cover; /* Cover the container */
`;

const InfoContainer = styled.div`
  flex: 1; /* Take remaining space */
  display: flex;
  flex-direction: column;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 2px;
`;

const Name = styled.h1`
  font-size: 24px; /* Smaller font size */
  margin: 0;
  color: #333;
`;

const JobTitle = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: #555;
  font-weight: normal;
`;

const Title = styled.h2`
  font-size: 16px; /* Smaller font size */
  font-weight: normal;
  margin: 0 0 8px 0; /* Reduced margin */
  color: #555;
  display: none; /* Hide the original title since we're showing it next to the name */
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Further reduced gap */
  font-size: 10px; /* Even smaller font size */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px; /* Reduced gap */
`;

const Header = ({ name, title, email, phone, location, linkedin, photoUrl }) => {
  return (
    <HeaderContainer>
      <PhotoContainer>
        {photoUrl ? (
          <Photo src={photoUrl} alt={`${name}'s photo`} />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '10px',
            color: '#777',
            textAlign: 'center',
            padding: '5px'
          }}>
            Add your photo here
          </div>
        )}
      </PhotoContainer>
      
      <InfoContainer>
        <NameContainer>
          <Name>{name}</Name>
          <JobTitle>Software Developer</JobTitle>
        </NameContainer>
        <Title>{title}</Title>
        <ContactInfo>
          {email && <ContactItem><span style={{ fontSize: '9px' }}>📧</span> {email}</ContactItem>}
          {phone && <ContactItem><span style={{ fontSize: '9px' }}>📱</span> {phone}</ContactItem>}
          {location && <ContactItem><span style={{ fontSize: '9px' }}>📍</span> {location}</ContactItem>}
          {linkedin && <ContactItem><span style={{ fontSize: '9px' }}>🔗</span> {linkedin}</ContactItem>}
        </ContactInfo>
      </InfoContainer>
    </HeaderContainer>
  );
};

export default Header;
