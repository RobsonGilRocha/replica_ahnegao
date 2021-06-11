import {AllPotsBox} from './styles'
import { PotsBox, Indice, Separator , Row, LogoPosts} from '../index'
import {useEffect, useState } from 'react'
import {getPosts} from '../../services/posts'
import { useHistory, useParams} from 'react-router-dom'


function AllPots() {
    const [posts, setPosts] = useState([])
    //const [offset, setOffset] = useState(0)
    const {page = 1} = useParams()
    const history = useHistory()

    useEffect(() => {
        async function fetchtPosts(){
            const response = await getPosts(page)
            setPosts(response.data)
        }
        fetchtPosts()
    },[page])

    
    function navigate(num) {
        history.push(`/pages/${Number(page) + num}`)
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return(
        <>
        <Row justifyContent="justifyContent">
                <Row column="column">
                <Separator x='66'y='66'/>
                </Row>
            <AllPotsBox>    
            {posts && posts.map(post => <PotsBox key={post.id} item={post}/> )}
               <LogoPosts/>
                 <Indice navigate={navigate} page={page}/>   
            </AllPotsBox>
            <Row column="column">
                <Separator y='150'x='150'/>
            </Row>
        </Row>    
        </>  
    );
}
export default AllPots;