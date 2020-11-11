import { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";
import ProductForm from '../components/ProductForm';

const Create = (props) => {
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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                if (res.data.results) {
                    navigate("/")
                } else {
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
    }

    return(
        <div>
            <h2 className="text-center">Product Manager</h2>
            <ProductForm
                form={form}
                errors={errors}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                submitValue="Create Product"
            />
        </div>
        
    );

}

export default Create;
// <form className="col-5 mx-auto" onSubmit={handleSubmit}>
        //     <h2 className="text-center">Add Widget</h2>
        //     <div className="form-group">
        //         <label>Title: </label>
        //         <input type="text" name="title" value={form.title} className="form-control" onChange={handleChange}/>
        //         <span className="text-danger">{errors.title ? errors.title.message : ""}</span>

        //         <label># of Cogs: </label>
        //         <input type="number" name="cogs" value={form.cogs} className="form-control" onChange={handleChange}/>
        //         <span className="text-danger">{errors.cogs ? errors.cogs.message : ""}</span>

        //         <input type="submit" value="Create" className="btn btn-primary my-5"/>
        //     </div>
        // </form>