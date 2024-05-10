import { Button, Card, Col, Row, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Product() {
    const navigate = useNavigate();

    const [ data, setData ] = useState([]);
    const [ skip, setSkip ] = useState(0);

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products?limit=6&skip=${skip}`)
        .then(({data}) => {
            console.log(data)
            setData((prevState) => {
                if (skip === 0) {
                    return data?.products
                }
                return [...prevState, ...data?.products]
            });
        })
        .catch((err) => {
            setData([]);
        })
    }, [skip])

    const handleFecthViewMore = () => {
        setSkip((prevState) => prevState + 6);
    };

    return (
        <Content style={{ minHeight: "100vh" }}>
            <Row gutter={[8,8]} >
                {data?.map((item, index) => {
                    return (
                        <Col span={8} key={index} >
                            <Card>
                                <img src={item?.thumbnail} width={100} height={100} alt="product-image"></img><br></br>
                                <Typography.Text>{item?.title}</Typography.Text>
                                <br></br>
                                <Button
                                    onClick={() => {
                                        navigate(`/products/${item?.id}`)
                                    }}
                                    type="primary"
                                >
                                    View Detail
                                </Button>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <div>
                <Button
                    onClick={() => {
                        handleFecthViewMore();
                    }}
                    type="primary"
                >
                    View More
                </Button>
            </div>
        </Content>
    );
}

export default Product;
