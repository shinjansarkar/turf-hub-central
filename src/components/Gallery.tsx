import turfMainImage from "@/assets/turf-main.jpg";
import turfActionImage from "@/assets/turf-action.jpg";
import turfNightImage from "@/assets/turf-night.jpg";

const Gallery = () => {
  const images = [
    {
      src: turfMainImage,
      alt: "Professional turf field during daytime",
      title: "Premium Turf Quality"
    },
    {
      src: turfActionImage,
      alt: "Players in action on the turf",
      title: "Match Action"
    },
    {
      src: turfNightImage,
      alt: "Turf facility with floodlights at night",
      title: "Night Game Ready"
    },
    {
      src: "/lovable-uploads/c55db39b-6081-43a1-8725-e08bebef37ed.png",
      alt: "TURF VSA original promotional image",
      title: "Our Facility"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at our state-of-the-art turf facility with premium artificial grass and professional lighting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-gradient-to-r from-turf-green to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🥅</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">FIFA Standard</h3>
            <p className="text-muted-foreground">Professional grade artificial turf meeting international standards</p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-gradient-to-r from-sport-orange to-sport-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Floodlights</h3>
            <p className="text-muted-foreground">Professional lighting system for night games and tournaments</p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-turf-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Tournament Ready</h3>
            <p className="text-muted-foreground">Perfect venue for local tournaments and competitive matches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;