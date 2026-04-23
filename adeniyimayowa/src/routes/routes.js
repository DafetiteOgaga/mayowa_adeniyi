import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './ProtectedRoute';
import { Index } from '../components/index';
import { Home } from '../components/Home';
import { Contact } from '../components/contact';
import { Projects } from '../components/projects';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Index />}>
				{/* This makes Home the default route */}
				<Route index element={<Home />} />

				{/* every other routes are from Outlet in Index */}
				{/* Protected routes (auth + match check) */}
				{/* <Route element={<ProtectedRoute requireMatch />}>
					<Route path="scramble-questions/:id" element={<ScrambleQuestionsComponent />} />
					<Route path="dashboard/:id/scramble-questions/:scrambleID" element={<ScrambleQuestionsComponent />} />
					<Route path="profile/:id/contribute-questions" element={<ContributeQuestionsComponent />} />
					<Route path="profile/:id" element={<Profile />} />
					<Route path="dashboard/:id" element={<Dashboard />} />
				</Route> */}

				{/* Protected routes (auth only) */}
				{/* <Route element={<ProtectedRoute />}>
					<Route path="profile" element={<Profile />} />
				</Route> */}

				{/* Public routes (login and sign up) */}
				<Route element={<PublicRoute />}>
					<Route path="contact-me" element={<Contact />} />
					<Route path="projects" element={<Projects />} />
					{/* <Route path="what-we-do" element={<WhatWeDo />} />
					<Route path="contact-us" element={<ContactUs />} /> */}
					{/* <Route path="*" element={<PageNotFound />} /> */}
				</Route>
			</Route>
		</Routes>
	);
}

export {AppRoutes};
