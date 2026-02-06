import React from "react";
import { FaPhone } from "react-icons/fa";

// Updated color palette for N&J MOT Centre
const palette = {
  primary: "#0B5ED7",        // primary blue background
  fgOnPrimary: "#FFFFFF",    // white text on blue
  secondaryBg: "#D70C09",    // red call button
  secondaryText: "#FFFFFF",  // white text on red button
  outline: "#FFFFFF",         // white outline for secondary button
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-18"
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Updated Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Official VIEZU Dealer
        </h2>

        {/* Updated Description */}
        <p className="text-xl mb-8 opacity-90">
          Advanced ECU Remapping & Performance Tuning
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call button */}
          <a href="tel: +441744371225" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(215,12,9,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call us today to book your remap
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}