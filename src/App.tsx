import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://img.freepik.com/premium-psd/3d-cartoon-character-isolated-3d-rendering_235528-561.jpg?w=826',
      name: 'Carlos Eduardo',
      role: 'Analista de Sistema',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      { type: 'link', content: '👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2023-02-19 15:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        'https://img.freepik.com/premium-psd/3d-female-cartoon-character-avatar-isolated-3d-rendering_235528-987.jpg?w=82',
      name: 'Amanda Fernado',
      role: 'Lider de Equipe',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },

      { type: 'link', content: ' 👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2023-02-15 22:00:00'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
