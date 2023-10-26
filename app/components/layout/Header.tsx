"use client"

import Image from 'next/image';
import pic from '@/app/assets/dummy-user.png';

const getUsername = () => {
    return localStorage.getItem('username');
};

const Header = () => {
    return (
        <div className="navbar bg-base-100 border-b border-violet-400 shadow-lg shadow-violet-900">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-violet-300">
                    Highrul.dev
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control text-violet-300">
                    { getUsername() }
                    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {getUsername() == '' ? <></> :
                            <div className="w-10 rounded-full">
                                <Image
                                    src={pic}
                                    alt="Highrul.dev"
                                />
                            </div>
                        }
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between" href="/user">
                            Member
                            {/* <span className="badge">New</span> */}
                        </a>
                        </li>
                        <li><a href="/credit">Credit</a></li>
                        <li><a href="/chat-cat">Chat with cat</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
