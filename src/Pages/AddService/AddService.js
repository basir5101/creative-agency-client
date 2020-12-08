import React from 'react';
import AddServiceForm from '../../Components/AddServiseForm/AddServiceForm';
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const AddService = () => {
    return (
        <section>
            <SidebarHeader />
            <div className="row">
                <div className="col-sm-2">
                    <SideNavbar />
                </div>
                <div className="col-sm-9">
                    <AddServiceForm />
                </div>
            </div>
        </section>
    );
};

export default AddService;