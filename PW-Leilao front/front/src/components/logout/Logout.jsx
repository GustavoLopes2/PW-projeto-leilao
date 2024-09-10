import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
    
        history.push('/login');
    };

    React.useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;
