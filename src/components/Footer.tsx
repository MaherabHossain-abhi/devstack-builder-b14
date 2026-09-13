import footerImg from "../assets/logo-text.png"

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear();

    return (
        
        <footer className="container mx-auto max-w-300 my-20 px-5 sm:px-0">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-5 mb-10">
                <div className="text-center sm:text-left">
                    <a href="/">
                        <img className="mb-5 w-40 sm:w-42 mx-auto sm:mx-0 cursor-pointer" src={footerImg} alt="Logo" />
                    </a>
                    <p className="mb-5 text-gray-500 w-full sm:w-120">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className='flex sm:hidden items-center gap-3 justify-center text-gray-800 font-medium'>
                        <a href="" className="hover:underline">Github</a>
                        <span className="text-gray-900 font-extrabold">•</span>
                        <a href="" className="hover:underline">Twitter</a>
                        <span className="text-gray-900 font-extrabold">•</span>
                        <a href="" className="hover:underline">Linkedin</a>
                    </div>
                    <div className='hidden sm:flex items-center gap-4 justify-start text-gray-800 font-medium'>
                        <a href="" className="hover:underline">Github</a>
                        <a href="" className="hover:underline">Twitter</a>
                        <a href="" className="hover:underline">Linkedin</a>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <h2 className="text-lg font-medium mb-2">Product</h2>
                    <ul className="flex flex-col gap-1">
                        <li><a href="/" className="text-gray-500 hover:underline">Home</a></li>
                        <li><a href="/technologies" className="text-gray-500 hover:underline">Technologies</a></li>
                        <li><a href="/projects" className="text-gray-500 hover:underline">Projects</a></li>
                    </ul>
                </div>
                <div className="hidden sm:block">
                    <h2 className="text-lg font-medium mb-2">Company</h2>
                    <ul className="flex flex-col gap-1">
                        <li><a href="/about" className="text-gray-500 hover:underline">About</a></li>
                        <li><a href="/contact" className="text-gray-500 hover:underline">Contact</a></li>
                        <li><a href="/careers" className="text-gray-500 hover:underline">Careers</a></li>
                    </ul>
                </div>
                <div className="hidden sm:block">
                    <h2 className="text-lg font-medium mb-2">Legal</h2>
                    <ul className="flex flex-col gap-1">
                        <li><a href="/privacy" className="text-gray-500 hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-gray-500 hover:underline">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-2 pt-5 border-t border-gray-200 text-xs sm:text-sm">
                <p className="text-gray-500">&copy; {year} Dev Stack. All rights reserved.</p>
                <div className="flex gap-3 text-gray-500 shrink-0">
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;