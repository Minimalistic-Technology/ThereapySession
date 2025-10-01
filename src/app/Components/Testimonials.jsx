import { Coffee, User } from "lucide-react";
import React from "react";

const Testimonials = () => {
  
   const testimonials = [
     {
       id: 1,
       name: "Alice Johnson",
       feedback:
         "This service completely changed my perspective. Highly recommended!.This service completely changed my perspective. Highly recommended!.This service completely changed my perspective. Highly recommended!.This service completely changed my perspective. Highly recommended!",
       icon: "Coffee",
     },
     {
       id: 2,
       name: "Michael Smith",
       feedback:
         "A wonderful experience, very professional and caring.This service completely changed my perspective. Highly recommended!.This service completely changed my perspective. Highly recommended!.",
       icon: "Coffee",
     },
     {
       id: 3,
       name: "Sophia Lee",
       feedback:
         "I felt heard and understood throughout the process. Thank you!.This service completely changed my perspective. Highly recommended!.This service completely changed my perspective. Highly recommended!.This service completely changed my perspective.",
       icon: "Coffee",
     },
   ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 ">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Testimonials
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6  bg-yellow-100  rounded-2xl">
              <div className="flex gap-5 items-center mb-4">
                <div className="w-10 h-10 bg-yellow-200 rounded-xl flex items-center justify-center ">
                  <User className="text-yellow-600 w-5 h-5" />
                </div>
                <span className="text-blue-300 ">{item.name}</span>
              </div>
              <p className="text-black">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
