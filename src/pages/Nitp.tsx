
import Navigation from "@/components/Navigation";
import { Building, MapPin, Phone, Mail, Globe, Users } from "lucide-react";

const Nitp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Building className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">National Institute of Technology Patna</h1>
              <p className="text-gray-600 mt-2">Institute of National Importance</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* About NIT Patna */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Institute</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                National Institute of Technology Patna is one of the premier engineering institutes in India, 
                established as an Institute of National Importance under the NIT Act 2007.
              </p>
              <p>
                The institute offers undergraduate, postgraduate, and doctoral programs in various engineering 
                and technology disciplines, with a strong focus on research and innovation.
              </p>
              <p>
                NIT Patna has been consistently ranked among the top engineering institutes in India and 
                maintains strong industry connections and research collaborations.
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Vision</h3>
              <p className="text-blue-800 text-sm">
                To emerge as a center of excellence in technical education, research and innovation 
                for sustainable development of the society.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    National Institute of Technology Patna<br />
                    Ashok Rajpath, Mahendru<br />
                    Patna, Bihar 800005, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="text-green-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91-612-237-1715</p>
                  <p className="text-gray-600">Fax: +91-612-237-1929</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Globe className="text-purple-700" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                  <p className="text-gray-600">www.nitp.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Civil Engineering",
              "Computer Science & Engineering",
              "Electrical Engineering",
              "Electronics & Communication Engineering",
              "Mechanical Engineering",
              "Architecture",
              "Mathematics",
              "Physics",
              "Chemistry",
              "Humanities & Social Sciences"
            ].map((dept, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded border">
                <span className="text-gray-700 text-sm">{dept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Institute Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900">3000+</h3>
              <p className="text-blue-700 text-sm">Students</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900">200+</h3>
              <p className="text-green-700 text-sm">Faculty Members</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900">10+</h3>
              <p className="text-purple-700 text-sm">Departments</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-900">50+</h3>
              <p className="text-orange-700 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nitp;
