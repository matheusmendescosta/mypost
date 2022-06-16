import React from 'react';
import styles from './Header.module.css'

import bloggerLogo from '../../assets/blogger-logo.svg'

function Header() {
  return (
    <header className={styles.header}>
        <img src={bloggerLogo} />
        <strong>my post's</strong>
    </header>
  );
}

export default Header;