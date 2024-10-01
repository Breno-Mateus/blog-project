import { Title, FormStyle, FormControl, LabelStyle, InputStyle, TextareaStyle } from "./style"

import { useState } from "react"

import blogFetch from "../../axios/config"

import { useNavigate } from "react-router-dom"

const NewPost = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e) => {
        e.preventDefault()

        const post = {title, body, userId: 1}
        
        await blogFetch.post("/posts", {
            body: post,
        })

        navigate("/")
    }
    return(
        <div>
            <Title>Inserir novo post:</Title>
            <FormStyle onSubmit={(e) => createPost(e)}>
                <FormControl>
                    <LabelStyle htmlFor="title">Título:</LabelStyle>
                    <InputStyle type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)}/>
                </FormControl>
                
                <FormControl>
                    <LabelStyle htmlFor="title">Conteúdo:</LabelStyle>
                    <TextareaStyle name="body" id="body" placeholder="Digite o conteúdo" onChange={(e) => setBody(e.target.value)}/>
                </FormControl>

                <InputStyle type="submit" value="Criar post"/>
            </FormStyle>
        </div>
    )
}

export default NewPost