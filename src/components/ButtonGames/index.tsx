import React, {ButtonHTMLAttributes} from 'react';

import {Container} from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: string;
}

const ButtonGames: React.FC<ButtonProps> = ({
    children, color, ...rest
}) => {
    return (
        <Container color={color} type="button" {...rest}>
           {children}
        </Container>
    );
}

export default ButtonGames;