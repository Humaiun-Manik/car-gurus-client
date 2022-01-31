import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {

    const { allContext } = useAuth();
    const { user } = allContext;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://glacial-ridge-81046.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you Want To Delete Order?");
        if (proceed) {
            const url = `https://glacial-ridge-81046.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order SuccessFully Deleted');
                        const remaining = orders.filter(orders => orders._id !== id);
                        setOrders(remaining);
                    };
                });
        };
    };

    return (
        <div className='my-5'>
            <Container>
                <div className='text-center my-5 pt-5 section-title'>
                    <h1 className='mt-5'>My All Oders : {orders.length}</h1>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {orders.map((order) => <Col key={order._id}>
                            <Card className='single_service'>
                                <Card.Img className='img-fluid service_img' variant="top" src={order.img} />
                                <Card.Body className='p-4 pb-3'>
                                    <Card.Title className='service_hover w-100'>
                                        <h4 className="card-title">{order.name}</h4>
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        <p>{order.description.slice(0, 158)}</p>
                                        <h5>Price: {order.Price} TK</h5>
                                        <button href="#" className="btn btn-outline-danger" onClick={() => handleDelete(order._id)} >Delete</button>
                                        <button href="#" className="shipping_btn"><Link to="/Shipping">Proceed To Shippnig</Link></button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default MyOrder;