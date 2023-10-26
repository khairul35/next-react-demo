"use client";

import User from '../type/User';

const UserTable = ({ user }: { user: User }) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>:</td>
                        <td>{user.company.name}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>:</td>
                        <td>
                            <a
                                href={`http://${user.website}`}
                                target="_blank"
                                className="cursor-pointer text-blue-400"
                            >
                                {user.website}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UserTable;
