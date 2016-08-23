import React from 'react';
import Header from './header';
import Sidebar from './Sidebar';
import '../App.css';
import Flex from './Flex';
import { colors } from './styles';

const App = (props) => {
  const appStyle = {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: colors.light,
  };

  return (
    <Flex style={appStyle} >
      <Header />
      <Sidebar />
      {props.children}
    </Flex>
  );
};

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
