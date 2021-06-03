import {AllPotsBox} from './styles'
import { PotsBox, Indice } from '../index'
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
        <AllPotsBox>
            {posts && posts.map(post => <PotsBox key={post.id} item={post}  /> )}
            
            Vai Filhão!
            <Indice/>

        </AllPotsBox>    
    );
}

export default AllPots;