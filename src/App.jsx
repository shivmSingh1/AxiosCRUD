import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { getPost } from './services/axios.services';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null)

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getPostData();
  }, [])

  return (
    <>
      <Container className='my-5'>

        <Container fluid style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {data &&
            data.map((currPost) => {
              return (
                <Card className='mb-4 border-0 shadow' style={{ width: '18rem', }} key={currPost.id} >
                  <Card.Body>
                    <Card.Title>User: {currPost.userId}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{currPost.title}</Card.Subtitle>
                    <Card.Text>
                      {currPost.body}
                    </Card.Text>
                    <Button variant='success'>Edit</Button>
                    <Button className='ms-2' variant='danger'>Delete</Button>
                  </Card.Body>
                </Card>
              )
            })
          }
        </Container>
      </Container >
    </>
  )
}

export default App
