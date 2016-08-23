import React from 'react';
import Card from './Card';

const ProjectCard = (props) => {
  const { name, description, url, source } = props;

  return (
    <Card
      details={[
        <a href={url}>{name}</a>,
        <a href={source}>Github Repo</a>,
      ]}
      accomplishments={[description]}
    />
  );
};

const { string } = React.PropTypes;

ProjectCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  source: string.isRequired,
};

export default ProjectCard;
