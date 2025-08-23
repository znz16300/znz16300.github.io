import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = async () => {
            const authService = await import('../../api/authService');
            await authService.default.logout();
            navigate('/', { replace: true });
        };
        doLogout();
    }, [navigate]);

    return (
        <div>Сторінка виходу</div>
    );
};

export default Logout;
