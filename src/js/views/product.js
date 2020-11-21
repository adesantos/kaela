import React, { useState, useContext } from "react";
import product_img from "../../img/img6.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Product() {
	//HAcer condicional si el producto viene con liked estado inicial es true
	const [isLiked, updateLike] = useState(false);
	const handleLike = () => {
		updateLike(!isLiked);
		//send update to database
	};
	return (
		<div key={1} className="">
			<a href="#">
				<img src={product_img} className="img-fluid" />
			</a>
			<a href="#" className="product-name">
				<span>Name</span>
			</a>
			<button className="like" onClick={handleLike}>
				<i className={isLiked ? "fas fa-heart" : "far fa-heart"} />
			</button>
			<p>
				<b>$25.00</b>
			</p>
		</div>
	);
}
