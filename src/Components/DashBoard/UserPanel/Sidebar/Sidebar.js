import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmin] = useState([]);


    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/admins')
        .then(res => res.json())
        .then(data => {
            setAdmin(data);
        })
    },[])

    const admin = admins.filter(ad => ad.email === loggedInUser.email);

    return (
        <div>
           <div >
                   
                   {
                       admin.length > 0 ? 
                       <div className="d-flex flex-column p-4">
                            <Link to = '/order-list'>
                                <i className="fa fa-plus" aria-hidden="true"></i>  Service List
                            </Link>
                            <Link to = '/addService'>
                                <i className="fa fa-plus" aria-hidden="true"></i>  Add Service
                            </Link>
                            <Link to = '/addAdmin'>
                                <i className="fa fa-plus" aria-hidden="true"></i>  Make Admin
                            </Link>
                       </div> :
                       <div className="d-flex flex-column p-4">
                            <Link to = '/dashboard'>
                                <i className="fa fa-shopping-cart " aria-hidden="true"></i>  Order
                            </Link>
                            <Link to= '/status'>
                                <i className="fa fa-list-alt" aria-hidden="true"></i> Service list
                            </Link>
                            <Link to= '/review'>
                                <i className="fa fa-comment" aria-hidden="true"></i> Review
                            </Link>
                       </div>
        
                   }

           </div>
        </div>
    );
};

export default Sidebar;