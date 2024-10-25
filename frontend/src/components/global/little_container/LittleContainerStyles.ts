import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const LittleBackground = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5vh;
    width: 70vh;
    height: 35vh;
    background-color: white;
    box-shadow: 2px 2px 20px ${colors.shadowGrey};
`