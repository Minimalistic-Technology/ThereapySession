"use client";

import { video } from "framer-motion/client";
import React from "react";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const clinicalSupervisionInfo = {
  title: "Clinical Supervision",
  videoUrl: "/example.mp4",
  description:
    "Supporting psychologists at different career stages with care and respect. Collaborative evaluation, skill development, and recognition of the beauty in each professional journey stage.",
  benefits: [
    "Tailored professional guidance",
    "Enhanced clinical skills",
    "Supportive and collaborative environment",
    "Career stage-specific mentoring",
    "Confidence in clinical decision-making",
  ],
};

const ClinicalSupervisionComponent: React.FC<Props> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {/* Optional trigger button */}
      <div className="p-4 bg-yellow-100 rounded-xl shadow z-50">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {clinicalSupervisionInfo.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {clinicalSupervisionInfo.description}
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
                {clinicalSupervisionInfo.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {clinicalSupervisionInfo.description}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {clinicalSupervisionInfo.benefits.map((benefit, idx) => (
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
            <div className="lg:w-1/2 p-2 ">
              {clinicalSupervisionInfo.videoUrl.startsWith("http") ? (
                <iframe
                  className="w-full h-64 lg:h-80 rounded-xl"
                  src={clinicalSupervisionInfo.videoUrl}
                  title="Clinical Supervision Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-80 object-contain rounded-xl"
                  src={clinicalSupervisionInfo.videoUrl}
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

export default ClinicalSupervisionComponent;
