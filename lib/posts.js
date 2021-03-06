import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

export async function getAllPosts() {
  return await api.posts.browse()
}

export async function getPostData(slug) {
  return await api.posts.read({slug: slug})
}

export async function getAllPostSlugs() {
  const posts = await api.posts.browse("limit=all&filter=slug")

  return posts.map((post) => {
    return {
      params: {
        slug: post.slug
      }
    }
  })
}
