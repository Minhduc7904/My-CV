import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 14px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 5px;
`;

const Name = styled.h1`
  font-size: 26px;
  margin: 0;
  color: #222;
`;

const JobTitle = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  font-size: 10.5px;
  line-height: 1.35;
`;

const ContactItem = styled.div`
  color: #333;
`;

const ContactLink = styled.a`
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const externalUrl = (value) => {
  if (!value) return '';
  return value.startsWith('http') ? value : `https://${value}`;
};

const Header = ({ name, title, email, phone, dateOfBirth, location, github, linkedin, portfolio }) => {
  return (
    <HeaderContainer>
      <NameRow>
        <Name>{name}</Name>
        <JobTitle>{title}</JobTitle>
      </NameRow>
      <ContactInfo>
        {email && <ContactItem>Email: {email}</ContactItem>}
        {phone && <ContactItem>Phone: {phone}</ContactItem>}
        {dateOfBirth && <ContactItem>DOB: {dateOfBirth}</ContactItem>}
        {github && (
          <ContactItem>
            GitHub: <ContactLink href={externalUrl(github)} target="_blank" rel="noopener noreferrer">{github}</ContactLink>
          </ContactItem>
        )}
        {linkedin && (
          <ContactItem>
            LinkedIn: <ContactLink href={externalUrl(linkedin)} target="_blank" rel="noopener noreferrer">{linkedin}</ContactLink>
          </ContactItem>
        )}
        {portfolio && (
          <ContactItem>
            Portfolio: <ContactLink href={externalUrl(portfolio)} target="_blank" rel="noopener noreferrer">{portfolio}</ContactLink>
          </ContactItem>
        )}
        {location && <ContactItem>Location: {location}</ContactItem>}
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;
