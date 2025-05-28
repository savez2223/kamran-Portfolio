import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h1>
              <p className="text-gray-600 mt-2">
                Get in touch for research collaborations and inquiries
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Contact Details
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">kamran@nitp.ac.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="text-green-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91-612-237-1715</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-purple-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      National Institute of Technology Patna
                      <br />
                      Ashok Rajpath, Mahendru
                      <br />
                      Patna, Bihar 800005, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Research collaboration inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Research Collaboration
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              I am always interested in collaborating with researchers, industry
              professionals, and students who share similar research interests.
              If you are working on projects related to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Transportation Geotechnics</li>
              <li>AI/ML applications in Civil Engineering</li>
              <li>Computer Vision and Image Processing</li>
              <li>Data-centric Construction methodologies</li>
            </ul>
            <p>
              Please feel free to reach out. I welcome opportunities for joint
              research, knowledge exchange, and academic partnerships.
            </p>
          </div>
        </div>

        {/* media  */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Media</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Google Scholar
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              Research Gate
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Github
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              OrcID
            </a>
          </div>
          {/* <p className="text-sm text-gray-500 mt-6">
            Developed by kamran S. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
