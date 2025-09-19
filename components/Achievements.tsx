import React from 'react'
import { certifications } from '@/lib/data';
// badges, 
import Image from "next/image";
const AchievementsPage = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 md:px-10 bg-[#0E0E0F] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements
        </h2>
        <div className="w-24 sm:w-32 h-[2px] bg-[#FF3B30] mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-[#B3B3B3] mb-10 text-base sm:text-lg">
          A showcase of certifications and badges earned along the journey
        </p>

        {/* Certifications Section */}
        <div className="bg-[#111111fa] border border-[#222222] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-base sm:text-lg font-bold text-[#FF3B30] mb-4">
            Certificates & Badges
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="h-32 w-44 flex items-center justify-center bg-[#111] border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                  src={cert.icon}
                  alt={cert.name}
                  width={176}   // same as w-44 (44 * 4 = 176px)
                  height={128}  // same as h-32 (32 * 4 = 128px)
                  className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-[#B3B3B3] break-words">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        {/* <div className="bg-[#111111fa] border border-[#222222] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-base sm:text-lg font-bold text-[#FF3B30] mb-4">
            Badges
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="h-32 w-44 flex items-center justify-center bg-[#111] border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                  src={badge.icon}
                  alt={badge.name}
                  width={176}   // w-44 = 44 * 4 = 176px
                  height={128}  // h-32 = 32 * 4 = 128px
                  className="object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-[#B3B3B3] break-words">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsPage
