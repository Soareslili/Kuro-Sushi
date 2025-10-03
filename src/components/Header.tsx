import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Ofertas", href: "#ofertas" },
    { name: "Reservas", href: "#reservas" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

                {/* Menu Desktop */}
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

                {/* Botão Reservar */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="hidden md:block"
                >
                    <Button variant="primary">Reservar Mesa</Button>
                </motion.div>

                {/* Ícone do menu mobile */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menu"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <rect y="5" width="24" height="2" rx="1" fill="#E5E7EB"/>
                        <rect y="11" width="24" height="2" rx="1" fill="#E5E7EB"/>
                        <rect y="17" width="24" height="2" rx="1" fill="#E5E7EB"/>
                    </svg>
                </button>
            </div>

            {/* Menu lateral mobile */}
            <motion.div
                initial={false}
                animate={menuOpen ? { x: 0 } : { x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-md z-50 shadow-lg flex flex-col p-6 md:hidden"
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            >
                <button
                    className="self-end mb-8 p-2"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fechar menu"
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <line x1="6" y1="6" x2="18" y2="18" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="18" y1="6" x2="6" y2="18" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <nav className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-[#E5E7EB] hover:text-[#C7A569] text-lg font-inter font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <Button variant="primary" className="mt-8">Reservar Mesa</Button>
                </nav>
            </motion.div>
        </motion.header>
    );
};

export default Header;