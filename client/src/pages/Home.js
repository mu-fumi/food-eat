import React from 'react'
import { Carousel } from 'antd';

export default function Home () {


    function onChange (a, b, c) {
        console.log(a, b, c);
    }


    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '460px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            <Carousel afterChange={onChange} >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
}
