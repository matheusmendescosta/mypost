import React from "react";
import Comentario from "../Comentario/Comentario";

import styles from "./Posts.module.css";

function Posts() {
  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.autor}>
          <img
            className={styles.avatar}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGWcsEbJjlmng/profile-displayphoto-shrink_200_200/0/1644321984319?e=1660780800&v=beta&t=hxpnvEynTuQP-0Buu-DfMRCQ13otr-PQKE0q9gzNUxU"
          />
          <div className={styles.autorInfo}>
            <strong>Matheus Mendes</strong>
            <span>Engenheiro de computação Desenvolvedor Front-End na Prosas</span>
          </div>
        </div>

        <time>Publicado há </time>
      </header>

      <div className={styles.conteudo}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque mi sed neque convallis elementum.
          Quisque sagittis interdum urna, et maximus odio sodales eu. Nullam rutrum nisi justo, vitae commodo ex
          molestie et. Mauris quis magna in libero tristique porta. Donec tempus risus in nulla fringilla, et tempor est
          condimentum. Pellentesque sagittis, neque a luctus vulputate, tortor ipsum molestie nibh, non pulvinar nibh
          eros vel nulla. Maecenas eget mi id libero hendrerit aliquam. Fusce id neque vel nisi aliquam elementum
          blandit ut ex. Sed lorem mi, elementum eu consequat ut, dapibus vel magna. Sed nulla eros, eleifend a leo non,
          mollis dictum orci. Nunc ornare maximus dolor id finibus. Nam non massa ac metus rhoncus ultrices a eu erat.
          Sed et pharetra orci, vitae bibendum purus. Nunc efficitur dolor quis sapien tristique, sit amet cursus nisl
          placerat.
        </p>
        <p>
          <a href="#">mathues.com</a>
        </p>
      </div>

      <form className={styles.comentario}>
        <strong>Deixe aqui seu comentário</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <Comentario />
    </article>
  );
}

export default Posts;
