import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import FontAwesome from "react-fontawesome";

import { Banner } from "./component/banner";
import { Home } from "./views/home";
import { Login } from "./component/login";
import { Wishlist } from "./views/wishlist";
import { Bag } from "./views/bag";
import { Products } from "./views/products";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<Switch>
								<Route exact path="/">
									<Banner />
									<Home />
								</Route>
								<Route exact path="/login">
									<Login />
								</Route>
								<Route exact path="/wishlist">
									<Wishlist />
								</Route>
								<Route exact path="/bag">
									<Bag />
								</Route>
								<Route exact path="/products">
									<Products />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</div>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
