"use client";

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

import IndividualTherapyComponent from "./Components/IndividualTheory";
import CouplesTherapyComponent from "./Components/CouplesTheory";
import ClinicalSupervisionComponent from "./Components/ClinicalSupervision";
import Testimonials from "./Components/Testimonials"
import DigitalProducts from "./Components/DigitalProducts";

import {
  fadeIn,
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from "./utils/animations";

const PsychologyHomePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [showIndividualTherapyModal, setShowIndividualTherapyModal] =
    useState(false);

    const [showCouplesTherapyModal,setshowCouplesTherapyModal] = useState(false);
    const [showCSTherapyModal, setshowCSModal] = useState(false);

  // Animation variants
  /* 
   Q- HOW VARTINATS & MOTION PROPS WORK WITH EACH OTHER.

    Variants define the states (what the element looks like at different points).

    Props like initial, animate, and whileInView specify which state to use and when to transition between states.

    The transition prop (or a transition object within a variant) controls how the animation happens (e.g., duration, easing).

    Props like whileHover and whileTap add interactive animations, while viewport triggers animations based on visibility.
  
  */


  return (
    <div className="min-h-screen bg-yellow-50/80">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 text-center lg:text-center gap-8 lg:gap-5">
          <div className="my-auto order-2 lg:order-1">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800  mb-4 sm:mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Transforming Lives Through */}
              <span className="block mb-2 sm:mb-4">Transforming Lives</span>
              <span className="  ml-2 text-black">Through </span>
              <span className=" text-yellow-500 bg-clip-text">
                Science & Sensitivity
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Combining cognitive-behavioral therapy with genuine human
              connection to help you build a healthier, more meaningful life
              worth living.
            </motion.p>
            <motion.button
              className=" text-white bg-yellow-400 px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform"
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

          <motion.img
            className="object-center rounded-2xl w-full max-w-2xl mx-auto sm:order-2 h-64 md:h-100 md:w-200   sm:h-80  order-1 "
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/005/362/811/small_2x/man-consultation-with-psychologist-free-vector.jpg"
            }
            alt="Psychology consultation illustration"
          />
        </div>
      </section>

      {/* Digital Products Section */}
      <DigitalProducts />

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-12 sm:py-16  px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            My Services
          </motion.h3>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-6   sm:pt-6 sm:pb-4 sm:pl-6 sm:pr-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16  bg-yellow-200 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Individual Therapy
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Deep understanding of your difficulties, collaborative
                therapeutic planning, and skill development to build a
                healthier, more meaningful life. Sessions typically start weekly
                and progress to biweekly as you develop autonomy.
              </p>
              <button
                className="w-full mt-auto bg-blue-200 rounded-2xl py-2 text-gray-800 "
                onClick={() => {
                  setShowIndividualTherapyModal(true);
                }}
              >
                Click here
              </button>
            </motion.div>

            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-6 sm:pt-6 sm:pb-4 sm:pl-6 sm:pr-6 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                setshowCouplesTherapyModal(true);
              }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16  bg-yellow-200 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Couples Therapy
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Analysis of relationship dynamics, identification of conflict
                points, and collaborative development of skills to build the
                relationship you both desire. Working together to create
                meaningful connections.
              </p>
              <button className="w-full bg-blue-200 rounded-2xl py-2 mt-auto text-gray-800 ">
                Click here
              </button>
            </motion.div>

            <motion.div
              className="bg-yellow-50/80 backdrop-blur-sm rounded-2xl p-6 sm:pt-6 sm:pb-4 sm:pl-6 sm:pr-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 flex flex-col lg:col-span-1"
              variants={staggerItem}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                setshowCSModal(true);
              }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16   bg-yellow-200 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Clinical Supervision
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Supporting psychologists at different career stages with care
                and respect. Collaborative evaluation, skill development, and
                recognition of the beauty in each professional journey stage.
              </p>
              <button className="w-full bg-blue-200 rounded-2xl py-2 mt-auto text-gray-800 ">
                Click here
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Who Am I Section */}
      <motion.section
        id="about"
        className="py-12 sm:py-16 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
            variants={scaleIn}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-left">
              <motion.div variants={slideInLeft}>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Who Am I & What I Do
                </h3>
                <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
                  {/* <motion.p variants={fadeInUp}>
                    From a very early age, I have always been passionate about
                    science. During university, I discovered my fascination with
                    psychopathology and cognitive-behavioral therapy. This
                    interest led me to join study and research groups in CBT, as
                    well as to work as a monitor in psychopathology and
                    psychological testing courses.
                  </motion.p> */}

                  <motion.img
                    src={"/img-3.png"}
                    className="rounded-2xl object-center"
                  ></motion.img>

                  {/* <motion.p variants={fadeInUp}>
                    Upon graduating, I chose to dedicate my clinical career to
                    caring for people facing profound challenges, such as severe
                    depression, bipolar affective disorder, borderline
                    personality disorder, and adult ADHD. I also became a
                    couples therapist because the universe of relationships has
                    always fascinated me — after all, it is in this space
                    between two people that so many stories unfold.
                  </motion.p> */}
                  {/* <motion.p variants={fadeInUp}>
                    I have a specialization in Cognitive-Behavioral Therapy and
                    training in Dialectical Behavior Therapy (DBT). Currently, I
                    am deepening my knowledge in clinical challenges and complex
                    situations, and a specialization in Clinical Supervision at
                    PUC-PR.
                  </motion.p> */}
                </div>
              </motion.div>

              <motion.div
                className="space-y-6 sm:space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-yellow-50/80 rounded-2xl p-4 sm:p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      About Me
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    I am 34 years old, northeastern, a true Piaui native at
                    heart. I enjoy traveling, reading, discovering new cultures,
                    and I have a deep affection for my pets — my cats and my
                    dog.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-yellow-50/80 rounded-2xl p-4 sm:p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <Music className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      My Passions
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    I connect with music, especially sertanejo, forró "das
                    antigas", and MPB, and I love both the sea and the
                    mountains. These simple pleasures constantly remind me of
                    the value of small things.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-yellow-50/80 rounded-2xl p-4 sm:p-6"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      My Purpose
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
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

      <Testimonials />

      {showIndividualTherapyModal && (
        <IndividualTherapyComponent
          showModal={showIndividualTherapyModal}
          setShowModal={setShowIndividualTherapyModal}
        />
      )}

      {showCouplesTherapyModal && (
        <CouplesTherapyComponent
          showModal={showCouplesTherapyModal}
          setShowModal={setshowCouplesTherapyModal}
        />
      )}

      {showCSTherapyModal && (
        <ClinicalSupervisionComponent
          showModal={showCSTherapyModal}
          setShowModal={setshowCSModal}
        />
      )}

      {/* Modal Form */}
      {showForm && <TherapyForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default PsychologyHomePage;