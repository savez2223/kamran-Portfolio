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
} from "lucide-react";
import image from "@/assets/image.jpg";

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
          height: "70vh",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  FURQUAN AHMAD
                </h1>
                {/*  */}
                <p className="text-lg opacity-90 mb-6 text-black">
                  PhD Research Scholar 
                </p>
                <p className="text-xl mb-6 text-black">
                  Department Of Civil Engineering
                </p>
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="opacity-75 text-black" />
                    <span className="text-black">
                      National Institute of Technology, Patna
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="opacity-75 text-black" />
                    <span className="text-black">furquanahmad40@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src= {image}
                alt="furquan profile image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-8">
        {/* About Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Dr. Furquan Ahmad holds a Ph.D. in Civil Engineering and his
              research work focusses on transportation geotechnics, high
              performance computational modelling, AI/ML-based modelling,
              data-centric construction, and computer vision for satellite image
              processing.
            </p>
            <p className="mb-4">
              He has a strong publication record in the fields of risk and
              reliability, transportation geotechnics, transport
              infrastructures, AI/ML and metaheuristic algorithms, data-driven
              analysis, predictions, and optimisation. He has published more
              than 55 peer-reviewed articles in high-impact international
              journals and an h-index of 28. He has received a letter of
              appreciation from the Head of the Institution for his outstanding
              research contributions.
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

        {/* Research Expertise */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="mr-3 text-blue-700" />
            Research Expertise
            {/* <div className="ml-auto w-16 h-8">
              <img
                src="/lovable-uploads/16e5dbdf-5449-4d4b-a581-1670fa21a7e9.png"
                alt="DOCEL.in Logo"
                className="w-full h-full object-contain"
              />
            </div> */}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                Risk Analysis & Data-centric Construction
              </h3>
              <p className="text-gray-700 text-sm">
                Advanced risk assessment and data-driven construction
                methodologies
              </p>
            </div>

            <div className="p-4 bg-green-100 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">
                Railway & Geotechnical Engineering
              </h3>
              <p className="text-gray-700 text-sm">
                Transportation infrastructure and soil mechanics applications
              </p>
            </div>

            <div className="p-4 bg-purple-100 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">
                Applied AI/ML & Computer Vision
              </h3>
              <p className="text-gray-700 text-sm">
                Machine learning and computer vision for aerial image processing
              </p>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="mr-3 text-blue-700" />
            Research Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-orange-100 rounded-lg flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Search className="text-white" size={16} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">
                  Data-centric Hazard Assessment
                </h3>
                <p className="text-gray-700 text-sm">
                  Advanced data analysis for hazard evaluation and mitigation
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-100 rounded-lg flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={16} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">
                  Climate-resilient Transport Infrastructures
                </h3>
                <p className="text-gray-700 text-sm">
                  Sustainable and climate-adaptive transportation systems
                </p>
              </div>
            </div>

            <div className="p-4 bg-purple-100 rounded-lg flex items-start">
              <div className="mr-3 mt-1">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={16} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">
                  Computer Vision in Digital Transportation
                </h3>
                <p className="text-gray-700 text-sm">
                  AI-powered vision systems for transportation monitoring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Work */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="mr-3 text-blue-700" />
            Ongoing Work
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">EGMS_L3</h3>
              <p className="text-gray-700">
                A new web platform to extract L3 data from the European Ground
                Motion Service (EGMS) website.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">INLAND</h3>
              <p className="text-gray-700">
                Aerial imagery of infrastructures and lands of India.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">ADCOM</h3>
              <p className="text-gray-700">
                Development of an advanced computer vision algorithm for
                satellite image cloud removal.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-blue-700" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">55+</h3>
            <p className="text-gray-600">Publications</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-green-700" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">28</h3>
            <p className="text-gray-600">H-Index</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-700" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">IF 2.4</h3>
            <p className="text-gray-600">Journal Editor</p>
          </div>
        </div> */}

        {/* Media Links */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Media & Links
          </h2>
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
            Developed by FURQUAN. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
