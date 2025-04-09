const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="max-w-screen-xl mx-auto container text-center text-2xl text-white bg-indigo-800 p-6 rounded">
			&copy; {currentYear} - Desenvolvido por Ricardo Rocha
		</div>
	);
};

export default Footer;
