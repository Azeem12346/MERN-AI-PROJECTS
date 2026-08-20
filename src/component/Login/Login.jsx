import React from 'react';
import styles from './Login.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.loginCard}>

        <div className={styles.loginCardTitle}>
          <h1> Login &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <FontAwesomeIcon icon={faKey} /></h1>
        </div>

        <div className={styles.googleBtn}>
         <FontAwesomeIcon icon={faGoogle}  />  Sign in with Google </div>

      </div>
    </div>
  );
};

export default Login;