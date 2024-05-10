import { Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [ dataDetail, setDataDetail ] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(({data}) => {
            setDataDetail(data);
        })
        .catch((err) => {
            setDataDetail({});
        })
    }, [])

    return (
        <Content style={{ minHeight: "100vh" }}>
            <img src={dataDetail?.thumbnail} width={100} height={100} alt="product-image"></img><br></br>
            <Typography.Text>
                {dataDetail?.title} <br></br>
                {dataDetail?.brand} <br></br>
                ${dataDetail?.price} <br></br>
            </Typography.Text>
        </Content>
    )
}

export default ProductDetail;
