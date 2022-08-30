import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Wrapper>
      <LockIcon icon={faLock} />
      비밀 시청 기록
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  font-weight: bold;
  text-align: left;
  justify-content: left;
  align-items: center;
  display: flex;
  background-color: #ffe9ae;
  padding-left: 30px;
`;

const LockIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
