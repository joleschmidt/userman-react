import React from 'react';
import './App.css';
import {Navbar, Button, Row, Col, Container} from 'react-bootstrap';
import {ToDoEntry} from './model/ToDoEntry';
import List from './components/List';
import Add from './components/Add';

class App extends React.Component<{}, { title: string, users: ToDoEntry[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            title: 'Userman',
            users: [],
        }
    }

    changeStatus(user: ToDoEntry) {
        this.setState(state => ({
            users: state.users.map(item =>
                item.id === user.id ? {...item, done: !item.done} as ToDoEntry : item
            )
        }));
    }

    createToDo(discription: string, fname: string, lname: string, uname: string, pwd: string) {
        this.setState(state => ({
            users: [...state.users, new ToDoEntry(discription, fname, lname, uname, pwd)]
        }));
    }

    render() {
        return <div>
            <Navbar bg="light">
                <Navbar.Brand>{this.state.title}</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col md={9}>
                        <h3>Userliste</h3>
                        <List items={this.state.users.filter(todo => !todo.done)}
                              onStatusChange={(user) => this.changeStatus(user)}/>
                    </Col>
                    <Col md={3}>
                        <Add onCreate={(fname, lname, uname, pwd, discription) =>
                            this.createToDo( fname, lname, uname, pwd, discription)}/>

                    </Col>
                </Row>
                <h3>Done</h3>
                <List items={this.state.users.filter(user => user.done)}
                      onStatusChange={(user) => this.changeStatus(user)}/>
            </Container>

        </div>;
    }
}

export default App;
