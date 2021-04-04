import React from 'react';
import {FiMenu} from 'react-icons/fi'
import { MenuDiv} from './styles';

interface MenuBurgerProps {
    clicked: boolean,
}

const MenuBurger : React.FC<MenuBurgerProps> = ({clicked}) => {
   
    return (
        <MenuDiv onClick={() => clicked}>
            <FiMenu size={80} />
        </MenuDiv>
    )
}

export default MenuBurger;