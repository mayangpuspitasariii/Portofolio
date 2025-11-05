import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import myFoto from '../asset/Mayang.jpg';

const foto = [
  {
    image: myFoto,
    title: 'Foto Diri',
  },
];

const About = () => {
  return (
    <div
      className="bg-gray-900 bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-20 lg:px-40 py-10 md:py-20 gap-10"
      id="about"
    >
      {/* Bagian Foto */}
      <div className="flex justify-center">
        <div className="relative p-4 overflow-hidden transform hover:scale-105 hover:rotate-3 transition-transform duration-700">
          <img
            src={foto[0].image}
            alt={foto[0].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover hover:shadow-2xl transition-shadow duration-300"
            style={{ boxShadow: '0 4px 6px 0 rgba(147, 197, 253, 0.5)' }} // blue-300
          />
        </div>
      </div>

      {/* Bagian Keterangan */}
      <div className="keterangan text-white space-y-6 text-center md:text-left max-w-xl">
        <h1 className="text-2xl md:text-4xl font-bold">
          About Me <span>👩‍💻</span>
        </h1>

        <p className="text-sm md:text-lg leading-relaxed">
          Halo! 👋😊 Saya
          <span className="text-blue-300 font-bold"> Mayang Puspita Sari</span>,
          seorang Lulusan Sistem Informasi dengan minat di bidang{' '}
          <span className="font-semibold">Analisis Sistem</span> dan{' '}
          <span className="font-semibold">Manajemen Proyek IT</span>. Terbiasa
          menyusun kebutuhan sistem, merancang alur proses (DFD, ERD,
          flowchart), serta mendokumentasikan hasil analisis untuk mendukung
          pengembangan aplikasi. Saya juga berpengalaman memimpin tim dalam
          proyek berbasis web, mulai dari tahap perencanaan, koordinasi, hingga
          implementasi. Selain itu, memiliki kemampuan teknis dalam pengembangan
          aplikasi menggunakan{' '}
          <span className="font-semibold text-blue-300">
            React.js, Node.js, Express.js, dan MySQL
          </span>
          , sehingga dapat mendukung proses analisis sekaligus berkolaborasi
          dengan tim developer. Dengan bekal ini, saya tidak hanya mampu
          menganalisis, tetapi juga mengembangkan aplikasi atau sistem sesuai
          kebutuhan.
        </p>

        <p className="text-sm md:text-lg">
          Jangan ragu untuk menjelajahi portofolio saya dan menghubungi saya di
          LinkedIn, GitHub, atau Instagram! 😊
        </p>

        {/* Icon Sosial Media */}
        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="https://www.linkedin.com/in/mayangpuspitasari02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/mayangpuspitasari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://instagram.com/mayangpuspita._s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-300 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

