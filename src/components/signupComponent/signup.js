import React, { Component, Fragment } from 'react';
import { Card, CardBody, Input, Button } from 'reactstrap';

class Signup extends Component{
    render(){
        return(
            <Fragment>
                <Card className="col-4 offset-4" style={{marginTop:"175px"}}>
                    <CardBody>
                        <h2 style={{textAlign:"center"}}>
                            Sign Up
                        </h2>
                        <div className="form-group">
                            <Input placeholder="Email" type="email"></Input>
                        </div>
                        <div className="form-group">
                            <Input placeholder="Password" type="password"></Input>
                        </div>
                        <div className="form-group">
                            <Input placeholder="Confirm Password" type="password"></Input>
                        </div>
                        <div className="form-group">
                            <Button color="primary" className="col-12">Signup</Button>
                        </div>
                    </CardBody>
                </Card>
            </Fragment>
        );
    }
}
export default Signup;