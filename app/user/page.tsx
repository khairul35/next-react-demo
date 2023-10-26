import styles from './user.module.css';
import User from './type/User';
import UserTable from './components/UserTable';

const getUserData = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { cache: "no-store" }
    );
    return res.json();
}

const User = async () => {
    const users: User[] = await getUserData();
    return (
        <div className={styles.mainContainer}>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>DMS</a></li> 
                    <li><a>Member ({users.length})</a></li> 
                </ul>
            </div>
            <div className="divider border-white" />
            {/* <input placeholder="search" /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {users.map((user: User) => {
                return<div key={user.id}>
                        <div className="p-4 rounded-md border-2 border-violet-500 m-2  shadow-lg shadow-violet-900 hover:bg-violet-900">
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p>@{user.username}</p>
                            <div className="divider border-white" />
                            <UserTable user={user} />
                            <button className=" bg-violet-400 p-2 hover:bg-violet-500 mt-5 rounded-br-lg rounded-tl-lg">
                                Assign Project
                            </button>
                        </div>
                </div>
            })}
            </div>
        </div>
    );
};

export default User;
