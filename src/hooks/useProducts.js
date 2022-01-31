import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';
import { useNavigate } from "react-router-dom";

const useProducts = () => {

    const { user } = useFirebase();
    const [services, setServices] = useState([]);
    const path = useNavigate();

    useEffect(() =>
        fetch('https://glacial-ridge-81046.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        , []);

    const handleBuy = (index) => {
        if (user?.email) {
            const buyProduct = services[index];
            buyProduct.email = user.email;
            buyProduct.Status = "Pending";

            fetch('https://glacial-ridge-81046.herokuapp.com/addOrders', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(buyProduct)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        } else {
            path('/login');
        }
    }

    return { services, handleBuy };
};

export default useProducts;