
import Navigation from "@/components/Navigation";
import {
  GraduationCap,
  MapPin,
  Mail,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Eye,
  Search,
  Globe,
  ExternalLink,
  Star,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section with Construction Background */}
      <div
        className="relative bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-black"
        style={{
          backgroundImage: `url('/lovable-uploads/606ed747-7fd8-44a7-99dd-51e142700fea.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/20">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Kamran Sohail
                </h1>
                <p className="text-xl mb-6 text-gray-800 font-semibold">
                  Sr. Technical Assistant, NIT Patna
                </p>
                <p className="text-lg opacity-90 mb-6 text-blue-700 font-medium">
                  Ph.D. in Civil Engineering
                </p>
                <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="text-gray-800 text-sm">
                      National Institute of Technology Patna
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-50 px-3 py-2 rounded-lg">
                    <Mail size={16} className="text-purple-600" />
                    <span className="text-gray-800 text-sm">kamran@nitp.ac.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-blue-200/50">
              <img
                src="/lovable-uploads/df3cfbdd-9772-4143-98fa-6e68863e2fde.png"
                alt="Kamran Sohail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-8">
        {/* About Section - Enhanced Design */}
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-lg p-10 mb-8 border border-blue-100/50">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Award className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About Dr. Kamran Sohail</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Bio */}
            <div className="md:col-span-2">
              <div className="prose max-w-none text-gray-700 space-y-6">
                <div className="bg-white/70 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-lg leading-relaxed">
                    Dr. Kamran Sohail holds a Ph.D. in Civil Engineering and his
                    research work focusses on transportation geotechnics, high
                    performance computational modelling, AI/ML-based modelling,
                    data-centric construction, and computer vision for satellite image
                    processing.
                  </p>
                </div>
                
                <div className="bg-white/70 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="leading-relaxed">
                    He has a strong publication record in the fields of risk and
                    reliability, transportation geotechnics, transport
                    infrastructures, AI/ML and metaheuristic algorithms, data-driven
                    analysis, predictions, and optimisation. He has published more
                    than 55 peer-reviewed articles in high-impact international
                    journals and an h-index of 28.
                  </p>
                </div>
                
                <div className="bg-white/70 p-6 rounded-xl border-l-4 border-purple-500">
                  <p className="leading-relaxed">
                    Dr. Kamran serves as an Academic Editor for an international
                    journal Applied Artificial Intelligence and Soft Computing (IF
                    2.4) and a reviewer for various peer-reviewed journals. He is an
                    Associate Member of The Institution of Engineers (India), India.
                    Currently he is working as a Sr. Technical Assistant at the
                    Department of Civil Engineering, National Institute of Technology
                    Patna, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-4">
              <div className="bg-white/80 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-blue-700" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">55+</h3>
                <p className="text-gray-600 font-medium">Publications</p>
              </div>

              <div className="bg-white/80 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-green-700" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">28</h3>
                <p className="text-gray-600 font-medium">H-Index</p>
              </div>

              <div className="bg-white/80 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-700" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">IF 2.4</h3>
                <p className="text-gray-600 font-medium">Journal Editor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Expertise - Enhanced Portfolio UI */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg p-10 mb-8 border border-blue-100">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Research Expertise</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-blue-900 mb-4 text-xl">
                  Risk Analysis & Data-centric Construction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced risk assessment and data-driven construction
                  methodologies with cutting-edge analytics
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-200">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-green-900 mb-4 text-xl">
                  Railway & Geotechnical Engineering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Transportation infrastructure and soil mechanics applications
                  for sustainable development
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition-colors">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-purple-900 mb-4 text-xl">
                  Applied AI/ML & Computer Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Machine learning and computer vision for aerial image processing
                  and intelligent systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-10 mb-8 border border-green-100">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Search className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-900 mb-3 text-lg">
                      Data-centric Hazard Assessment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Advanced data analysis for hazard evaluation and mitigation
                      strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Globe className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 mb-3 text-lg">
                      Climate-resilient Transport Infrastructures
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Sustainable and climate-adaptive transportation systems
                      design
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Eye className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-3 text-lg">
                      Computer Vision in Digital Transportation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      AI-powered vision systems for transportation monitoring
                      and analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Work */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Ongoing Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center">
                EGMS_L3
                <ExternalLink size={16} className="ml-2 opacity-60" />
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A new web platform to extract L3 data from the European Ground
                Motion Service (EGMS) website.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-green-900 mb-3 text-lg flex items-center">
                INLAND
                <ExternalLink size={16} className="ml-2 opacity-60" />
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Aerial imagery of infrastructures and lands of India.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-purple-900 mb-3 text-lg flex items-center">
                ADCOM
                <ExternalLink size={16} className="ml-2 opacity-60" />
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Development of an advanced computer vision algorithm for
                satellite image cloud removal.
              </p>
            </div>
          </div>
        </div>

        {/* Media Links */}
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media & Links</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-xl hover:from-blue-200 hover:to-blue-300 transition-all duration-300 border border-blue-200 hover:shadow-lg"
            >
              <span className="font-medium">Google Scholar</span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-xl hover:from-green-200 hover:to-green-300 transition-all duration-300 border border-green-200 hover:shadow-lg"
            >
              <span className="font-medium">Research Gate</span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-xl hover:from-purple-200 hover:to-purple-300 transition-all duration-300 border border-purple-200 hover:shadow-lg"
            >
              <span className="font-medium">LinkedIn</span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 border border-gray-200 hover:shadow-lg"
            >
              <span className="font-medium">Github</span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-xl hover:from-orange-200 hover:to-orange-300 transition-all duration-300 border border-orange-200 hover:shadow-lg"
            >
              <span className="font-medium">OrcID</span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8 text-center">
            Developed by Kamran S. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
