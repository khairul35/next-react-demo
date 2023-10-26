import { useAppSelector } from '@/redux/hooks';
import React from 'react'
import List from './list/page';
import { ReduxProvider } from '@/redux/provider';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UsersPage = () => {
    const username = useAppSelector((state) => state.auth.value.username);
    // const currentUser = useSelector(credential);
    // const res = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     { next: { revalidate: 10 } }
    // );
    // const users: User[] = await res.json();
  return (
    <ReduxProvider>
        <List />
    </ReduxProvider>
  )
}

export default UsersPage