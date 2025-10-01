import { motion } from 'framer-motion';
import React from 'react'

import {
  fadeIn,
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "../utils/animations"
import { BookOpen, Coffee } from 'lucide-react';


const DigitalProducts = () => {
  return (
    <motion.section
      id="products"
      className="py-12 sm:py-16 px-4 sm:px-6"
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
          Digital Products
        </motion.h3>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-gradient-to-br from-blue-100 to-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col"
            variants={slideInLeft}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                Expert CBT
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              A program focused on strengthening clinical reasoning. Teaches the
              reasoning behind Cognitive-Behavioral Therapy techniques, showing
              the objective of each technique and how to use it to make
              assertive decisions in each clinical case.
            </p>
            <div className="bg-blue-50 rounded-xl p-3 sm:p-4 mt-auto">
              <p className="text-blue-800 font-medium text-sm sm:text-base">
                Provides clinical clarity to psychologists, teaching that
                understanding the reasoning behind each intervention is
                essential for effective therapy.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-100 to-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col"
            variants={slideInRight}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                CBT Club
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              A continuous learning and community space for psychologists and
              cognitive-behavioral therapists. Works in a subscription format,
              with live meetings and recorded content.
            </p>
            <div className="bg-yellow-50 rounded-xl p-3 sm:p-4 mt-auto">
              <p className="text-yellow-800 font-medium text-sm sm:text-base">
                A collaborative environment for beginner and developing
                psychologists to share experiences, reflect on real cases, and
                grow as professionals in a safe space.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default DigitalProducts