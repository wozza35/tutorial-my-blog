import Head from "next/head";
import Layout from "../components/layout";
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts }
  }
}
export default function Home({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1>
          Welcome to my blog
        </h1>

        <ul>
          {allPosts.map(({id, title, slug}) => (
            <li key={id}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
