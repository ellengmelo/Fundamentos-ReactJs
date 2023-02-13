import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1673018768594-aab30755edc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      /> 

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/ellengmelo.png" alt="" />

        <strong>Ellen Fernandes</strong>
        <span>Desktop Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}