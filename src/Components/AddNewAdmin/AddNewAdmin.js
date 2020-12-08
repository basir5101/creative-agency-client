import React from 'react';

const AddNewAdmin = () => {
    return (
        <div>
            <form className="form-inline">
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" id="" placeholder="enter email"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    );
};

export default AddNewAdmin;