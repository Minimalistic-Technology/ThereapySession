import React from "react";
import {
  Heart,
  Users,
  BookOpen,
  Award,
  MapPin,
  Music,
  Camera,
  Coffee,
} from "lucide-react";

const PsychologyHomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Psychology Practice
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Transforming Lives Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              {" "}
              Science & Sensitivity
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Combining cognitive-behavioral therapy with genuine human connection
            to help you build a healthier, more meaningful life worth living.
          </p>
          <button className="bg-gradient-to-r from-blue-400 to-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Who Am I Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  Who Am I & What I Do
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    From a very early age, I have always been passionate about
                    science. During university, I discovered my fascination with
                    psychopathology and cognitive-behavioral therapy. This
                    interest led me to join study and research groups in CBT, as
                    well as to work as a monitor in psychopathology and
                    psychological testing courses.
                  </p>
                  <p>
                    Upon graduating, I chose to dedicate my clinical career to
                    caring for people facing profound challenges, such as severe
                    depression, bipolar affective disorder, borderline
                    personality disorder, and adult ADHD. I also became a
                    couples therapist because the universe of relationships has
                    always fascinated me — after all, it is in this space
                    between two people that so many stories unfold.
                  </p>
                  <p>
                    I have a specialization in Cognitive-Behavioral Therapy and
                    training in Dialectical Behavior Therapy (DBT). Currently, I
                    am deepening my knowledge in clinical challenges and complex
                    situations, and a specialization in Clinical Supervision at
                    PUC-PR.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      About Me
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    I am 34 years old, northeastern, a true Piaui native at
                    heart. I enjoy traveling, reading, discovering new cultures,
                    and I have a deep affection for my pets — my cats and my
                    dog.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Music className="w-6 h-6 text-yellow-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      My Passions
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    I connect with music, especially sertanejo, forró "das
                    antigas", and MPB, and I love both the sea and the
                    mountains. These simple pleasures constantly remind me of
                    the value of small things.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      My Purpose
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    To unite science, technique, and sensitivity to transform
                    the lives of those who seek me — whether patients or
                    therapists in training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            My Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Individual Therapy
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of your difficulties, collaborative
                therapeutic planning, and skill development to build a
                healthier, more meaningful life. Sessions typically start weekly
                and progress to biweekly as you develop autonomy.
              </p>
            </div>

            <div className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-200 to-blue-200 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Couples Therapy
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Analysis of relationship dynamics, identification of conflict
                points, and collaborative development of skills to build the
                relationship you both desire. Working together to create
                meaningful connections.
              </p>
            </div>

            <div className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Clinical Supervision
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Supporting psychologists at different career stages with care
                and respect. Collaborative evaluation, skill development, and
                recognition of the beauty in each professional journey stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="products" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Digital Products
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Expert CBT</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                A program focused on strengthening clinical reasoning. Teaches
                the reasoning behind Cognitive-Behavioral Therapy techniques,
                showing the objective of each technique and how to use it to
                make assertive decisions in each clinical case.
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-blue-800 font-medium">
                  Provides clinical clarity to psychologists, teaching that
                  understanding the reasoning behind each intervention is
                  essential for effective therapy.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-4">
                  <Coffee className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">CBT Club</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                A continuous learning and community space for psychologists and
                cognitive-behavioral therapists. Works in a subscription format,
                with live meetings and recorded content.
              </p>
              <div className="bg-yellow-50 rounded-xl p-4">
                <p className="text-yellow-800 font-medium">
                  A collaborative environment for beginner and developing
                  psychologists to share experiences, reflect on real cases, and
                  grow as professionals in a safe space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              My Philosophy
            </h3>
            <blockquote className="text-xl text-gray-700 leading-relaxed italic">
              "In the clinic, I have learned that our own issues sometimes
              intertwine with those of our patients, and that our posture not
              only influences but also shapes their behavior. Therefore, therapy
              is simultaneously a space of science and humanity, where caring
              for others requires caring for ourselves as well."
            </blockquote>
            <p className="text-lg text-gray-600 mt-8">
              Being a good therapist goes far beyond technical mastery. It
              requires developing clinical reasoning while cultivating
              sophisticated therapeutic skills involving presence, posture,
              assertiveness, sensitivity, and humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-50/70 backdrop-blur-sm py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">
              Psychology Practice
            </h4>
          </div>
          <p className="text-gray-600 mb-8">
            Transforming lives through the union of science, technique, and
            sensitivity
          </p>
          <div className="text-gray-500">
            <p>&copy; 2024 Psychology Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsychologyHomePage;
