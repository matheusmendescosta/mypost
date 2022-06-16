import React from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1655058402270-de7dd5838ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGWcsEbJjlmng/profile-displayphoto-shrink_200_200/0/1644321984319?e=1660780800&v=beta&t=hxpnvEynTuQP-0Buu-DfMRCQ13otr-PQKE0q9gzNUxU"
        />

        <strong>Matheus Mendes</strong>
        <span>Engenheiro de computação Desenvolvedor Front-End na Prosas</span>
      </div>

      <footer>
        <a href="https://www.instagram.com/1matheusmendes/" target="_blank">
          Instagram <InstagramLogo size={25}/>
        </a>
        <a href="https://twitter.com/batheusmendes" target="_blank">
          Twitter <TwitterLogo size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/matheusmendescosta/" target="_blank">
          Linkedin <LinkedinLogo size={25}/>
        </a>
        <a href="https://github.com/matheusmendescosta/" target="_blank">
          Github <GithubLogo size={25}/>
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
