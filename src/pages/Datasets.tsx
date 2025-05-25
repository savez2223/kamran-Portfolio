
import Navigation from "@/components/Navigation";
import { Database, Download, FileText, Calendar } from "lucide-react";

const Datasets = () => {
  const ownDatasets = [
    {
      name: "INLAND",
      description:
        "Aerial imagery of infrastructures and lands of India.",
      downloadUrl: "#",
    },
    {
      name: "TRIM",
      description:
        "Aerial imagery of Transport infrastructures construction materials.",
      downloadUrl: "#",
    },
    {
      name: "Laboratory results of California Bearing ratio of soils",
      description:
        "Comprehensive laboratory test results for California Bearing Ratio of various soil types.",
      downloadUrl: "#",
    },
  ];

  const literatureDatasets = [
    {
      name: "Laboratory results of Compaction parameters of soils",
      description:
        "Comprehensive compaction parameter data from various soil studies.",
      downloadUrl: "#",
    },
    {
      name: "xxxxx",
      description:
        "Dataset description will be added.",
      downloadUrl: "#",
    },
    {
      name: "xxxxx",
      description:
        "Dataset description will be added.",
      downloadUrl: "#",
    },
    {
      name: "xxxxx",
      description:
        "Dataset description will be added.",
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
                Datasets
              </h1>
              <p className="text-gray-600 mt-2">
                Research datasets for academic and development purposes
              </p>
            </div>
          </div>
        </div>

        {/* Own Datasets Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            A. Own datasets
          </h2>
          <div className="space-y-6">
            {ownDatasets.map((dataset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {dataset.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{dataset.description}</p>
                  </div>

                  <a
                    href={dataset.downloadUrl}
                    className="ml-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Download link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Literature Datasets Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            B. Literature datasets
          </h2>
          <div className="space-y-6">
            {literatureDatasets.map((dataset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {dataset.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{dataset.description}</p>
                  </div>

                  <a
                    href={dataset.downloadUrl}
                    className="ml-4 flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Download link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Links */}
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
            Developed by Abidhan Bardhan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datasets;
