import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="ytvideo">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;