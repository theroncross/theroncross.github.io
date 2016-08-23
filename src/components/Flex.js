import React from 'react';

const Flex = (props) => {
  const {
    width,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    padding,
    margin,
    background,
    children,
    style,
  } = props;
  const flexStyle = {
    display: 'flex',
    width,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    padding,
    margin,
    background,
    ...style,
  };

  return (
    <div style={flexStyle}>
      {children}
    </div>
  );
};

const { string, object, node } = React.PropTypes;

Flex.propTypes = {
  children: node,
  width: string,
  flexDirection: string,
  flexWrap: string,
  justifyContent: string,
  alignItems: string,
  padding: string,
  margin: string,
  background: string,
  style: object,
};

Flex.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'inherit',
  padding: '0',
  margin: '0',
  background: 'inherit',
};

export default Flex;
