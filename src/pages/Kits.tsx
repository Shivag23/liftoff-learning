import React from "react";
import { Link } from "react-router-dom";

const Kits = () => (
  <section id="catapult-kit" className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition mb-4"
        >
          ← Back to Home
        </Link>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Build a Catapult – Our STEM Kit Example</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our hands-on STEM kits are designed to inspire creativity and problem-solving. With just a few simple materials, students can build their own working catapult and explore the principles of physics and engineering.
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Catapult Kit Materials</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
          <li>9 popsicle sticks</li>
          <li>3 rubber bands</li>
          <li>1 bottle cap</li>
        </ul>
        <a
          href="https://docs.google.com/document/d/1Cy1r4l-gBxfBj6lf58VV971Z8wUTkA6cvEUVZ_rMZpI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View Catapult Kit Instructions
        </a>
      </div>
    </div>
  </section>
);

export default Kits; 