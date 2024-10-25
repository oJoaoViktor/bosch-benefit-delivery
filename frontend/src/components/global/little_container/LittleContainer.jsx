import React from "react"
import * as S from "./LittleContainerStyles"
import TextContainer from "../text_container/TextContainer"
import Input from "../input/input"
import Button from "../button/Button"

const LittleContainer = () =>{
    return(
        <S.LittleBackground>
            <TextContainer/>
            <Input/>
            <Button/>
        </S.LittleBackground>  
    )
}

export default LittleContainer