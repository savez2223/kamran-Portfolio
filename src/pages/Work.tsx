
import Navigation from "@/components/Navigation";
import { Briefcase, MapPin, Calendar, Award } from "lucide-react";

const Work = () => {
  const experiences = [
    {
      title: "Sr. Technical Assistant",
      organization: "National Institute of Technology Patna",
      location: "Patna, Bihar",
      period: "2020 - Present",
      description: "Leading research projects in transportation geotechnics and AI/ML applications in civil engineering."
    },
    {
      title: "Research Associate",
      organization: "NIT Patna",
      location: "Patna, Bihar", 
      period: "2018 - 2020",
      description: "Conducted research on satellite image processing and computer vision applications."
    },
    {
      title: "Project Assistant",
      organization: "NIT Patna",
      location: "Patna, Bihar",
      period: "2016 - 2018", 
      description: "Assisted in various research projects related to geotechnical engineering."
    }
  ];

  const achievements = [
    "Published 55+ research papers in peer-reviewed journals",
    "Developed AI-based models for construction material classification",
    "Created innovative cloud removal algorithms for satellite imagery",
    "Mentored graduate students in research projects"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-700 mr-3" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Professional Experience</h1>
              <p className="text-gray-600 mt-2">Career journey and achievements</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{exp.organization}</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Computer Vision", 
                  "Geotechnical Engineering",
                  "Transportation Engineering",
                  "Data Analysis",
                  "Research & Development"
                ].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
