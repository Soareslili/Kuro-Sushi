import SobreImg from '../assets/Sobre.png'

const About = () => {
  return (
    <section id='sobre' className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
      
        <div className="text-center mb-10">
          <h2 className="font-marcellus text-4xl md:text-5xl font-bold text-foreground">
            Sobre o Kuro Sushi
          </h2>
          <p className="font-inter text-muted-foreground text-lg mt-2">
            Tradição japonesa com ingredientes premium
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          <div>
            <img
              src={SobreImg}
              alt="Sobre o Kuro Sushi"
              className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
            />
          </div>

       
          <div className="text-left">
            <p className="font-inter text-foreground leading-relaxed mb-6">
              Com mais de 15 anos de experiência, nosso chef mestre traz a autenticidade
              da culinária japonesa para São Paulo. Cada prato é preparado com técnicas
              tradicionais e ingredientes selecionados diariamente.
            </p>

            <ul className="space-y-4">
              {[
                'Peixe fresco selecionado diariamente',
                'Arroz shari preparado artesanalmente',
                'Molhos especiais da casa',
                'Ambiente tradicional japonês',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#C7A569] shrink-0" />
                  <span className="font-inter text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
