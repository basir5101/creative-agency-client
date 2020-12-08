import React from 'react';

const Contact = () => {
    return (
        <section className = 'container'>
            <div className="row">
                <div className="col-md-5">
                    <div>
                        <h2>Let us handle your project, professionally</h2>
                        <p className = ''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eos, illum ex dicta nam quis minima doloribus excepturi architecto nobis porro deserunt ratione perspiciatis magnam est sint? Ullam, nostrum numquam.</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div>
                        <form>
                            <div className ="form-group">
                                <input type="text" className ="form-control" id="inputEmail" placeholder="enter your email"/>
                            </div>
                            <div className ="form-group">
                                <input type="text" className ="form-control" id="nameOrCompany" placeholder="your name/ company name"/>
                            </div>
                            <div className ="form-group">
                                <textarea placeholder = 'message' className ="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className ="btn btn-dark px-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;