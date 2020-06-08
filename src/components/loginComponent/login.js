import React, { Component, Fragment } from 'react';
import {Card, CardHeader, CardBody, Input, Button} from "reactstrap";


class Login extends Component{

    constructor(props){
        super(props);



    }



    render(){
        return(
            <Fragment>
                <Card className="col-4 offset-4" style={{marginTop:"175px"}}> 
                    
                    <CardBody>
                        <h2 style={{textAlign:"center"}}>Login</h2>
                        <div className="form-group">
                            <Input placeholder="Email" type="email"></Input>
                        </div>
                        <div className="form-group">
                            <Input placeholder="Password" type="password"></Input>
                        </div>
                        <div className="form-group">
                            <Button color="success" className="col-12">Login</Button>
                        </div>
                        
                    </CardBody>
                </Card>
            </Fragment>
        );
    }
}

export default Login;