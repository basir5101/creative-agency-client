import React from 'react';

const Footer = () => {
    const handleBlur = (e) =>{

    }
    const handleFormSubmit = (e) =>{

    }
    return (
        <footer className = 'bg-warning'>
            <div className="row p-5">
                <div className="col-md-6">
                    <h3>Let us handle your project, professionally</h3>
                    <p className="pt-3">
                        With well written codes, we build amazing apps for all platforms, mobile and web apps in genetal
                    </p>
                </div>
                <div className="col-md-6">
                    <form onSubmit = {handleFormSubmit}className = 'jumbotron' >
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" className="form-control" name = 'email' placeholder="Your email address" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" className="form-control" name = 'company' placeholder="Your name / company's name" required/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur}type="text" name = 'message' placeholder = 'Your message' className="form-control"  rows="5"></textarea>
                        </div>
                        <button className="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
            <p className = 'text-center p-2'><small>copyright @ Orange labs 2020</small></p>
        </footer>
    );
};

export default Footer;