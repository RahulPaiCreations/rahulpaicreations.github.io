import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <p>
      Page not found - the path, <code>{location.pathname}</code>, did not match
      any React Router routes.
    </p>
  );
}

PageNotFound.propTypes = propTypes;
