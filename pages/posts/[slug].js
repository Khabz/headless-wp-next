import { Image } from 'react-bootstrap';
export default function Post(data) {
    console.log(data)
    return (
        <div className="container">
            <div>
                <Image width="80%" src={data.post.featuredImage.node.mediaItemUrl} />
                <div>
                    <h1 className="mt-2">{data.post.title}</h1>
                    <article dangerouslySetInnerHTML={{ __html: data.post.content }}>
                    </article>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {

    const res = await fetch('http://localhost/wordpressnext/headless-wp-next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                mediaItemUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('http://localhost/wordpressnext/headless-wp-next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                mediaItemUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}