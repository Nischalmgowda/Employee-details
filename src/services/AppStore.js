
import axios from "axios"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import HeaderComponent from "../component/HeaderComponent";

const ApiData = 'https://fakestoreapi.com/products'

function AppStore() {
    const [data, setData] = useState([]);
    useEffect(() =>
        async function getData() {
            const response = await axios.get(ApiData);
            setData(response.data);
        }, []);
    return (
        <div>
            <HeaderComponent/>
        <div className="container mt-5">
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card border border-dark">
                            <img src={item.image} alt="not found" height="200px" width="200px" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">ID: {item.id}</p>
                                <p className="card-text">Category: {item.category}</p>
                                <p className="card-text">Price: {item.price}</p>
                                <p className="card-text">Description: {item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
export default AppStore;