import { useState } from 'react';

const Portfolio = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const photoItems = [
    {
      image: '/assets/images/mae3.jpg',  
      title: "Tin Roof 2024",
      location: "Delray Beach, FL",
      alt: "Performance 1"
    },
    {
      image: '/assets/images/mae5.PNG',  
      title: "Tin Roof 2024",
      location: "Delray Beach, FL",
      alt: "Performance 1"
    },
    {
      image: '/assets/images/mae6.PNG',  
      title: "Elbow Room",
      location: "Ft. Lauderdale, FL",
      alt: "Performance 3"
    }
  ];

  const videoItems = [
    {
      video: "/assets/videos/maevid.mp4",
      title: "Long Way to the Top",
      location: "Jhonnie Brown's",
      alt: "Video 1"
    },
    {
      video: "/assets/videos/journey.mp4",
      title: "Don't Stop Believin'",
      location: "Fair Grounds",
      alt: "Video 2"
    },
    {
      video: "/assets/videos/maevid4.mp4",
      title: "Sweet Child of Mine",
      location: "Voodoo Bayou",
      alt: "Video 3"
    }
  ];
  

  const CarouselSection = ({ items, currentIndex, setCurrentIndex, title }) => {
    const totalItems = items.length;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };
  
    return (
      <>
        <h3 className="text-2xl font-bold mb-12 text-center">{title}</h3>
        <div className="relative w-full max-w-4xl mx-auto perspective-1000 h-[400px] flex items-center justify-center">
          {items.map((item, index) => {
            const isCenter = index === currentIndex;
            const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
            const nextIndex = (currentIndex + 1) % totalItems;
  
            let positionStyle = {
              transform: `scale(${isCenter ? 1 : 0.85}) translateX(${isCenter ? "0px" : index === prevIndex ? "-350px" : "350px"}) translateZ(${isCenter ? "0px" : "-250px"}) rotateY(${isCenter ? "0deg" : index === prevIndex ? "-20deg" : "20deg"})`,
              opacity: isCenter ? 1 : 0.5,
              zIndex: isCenter ? 20 : 10,
              transition: "transform 0.8s ease-in-out, opacity 0.8s",
            };
  
            return (
              <div key={index} className="absolute transition-all duration-700 ease-in-out" style={positionStyle}>
                <div className="w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg relative">
                  {item.video ? (
                    <video className="w-full h-full object-cover"
                     controls
                     controlsList="nodownload"
                     disablePictureInPicture={false}
                     allowFullScreen
                     playsInline
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
  
          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-3 rounded-full transition-colors z-30" aria-label="Previous slide">
            ❮
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-3 rounded-full transition-colors z-30" aria-label="Next slide">
            ❯
          </button>
  
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-white" : "bg-gray-500"}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  return (
    <section id="portfolio" className="relative py-20 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0" />
      
      {/* Content container with relative positioning to appear above gradient */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        
        {/* Photos Carousel */}
        <CarouselSection 
          items={photoItems} 
          currentIndex={photoIndex} 
          setCurrentIndex={setPhotoIndex}
          title="Photos"
        />
        <div className='mt-20'>
          {/* Videos Carousel */}
          <CarouselSection 
            items={videoItems} 
            currentIndex={videoIndex} 
            setCurrentIndex={setVideoIndex}
            title="Videos"
          />
        </div>  
      </div>
    </section>
  );
};

export default Portfolio;
