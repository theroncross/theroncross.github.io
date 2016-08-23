import React from 'react';
import Container from './Map';
import Card from './Card';

const ExperienceCard = (props) => {
  const { title, company, location, startDate, endDate, contributions, lat, lng } = props;

  return (
    <Card
      title={title}
      details={[company, location, `${startDate}-${endDate}`]}
      accomplishments={contributions}
    >
      <div className="map-container">
        <Container
          className="map"
          google={window.google}
          lat={lat}
          lng={lng}
        />
      </div>
    </Card>
  );
};

const { string, number, arrayOf } = React.PropTypes;

ExperienceCard.propTypes = {
  title: string.isRequired,
  company: string.isRequired,
  startDate: string.isRequired,
  endDate: string.isRequired,
  location: string.isRequired,
  contributions: arrayOf(string).isRequired,
  lat: number,
  lng: number,
};

export default ExperienceCard;
