import {AllPotsBox} from './styles'
import { PotsBox, Indice, Separator , Row, LogoPosts} from '../index'
import {useEffect, useState } from 'react'
import {getPosts} from '../../services/posts'

function AllPots() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchtPosts(){
            const response = await getPosts()
            setPosts(response.data)
        }
        fetchtPosts()
    },[])
    console.log(posts)

    return(
        <>
        <Row column='column' justifyContent='justifyContent'>
            <Separator x='100'/>
        <AllPotsBox>
            {posts && posts.map(post => <PotsBox key={post.id} item={post}  /> )}
            <Row justifyContent='justifyContent'>
            </Row>
        </AllPotsBox>    
        </Row>
        <LogoPosts/>
        <Indice/>
        </>  
    );
}
export default AllPots;