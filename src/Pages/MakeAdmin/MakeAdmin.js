import React, { useState } from 'react';
import AddNewAdmin from '../../Components/AddNewAdmin/AddNewAdmin';
import Loader from '../../Components/Loader/Loader';
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const MakeAdmin = () => {
    const [loader, setLoader] = useState(true)

    return (
        <section>
            <SidebarHeader />
            <div className="row">
                <div className="col-sm-2">
                    <SideNavbar />
                </div>
                <div className="col-sm-8">
                    <AddNewAdmin />
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;