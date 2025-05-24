import Navigation from "@/components/Navigation";
import { Database, Download, FileText, Calendar } from "lucide-react";

const Datasets = () => {
  const datasets = [
    {
      name: "Construction Materials Image Dataset",
      description:
        "Comprehensive dataset containing thousands of labeled images of various construction materials for machine learning applications.",
      size: "2.5 GB",
      format: "Images (JPG, PNG)",
      samples: "15,000+",
      lastUpdated: "2024",
      downloadUrl: "#",
    },
    {
      name: "Satellite Imagery Cloud Dataset",
      description:
        "Collection of satellite images with cloud cover annotations for developing cloud removal algorithms.",
      size: "5.2 GB",
      format: "GeoTIFF, Metadata",
      samples: "8,500+",
      lastUpdated: "2023",
      downloadUrl: "#",
    },
    {
      name: "Geotechnical Properties Database",
      description:
        "Soil and rock property measurements from various sites across India for geotechnical analysis.",
      size: "150 MB",
      format: "CSV, Excel",
      samples: "12,000+",
      lastUpdated: "2024",
      downloadUrl: "#",
    },
    {
      name: "Transportation Infrastructure Data",
      description:
        "Road and highway infrastructure data including traffic patterns and pavement conditions.",
      size: "800 MB",
      format: "CSV, Shapefile",
      samples: "25,000+",
      lastUpdated: "2023",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Research Datasets
              </h1>
              <p className="text-gray-600 mt-2">
                Open datasets for research and development
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {datasets.map((dataset, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dataset.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{dataset.description}</p>

                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Database size={16} className="mr-2" />
                      <span>{dataset.size}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FileText size={16} className="mr-2" />
                      <span>{dataset.format}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">
                        {dataset.samples} samples
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{dataset.lastUpdated}</span>
                    </div>
                  </div>
                </div>

                <button className="ml-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Usage Guidelines
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              All datasets are provided for research and educational purposes.
              Please cite the original publications when using these datasets in
              your research.
            </p>
            <p className="mb-4">
              For commercial usage or any questions regarding licensing, please
              contact the research team.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-blue-800">
                <strong>Note:</strong> Some datasets may require approval for
                access. Please follow the download instructions and provide
                necessary research details when requested.
              </p>
            </div>
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
          <p className="text-sm text-gray-500 mt-6">
            Developed by Kamran S. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datasets;
