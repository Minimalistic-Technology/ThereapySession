"use client";

import { video } from "framer-motion/client";
import React from "react";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const couplesTherapyInfo = {
  title: "Couples Therapy",
  videoUrl: "/example.mp4",
  description:
    "Analysis of relationship dynamics, identification of conflict points, and collaborative development of skills to build the relationship you both desire. Working together to create meaningful connections.",
  benefits: [
    "Improved communication skills",
    "Resolution of conflict points",
    "Strengthened emotional connection",
    "Collaborative relationship building",
    "Safe space for open dialogue",
  ],
};

const CouplesTherapyComponent: React.FC<Props> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {/* Optional trigger button */}
      <div className="p-4 bg-yellow-100 rounded-xl shadow z-50">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {couplesTherapyInfo.title}
        </h2>
        <p className="text-gray-700 mb-4">{couplesTherapyInfo.description}</p>
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
                {couplesTherapyInfo.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {couplesTherapyInfo.description}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {couplesTherapyInfo.benefits.map((benefit, idx) => (
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
              {couplesTherapyInfo.videoUrl.startsWith("http") ? (
                <iframe
                  className="w-full h-64 lg:h-80 rounded-xl"
                  src={couplesTherapyInfo.videoUrl}
                  title="Couples Therapy Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-80 object-contain rounded-xl"
                  src={couplesTherapyInfo.videoUrl}
                  controls
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouplesTherapyComponent;
