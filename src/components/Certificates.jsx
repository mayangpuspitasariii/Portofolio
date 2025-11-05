import React, { useState } from 'react';

const certificates = [
  {
    title: 'Studi Independen Kampus Merdeka',
    issuer: 'Kampus Merdeka',
    year: '2024',
    image: '/certificates/km.jpeg',
  },
  {
    title: 'Sertificat Dicoding Pengembang React dan Back-End',
    issuer: 'Dicoding',
    year: '2024',
    image: '/certificates/dicoding.jpeg',
  },
  {
    title: 'Penghargaan Proyek Terbaik Dicoding Studi Independen',
    issuer: 'Dicoding',
    year: '2024',
    image: '/certificates/terbaik.jpeg',
  },
  {
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/72ZD8D2RVZYW',
  },
  {
    title: 'Belajar Dasar Structure SQL',
    issuer: 'Dicoding',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/1RXY6V6LKZVM',
  },
  {
    title: 'Membuat Aplikasi Back-End Pemula',
    issuer: 'Dicoding',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/N9ZOMY028PG5',
  },
  {
    title: 'Menjadi React Developer Expert',
    issuer: 'Dicoding',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/L4PQ1QK2VXO1',
  },
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    year: '2025',
    link: 'https://www.dicoding.com/certificates/N9ZO9V966XG5',
  },
  {
    title: 'Meniti Karir Sebagai Software Developer',
    issuer: 'Dicoding',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/ERZR10NKOZYV',
  },
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // kalau showAll = false → hanya tampilkan 6 dulu
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section id="certificate" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sertifikat</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-2"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                />
              ) : (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 underline text-center"
                >
                  Lihat Sertifikat
                </a>
              )}
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Lebih Banyak / Sedikit */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
          >
            {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
          </button>
        </div>
      </div>

      {/* Modal untuk preview gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate Preview"
            className="max-w-4xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Certificate;

