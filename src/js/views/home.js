import React from "react";
import Img1 from "../../img/img1.jpg";
import Img2 from "../../img/img2.jpg";
import Img3 from "../../img/img3.jpg";
import Img4 from "../../img/img4.jpg";
import Img5 from "../../img/img5.jpg";

export function Home() {
	return (
		<div className="col-12 home">
			<div className="row">
				<div className="col-12 kalea-title">
					<h2>KAELA</h2>
					<hr />
				</div>

				<div className="img-info">
					<img src={Img1} className="img-fluid" />
					<div className="info">
						<h3>Hand Made Lingerie</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.{" "}
						</p>
					</div>
				</div>
				<div className="img-info">
					<div className="info">
						<h3>Our pieces are unique</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.{" "}
						</p>
					</div>
					<img src={Img2} className="img-fluid" />
				</div>

				<div className="best-sellers col-12">
					<div className="row">
						<div className="picture col-3">
							<div className="frame">
								<img src={Img3} className="img-fluid" />
							</div>
						</div>
						<div className="picture col-6">
							<div className="frame">
								<img src={Img4} className="img-fluid" />
							</div>
						</div>
						<div className="picture col-3">
							<div className="frame">
								<img src={Img5} className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
