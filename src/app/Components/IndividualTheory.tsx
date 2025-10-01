"use client";

import { video } from "framer-motion/client";
import React from "react";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const individualTherapyInfo = {
  title: "Individual Therapy",
  videoUrl: "/example.mp4",
  description:
    "Deep understanding of your difficulties, collaborative therapeutic planning, and skill development to build a healthier, more meaningful life. Sessions typically start weekly and progress to biweekly as you develop autonomy.",
  benefits: [
    "Personalized treatment approach",
    "One-on-one therapeutic attention",
    "Flexible pacing...",
    "Confidential and safe environment",
    "Skill development for long-term success",
  ],
};

const IndividualTherapyComponent: React.FC<Props> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {/* Optional trigger button */}
      <div className="p-4 bg-yellow-100 rounded-xl shadow z-50">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {individualTherapyInfo.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {individualTherapyInfo.description}
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-400 text-white px-4 py-2 rounded"
        >
          Learn More
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-6 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 overflow-y-auto max-h-[80vh] pr-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {individualTherapyInfo.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {individualTherapyInfo.description}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {individualTherapyInfo.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>

            <div className="lg:w-1/2 p-2">
            {individualTherapyInfo.videoUrl.startsWith("http") ?
             <iframe
                className="w-full h-64 lg:h-80 rounded-xl"
                src={individualTherapyInfo.videoUrl}
                title="Therapy Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              /> :
              <video className="w-full object-contain h-80 rounded-xl" src={individualTherapyInfo.videoUrl} controls>
              </video>
            }
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualTherapyComponent;
