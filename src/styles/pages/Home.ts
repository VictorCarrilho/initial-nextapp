import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 54px;
        color: ${props => props.theme.colors.text};
        margin-top: 40px;
    }
`
