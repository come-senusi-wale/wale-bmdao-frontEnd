import { styled } from "styled-components";
import theme from "../../styles/theme";

const { colors } = theme;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`;

export const ImageHolder = styled.div`
    max-width: 24rem;
    img {
        height: auto;
        width: 100%;
    }
`;

export const Text = styled.p`
    font-weight: 500;
    margin-top: 3.9rem;
`;

export const Button = styled.button`
    background-color: ${colors.primaryColor};
    border: transparent;
    border-radius: 0.625rem;
    font-family: inherit;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    &:focus {
        outline: none;
    }
`;
