import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// // Setup with Storyblok
// // The Storyblok Client
// import Storyblok from "../lib/storyblok"
// import useStoryblok from "../lib/storyblok-hook"
// import Page from '../components/Page'
// import Layout from '../components/Layout'

// export default function Home(props) {
//   // the Storyblok hook to enable live updates
//   const story = useStoryblok(props.story)

//   return (
//     <div>
//       <main>
//         { story ? <Layout><Page content={story.content} /></Layout> : null }
//       </main>
//     </div>
//   )
// }

// export async function getStaticProps(context) {
//   let slug = "home"
//   let params = {
//     version: "draft", // or 'published'
//     "resolve_relations": "featured-articles.articles"
//   }

//   if (context.preview) {
//     params.version = "draft"
//     params.cv = Date.now()
//   }

//   let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

//   return {
//     props: {
//       story: data ? data.story : false,
//       preview: context.preview || false
//     },
//     revalidate: 10,
//   }
// }
