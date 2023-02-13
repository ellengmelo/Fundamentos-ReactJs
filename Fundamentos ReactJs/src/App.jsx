import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Ellen Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat quos doloribus beatae hic adipisci. Excepturi optio, quas porro ea praesentium tempora? Ratione ipsa nostrum libero vel eos eaque quam!"
          />
          <Post
            author="Thiago Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat quos doloribus beatae hic adipisci. Excepturi optio, quas porro ea praesentium tempora? Ratione ipsa nostrum libero vel eos eaque quam!"
          />
        </main>
      </div>
    </div>
  )
}
