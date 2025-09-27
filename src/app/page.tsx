"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  BookOpen,
  Award,
  MapPin,
  Music,
  Coffee,
  Router,
} from "lucide-react";
import TherapyForm from "./Components/TherapyForm";

const PsychologyHomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-9xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Transforming Lives Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
              {" "}
              Science & Sensitivity
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Combining cognitive-behavioral therapy with genuine human connection
            to help you build a healthier, more meaningful life worth living.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-400 to-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowForm(true)}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        </div>
      </section>

      {/* Who Am I Section */}
      <motion.section
        id="about"
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12"
            variants={scaleIn}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft}>
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  Who Am I & What I Do
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <motion.p variants={fadeInUp}>
                    From a very early age, I have always been passionate about
                    science. During university, I discovered my fascination with
                    psychopathology and cognitive-behavioral therapy. This
                    interest led me to join study and research groups in CBT, as
                    well as to work as a monitor in psychopathology and
                    psychological testing courses.
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    Upon graduating, I chose to dedicate my clinical career to
                    caring for people facing profound challenges, such as severe
                    depression, bipolar affective disorder, borderline
                    personality disorder, and adult ADHD. I also became a
                    couples therapist because the universe of relationships has
                    always fascinated me — after all, it is in this space
                    between two people that so many stories unfold.
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    I have a specialization in Cognitive-Behavioral Therapy and
                    training in Dialectical Behavior Therapy (DBT). Currently, I
                    am deepening my knowledge in clinical challenges and complex
                    situations, and a specialization in Clinical Supervision at
                    PUC-PR.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
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
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
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
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-2xl p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
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
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            variants={fadeInUp}
          >
            My Services
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
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
            </motion.div>

            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
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
            </motion.div>

            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Digital Products Section */}
      <motion.section
        id="products"
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            variants={fadeInUp}
          >
            Digital Products
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-white rounded-3xl p-8 shadow-lg"
              variants={slideInLeft}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
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
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-yellow-100 to-white rounded-3xl p-8 shadow-lg"
              variants={slideInRight}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-blue-50/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
            variants={scaleIn}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-800 mb-8"
              variants={fadeInUp}
            >
              My Philosophy
            </motion.h3>
            <motion.blockquote
              className="text-xl text-gray-700 leading-relaxed italic"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              "In the clinic, I have learned that our own issues sometimes
              intertwine with those of our patients, and that our posture not
              only influences but also shapes their behavior. Therefore, therapy
              is simultaneously a space of science and humanity, where caring
              for others requires caring for ourselves as well."
            </motion.blockquote>
            <motion.p
              className="text-lg text-gray-600 mt-8"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Being a good therapist goes far beyond technical mastery. It
              requires developing clinical reasoning while cultivating
              sophisticated therapeutic skills involving presence, posture,
              assertiveness, sensitivity, and humanity.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal Form */}
      {showForm && <TherapyForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default PsychologyHomePage;