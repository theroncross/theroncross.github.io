import React from 'react';
import Flex from './Flex';
import List from './List';
import { colors } from './styles';

const Header = () => {
  const links = [
    <a href="https://github.com/theroncross">Github</a>,
    <a href="https://www.linkedin.com/in/theroncross">LinkedIn</a>,
    <a href="https://twitter.com/theroncross">Twitter</a>,
  ];
  const headerStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 10px',
    padding: '15px 0',
    backgroundColor: colors.light,
    borderBottom: `1px solid ${colors.accent}`,
  };
  const linkStyle = {
    width: '40%',
    padding: '10px 0',
    justifyContent: 'space-between',
  };

  return (
    <Flex style={headerStyle} >
      <h2>Theron Cross</h2>
      <h4>theroncross@gmail.com</h4>
      <List items={links} style={linkStyle} />
    </Flex>
  );
};

export default Header;
