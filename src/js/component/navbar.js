import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div id="navbarNav" className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							LINGERIE
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							SHOP
						</a>
					</li>
				</ul>
			</div>

			<a className="navbar-brand" href="#">
				KAELA SHOP
			</a>

			<div className="justify-content-end">
				<ul className="navbar-nav">
					<li className="nav-item">
						<form className="form-inline my-2 my-lg-0 search">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn my-2 my-sm-0" type="submit">
								<i className="fa fa-search" />
							</button>
						</form>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-user" />
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-heart" />
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<i className="fa fa-shopping-bag" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
