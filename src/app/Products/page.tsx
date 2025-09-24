"use client";

import {
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  Code,
  Palette,
  Search,
  BarChart3,
  Headphones,
  Rocket,
  ArrowRight,
  Play,
  User,
  Brain,
} from "lucide-react";

const HomePage = () => {
  const products = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Expert CBT",
      description:
        "Expert CBT is a program focused on strengthening clinical reasoning. It teaches the reasoning behind Cognitive-Behavioral Therapy techniques, showing the objective of each technique and, most importantly, how to use it to make assertive decisions in each clinical case.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      image:
        "https://media.istockphoto.com/id/1471478144/photo/smiling-young-black-female-doctor-psychologist-consulting-european-woman-in-modern-clinic.jpg?s=1024x1024&w=is&k=20&c=ZtHQ9SxCpAvZjE4K_ESDMzOyXxFU7g2cNctINW-UoF8=",
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "CBT Club",
      description:
        "CBT Club is a continuous learning and community space for psychologists and cognitive-behavioral therapists. It works in a subscription format, with live meetings and recorded content. It is a collaborative environment, designed for beginner and developing psychologists to share experiences, reflect on real cases, and grow as professionals",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      image:
        "https://media.istockphoto.com/id/1649071889/photo/vulnerable-woman-shares-something-with-therapist-during-therapy-session.jpg?s=1024x1024&w=is&k=20&c=Vs-B7VrUeubfB_5Xz3QAzlM88p_tw3qeI5bbrwPHIgY=",
    },
  ];

  const services = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Individual Therapy",
      description: "lorem ipsum",
      process: ["Process 1", "Process 2", "Process 3", "Process 4"],
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Couples Therapy",
      description: "lorem ipsum",
      process: ["Process 1", "Process 2", "Process 3", "Process 4"],
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Clinical Supervision",
      description: "lorem ipsum.",
      process: ["Process 1", "Process 2", "Process 3", "Process 4"],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="section-padding py-20 max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-600">
              Understanding Minds
              <br />
              Transforming lives
            </h1>

            <p className="text-xl md:text-2xl text-blue-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Psychology is the scientific study of the mind and behavior,
              helping us understand how people think, feel, and act.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-primary flex items-center gap-2 group text-blue-600">
                Explore Our Work
                <ArrowRight
                  size={20}
                  className="text-blue-600 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="btn-secondary flex items-center gap-2 group text-blue-600">
                <Play
                  size={20}
                  className="text-blue-600 group-hover:scale-110 transition-transform"
                />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-blue-600">Programs Conducted</div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">55+</div>
                <div className="text-blue-600">Happy Clients</div>
              </div>
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-blue-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="digital-products" className="py-20 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
              Digital Products
            </h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Innovative digital solutions designed to transform your business
              and drive growth through cutting-edge technology and user-centric
              design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="card p-8 animate-slide-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  {product.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {product.title}
                </h3>

                <p className="text-blue-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600 mb-3">
                    Key Features:
                  </h4>
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-blue-600"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
              Our Services
            </h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Comprehensive digital services designed to accelerate your
              business growth and enhance your competitive advantage in the
              digital marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-8 animate-slide-up bg-white hover:border-blue-200 border border-transparent transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">
                    {service.title}
                  </h3>
                </div>

                <p className="text-blue-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600 text-sm uppercase tracking-wide">
                    Our Process:
                  </h4>
                  {service.process.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex items-center text-sm text-blue-600"
                    >
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                        {stepIndex + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 border-t border-blue-100 pt-4">
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;