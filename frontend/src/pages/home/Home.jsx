import React from "react";
import * as S from "./HomeStyles"
import ContainerHome from "../../containers/container_home/ContainerHome";

const Home = () =>{
    return(
        <S.HomeBackground>
            <ContainerHome/>
        </S.HomeBackground>
    )
}

export default Home