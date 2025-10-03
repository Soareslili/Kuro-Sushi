import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MessageCircle } from 'lucide-react';

const ReservationBlock = () => {
    const deliveryPartners = [
        { name: 'iFood', logo: '🍔' },
        { name: 'UberEats', logo: '🚗' },
        { name: 'Rappi', logo: '📱' },
    ];

    return (
        <div id='reservas' className="grid md:grid-cols-2 gap-8">

            <div className='md:col-span-2 text-center mb-4'>
                <h2 className="font-marcellus text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Reservas & Delivery
                </h2>
                <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                    Faça sua reserva ou peça pelo delivery
                </p>
            </div>

            <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <h3 className="font-marcellus text-2xl font-bold text-foreground mb-6">
                    Faça sua Reserva
                </h3>


                <div className="space-y-4 mb-6">
                    {/* Data */}
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#1f2328] border border-border cursor-pointer">
                        <Calendar className="w-5 h-5 text-primary" />
                        <input
                            type="date"
                            className="bg-transparent outline-none text-foreground font-inter w-full"
                        />
                    </label>

                    {/* Horário */}
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#1f2328] border border-border cursor-pointer">
                        <Clock className="w-5 h-5 text-primary" />
                        <input
                            type="time"
                            className="bg-transparent outline-none text-foreground font-inter w-full"
                        />
                    </label>
                </div>



                <div className="flex flex-col gap-3">
                    {/* Telefone */}
                    <a
                        href="tel:+5511999999999"
                        className="flex items-center justify-center gap-2 w-full h-11 font-inter font-medium rounded-xl
               bg-transparent border border-gray-400 text-gray-200
               hover:bg-gray-200 hover:text-black transition"
                    >
                        <Phone className="w-4 h-4" />
                        (11) 99999-9999
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full h-11 font-inter font-medium rounded-xl
               bg-transparent border-2 border-[#16a34a] text-[#16a34a]
               hover:bg-[#16a34a] hover:text-black transition"
                    >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                    </a>
                </div>
            </motion.div>


            <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <h3 className="font-marcellus text-2xl font-bold text-foreground mb-2">
                    Delivery
                </h3>
                <p className="font-inter text-muted-foreground mb-6">
                    Peça diretamente pelos nossos parceiros de delivery
                </p>

                <div className="space-y-3">
                    {deliveryPartners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            className="flex items-center gap-4 p-4 rounded-xl 
                         bg-[#1f2328] border border-border
                         hover:bg-[#23272d] transition-colors cursor-pointer"
                            whileHover={{ scale: 1.01 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.06 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-2xl">{partner.logo}</span>
                            <span className="font-inter font-medium text-foreground">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>


                <a
                    href="#menu"
                    className="flex items-center justify-center w-full h-11 mt-10 
             rounded-xl border border-[#C7A569] text-[#C7A569] 
             hover:bg-[#C7A569] hover:text-black 
             font-inter font-medium transition"
                >
                    Ver Cardápio Completo
                </a>

            </motion.div>
        </div>
    );
};

export default ReservationBlock;
