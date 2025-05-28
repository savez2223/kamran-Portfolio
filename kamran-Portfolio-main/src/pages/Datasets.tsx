import Navigation from "@/components/Navigation";
import { Database, Download, FileText, Calendar } from "lucide-react";

const Datasets = () => {
  const ownDatasets = [
    {
      name: "INLAND",
      description: "Aerial imagery of infrastructures and lands of India.",
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
      description: "Dataset description will be added.",
      downloadUrl: "#",
    },
    {
      name: "xxxxx",
      description: "Dataset description will be added.",
      downloadUrl: "#",
    },
    {
      name: "xxxxx",
      description: "Dataset description will be added.",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-4 md:mb-8">
          <div className="flex items-center mb-4 md:mb-6">
            <Database className="text-blue-700 mr-3" size={28} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Datasets
              </h1>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                Research datasets for academic and development purposes
              </p>
            </div>
          </div>
        </div>

        {/* Own Datasets Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            A. Own datasets
          </h2>
          <div className="space-y-3 md:space-y-6">
            {ownDatasets.map((dataset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-3 md:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 md:mb-4">
                  <div className="flex-1 mb-3 md:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      {dataset.name}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-4">
                      {dataset.description}
                    </p>
                  </div>

                  <a
                    href={dataset.downloadUrl}
                    className="md:ml-4 flex items-center justify-center px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
                  >
                    <Download size={14} className="mr-1 md:mr-2" />
                    Download link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Literature Datasets Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            B. Literature datasets
          </h2>
          <div className="space-y-3 md:space-y-6">
            {literatureDatasets.map((dataset, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-3 md:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 md:mb-4">
                  <div className="flex-1 mb-3 md:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      {dataset.name}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-4">
                      {dataset.description}
                    </p>
                  </div>

                  <a
                    href={dataset.downloadUrl}
                    className="md:ml-4 flex items-center justify-center px-3 py-2 md:px-4 md:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm md:text-base"
                  >
                    <Download size={14} className="mr-1 md:mr-2" />
                    Download link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Links */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            Media
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <a
              href="#"
              className="px-3 py-2 md:px-4 md:py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm md:text-base"
            >
              Google Scholar
            </a>
            <a
              href="#"
              className="px-3 py-2 md:px-4 md:py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm md:text-base"
            >
              Research Gate
            </a>
            <a
              href="#"
              className="px-3 py-2 md:px-4 md:py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm md:text-base"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Github
            </a>
            <a
              href="#"
              className="px-3 py-2 md:px-4 md:py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm md:text-base"
            >
              OrcID
            </a>
          </div>
          {/* <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
            Developed by Kamran S. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Datasets;
