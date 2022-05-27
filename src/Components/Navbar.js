import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Avatar from '../assets/Netflix-avatar.png';
const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();
	console.log(user);
	const handleLogOut = async () => {
		try {
			await logOut();
			navigate('/login');
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className="flex items-center justify-between py-7 md:px-10 px-5 z-[100] absolute w-full">
			<Link to="/">
				<p className="text-red-600 text-2xl md:text-4xl font-bold cursor-pointer">NETFLIX</p>
			</Link>
			<div>
				{!user && (
					<Link to="/signup">
						<button className=" text-white border-2 border-white md:mr-8 bg-transparent px-6 py-1 rounded cursor-pointer hidden md:inline-block duration-300 hover:text-white hover:border-red-600 hover:bg-red-600">
							Sign up
						</button>
					</Link>
				)}

				{!user && (
					<Link to="/login">
						<button className=" bg-red-600 px-6 py-1 rounded cursor-pointer text-white  border-2 border-red-600  hover:border-white duration-300 hover:bg-transparent hover:text-white">
							Sign in
						</button>
					</Link>
				)}
				{user && (
					<div className=" group relative">
						<img src={Avatar} alt="" className=" w-10" />
						<div className=" hidden group-hover:flex items-center flex-col space-y-2 justify-center absolute right-0 w-[150px] h-[100px] bg-slate-700/80 rounded">
							<button className='bg-red-600 px-6 py-1 rounded cursor-pointer text-white  border-2 border-red-600  hover:border-white duration-300 hover:bg-transparent hover:text-white'>Account</button>
							<button
								onClick={handleLogOut}
								className=" bg-red-600 px-6 py-1 rounded cursor-pointer text-white  border-2 border-red-600  hover:border-white duration-300 hover:bg-transparent hover:text-white"
							>
								Log Out
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
