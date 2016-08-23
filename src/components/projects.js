import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from './project-card';
import List from './List';

const Projects = (props) => {
  const listStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
  };

  return (
    <List
      style={listStyle}
      items={props.projects.map((project, i) => {
        return <ProjectCard {...project} key={i} />;
      })}
    />
  );
};

const { arrayOf, object } = React.PropTypes;

Projects.propTypes = {
  projects: arrayOf(object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Projects);
