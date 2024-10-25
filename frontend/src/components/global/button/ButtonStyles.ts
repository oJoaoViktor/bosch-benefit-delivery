import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const MainButton = styled.button`
    width: 50vh;
    height: 5vh;
    padding: 1vh;
    background-color: ${colors.lightGreen};
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;

    &:hover{
        background-color: ${colors.green}
    }
`