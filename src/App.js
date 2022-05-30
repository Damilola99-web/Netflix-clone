import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieInfo from './Components/MovieInfo';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
	return (
		<AuthContextProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/account"
					element={
						<ProtectedRoute>
							<Account />
						</ProtectedRoute>
					}
				/>
				<Route path="/details/:id" element={<MovieInfo />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
