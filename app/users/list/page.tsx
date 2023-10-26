import { useAppSelector } from '@/redux/hooks';
import React from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UsersPage = () => {
    // const username = useAppSelector((state) => state.auth.value.username);
    // const currentUser = useSelector(credential);
    // const res = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     { next: { revalidate: 10 } }
    // );
    // const users: User[] = await res.json();
  return (
    <>
    {/* {{username}} */}
     <h1>Users</h1>
     {/* <table className="table table-bordered">
        <thead>
            <th>
                Name | Username
            </th>
            <th>
                Email
            </th>
        </thead>
        { users.map(user => 
            <tr key={user.id}>
                <td>{user.name} | @{user.username}</td>
                <td>{user.email}</td>
            </tr>
        )}
     </table> */}
    </>
  )
}

export default UsersPage