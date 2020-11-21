import React from "react";
import { Product } from "./product";
import { Link } from "react-router-dom";

export function Products() {
	//aqui se cargan los elementos desde la bd con un loop pasando la info desde <product key""/> y se reciben en product.js como props
	return (
		<div className="col-12 products padding-bottom">
			<div className="row">
				<div className="col-12 text-center">
					<h4 className="margin-top">PRODUCTS</h4>
				</div>

				<div className="col-4 margin-top">
					<Product />
				</div>
				<div className="col-4 margin-top">
					<Product />
				</div>
				<div className="col-4 margin-top">
					<Product />
				</div>
			</div>
		</div>
	);
}
