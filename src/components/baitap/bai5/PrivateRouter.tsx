import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivateRouter() {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (check) {
            navigate('/account');
        } else {
            navigate('/login');
        }
    }, [check, navigate]);
    return (
        <div>
            PrivateRouter
        </div>
    );
}
