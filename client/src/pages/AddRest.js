import React, { useState } from 'react'

export default function AddRest () {

    const [shop, setShop] = useState({
        name: '',
        imgUrl: '',
        address: '',
        tel: '',
        type: '',
        longitude: '',
        latitude: '',
    });

    const [error, seterror] = useState('')

    const handleChange = e => {
        setShop({
            ...shop,
            [e.target.name]: e.target.value,
        })
    };

    // onChange function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (
        //     !user.name ||
        //     !user.email ||
        //     !user.password ||
        //     !user.address ||
        //     !user.tel ||
        //     !user.latitude ||
        //     !user.longitude
        // ) {
        //     seterror('Parameter cannot be empty');
        //     return false;
        // }

        fetch('/users/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shop)
        })
            .then(res => res.json())
            .then(res => {
                seterror(res.msg)
            })
    }




    return (
        <div>

            图片，名字，地址，电话号码，餐厅种类（中餐，西餐，美式快餐等等），餐厅地址数据需要包括经纬度，可以不展示，但要创建。

            <h1>Create a restaurant</h1>

            name: '',
            imgUrl: '',
            address: '',
            tel: '',
            type:'',
            longitude: '',
            latitude: '',

            <form onSubmit={handleSubmit}>
                <p>
                    name:
                    <input type="text" placeholder="Name" name="name" onChange={handleChange} />
                </p>
                <p>
                    email:
                    <input readOnly type="text" placeholder="Email" name="email" onChange={handleChange} />
                </p>
                <p>
                    password:
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                </p>
                <p>
                    tel:
                    <input type="tel" placeholder="tel" name="tel" onChange={handleChange} />
                </p>
                <p>
                    address:
                    <input type="text" placeholder="address" name="address" onChange={handleChange} />
                </p>
                <p>
                    longitude:
                    <input type="number" step="0.0000001" placeholder="longitude" name="longitude" onChange={handleChange} />
                </p>
                <p>
                    latitude:
                    <input type="number" step="0.0000001" placeholder="latitude" name="latitude" onChange={handleChange} />
                </p>

                <button type="submit">Sign Up</button>

            </form>
            {error && <h4>{error}</h4>}

        </div>
    )
}
