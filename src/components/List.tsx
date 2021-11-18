import {Table} from 'react-bootstrap';
import {ToDoEntry} from '../model/ToDoEntry';

function List(props: { items: ToDoEntry[], onStatusChange: (user: ToDoEntry) => void }) {
    const rows = props.items.map((user) => (
        <tr key={user.id}>
            <td>{user.title}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.uname}</td>
            <td>{user.pwd}</td>
            <td>{user.discription}</td>
            <td>
                <button className="btn btn-info" onClick={() => {
                    props.onStatusChange(user)
                }}>
                    {user.done ? 'User wiederherstellen' : 'User löschen'}
                </button>
            </td>
        </tr>
    ));

    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Benutzername</th>
                <th>Passwort</th>
                <th>Beschreibung</th>
                <th>Done</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}

export default List;
