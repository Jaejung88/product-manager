import {useState, useEffect} from "react";
import Axios from "axios"
import {navigate} from "@reach/router";
import ProductForm from "../components/ProductForm";

const Edit = (props) => {
    const [form, setForm] = useState({
        title:"",
        price:0,
        description:""
    })

    const [errors, setErrors] = useState({
        title:"",
        price:"",
        descriptions:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setForm(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/products/edit/${props._id}`, form)
            .then(res =>  navigate(`/show/${props._id}`))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2 className="text-center">Edit Product</h2>
            <ProductForm
                form={form}
                errors={errors}
                handleSubmit={handleUpdate}
                handleChange={handleChange}
                submitValue="Edit Product"
            />
        </div>
    );
}

export default Edit;