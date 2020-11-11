import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Axios from "axios";

const Main = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="d-flex flex-col">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) => {
                            return <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <Link to="/edit">Edit</Link>
                                        <Link to={`/show/${product.id}`}>Details</Link>
                                    </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Main;