// import { Link } from 'react-router-dom'

// export function HomePageComponent() {
//   return (
//     <div className="h-screen w-screen absolute top-0 right-0 left-0 bg-gray-50">
//   {/* Hero Section */}
//   <section className="w-full bg-blue-600 text-white py-20 relative">
//     <div className="absolute top-0 left-0 p-4">
//       <h1 className="text-2xl md:text-4xl font-bold">Svaasth</h1>
//     </div><br></br><br></br><br></br><br></br>
//     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
//       <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Hospital Management System</h1>
//         <p className="text-xl">Providing efficient healthcare solutions</p>
//       </div>
//       <div className="md:w-1/2 flex justify-center items-center">
//   <img 
//     src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/5260308/1160/774/m1/fpnw/wm0/health-care-.jpg?1540457127&s=3b6e89ad77e169678f91198be0b1f24d" 
//     alt="Patient" 
//     width={300} 
//     height={300} 
//     className="rounded-full mb-4 md:mb-0 object-cover" 
//   />
// </div>

//     </div><br></br><br></br><br></br>
//   </section>




//       {/* Services Section */}
//       <section className="py-20">
//         <div className="container mx-auto py-8 px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* {[
//               { title: 'Patient', link: '/patient', image: '/placeholder.svg?height=200&width=200' },
//               { title: 'Doctor', link: '/doctor', image: '/placeholder.svg?height=200&width=200' },
//               { title: 'Receptionist', link: '/receptionist', image: '/placeholder.svg?height=200&width=200' },
//             ].map((service, index) => (
//               <Link
//                 className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
//               >
//                 <Image
//                   src={service.image}
//                   alt={`${service.title} Vector`}
//                   width={200}
//                   height={200}
//                   className="mx-auto mb-4"
//                 /> */}
//               <Link to="/patientlogin">
//                 <img src="https://as1.ftcdn.net/v2/jpg/01/39/08/44/1000_F_139084493_wj5TAr9e1RwM9Ds32J8HSRasT6ibF2a2.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
//                 <h3 className="text-xl font-semibold">Patient</h3>
//               </Link>
//               <Link to="/adminsignin">
//                 <img src="https://static.vecteezy.com/system/resources/previews/015/391/002/non_2x/medical-reception-icon-outline-style-vector.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
//                 <h3 className="text-xl font-semibold">Receptionist</h3>
//               </Link>
//               <Link to="/doctorssignin">
//                 <img src="https://static.vecteezy.com/system/resources/previews/015/271/788/non_2x/doctor-with-stethoscope-icon-design-physician-doctor-flat-icon-for-apps-and-websites-doctor-logo-illustration-vector.jpg" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
//                 <h3 className="text-xl font-semibold">Doctor</h3>
//               </Link>
//               <Link to="/inventorysignin">
//                 <img src="https://www.osculati.com/SupplyImages/WF-0048/ico-distribuzione-08.png" alt="Patient" width={200} height={200} className='mx-auto mb-4'/>
//                 <h3 className="text-xl font-semibold">Inventory</h3>
//               </Link>
//           </div>
//         </div>
//       </section>

//       {/* Our Aim Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Aim</h2>
//           <div className="max-w-3xl mx-auto">
//             {[
//               'Provide high-quality healthcare services to all patients',
//               'Implement efficient management systems for better healthcare delivery',
//               'Foster a collaborative environment among healthcare professionals',
//             ].map((aim, index) => (
//               <div key={index} className="flex items-start mb-6">
//                 <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
//                   {index + 1}
//                 </div>
//                 <p className="text-lg">{aim}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">What We Do</h2>
//               <p className="text-lg">
//                 Our hospital management system streamlines healthcare processes, enhances patient care, and improves
//                 operational efficiency. We provide comprehensive solutions for patient management, appointment
//                 scheduling, billing, and medical record keeping.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
//               <p className="text-lg">
//                 We are a team of dedicated healthcare professionals and technology experts committed to revolutionizing
//                 hospital management. Our goal is to empower healthcare providers with innovative tools to deliver
//                 exceptional patient care and manage resources effectively.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function HomePageComponent() {
  return (
    <div className="min-h-screen w-screen absolute top-0 left-0 bg-gray-50">
      {/* Header */}
      <header className="bg-sky-100 text-sky-800 py-4 px-6 fixed w-full z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Svaasth</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-sky-600 transition-colors">Services</a></li>
              <li><a href="#aim" className="hover:text-sky-600 transition-colors">Our Aim</a></li>
              <li><a href="#about" className="hover:text-sky-600 transition-colors">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-b from-sky-100 to-white text-sky-800">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Hospital Management System</h2>
              <p className="text-xl mb-8 text-sky-700">Providing efficient healthcare solutions for a better tomorrow</p>
              <a href="#services" className="bg-sky-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-sky-600 transition duration-300 inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/5260308/1160/774/m1/fpnw/wm0/health-care-.jpg?1540457127&s=3b6e89ad77e169678f91198be0b1f24d" 
                alt="Healthcare Illustration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Patient', link: '/patientlogin', image: 'https://as1.ftcdn.net/v2/jpg/01/39/08/44/1000_F_139084493_wj5TAr9e1RwM9Ds32J8HSRasT6ibF2a2.jpg' },
              { title: 'Receptionist', link: '/adminsignin', image: 'https://static.vecteezy.com/system/resources/previews/015/391/002/non_2x/medical-reception-icon-outline-style-vector.jpg' },
              { title: 'Doctor', link: '/doctorssignin', image: 'https://static.vecteezy.com/system/resources/previews/015/271/788/non_2x/doctor-with-stethoscope-icon-design-physician-doctor-flat-icon-for-apps-and-websites-doctor-logo-illustration-vector.jpg' },
              { title: 'Inventory', link: '/inventorysignin', image: 'https://www.osculati.com/SupplyImages/WF-0048/ico-distribuzione-08.png' },
            ].map((service, index) => (
              <Link key={index} to={service.link} className="bg-sky-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img src={service.image} alt={service.title} className="w-32 h-32 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold text-sky-700">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section id="aim" className="bg-sky-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">Our Aim</h2>
          <div className="max-w-3xl mx-auto">
            {[
              'Provide high-quality healthcare services to all patients',
              'Implement efficient management systems for better healthcare delivery',
              'Foster a collaborative environment among healthcare professionals',
            ].map((aim, index) => (
              <div key={index} className="flex items-start mb-6">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={24} />
                <p className="text-lg text-sky-700">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sky-800">What We Do</h2>
              <p className="text-lg leading-relaxed text-sky-700">
                Our hospital management system streamlines healthcare processes, enhances patient care, and improves
                operational efficiency. We provide comprehensive solutions for patient management, appointment
                scheduling, billing, and medical record keeping. Our goal is to empower healthcare providers with
                innovative tools to deliver exceptional patient care and manage resources effectively.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sky-800">Who We Are</h2>
              <p className="text-lg leading-relaxed text-sky-700">
                We are a team of dedicated healthcare professionals and technology experts committed to revolutionizing
                hospital management. With years of experience in both healthcare and software development, we understand
                the unique challenges faced by modern healthcare facilities. Our passion lies in creating solutions that
                make a real difference in the lives of patients and healthcare providers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-100 text-sky-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Svaasth</h3>
              <p>Empowering healthcare through innovative management solutions.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><a href="#services" className="hover:text-sky-600 transition-colors">Services</a></li>
                <li><a href="#aim" className="hover:text-sky-600 transition-colors">Our Aim</a></li>
                <li><a href="#about" className="hover:text-sky-600 transition-colors">About Us</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: info@svaasth.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-sky-200 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Svaasth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}