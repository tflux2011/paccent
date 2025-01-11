const VisionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From Earth, to refinement
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe in exploring the earth responsibly, discovering
            opportunities to power the ideas and machinery of the future.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src="SL3.jpg"
            alt="Mining Operations"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
