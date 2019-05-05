/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/navbar.module.scss';

const NavBar = ({ links }) => (
  <div>
    <nav>
      <ul className={styles.navList}>
        {
          links.map(link => (
            <li key={link.text}>
              <Link
                className={styles.link}
                activeClassName={styles.activeLink}
                to={link.url}
              >
                {link.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </div>
);

export default NavBar;
