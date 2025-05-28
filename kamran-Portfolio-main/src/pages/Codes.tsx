import Navigation from "@/components/Navigation";
import { Code, Github, ExternalLink, Star } from "lucide-react";
import matlab from "@/assets/matlab icon.jpg";

const Codes = () => {
  const repositories = [
    {
      name: "ML-Construction-Materials",
      description:
        "Machine learning models for automated classification of construction materials using computer vision techniques.",
      language: "Python",
      stars: 45,
      forks: 12,
      url: "#",
    },
    {
      name: "Satellite-Cloud-Removal",
      description:
        "Deep learning algorithms for removing clouds from satellite imagery for better geospatial analysis.",
      language: "Python",
      stars: 32,
      forks: 8,
      url: "#",
    },
    {
      name: "Geotechnical-Analysis-Tools",
      description:
        "Data analysis tools and utilities for geotechnical engineering applications.",
      language: "MATLAB",
      stars: 28,
      forks: 15,
      url: "#",
    },
    {
      name: "Transportation-AI-Models",
      description:
        "AI/ML models specifically designed for transportation infrastructure analysis and prediction.",
      language: "Python",
      stars: 38,
      forks: 10,
      url: "#",
    },
  ];

  const tools = [
    {
      name: "Python",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg"
          alt="Python"
          className="w-6 h-6"
        />
      ),
      color: "text-[#3776AB]",
    },
    {
      name: "MATLAB",
      logo: <img src={matlab} alt="MATLAB" className="w-6 h-6" />,
      color: "text-[#E44D26]",
    },
    {
      name: "R",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/r.svg"
          alt="R"
          className="w-6 h-6"
        />
      ),
      color: "text-[#276DC3]",
    },
    {
      name: "TensorFlow",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tensorflow.svg"
          alt="TensorFlow"
          className="w-6 h-6"
        />
      ),
      color: "text-[#FF6F00]",
    },
    {
      name: "PyTorch",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pytorch.svg"
          alt="PyTorch"
          className="w-6 h-6"
        />
      ),
      color: "text-[#EE4C2C]",
    },
    {
      name: "OpenCV",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/opencv.svg"
          alt="OpenCV"
          className="w-6 h-6"
        />
      ),
      color: "text-[#5C3EE8]",
    },
    {
      name: "QGIS",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/qgis.svg"
          alt="QGIS"
          className="w-6 h-6"
        />
      ),
      color: "text-[#669900]",
    },
    {
      name: "AutoCAD",
      logo: (
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/autocad.svg"
          alt="AutoCAD"
          className="w-6 h-6"
        />
      ),
      color: "text-[#DA251D]",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Code Repositories
              </h1>
              <p className="text-gray-600 mt-2">
                Open source projects and research code
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {repo.name}
                </h3>
                <a
                  href={repo.url}
                  className="text-blue-600 hover:text-blue-800"
                >
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technologies & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg flex items-center justify-center space-x-2"
              >
                {tool.logo}
                <span className={`font-medium ${tool.color}`}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* media */}
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
         
        </div>
      </div>
    </div>
  );
};

export default Codes;
