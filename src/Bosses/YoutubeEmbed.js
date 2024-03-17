import React from "react";
import PropTypes from "prop-types";
/*
YOUTUBE EMBED COMPONENT FOR BOSS PAGES 
*/
const YoutubeEmbed = ({ embedId }) => (
  <div className="ytvideo">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope" //Allowing certain YouTube features
      allowFullScreen
      title="Embedded youtube" //What is displayed when mouse hovers over the iframe
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;