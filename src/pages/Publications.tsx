
import Navigation from "@/components/Navigation";
import { BookOpen, Calendar, Users, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "AI-Based Classification of Construction Materials Using Computer Vision",
      authors: "Kamran Sohail, et al.",
      journal: "Journal of Civil Engineering",
      year: "2024",
      type: "Journal Article"
    },
    {
      title: "Machine Learning Applications in Transportation Geotechnics",
      authors: "Kamran Sohail, et al.",
      journal: "Transportation Research",
      year: "2023",
      type: "Journal Article"
    },
    {
      title: "Cloud Removal from Satellite Images using Deep Learning",
      authors: "Kamran Sohail, et al.",
      journal: "Remote Sensing Journal",
      year: "2023",
      type: "Journal Article"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Publications</h1>
              <p className="text-gray-600 mt-2">Research papers and academic publications</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {pub.journal}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {pub.year}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      {pub.type}
                    </span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Publication Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900">55+</h3>
              <p className="text-blue-700 text-sm">Total Publications</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900">500+</h3>
              <p className="text-green-700 text-sm">Citations</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900">15+</h3>
              <p className="text-purple-700 text-sm">Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
