import React from 'react';
import { connect } from 'react-redux';
import EducationCard from './education-card';
import List from './List';

const Education = (props) => {
  const listStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
  };

  return (
    <List
      items={props.education.map((school, i) => {
        return <EducationCard {...school} key={i} />;
      })}
      style={listStyle}
    />
  );
};

Education.propTypes = {
  education: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    education: state.education,
  };
};

export default connect(mapStateToProps)(Education);
