import React, { useCallback, useState } from 'react';
import Footer from '../../components/Footer';
import Toolbar from '../../components/Navigation/Toolbar';
import Sidebar from '../../components/Sidebar';

import {Container} from './styles';
const Dashboard: React.FC = () => {
    const [showSide, setShowSide] = useState(false);

    const handleSideDrawerClosed = useCallback(() => {
        setShowSide(false);
    }, []);

    const handleSideToggle = useCallback(()=> {
        setShowSide(!showSide);
    }, [showSide])

    return (
        <>
            <Toolbar drawerToggleClicked={handleSideToggle} />
            <Sidebar open={showSide} closed={handleSideDrawerClosed}/>
            <Container >
                <h1>dashboard</h1>
            </Container>
            <Footer />
        </>
    );
}

export default Dashboard; 