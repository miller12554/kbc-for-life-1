

import React, { useEffect, useState } from "react";


import {
	BookOpenIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { FaBeer } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { NavLink, useNavigate } from "react-router-dom";


const BeauBar = () => {
	const handleLogout = () => {
		auth.signOut().then(() => {
			console.log("Logged Out");
			navigate("/");
		});
	};

	

			const navigate = useNavigate();

	const auth = getAuth();
	const [pageState, setPageState] = useState("");
	const [pageState2, setPageState2] = useState("");
	const [pageState3, setPageState3] = useState("");
	const [pageState4, setPageState4] = useState("");
	useEffect(() => {
		
		
			onAuthStateChanged(auth, (user) => {
			if (user) {
				setPageState("User Name");
			} else {
				user === !user;
				setPageState("Sign in");
			}

			if (user) {
				setPageState2("Account");
			} else {
				user === !user;
				setPageState2("Register");
			}

			if (user) {
				setPageState3("logout");
			} else {
				user === !user;
				setPageState3("Forgot Password");
			}
			if (user) {
				setPageState4("date");
			} else {
				user === !user;
				setPageState4("Forgot Password");
			}
		});
	}, [auth]);

	function pathMatchRoute(route) {
		if (route === location.pathname) {
			return true;
		}
	}

	let Links = [
			{ name: 0, text: "CONTACT", link: "/contact" },
			{ name: 1, text: "HOME", link: "/" },
			{ name: 2, text: "SERVICE", link: "/sign-in" },
			{ name: 3, text: "ABOUT", link: "/logout" },
		];
		let [open, setOpen] = useState(false);

		return (
			<div className="w-full fixed top-0 bg-black ">
				<div className=" flex mx-auto h-20 md:flex items-center  bg-black py-4 md:px-10 px-7">
					{/* logo section */}
					<div className=" basis-3/12 font-bold text-2xl cursor-pointer flex items-center gap-1">
						<div className="text-green-500 text-2xl ms:text-lg">
							Wanted Today Store
						</div>
					</div>
					{/* Menu icon */}
					<div
						onClick={() => setOpen(!open)}
						className="  absolute -mb-8 text-white right-8 top-6 cursor-pointer md:hidden w-7 h-7"
					>
						{open ? <XMarkIcon className="" /> : <Bars3BottomRightIcon />}
					</div>
					{/* linke items */}
					<ul
						className={`z-40 basis-7/12 md:flex md:items-center md:pb-0 pb-12 -mb-8  absolute md:static bg-green-400 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${open ? "top-20" : "top-[-490px]"
							}`}
					>
						{Links.map((link) => (
							<li className=" md:ml-8 md:my-0 my-7 font-semibold ">
								<NavLink
									to={link.link}
									className="text-blacke hover:text-yellow-400 duration-500"
								>
									{link.text}
								</NavLink>
							</li>
						))}
					</ul>
					{/* // ================================================================================================================== */}

					<div className="flex basis-2/12 ml-10 gap-6 max-h-12 mb-8">
						<div className="pb-2  bg-black  gap-2 text-yellow-500 text-sm   grid-row-start">
							<div
								className={`  flex justify-center cursor-pointer py-3 text-xs font-semibold text-yellow-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in")  || pathMatchRoute("/user-name")) &&
									"text-white border-b-green-400"
									}`}
								onClick={() => navigate("/sign-in")}
							>
								{pageState}
							</div>
							<div
								className={`  flex justify-center cursor-pointer py-3 text-xs font-semibold text-yellow-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/user-name")) &&
									"text-white border-b-green-400"
									}`}
								
							>
								{pageState}
							</div>
						</div>

						<div className="  bg-black   gap-2 text-yellow-500 text-sm   grid-row-start">
							<div
								className={`flex justify-center cursor-pointer py-3 text-xs font-semibold text-yellow-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/logout") ||
										pathMatchRoute("/forgot-password")) &&
									"text-white border-b-green-400"
									}`}
								onClick={() => navigate("/forgot-password")}
							>
								{pageState3}
							</div>
							<div
								className={`cursor-pointer py-3 text-xs font-semibold text-yellow-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/logout") && "text-white border-b-green-400"
									}`}
								onClick={handleLogout}
							></div>
						</div>
					</div>
				</div>
			</div>
		);
	};

export default BeauBar

