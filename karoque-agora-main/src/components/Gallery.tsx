import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export function Gallery() {
  const galleryImages = [
    {
      src: gallery1,
      alt: "Casal cantando karaokê em festa"
    },
    {
      src: gallery2,
      alt: "Mulher cantando em evento elegante"
    },
    {
      src: gallery3,
      alt: "Festa de karaokê animada"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            GALERIA
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-intense transition-all duration-300 hover:scale-105"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}