import {Button, Form} from 'react-bootstrap';
import React, {ChangeEvent, FormEvent} from 'react';

export class Add extends React.Component<{ onCreate: (title: string, fname: string, lname: string, uname: string, pwd: string, discription: string ) => void }, { value: string, fname: string, lname: string, uname: string, pwd: string, discription: string }> {
    constructor(props: { onCreate: (title: string, fname: string, lname: string, uname: string, pwd: string, discription:string ) => void }) {
        super(props);
        this.state = {
            value: '',
            fname: '',
            lname: '',
            uname: '',
            pwd: '',
            discription: '',
        };

    }

    handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        this.setState({
            value: event.target.value,
            fname: event.target.value,
            lname: event.target.value,
            uname: event.target.value,
            pwd: event.target.value,
            discription: event.target.value,
        });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.onCreate(
            this.state.value,
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
                        <Form.Control value={this.state.fname}
                                      onChange={(e) => this.handleChange(e)}
                                      type="text" placeholder="Vorname" style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Nachname</p>
                        <Form.Control value={this.state.lname}
                                      onChange={(e) => this.handleChange(e)}
                                      type="text" placeholder="Nachname" style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Username</p>
                        <Form.Control value={this.state.uname}
                                      onChange={(e) => this.handleChange(e)}
                                      type="text" placeholder="max123" style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Passwort</p>
                        <Form.Control value={this.state.pwd}
                                      onChange={(e) => this.handleChange(e)}
                                      type="password" placeholder="" style={{margin: '8px 0'}}/>
                    </div>
                    <div>
                        <p>Beschreibung</p>
                        <Form.Control value={this.state.value}
                                      onChange={(e) => this.handleChange(e)}
                                      type="text" placeholder="" style={{margin: '8px 0'}}/>
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
