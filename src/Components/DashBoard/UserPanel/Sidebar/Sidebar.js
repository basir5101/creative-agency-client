import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { UserContext } from '../../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmin] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/admins')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setAdmin(data);
        })
    },[])

    const admin = admins.filter(ad =>{
       if(ad.email === loggedInUser.email){
           loggedInUser.admin = true;
       }
    });
    console.log(loggedInUser)
  
    return (
        <div>
            {
                loading &&  <ClipLoader
                    style = {{
                        display: 'block',
                        marginLeft: '40%',
                        borderColor: 'red',
                        width: '100%',
                        margin: 'auto',
                    }}
                    size={150}
                    color={"#123abc"}
                />
            }
           <div className = 'bg-warning' style = {{height: '100vh'}}>
                            
                       <div className="d-flex flex-column p-4 text-dark">
                            <Link className = 'nav-link text-dark' to = '/dashboard'>
                                <i className="fa fa-shopping-cart " aria-hidden="true"></i>  Order
                            </Link>
                            <Link className = 'nav-link text-dark' to= '/order-list'>
                                <i className="fa fa-list-alt" aria-hidden="true"></i> Service list
                            </Link>
                            <Link className = 'nav-link text-dark' to= '/review'>
                                <i className="fa fa-comment" aria-hidden="true"></i> Review
                            </Link>
                            {
                                loggedInUser.admin &&
                                <div>
                                    <Link className = 'nav-link text-dark' to = '/service-list'>
                                        <i className="fa fa-list-alt" aria-hidden="true"></i> Order List
                                    </Link>
                                    <Link className = 'nav-link text-dark' to = '/addService'>
                                        <i className="fa fa-plus" aria-hidden="true"></i>  Add Service
                                    </Link>
                                    <Link className = 'nav-link text-dark' to = '/addAdmin'>
                                        <i className="fa fa-plus" aria-hidden="true"></i>  Make Admin
                                    </Link>
                                </div>
                            }
                       </div>
        

           </div>
        </div>
    );
};

export default Sidebar;