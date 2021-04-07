import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../../components/Button';
import ButtonGames from '../../components/ButtonGames';
import Footer from '../../components/Footer';
import Toolbar from '../../components/Navigation/Toolbar';
import Sidebar from '../../components/Sidebar';
import api from '../../server/api';

import { Container, Content, Title } from './styles';

interface GamesProps {
    type: string;
    color: string;
    description: string;
    range: number;
    price: number;
    'min-cart-value': number;
    'max-number': number;
}

const Dashboard: React.FC = () => {
    const [showSide, setShowSide] = useState(false);
    const [games , setGames] = useState<GamesProps[]>([])

    const handleSideDrawerClosed = useCallback(() => {
        setShowSide(false);
    }, []);

    const handleSideToggle = useCallback(() => {
        setShowSide(!showSide);
    }, [showSide])


    useEffect(()=> {
        api.get('').then(
            response => {
                setGames(response.data);
            }
        )
    },[])
    console.log(games);
    return (
        <>
            <Toolbar drawerToggleClicked={handleSideToggle} />
            <Sidebar open={showSide} closed={handleSideDrawerClosed} />
            <Container >
                <Content>
                    <Title>RECENT GAMES</Title>
                    <span>Filters</span>
                    {games.map(game => (
                        <ButtonGames type='button' key={game.type} color={game.color}>{game.type}</ButtonGames>
                    ))}
                    <Button>New Bet <FiArrowRight style={{verticalAlign: 'middle'}} /></Button>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default Dashboard;