import { styled } from "linaria/react";

export type ColorBoxProps = {
    backgroundColor: string;
};

export const ColorBox = styled.div`
    background: ${(props: ColorBoxProps) => props.backgroundColor};
    width: 128px;
    height: 128px;
`;
