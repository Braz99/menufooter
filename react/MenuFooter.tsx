import React from "react";

import "./typings/storefront";
import { useCssHandles } from "vtex.css-handles";
import { FaWhatsapp, FaTrophy, FaShoppingCart } from "react-icons/fa";

interface FooterProps {}

const CSS_HANDLE = ["menufooter"];

const MenuFooter: StorefrontFunctionComponent<FooterProps> = ({}) => {
	const handles = useCssHandles(CSS_HANDLE);

	return (
		<nav className={`${handles.menufooter}`}>
			<ul className={`${handles.menufooter}--list`}>
				<li className="list">
					<a
						className="link red hover-red f3 measure-wide flex-wrap  justify-center items-center"
						href="/store">
						<FaShoppingCart className="w-70 " />
						<span className="w-100 tc">Store</span>
					</a>
				</li>
				<li className="list">
					<a className="link red hover-red f3 measure-wide flex-wrap" href="/">
						<FaTrophy className="w-70 " />
						<span className="w-100 tc">Desafios</span>
					</a>
				</li>
				<li className="list">
					<a
						className=" link red hover-red f3 measure-wide flex-wrap"
						href="https://api.whatsapp.com/send?phone=550&text=Fale%20conosco%20no%20whatsapp!"
						target="_blank">
						<FaWhatsapp className="w-70 " />
						<span className="w-100 tc">Whatsapp</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default MenuFooter;
