import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ButtonGames from '../../components/ButtonGames';
import Footer from '../../components/Footer';
import Toolbar from '../../components/Navigation/Toolbar';
import Sidebar from '../../components/Sidebar';
import api from '../../server/api';

import { Container, Content, Title, Button } from './styles';

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
    //menu toggle
    const [showSide, setShowSide] = useState(false);
    //state of active button 
    const [active, setActive] = useState(false);
    //state of games of json
    const [games, setGames] = useState<GamesProps[]>([]);
    //state of game selected to user
    const [gameSelected, setGameSelected] = useState('');

    const handleSideDrawerClosed = useCallback(() => {
        setShowSide(false);
    }, []);

    const handleSideToggle = useCallback(() => {
        setShowSide(!showSide);
    }, [showSide])

    const handleClickedInButtonGame = useCallback((gameName) => {
        setGameSelected(gameName);
        console.log(gameName)
        setActive(true);
    }, [])

    useEffect(() => {
        api.get('/types').then(
            response => {
                setGames(response.data);
            }
        ).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <Toolbar drawerToggleClicked={handleSideToggle} />
            <Sidebar open={showSide} closed={handleSideDrawerClosed} />
            <Container >
                <Content>
                    <Title>RECENT GAMES</Title>
                    <span>Filters</span>
                    {games.map(game => (
                        <ButtonGames
                            onClick={() => handleClickedInButtonGame(game.type)}
                            isActive={gameSelected === game.type ? active: false }
                            type='button'
                            key={game.type}
                            color={game.color}
                        >
                            {game.type}
                        </ButtonGames>
                    ))}
                    <Button>New Bet <FiArrowRight style={{ verticalAlign: 'middle' }} /></Button>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default Dashboard;