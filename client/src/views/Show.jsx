import {useState, useEffect} from "react";
import Axios from "axios"
import {Link, navigate} from "@reach/router";

const Show = (props) => {

    const [product, setProduct] = useState({});
    const [deleteCheck, setDeleteCheck] = useState(false);

    const handleDelete = (id, title) => {
        Axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => {
                if (res.data.results) {
                    console.log(res.data.results)
                    console.log(`Item (Title: [${title}]) is deleted`)
                    setDeleteCheck(!deleteCheck)
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    },[props])

    return(
        <div>
            <Link to={`/edit/${product._id}`}>Edit</Link>
            <h4>Title: {product.title}</h4>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(product._id, product.title)}>Delete</button>
        </div>
    );
}

export default Show;