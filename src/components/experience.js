import React from 'react';
import { connect } from 'react-redux';
import ExperienceCard from './experience-card';
import List from './List';

const Experience = (props) => {
  const listStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
  };

  return (
    <List
      items={props.experience.map((job, i) => {
        return <ExperienceCard {...job} key={i} />;
      })}
      style={listStyle}
    />
  );
};


Experience.propTypes = {
  experience: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    experience: state.experience
      .sort((a, b) => { return (a.endDate < b.endDate) ? 1 : -1; }),
  };
};

export default connect(mapStateToProps)(Experience);
