

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Menu", href: "#menu" },
        { name: "Ofertas", href: "#ofertas" },
        { name: "Reservas", href: "#reservas" },
        { name: "Sobre", href: "#sobre" },
        {}
    ]


    return (

        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/95 backdrop-blur-md border-b border-border'
                : 'bg-transparent'
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    className="font-marcellus text-2xl font-bold text-[#E5E7EB] cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}

                >
                    Kuro Sushi
                </motion.div>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="text-[#E5E7EB] hover:text-[#C7A569] transition-colors duration-200 font-inter font-medium"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -2 }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </nav>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <Button variant="primary">Reservar Mesa</Button>
                </motion.div>
            </div>
        </motion.header>
    )
}

export default Header