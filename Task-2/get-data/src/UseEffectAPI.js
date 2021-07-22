
import React, {useState }from 'react';
import * as ReactBootStrap from 'react-bootstrap';
const UseEffectAPI = () => {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState([false]);
        const getUsers = async() =>{
            try{
                const data = await fetch('https://reqres.in/api/users?page=1');
                const realData = await data.json();
                setUsers(realData.data);
                // console.log(users.data);
                setLoading(true);
            }catch(err){
                console.log(err);
            }
            
        }
    return (
        <div className="main">
        <h1>THINKTANK</h1>
        <button className="btn btn-success btn-lg text-center" id="btn" onClick={getUsers}>GET USERS</button>
        <br></br>
        <span>{loading ? (getUsers) :(<ReactBootStrap.Spinner animation="grow" />)}</span>
            <div class="container">
            {
                users.map((curElem)=>{
                    return(
                        <div class="tab">
                            <div class="tab-header">
                                <div class="name">
                                    <img src={curElem.avatar} class="rounded m-5" alt="avatar"/>
                                    <h2 class="mx-3">{curElem.first_name}</h2>
                                    <h4 class="mx-3" style={{color:"#fff"}}>{curElem.last_name}</h4>
                                </div>
                                <div class="email mx-3">
                                    <h3>Email:<br></br>{curElem.email}</h3>
                                </div>
                            </div>
                    
                    </div>
                )
                })
            }
                
    
            </div>
        </div>
    )
}

export default UseEffectAPI
