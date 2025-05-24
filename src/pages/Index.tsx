
import Navigation from "@/components/Navigation";
import { GraduationCap, MapPin, Mail, Users, Award, BookOpen, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Background Color and Profile Image */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kamran Sohail</h1>
              <p className="text-xl mb-6">Sr. Technical Assistant, NIT Patna</p>
              <p className="text-lg opacity-90 mb-6">Ph.D. in Civil Engineering</p>
              <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="opacity-75" />
                  <span>National Institute of Technology Patna</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="opacity-75" />
                  <span>kamran@nitp.ac.in</span>
                </div>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
        {/* Research Interests with Background Color and Logo */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="mr-3 text-blue-700" />
            Research Interests
            <div className="ml-auto w-16 h-8">
              <img 
                src="/lovable-uploads/16e5dbdf-5449-4d4b-a581-1670fa21a7e9.png" 
                alt="DOCEL.in Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 rounded-lg flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Transportation Geotechnics</h3>
                  <p className="text-gray-700 text-sm">
                    Advanced study of soil-structure interaction in transportation infrastructure
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-green-100 rounded-lg flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">AI/ML-based Modeling</h3>
                  <p className="text-gray-700 text-sm">
                    Application of artificial intelligence and machine learning in civil engineering
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-purple-100 rounded-lg flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-900 mb-2">Data-centric Construction</h3>
                  <p className="text-gray-700 text-sm">
                    Leveraging data analytics for modern construction methodologies
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-orange-100 rounded-lg flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 mb-2">Satellite Image Processing</h3>
                  <p className="text-gray-700 text-sm">
                    Computer vision and remote sensing applications in infrastructure monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Research Projects</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-700" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Citations</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Kamran Sohail is a distinguished researcher and Sr. Technical Assistant at the National Institute of Technology Patna, 
              specializing in Civil Engineering with a focus on innovative applications of artificial intelligence and machine learning 
              in geotechnical and transportation engineering.
            </p>
            <p className="mb-4">
              With over 55 peer-reviewed publications, Kamran has made significant contributions to the fields of transportation 
              geotechnics, AI/ML-based modeling, data-centric construction methodologies, and satellite image processing. His research 
              bridges the gap between traditional civil engineering practices and modern computational techniques.
            </p>
            <p>
              Kamran's work in developing AI-driven solutions for construction material classification, cloud removal from satellite 
              images, and geotechnical modeling has been widely recognized in the academic community and has practical applications in 
              infrastructure development and monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
