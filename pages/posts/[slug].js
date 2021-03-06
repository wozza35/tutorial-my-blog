import {getAllPostSlugs, getPostData} from "../../lib/posts";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export async function getStaticProps({params}) {
  const postData = await getPostData(params.slug)

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{__html: postData.html}} />
      </article>
    </Layout>
  )
}
