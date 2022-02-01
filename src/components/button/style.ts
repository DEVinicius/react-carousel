import styled from "styled-components";

interface IContainer {
    height: string;
    width: string;
}

export const Container = styled.button<IContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: ${props => props.height};
    width: ${props => props.width};

    &:hover {
        cursor: pointer;
    }
`