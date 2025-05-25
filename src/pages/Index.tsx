
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
          backgroundImage: `url('/lovable-uploads/7cf974c3-1717-4f3a-bb99-5079f6f9f7d6.png')`,
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="mr-3 text-blue-600" size={32} />
            About Dr. Kamran Sohail
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Dr. Kamran Sohail holds a Ph.D. in Civil Engineering and his
              research work focusses on transportation geotechnics, high
              performance computational modelling, AI/ML-based modelling,
              data-centric construction, and computer vision for satellite image
              processing.
            </p>
            <p>
              He has a strong publication record in the fields of risk and
              reliability, transportation geotechnics, transport
              infrastructures, AI/ML and metaheuristic algorithms, data-driven
              analysis, predictions, and optimisation. He has published more
              than 55 peer-reviewed articles in high-impact international
              journals and an h-index of 28.
            </p>
            <p>
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

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BookOpen className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">55+</h3>
            <p className="text-gray-600">Publications</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Star className="mx-auto mb-4 text-yellow-500" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">28</h3>
            <p className="text-gray-600">H-Index</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">IF 2.4</h3>
            <p className="text-gray-600">Journal Editor</p>
          </div>
        </div>

        {/* Research Expertise */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="mr-3 text-blue-600" size={32} />
            Research Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Search className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="font-bold text-gray-900 mb-2">
                Risk Analysis & Data-centric Construction
              </h3>
              <p className="text-gray-600">
                Advanced risk assessment and data-driven construction
                methodologies
              </p>
            </div>
            <div className="text-center">
              <Briefcase className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="font-bold text-gray-900 mb-2">
                Railway & Geotechnical Engineering
              </h3>
              <p className="text-gray-600">
                Transportation infrastructure and soil mechanics applications
              </p>
            </div>
            <div className="text-center">
              <Eye className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="font-bold text-gray-900 mb-2">
                Applied AI/ML & Computer Vision
              </h3>
              <p className="text-gray-600">
                Machine learning and computer vision for aerial image processing
              </p>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={32} />
            Research Interests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Search className="mr-4 text-orange-600 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Data-centric Hazard Assessment
                </h3>
                <p className="text-gray-600">
                  Advanced data analysis for hazard evaluation and mitigation
                  strategies
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="mr-4 text-green-600 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Climate-resilient Transport Infrastructures
                </h3>
                <p className="text-gray-600">
                  Sustainable and climate-adaptive transportation systems design
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Eye className="mr-4 text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Computer Vision in Digital Transportation
                </h3>
                <p className="text-gray-600">
                  AI-powered vision systems for transportation monitoring and
                  analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Work */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={32} />
            Ongoing Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                EGMS_L3
                <ExternalLink size={16} className="ml-2" />
              </h3>
              <p className="text-gray-600">
                A new web platform to extract L3 data from the European Ground
                Motion Service (EGMS) website.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                INLAND
                <ExternalLink size={16} className="ml-2" />
              </h3>
              <p className="text-gray-600">
                Aerial imagery of infrastructures and lands of India.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                ADCOM
                <ExternalLink size={16} className="ml-2" />
              </h3>
              <p className="text-gray-600">
                Development of an advanced computer vision algorithm for
                satellite image cloud removal.
              </p>
            </div>
          </div>
        </div>

        {/* Media Links */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Media & Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <span>Google Scholar</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              <span>Research Gate</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Github</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <span>OrcID</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Developed by Kamran S. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
