const ProductForm = (props) => {
    const {form, errors, handleSubmit, handleChange, submitValue} = props;

    return(
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Title:</label>
                <input type="text" name="title" value={form.title} className="form-control" onChange={handleChange}/>
                <span className="text-danger">{errors.title ? errors.title.message : ""}</span><br></br>

                <label >Price:</label>
                <input type="number" name="price" value={form.price} className="form-control" onChange={handleChange}/>
                <span className="text-danger">{errors.price ? errors.price.message : ""}</span><br></br>

                <label >Description:</label>
                <input type="text" name="description" value={form.description} className="form-control" onChange={handleChange}/>
                <span className="text-danger">{errors.description ? errors.description.message : ""}</span><br></br>

                <input type="submit" value={submitValue} className="btn btn-primary my-3" />
            </div>
        </form>
    );
}

export default ProductForm;