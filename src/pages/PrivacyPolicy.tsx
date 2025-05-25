
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-inplast-blue mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Inplast Novex ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company information</li>
                <li>Communication preferences</li>
                <li>Information you provide when contacting us</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">How We Use Your Information</h2>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Service providers who assist us in operating our website and business</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-inplast-blue mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: info@inplast-novex.com<br />
                Address: 87b M.Sklodowskiej-Curie Street, 87-100 Torun, Poland
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
