
import Navigation from "@/components/Navigation";
import { Code, Github, ExternalLink, Star } from "lucide-react";

const Codes = () => {
  const repositories = [
    {
      name: "ML-Construction-Materials",
      description: "Machine learning models for automated classification of construction materials using computer vision techniques.",
      language: "Python",
      stars: 45,
      forks: 12,
      url: "#"
    },
    {
      name: "Satellite-Cloud-Removal",
      description: "Deep learning algorithms for removing clouds from satellite imagery for better geospatial analysis.",
      language: "Python",
      stars: 32,
      forks: 8,
      url: "#"
    },
    {
      name: "Geotechnical-Analysis-Tools",
      description: "Data analysis tools and utilities for geotechnical engineering applications.",
      language: "MATLAB",
      stars: 28,
      forks: 15,
      url: "#"
    },
    {
      name: "Transportation-AI-Models",
      description: "AI/ML models specifically designed for transportation infrastructure analysis and prediction.",
      language: "Python",
      stars: 38,
      forks: 10,
      url: "#"
    }
  ];

  const tools = [
    "Python", "MATLAB", "R", "TensorFlow", "PyTorch", "OpenCV", "QGIS", "AutoCAD"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Code Repositories</h1>
              <p className="text-gray-600 mt-2">Open source projects and research code</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {repositories.map((repo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{repo.name}</h3>
                <a href={repo.url} className="text-blue-600 hover:text-blue-800">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-gray-700 mb-4">{repo.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    {repo.language}
                  </span>
                  <span className="flex items-center">
                    <Star size={16} className="mr-1" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center">
                    <Github size={16} className="mr-1" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                <span className="font-medium text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codes;
