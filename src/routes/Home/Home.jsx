import { useState, useEffect } from "react"
import { Title, DivNews, Text, TitleNews, LinkStyle } from "./style"
import blogFetch from "../../axios/config"

const Home = () => {
    
    const [post, setPost] = useState([])

    const getPosts = async () => {
        try {
            //faz a chamada a api
            const response = await blogFetch.get("/posts")

            //guarda em data o que foi retornado pela api
            const data = response.data

            //mudar o valor da constante post
            setPost(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])
    
    return(
        <div>
            <Title>Últimos posts</Title>
            {post.length === 0 ? (<Text>Carregando...</Text>) : (
                //Vai acessar cada objeto retornado pela api
                post.map((post) => (
                    <DivNews key={post}>
                        <TitleNews>{post.title}</TitleNews>
                        <Text>{post.body}</Text>
                        <LinkStyle to={`/posts/${post.id}`}>Ler mais</LinkStyle>
                    </DivNews>
                ))
            )}
        </div>
    )
}

export default Home