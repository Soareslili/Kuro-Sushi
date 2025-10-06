import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Button from './ui/Button';

import LogoKuro from '../assets/LogoKuro.png'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer id='contato' className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 space-y-8 sm:space-y-0">
          <motion.div
            className="md:col-span-1 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={LogoKuro} alt="logo" className="w-24 sm:w-28 md:w-30 mb-4" />
            <p className="font-inter text-muted-foreground mb-6 text-center md:text-left">
              A arte do sushi com tradição japonesa e ingredientes premium.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-[#14181D] border border-[#E5E7EB] rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-marcellus text-lg font-bold text-foreground mb-6 text-center md:text-left">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-muted-foreground hover:text-[#C7A569] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-marcellus text-lg font-bold text-foreground mb-6 text-center md:text-left">
              Contato
            </h4>
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-[#C7A569] mt-0.5 flex-shrink-0" />
                <span className="font-inter text-muted-foreground">
                  Rua das Flores, 123<br />
                  Vila Madalena, São Paulo
                </span> 
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#C7A569]" />
                <span className="font-inter text-muted-foreground">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#C7A569]" />
                <span className="font-inter text-muted-foreground">
                  contato@kurosushi.com
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-marcellus text-lg font-bold text-foreground mb-6 text-center md:text-left">
              Horário de Funcionamento
            </h4>
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Clock className="w-5 h-5 text-primary" />
                <div className="font-inter text-muted-foreground">
                  <div>Ter - Dom: 18h - 00h</div>
                  <div>Segunda: Fechado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border pt-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="font-marcellus text-xl font-bold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="font-inter text-muted-foreground mb-6 max-w-md mx-auto">
              Receba ofertas exclusivas e novidades do Kuro Sushi
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                variant='primary'
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Inscrever
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="font-inter text-muted-foreground">
            © 2024 Kuro Sushi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
