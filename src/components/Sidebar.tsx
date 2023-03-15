import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/C4D16AQG5Flh7S8W4PQ/profile-displaybackgroundimage-shrink_350_1400/0/1656736696583?e=1682553600&v=beta&t=AJGtlBKLJL-P4iIROdmQhMruGJv5sy_gyjwvHasdk7I"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/juniorlima36.png" />
        <strong>JuniorLima36</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
