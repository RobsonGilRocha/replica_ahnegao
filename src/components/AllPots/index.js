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
        <Row>
            <Separator/>
            <AllPotsBox>    
            {posts && posts.map(post => <PotsBox key={post.id} item={post}  /> )}
               <LogoPosts/>
            </AllPotsBox>
            <Separator/>
        </Row>
                        
            <Indice/>
        </>  
    );
}
export default AllPots;