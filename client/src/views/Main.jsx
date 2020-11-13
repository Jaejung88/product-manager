import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Axios from "axios";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [deleteCheck, setDeleteCheck] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [deleteCheck])

    const handleDelete = (id, title) => {
        Axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                if (res.data.results) {
                    setDeleteCheck(!deleteCheck)
                    console.log(`Item (Title: [${title}]) is deleted`)
                }
            })
            .catch(err => console.log(err))
    }

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
                                        <Link to={`/edit/${product._id}`}>Edit</Link>
                                        <Link to={`/show/${product._id}`}>Details</Link>
                                        <button className="btn btn-danger" onClick={() => handleDelete(product._id, product.title)}>Delete</button>
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