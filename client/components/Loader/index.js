import React, { PropTypes } from "react";
import styles from "./index.sass";

const Loader = ({ show, children }) => {
  if (!show) return <div>{children}</div>;

  return (
    <div className={styles.container}>
      {children}
      <div className={styles.overlay}>
        <div className={styles.loader}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Loader;
