import { Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'

function Home() {
    return (
        <Content style={{ minHeight: "100vh" }} >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    minHeight: "100vh"
                }}
            >
                <Typography.Text>Farrell Adra Khalfani</Typography.Text>
            </div>
        </Content>
    )
}

export default Home
