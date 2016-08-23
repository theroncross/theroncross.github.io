import React from 'react';
import { Link } from 'react-router';
import Flex from './Flex';
import List from './List';
import Bio from './bio';
import { colors } from './styles';

const Sidebar = () => {
  const routes = [
    <Link to="/">Experience</Link>,
    <Link to="/education">Education</Link>,
    <Link to="/skills">Skills</Link>,
    <Link to="/projects">Projects</Link>,
  ];
  const sidebarStyle = {
    width: '90%',
    minWidth: '200px',
    margin: '0 0 10px',
    padding: '0 3%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.light,
  };
  const navStyle = {
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <Flex style={{ width: '25%', justifyContent: 'center' }}>
      <Flex style={sidebarStyle} >
        <h3>Learn more</h3>
        <List items={routes} style={navStyle} />
        <Bio />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
