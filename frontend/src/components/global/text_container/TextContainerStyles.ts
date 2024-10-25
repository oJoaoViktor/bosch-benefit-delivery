import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const LabelText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vh;

    &>h1{
        color: ${colors.grey}
    }
    &>p{
        color: ${colors.lightGrey}
    }
`