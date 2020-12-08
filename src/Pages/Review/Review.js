import React from 'react';
import AddReview from '../../Components/AddReview/AddReview';
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const Review = () => {
    return (
        <section>
            <SidebarHeader />
            <div className="row">
                <div className="col-sm-2">
                    <SideNavbar />
                </div>
                <div className="col-sm-8">
                    <AddReview />
                </div>
            </div>
        </section>
    );
};

export default Review;