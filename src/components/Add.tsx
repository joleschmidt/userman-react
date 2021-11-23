import {Button, Form} from 'react-bootstrap';
import React, {ChangeEvent, FormEvent, useState} from 'react';

export class Add extends React.Component<{ onCreate: (fname: string, lname: string, uname: string, pwd: string, discription: string ) => void }, {fname: string, lname: string, uname: string, pwd: string, discription: string }> {


    constructor(props: { onCreate: (fname: string, lname: string, uname: string, pwd: string, discription: string ) => void }) {
        super(props);

        this.state = {
            fname: 'Jan Ole',
            lname: 'Schmidt',
            uname: 'joleschmidt',
            pwd: '4444',
            discription: '5555',
        };
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.onCreate(
            this.state.fname,
            this.state.lname,
            this.state.uname,
            this.state.pwd,
            this.state.discription
        );
    }

    render() {
        return (
            <div>
                <h3>User erstellen</h3>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <p>Vorname</p>
                        <Form.Control
                            name="fname"
                            value={this.state.fname}
                            onChange={e => this.setState({fname: e.target.value})}
                            type="text"
                            placeholder="Vorname"
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Nachname</p>
                        <Form.Control
                            name="lname"
                            value={this.state.lname}
                            onChange={e => this.setState({lname: e.target.value})}
                            type="text"
                            placeholder="Nachname"
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Username</p>
                        <Form.Control
                            name="uname"
                            value={this.state.uname}
                            onChange={e => this.setState({uname: e.target.value})}
                            type="text" placeholder="max123"
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Passwort</p>
                        <Form.Control
                            name="pwd"
                            value={this.state.pwd}
                            onChange={e => this.setState({pwd: e.target.value})}
                            type="password"
                            placeholder=""
                            style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Beschreibung</p>
                        <Form.Control
                            name="discription"
                            value={this.state.discription}
                            onChange={e => this.setState({discription: e.target.value})}
                            type="text"
                            placeholder=""
                            style={{margin: '8px 0'}}/>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Add;
