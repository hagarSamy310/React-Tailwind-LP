import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import f5 from "../assets/f5.svg";
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.png";

export const navItems = [
	{ title: "Home", link: "/" },
	{ title: "Shop", link: "/" },
	{ title: "Blog", link: "/" },
	{ title: "Contact", link: "/" },
	{ title: "Offers", link: "/" },
];

export const features = [
	{
		icon: f1,
		title: "Free Delivery",
		description: "Free delivery for all orders over $100",
	},
	{
		icon: f2,
		title: "100% Secure",
		description: "100% secure payment with multiple methods",
	},
	{
		icon: f3,
		title: "Quality Guarantee",
		description: "High Quality products guaranteed",
	},
	{
		icon: f4,
		title: "Guaranteed Savings",
		description: "Save money with our best deals",
	},
	{
		icon: f5,
		title: "Daily Offers",
		description: "Daily offers on various products",
	},
];

export const arrivals = [
	{ image: n2, title: "White Sofa", price: "$250.00" },
	{ image: n1, title: "Cozy Chair", price: "$100.00" },

	{ image: n3, title: "Dining Set", price: "$460.00" },
];

export const footerLinks = [
	{
		title: "Quick links",
		items: [
			{ title: "Home", link: "/" },
			{ title: "About us", link: "/" },
			{ title: "Offers", link: "/" },
			{ title: "Services", link: "/" },
			{ title: "Contact us", link: "/" },
		],
	},
	{
		title: "About",
		items: [
			{ title: "How It Works", link: "/" },
			{ title: "Our Packages", link: "/" },
			{ title: "Promotions", link: "/" },
			{ title: "Refer A Friend", link: "/" },
		],
	},
	{
		title: "Help Center",
		items: [
			{ title: "Payments", link: "/" },
			{ title: "Shipping", link: "/" },
			{ title: "Product", link: "/" },
			{ title: "Returns", link: "/" },
			{ title: "FAQs", link: "/" },
			{ title: "Checkout", link: "/" },
			{ title: "Other Issues", link: "/" },
		],
	},
];

export const categories = [
	{
		image: c1,
		label:
			"Discover the piece you’ve been searching for. Designs inspired by beauty, built for living. Pieces that transform spaces into stories. ",
		width: "xl:w-[65%]",
	},
	{ image: c2, label: "", width: "xl:w-[65%]" },
	{ image: c3, label: "", width: "xl:w-[65%]" },
	{
		image: c4,
		label:
			"Elevating your home, one piece at a time. Simplicity, elegance, and comfort in every design. Where global trends meet local charm. ",
		width: "xl:w-[65%]",
	},
];
