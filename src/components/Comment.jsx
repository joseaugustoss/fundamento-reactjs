import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/joseaugustoss.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Augusto</strong>
              <time title="20 de junho 2022" dateTime="2022-06-20">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash sise={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
      </div>
      <footer>
        <ThumbsUp />
        Aplaudir <span>20</span>
      </footer>
    </div>
  );
}
