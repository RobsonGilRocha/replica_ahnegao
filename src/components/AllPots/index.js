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
    
    return(
        <>
        <Row justifyContent="justifyContent">
                <Row column="column">
                <Separator x='66'y='66'/>
                </Row>
            <AllPotsBox>    
            {posts && posts.map(post => <PotsBox key={post.id} item={post}/> )}
               <LogoPosts/>
            </AllPotsBox>
            <Row column="column">
                <Separator y='150'x='150'/>

            </Row>
            
        </Row>
                        
            <Indice/>
        </>  
    );
}
export default AllPots;