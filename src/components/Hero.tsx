import Button from "./ui/Button";
import HeroImg from "../assets/Hero.png"
import { motion } from "framer-motion";

interface HeroProps {
    title?: string;
    subtitle?: string;
    primaryCta?: string;
    secondaryCta?: string;
    imageSrc?: string;
}



const Hero = ({
    title = "The Art of Sushi",
    subtitle = "Onde tradição japonesa encontra perfeição culinária",
    primaryCta = "Ver Menu",
    secondaryCta = "Peça Agora",
    imageSrc = HeroImg
}: HeroProps) => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0"
            >
                <img
                    src={imageSrc}
                    alt="Mesa japonesa com sushi artesanal"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(12,15,18,0.8), rgba(12,15,18,0.4))"
                    }}
                />
            </div>


            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.h1
                    className="font-marcellus text-5xl md:text-7xl font-bold text-[#E5E7EB] mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="font-inter text-xl md:text-2xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                    id="menu"
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-inter font-semibold px-8 py-4 text-lg"
                    >
                        {primaryCta}
                    </Button>

                    <Button
                    id="menu"
                        variant="secondary"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-4 text-lg"
                    >
                        {secondaryCta}
                    </Button>
                </motion.div>
            </div>

          
            
        </section>
    );
};

export default Hero;
