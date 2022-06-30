import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joseaugustoss.png",
      name: "Jose Augustoss",
      role: "Engenheiro de Software",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋," },
      {
        type: "paragraph",
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio  criar todo o design e codar na unha, mas consegui 💪🏻{" "}',
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback 👉" },
      { type: "link", content: '<a href=""> devonlane.design</a>' },
    ],
    publishedAt: new Date("2022-06-30 15:42:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋," },
      {
        type: "paragraph",
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio  criar todo o design e codar na unha, mas consegui 💪🏻{" "}',
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback 👉" },
      { type: "link", content: '<a href=""> devonlane.design</a>' },
    ],
    publishedAt: new Date("2022-06-28 10:12:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
