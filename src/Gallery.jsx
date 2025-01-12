import { useState } from "react";
import { Camera, Filter, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "mining", name: "Mining Operations" },
    { id: "sites", name: "Mining Sites" },
    { id: "equipment", name: "Equipment" },
    { id: "team", name: "Our Team" },
  ];

  const images = [
    {
      id: 1,
      src: "slider1.jpg",
      category: "mining",
      title: "Ore Processing at Mumura",
      description: "Advanced ore processing operations at our Mumura site",
    },
    {
      id: 2,
      src: "mines1.jpg",
      category: "sites",
      title: "Gwana District Overview",
      description: "Aerial view of our mining operations in Gwana",
    },
    {
      id: 3,
      src: "slider3.jpg",
      category: "equipment",
      title: "Heavy Equipment",
      description: "State-of-the-art mining equipment in action",
    },
    {
      id: 4,
      src: "slider6.jpg",
      category: "team",
      title: "Site Engineers",
      description: "Our dedicated team of mining engineers",
    },
    {
      id: 5,
      src: "slider3.jpg",
      category: "mining",
      title: "Extraction Process",
      description: "Mineral extraction process in progress",
    },
    {
      id: 6,
      src: "slider7.jpg",
      category: "sites",
      title: "Anyiin Site",
      description: "Our mining site in Anyiin, Logo LGA",
    },
    {
      id: 7,
      src: "pp.jpg",
      category: "equipment",
      title: "Processing Plant",
      description: "Modern mineral processing facility",
    },
    {
      id: 8,
      src: "team.jpg",
      category: "team",
      title: "Safety Training",
      description: "Regular safety training sessions for our team",
    },
    {
      id: 9,
      src: "mining.jpg",
      category: "mining",
      title: "Night Operations",
      description: "24/7 mining operations in progress",
    },
    {
      id: 10,
      src: "mines2.jpg",
      category: "sites",
      title: "Night Operations",
      description: "24/7 mining operations in progress",
    },
    {
      id: 11,
      src: "slider4.jpg",
      category: "team",
      title: "Team",
      description: "24/7 mining operations in progress",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Camera className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mining Gallery
            </h1>
            <p className="text-xl text-gray-200">
              Explore our mining operations, facilities, and team through our
              photo gallery
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <Filter className="w-5 h-5 text-amber-700" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${
                    selectedCategory === category.id
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-amber-50"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
