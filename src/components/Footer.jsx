function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <div>Contact Info</div>
      <div>Map</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#services" className="hover:underline">Services</a>
      </div>
    </footer>
  );
}

export default Footer;
