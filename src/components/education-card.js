import React from 'react';
import Card from './Card';

const EducationCard = (props) => {
  const { degree, school, location, gradDate, description } = props;

  return (
    <Card
      title={degree}
      details={[school, location, gradDate]}
      accomplishments={[description]}
    />
  );
};

const { string } = React.PropTypes;

EducationCard.propTypes = {
  school: string.isRequired,
  degree: string.isRequired,
  gradDate: string.isRequired,
  location: string.isRequired,
  description: string.isRequired,
};

export default EducationCard;
