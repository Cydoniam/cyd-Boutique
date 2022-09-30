import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>Page not found</span>
      <h1>404</h1>
      <p className={styles.description}>
        You clicked on the wrong link or the page was removed.
      </p>
      <Link to="/">Go back to main page</Link>
    </div>
  );
};

export default NotFoundBlock;
