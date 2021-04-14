export default function Post( data ) {

}

export async function getStaticProps(context) {

    const res = await fetch('http://localhost/wordpressnext/headless-wp-next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost/wordpressnext/headless-wp-next', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
        })
    })
}