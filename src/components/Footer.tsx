const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-2xl text-white bg-indigo-800 p-6">
       &copy; {currentYear} - Desenvolvido por Ricardo Rocha
    </div>
  )
}

export default Footer