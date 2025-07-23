import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { EquipmentCard } from "@/components/EquipmentCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Music, Mic, Volume2, Star, Phone, Mail, MapPin } from "lucide-react";
import heroKaraoke from "@/assets/hero-karaoke.jpg";
import microphoneImg from "@/assets/microphone.png";
import speakerImg from "@/assets/speaker.png";
import karaokeImg from "@/assets/karaoke-machine.png";

const Index = () => {
  const equipment = [
    {
      title: "Kit Karaokê Completo",
      description: "Sistema completo com tela, microfones e alto-falantes profissionais",
      price: "R$ 250/dia",
      image: karaokeImg,
      features: [
        "Tela de 32'' ou 42''",
        "2 microfones sem fio",
        "Sistema de som 500W",
        "Mais de 5.000 músicas",
        "Controle remoto"
      ]
    },
    {
      title: "Microfones Profissionais",
      description: "Microfones sem fio de alta qualidade com excelente captação",
      price: "R$ 80/dia",
      image: microphoneImg,
      features: [
        "Sem fio com alcance 50m",
        "Bateria de longa duração",
        "Cancelamento de ruído",
        "Design ergonômico",
        "LED indicador"
      ]
    },
    {
      title: "Sistema de Som",
      description: "Alto-falantes potentes para garantir a melhor qualidade sonora",
      price: "R$ 180/dia",
      image: speakerImg,
      features: [
        "Potência de 800W",
        "Bluetooth integrado",
        "Controle de graves e agudos",
        "Entrada para microfone",
        "Design moderno"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente qualidade! A festa ficou incrível e todos se divertiram muito no karaokê.",
      event: "Festa de 50 anos"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Serviço perfeito, equipamentos de primeira qualidade e entrega pontual.",
      event: "Casamento"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Super recomendo! Atendimento excelente e preço justo. Voltarei a alugar!",
      event: "Confraternização"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroKaraoke}
            alt="Karaokê Freitas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400 drop-shadow-lg">
                Locação de Equipamentos
              </span>
              <br />
              <span className="text-yellow-400 drop-shadow-lg">
                de Videokê
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground mb-8 drop-shadow-md">
              Para festas, eventos e confraternizações
            </p>
            <Button variant="yellow" size="lg" className="text-lg px-8 py-4 shadow-yellow">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Equipment Section */}
      <section id="equipamentos" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nossos Equipamentos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Equipamentos profissionais de alta qualidade para garantir o sucesso do seu evento
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <EquipmentCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                O que nossos clientes dizem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Centenas de eventos realizados com sucesso e clientes satisfeitos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solicite seu orçamento sem compromisso e transforme seu evento em algo especial
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">contato@freitasvideoke.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">São Paulo - SP e região</span>
                  </div>
                </div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Por que escolher nossos serviços?</h3>
                <ul className="space-y-3">
                  {[
                    "Equipamentos profissionais e modernos",
                    "Entrega e retirada no local do evento",
                    "Suporte técnico durante todo o evento",
                    "Preços competitivos e transparentes",
                    "Experiência de mais de 10 anos no mercado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/85b5d2bf-b910-4f04-96af-a739e7fa27f9.png" 
                alt="Freitas Videokê" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Freitas Videokê. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
