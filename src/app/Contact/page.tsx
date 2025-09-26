"use client"
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Heart,
  Sparkles,
  ArrowRight,
  Globe,
} from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#647FBC] mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to begin your journey toward better mental health? Contact us
          today to schedule your consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Phone Contact */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF] hover:shadow-xl transition-all duration-300 group">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#FAFDD6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#AED6CF] transition-colors">
              <Phone className="h-8 w-8 text-[#647FBC]" />
            </div>
            <h3 className="text-xl font-semibold text-[#647FBC] mb-3">Phone</h3>
            <p className="text-gray-600 mb-4">
              Call us for immediate assistance
            </p>
            <a
              href="tel:+1234567890"
              className="text-lg font-medium text-[#647FBC] hover:text-[#AED6CF] transition-colors"
            >
              +1 (234) 567-8900
            </a>
          </div>
        </div>

        {/* Email Contact */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF] hover:shadow-xl transition-all duration-300 group">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#FAFDD6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#AED6CF] transition-colors">
              <Mail className="h-8 w-8 text-[#647FBC]" />
            </div>
            <h3 className="text-xl font-semibold text-[#647FBC] mb-3">Email</h3>
            <p className="text-gray-600 mb-4">Send us a message anytime</p>
            <a
              href="mailto:ana.paula@psychology.com"
              className="text-lg font-medium text-[#647FBC] hover:text-[#AED6CF] transition-colors"
            >
              ana.paula@psychology.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF] hover:shadow-xl transition-all duration-300 group">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#FAFDD6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#AED6CF] transition-colors">
              <MapPin className="h-8 w-8 text-[#647FBC]" />
            </div>
            <h3 className="text-xl font-semibold text-[#647FBC] mb-3">
              Clinic Location
            </h3>
            <p className="text-gray-600 mb-4">Visit us at our practice</p>
            <div className="text-center">
              <p className="text-[#647FBC] font-medium">123 Wellness Drive</p>
              <p className="text-[#647FBC] font-medium">
                Peaceful Valley, CA 90210
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF] mb-8">
        <h3 className="text-2xl font-semibold text-[#647FBC] mb-6 text-center">
          Office Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-[#FAFDD6] rounded-lg">
              <span className="font-medium text-[#647FBC]">
                Monday - Thursday
              </span>
              <span className="text-gray-700">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#FAFDD6] rounded-lg">
              <span className="font-medium text-[#647FBC]">Friday</span>
              <span className="text-gray-700">9:00 AM - 4:00 PM</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
              <span className="font-medium text-gray-500">Saturday</span>
              <span className="text-gray-500">By Appointment</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
              <span className="font-medium text-gray-500">Sunday</span>
              <span className="text-gray-500">Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-[#647FBC] to-[#AED6CF] rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Emergency Support</h3>
        <p className="mb-6 opacity-90">
          If you're experiencing a mental health emergency, please contact
          emergency services or call the crisis hotline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:911"
            className="bg-white text-[#647FBC] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Emergency: 911
          </a>
          <a
            href="tel:988"
            className="bg-white text-[#647FBC] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Crisis Line: 988
          </a>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#647FBC] mb-4">
          About Ana Paula
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A journey from remote struggles to digital empowerment
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#AED6CF] mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-[#647FBC] to-[#AED6CF] rounded-full flex items-center justify-center">
              <User className="h-16 w-16 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#647FBC] mb-4">
              Dr. Ana Paula
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Licensed Clinical Psychologist
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-[#FAFDD6] text-[#647FBC] rounded-full text-sm font-medium">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-[#FAFDD6] text-[#647FBC] rounded-full text-sm font-medium">
                CBT Expert Pioneer
              </span>
              <span className="px-4 py-2 bg-[#FAFDD6] text-[#647FBC] rounded-full text-sm font-medium">
                Couple Therapy Expert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF]">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-[#647FBC]" />
            <h3 className="text-2xl font-semibold text-[#647FBC]">
              Her Journey
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              She lives in a remote part of the country — where the roads are
              rough, but dreams are strong. For years, she ran her small
              business with paper invoices, word of mouth, and long hours of
              struggle.
            </p>
            <p>
              She had everything but access. Until one day, she discovered
              Minimalistic Technology.
            </p>
            <p>
              From that first call, things began to change. Our team listened to
              her needs, understood her challenges, and built a website that
              reflected her identity. More than that, we provided 24/7 support,
              so no question ever went unanswered.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF]">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-[#647FBC]" />
            <h3 className="text-2xl font-semibold text-[#647FBC]">
              The Transformation
            </h3>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Whether it was technical issues, payment gateways, or just
              learning how to manage her site — we were there.
            </p>
            <p>
              Today, she sells her products across the country — even
              internationally. Orders come in while she sleeps. And the same
              woman who once had no online presence? Now she's a digital
              entrepreneur.
            </p>
            <p className="text-[#647FBC] font-semibold text-xl">
              All because she took the first step.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#647FBC] to-[#AED6CF] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-6 w-6 text-white" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Our mission is to provide compassionate, personalized, and
              evidence-based psychological care that empowers individuals to
              understand themselves better, overcome challenges, and build
              healthier, more fulfilling lives. We are committed to creating a
              safe, supportive, and non-judgmental space where every person
              feels heard, valued, and respected. Through guidance,
              collaboration, and proven therapeutic practices, we strive to help
              our clients achieve emotional well-being, personal growth, and
              lasting positive change.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#AED6CF] text-center">
          <h3 className="text-2xl font-semibold text-[#647FBC] mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Take the first step toward better mental health and personal growth.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-[#FAFDD6] text-[#647FBC] px-8 py-3 rounded-lg hover:bg-[#AED6CF] focus:ring-4 focus:ring-[#91ADC8] transition-all duration-200 font-medium flex items-center gap-2 mx-auto group"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#91ADC8]">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-lg border-b-2 border-[#AED6CF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#647FBC] rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-[#647FBC]">
                Ana Paula Psychology
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage("about")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === "about"
                    ? "bg-[#647FBC] text-white shadow-md"
                    : "text-[#647FBC] hover:bg-[#FAFDD6]"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === "contact"
                    ? "bg-[#647FBC] text-white shadow-md"
                    : "text-[#647FBC] hover:bg-[#FAFDD6]"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="py-12 px-4">
        {currentPage === "about" ? <AboutPage /> : <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-[#AED6CF] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 Ana Paula Psychology. Empowering minds, Peacefull lives.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
