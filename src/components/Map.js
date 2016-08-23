import React from 'react';

import Map, { GoogleApiWrapper as wrapper } from 'google-maps-react';

const Container = (props) => {
  const { google, lat, lng } = props;
  const mapStyle = {
    width: '250px',
    height: '150px',
  };

  return (
    <Map
      google={google}
      center={{ lat, lng }}
      style={mapStyle}
      zoom={10}
      containerStyle={mapStyle}
    />
  );
};

Container.propTypes = {
  google: React.PropTypes.object,
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
};

export default wrapper({
  apiKey: 'AIzaSyAAZoG6QynqijXF7rtKYkmX5zvSa3jMOCM',
})(Container);
