import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Calendar, Clock, Phone, MessageCircle } from 'lucide-react';

const ReservationBlock = () => {
    const deliveryPartners = [
        { name: 'iFood', logo: '🍔' },
        { name: 'UberEats', logo: '🚗' },
        { name: 'Rappi', logo: '📱' },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8">

            <div className='md:col-span-2 text-center mb-8'>
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
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1f2328] border border-border">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-inter text-foreground">Selecionar Data</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1f2328] border border-border">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-inter text-foreground">Escolher Horário</span>
                    </div>
                </div>


                <div className="flex flex-col gap-3">
                    <Button
                        variant="primary"
                        className="block w-full h-11 font-inter font-medium rounded-xl"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        (11) 99999-9999
                    </Button>

                    <Button
                        variant="secondary"
                        className="block w-full h-11 font-inter font-medium rounded-xl
                       bg-transparent border-2 border-[#16a34a] text-[#16a34a]
                       hover:bg-[#16a34a] hover:text-black"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                    </Button>
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


                <Button
                    variant="secondary"
                    className="w-full h-11 mt-6 rounded-xl font-inter font-medium 
             bg-transparent border border-[#C7A569] text-[#C7A569] 
             hover:bg-[#C7A569] hover:text-black 
             flex justify-center"
                >
                    Ver Cardápio Completo
                </Button>

            </motion.div>
        </div>
    );
};

export default ReservationBlock;
