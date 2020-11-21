import React from "react";
import { Product } from "./product";
import Img from "../../img/img5.jpg";
import { Link } from "react-router-dom";

export function Bag() {
	return (
		<div className="col-12 products padding-bottom">
			<div className="row">
				<div className="col-12 text-center">
					<h4 className="margin-top">SHOPPING BAG</h4>
				</div>

				<div className="col-8 margin-top">
					<div className="row">
						<div className="col-6 shop-col">Item</div>
						<div className="col-3 shop-col">Qty</div>
						<div className="col-3 shop-col">Price</div>
					</div>
					<div className="row items-row">
						<div className="col-6 shop-col-item">
							<div className="row">
								<div className="col-5">
									<img src={Img} className="img-fluid" />
								</div>
								<div className="col-7 item-info">
									<span className="item-name">Black Top</span>
									<div className="item-move">
										<span className="item-wish">Move to wishlist</span>
										<span className="item-trash">
											<i className="fas fa-trash" />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3 shop-col-item">- 1 +</div>
						<div className="col-3 shop-col-item">
							<b>US$8.00</b>
						</div>
					</div>
				</div>
				<div className="col-4 margin-top o-summary">
					<h3>Order Summary</h3>
					<hr />
					<span>Subtotal</span>
					<span className="total">
						<b>US $00.00</b>
					</span>
					<button className="btn btn-block btn-checkout">CHECKOUT</button>
				</div>
			</div>
		</div>
	);
}
