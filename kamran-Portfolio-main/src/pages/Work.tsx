import Navigation from "@/components/Navigation";
import {
  Briefcase,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Rocket,
} from "lucide-react";

const Work = () => {
  const experiences = [
    {
      title: "Sr. Technical Assistant",
      organization: "National Institute of Technology Patna",
      location: "Patna, Bihar",
      period: "2020 - Present",
      description:
        "Leading research projects in transportation geotechnics and AI/ML applications in civil engineering.",
    },
    {
      title: "Research Associate",
      organization: "NIT Patna",
      location: "Patna, Bihar",
      period: "2018 - 2020",
      description:
        "Conducted research on satellite image processing and computer vision applications.",
    },
    {
      title: "Project Assistant",
      organization: "NIT Patna",
      location: "Patna, Bihar",
      period: "2016 - 2018",
      description:
        "Assisted in various research projects related to geotechnical engineering.",
    },
  ];

  const achievements = [
    "Published 55+ research papers in peer-reviewed journals",
    "Developed AI-based models for construction material classification",
    "Created innovative cloud removal algorithms for satellite imagery",
    "Mentored graduate students in research projects",
  ];

  const ongoingProjects = [
    {
      title: "EGMS_L3",
      description:
        "A new web platform to extract L3 data from the European Ground Motion Service (EGMS) website.",
    },
    {
      title: "INLAND",
      description: "Aerial imagery of infrastructures and lands of India.",
    },
    {
      title: "ADCOM",
      description:
        "Development of an advanced computer vision algorithm for satellite image could removal.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Professional Experience
              </h1>
              <p className="text-gray-600 mt-2">
                Career journey and achievements
              </p>
            </div>
          </div>
        </div>

        {/* PhD Work Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-700 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">PhD Work</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Probabilistic analysis of heavy-haul railway corridor
            </h3>
            <p className="text-gray-600 mb-4 flex items-center">
              <Calendar size={16} className="mr-2" />
              Dec - 2023
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">Contributions:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Award
                  className="text-green-600 mr-3 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-700">
                  Develop a high-performance hybrid soft computing model to
                  conduct slope stability assessment of heavy-haul railway
                  corridor.
                </span>
              </li>
              <li className="flex items-start">
                <Award
                  className="text-green-600 mr-3 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-700">
                  Develop of high-performance hybrid soft computing models to
                  sidestep of operation of laboratory test of California bearing
                  ratio, Soil compression index, and Shear strength parameters.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {exp.organization}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            {/* Ongoing Work Section */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Rocket className="text-purple-700 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Ongoing Work
                </h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="space-y-4">
                  {ongoingProjects.map((project, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-purple-500 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="text-green-600 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "Geotechnical Engineering",
                  "Transportation Engineering",
                  "Data Analysis",
                  "Research & Development",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Links */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
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
            Developed by Kamran S. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
