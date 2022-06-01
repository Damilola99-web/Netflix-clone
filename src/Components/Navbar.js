import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Avatar from '../assets/Netflix-avatar.png';
const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();
	const [ isLoggingOut, setIsLoggingOut ] = useState(false);
	const [ search, setSearch ] = useState('');
	console.log(user);
	const handleLogOut = async () => {
		setIsLoggingOut(true);
		try {
			await logOut();
			navigate('/login');
			setIsLoggingOut(false);
		} catch (error) {
			alert(error);
			setIsLoggingOut(false);
		}
	};
	return (
		<div className="flex items-center justify-between py-5 md:px-10 px-5 z-[100] fixed bg-black/50 w-full">
			<Link to="/">
				<p className="text-red-600 text-2xl md:text-4xl font-bold cursor-pointer">NETFLIX</p>
			</Link>
			<div className='items-center justify-center space-x-3 hidden md:flex'>
				<input type="text" placeholder='search here' className='focus:outline-none px-5 py-1 rounded w-[200px]' onChange={(e) => setSearch(e.target.value)} />
				<Link to={`/search/${search}`}>
					<button className=' bg-red-600 rounded px-4 py-1 text-white text-md text-center'>search</button>
				</Link>
			</div>
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
						<img src={Avatar} alt="" className=" w-8 rounded-md" />
						<div className=" hidden group-hover:flex items-center flex-col space-y-2 justify-center absolute right-0 w-[150px] h-[100px] bg-slate-700/80 rounded">
							<Link to="/account">
								<button className="bg-red-600 px-6 py-1 rounded cursor-pointer text-white  border-2 border-red-600  hover:border-white duration-300 hover:bg-transparent hover:text-white">
									Account
								</button>
							</Link>
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
			{/* logging out animation */}
			{isLoggingOut && (
				<div className="fixed w-screen h-screen z-[150] flex items-center justify-center">
					<p>Loading...</p>
				</div>
			)}
		</div>
	);
};

export default Navbar;
