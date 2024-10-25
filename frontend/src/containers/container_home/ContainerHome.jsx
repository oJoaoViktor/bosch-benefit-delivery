import React from "react";
import * as S from "./ContainerHomeStyles"
import LittleContainer from "../../components/global/little_container/LittleContainer";
import TextContainer from "../../components/global/text_container/TextContainer";

const ContainerHome = () =>{
    return(
        <S.MainContainer>
            <S.ContentContainer>
                <LittleContainer/>
            </S.ContentContainer>
        </S.MainContainer>
    )
}

export default ContainerHome