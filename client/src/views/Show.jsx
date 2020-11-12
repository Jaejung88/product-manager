import {useState, useEffect} from "react";
import Axios from "axios"

const Show = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    },[props])

    return(
        <div>
            <h4>Title: {product.title}</h4>
            <p>Price: $ {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default Show;