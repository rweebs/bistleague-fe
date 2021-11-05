import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/Logo.module.scss";

const Logo = ({ alt, src, spinSpeed }) => (
  <div className={styles.logoContainer+` ${spinSpeed}`}>
    <img className="logo" alt={alt} src={src} />
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  spinSpeed: PropTypes.string.isRequired
};

export default Logo;
