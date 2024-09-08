'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
	const router = useRouter();
	const [user, setUser] = React.useState({
		email: '',
		password: '',
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const [loading, setLoading] = React.useState(false);

	const onLogin = () => {
		router.push('/home');
		// try {
			// setLoading(true);
			// const response = await axios.post('api/users/login', user);
			// console.log('Login successful', response.data);
		// } catch (error: any) {
		// 	console.log('Login failed', error.message);
		// } finally {
		// 	setLoading(false);
		// }
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	console.log(user);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="py-10 mb-10 text-5xl">
				{loading ? "We're logging you in..." : 'Account Login'}
			</h1>

			<input
				className="w-[350px] text-red-800 p-2 border border-red-300 rounded-lg mb-4 focus:outline-none focus:border-red-600"
				id="email"
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				placeholder="Your Email..."
			/>

			<input
				className="w-[350px] text-red-800 p-2 border border-red-300 rounded-lg mb-4 focus:outline-none focus:border-red-600"
				id="password"
				type="password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				placeholder="Your Password..."
			/>

			<button
				onClick={onLogin}
				className="p-2 border border-red-300 rounded-lg focus:outline-none focus:border-red-600 uppercase px-40 py-3 mt-10 font-bold">
				Login
			</button>

			<Link href="/signup">
				<p className="mt-10">
					Do not have an account yet?
					<span className="font-bold text-red-700 ml-2 cursor-pointer underline">
						Register your free account now
					</span>
				</p>
			</Link>

			<Link href="/">
				<p className="mt-8 opacity-50">
					Go Back
				</p>
			</Link>
		</div>
	);
}