import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Contact Information
        </h3>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-teal-500 text-xl mr-4"
          />
          <p>Kisaran, Sumatra Utara - Asahan</p>
        </div>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-teal-500 text-xl mr-4"
          />
          <p>(+62) 822-7766-5179</p>
        </div>

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-teal-500 text-xl mr-4"
          />
          <p>mayangpuspitas410@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Mayang Puspita Sari. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;

