import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const InputContainer = styled.input`
    width: 50vh;
    height: 5vh;
    padding: 1vh;
    margin: 2vh;
    color: ${colors.grey};
    background-color: ${colors.inputWhite};
    border: 1px solid ${colors.shadowGrey};
    outline: none;

    &:focus{
        border: 1px solid ${colors.lightGrey}
    }
`