import Link from 'next/link'
import { Card, Badge, Row, Col } from 'react-bootstrap'

export default function Home(
  { posts }) {
    console.log(posts)
  return (
    <Row className="mt-5">
      {
        posts.nodes.map(post => {
          return (
            <Col
              xs={3}
              key={post.slug}
              >
              <Card>
                <Card.Img variant="top" src={post.featuredImage.node.mediaItemUrl} style={{ maxHeight: '150px' }} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {
                      post.tags.nodes.map(tag => {
                        return (
                          <span className="mr-2" xs={3} key={tag.id}>
                            <Badge variant="primary">{tag.name}</Badge>
                          </span>
                        )
                      })
                    }
                  </div>
                  <Card.Link href={`/posts/${post.slug}`}>View</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
    </Row>
  )

}

export async function getStaticProps() {
  const res = await fetch('http://localhost/wordpressnext/headless-wp-next', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query PostsQuery {
        posts {
          nodes {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            },
            tags {
              nodes {
                name
                id
              }
            }
          }
        }
      }
      `
    })
  })
  const json = await res.json();
  return {
    props: {
      posts: json.data.posts
    }
  }
}
