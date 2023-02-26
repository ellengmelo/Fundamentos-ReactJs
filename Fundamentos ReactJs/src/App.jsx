import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/thiago-mfernandes.png",
      name: 'Thiago Fernandes',
      role: 'CTO',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2023-02-02 20:32:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/ellengmelo.png",
      name: 'Ellen Fernandes',
      role: 'Desktop Developer',
    },
    content: [
      { type: 'paragraph', content: 'Olá👋', },
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2023-02-25 12:15:00'),
  },
]

//iteração

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post />
          }
          )}
        </main>
      </div>
    </div>
  )
}
