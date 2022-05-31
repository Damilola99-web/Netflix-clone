import React from 'react';
import Savedshows from '../Components/Savedshows';

const Account = () => {
	return (
		<div className=" w-full text-white">
			<img
				className=" w-full h-[400px] object-cover "
				src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
				alt=""
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-[400px] flex items-center justify-center">
            <p className=' text-3xl md:text-5xl font-bold'>My Shows</p>
			</div>
			<Savedshows />
		</div>
	);
};

export default Account;
