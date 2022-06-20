import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h2>Area dos posts</h2>
        </main>
      </div>
    </>
  );
}
