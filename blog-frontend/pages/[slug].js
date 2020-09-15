import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import SectionSeparator from '../components/section-separator'
import Layout from '../components/layout'
import { getPage, getAllRoutesWithSlug } from '../lib/api'
import PostTitle from '../components/post-title'
import {Form} from '../components/form'
import {Comments} from '../components/comments'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Post({ page, preview }) {
  const router = useRouter()
  if (!router.isFallback && !page?._id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {page.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <h1>{page?.title}</h1>
              <pre>
                {JSON.stringify(page?.content, null, 2)}</pre>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  console.log({params, preview})
  const data = await getPage(params.slug, preview)
  return {
    props: {
      preview,
      page: data?.page || null,
    },
  }
}

export async function getStaticPaths() {
  const allRoutes = await getAllRoutesWithSlug()
  return {
    paths:
      allRoutes?.map((route) => ({
        params: {
          slug: route.slug
        },
      })) || [],
    fallback: true,
  }
}
