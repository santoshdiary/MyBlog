import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import dbservice from '../appwrite/configDb'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => { 
        dbservice.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts