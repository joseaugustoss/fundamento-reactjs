import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/joseaugustoss.png"
          />
          <div className={styles.authorInfo}>
            <strong>José Augusto</strong>
            <span>Web Development</span>
          </div>
        </div>

        <time title="20 de junho 2022" dateTime="2022-06-20">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻{" "}
        </p>
        <p>
          Acesse e deixe seu feedback 👉 <a href=""> devonlane.design</a>
        </p>
        <p>
          <a href=""> #uiux</a> <a href=""> #userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu feedback" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
