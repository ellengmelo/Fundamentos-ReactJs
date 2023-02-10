import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Ellen Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat quos doloribus beatae hic adipisci. Excepturi optio, quas porro ea praesentium tempora? Ratione ipsa nostrum libero vel eos eaque quam!"
      />
      <Post
        author="Thiago Fernandes"
        content="Thiagão empregado semana que vem!"
      />
    </div>
  )
}
