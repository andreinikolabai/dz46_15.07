import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Список користувачів</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} {` `}
                        <Link to={`/albums?userId=${user.id}`}><button>Album</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;