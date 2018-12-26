import { styled } from "linaria/react";
import { ColorBox, ColorBoxProps } from "./ColorBox";

export type BorderedColorBoxProps = {
    borderColor: string;
} & ColorBoxProps;

export const BorderedColorBox = styled(ColorBox)`
    border: 1px dotted ${(props: BorderedColorBoxProps) => props.borderColor};
`;
