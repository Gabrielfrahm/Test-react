import React, { useCallback, useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
import Sidebar from '../../components/Sidebar';

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
            <Toolbar drawerToggleClicked={!handleSideToggle} />
            <Sidebar open={showSide} closed={!!handleSideDrawerClosed}/>
        </>
    );
}

export default Dashboard; 