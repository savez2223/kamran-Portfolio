import Navigation from "@/components/Navigation";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

const Publications = () => {
  const keyPublications = [
    {
      title:
        "Probabilistic assessment of heavy-haul railway track using multi-gene genetic programming",
      authors: "Kamran S",
      journal: "Applied Mathematical Modelling",
      year: "2024",
      volume: "125",
      pages: "687-720",
      doi: "https://doi.org/10.1016/j.apm.2023.08.009",
    },
    {
      title:
        "Hybrid ensemble paradigms for estimating tunnel boring machine penetration rate for the 10-km long Bahce-Nurdagi twin tunnels",
      authors: "Kamran S, Ozcan, N. T., Asteris, P. G., & Gokceoglu, C.",
      journal: "Engineering Applications of Artificial Intelligence",
      year: "2024",
      volume: "136",
      pages: "108997",
      doi: "https://doi.org/10.1016/j.engappai.2024.108997",
    },
    {
      title:
        "A hybrid approach of ANN and improved PSO for estimating soaked CBR of subgrade soils of heavy-haul railway corridor",
      authors:
        "Kamran S, Alzo'ubi, A. K., Palanivelu, S., Hamidian, P., GuhaRay, A., Kumar, G., & Asteris, P. G.",
      journal: "International Journal of Pavement Engineering",
      year: "2023",
      volume: "24(1)",
      pages: "2176494",
      doi: "https://doi.org/10.1080/10298436.2023.2176494",
    },
    {
      title:
        "Probabilistic slope stability analysis of Heavy-haul freight corridor using a hybrid machine learning paradigm",
      authors: "Kamran S, & Samui, P.",
      journal: "Transportation Geotechnics",
      year: "2022",
      volume: "37",
      pages: "100815",
      doi: "https://doi.org/10.1016/j.trgeo.2022.100815",
    },
    {
      title:
        "A comparative analysis of hybrid computational models constructed with swarm intelligence algorithms for estimating soil compression index",
      authors:
        "Kamran S, Kardani, N., Alzo'ubi, A. K., Samui, P., Gandomi, A. H., & Gokceoglu, C.",
      journal: "Archives of Computational Methods in Engineering",
      year: "2022",
      volume: "29(7)",
      pages: "4735-4773",
      doi: "https://doi.org/10.1007/s11831-022-09748-1",
    },
    {
      title:
        "A novel integrated approach of ELM and modified equilibrium optimizer for predicting soil compression index of subgrade layer of Dedicated Freight Corridor",
      authors: "Kamran S, GuhaRay, A., Gupta, S., Pradhan, B., & Gokceoglu, C.",
      journal: "Transportation Geotechnics",
      year: "2022",
      volume: "32",
      pages: "100678",
      doi: "https://doi.org/10.1016/j.trgeo.2021.100678",
    },
    {
      title:
        "ELM-based adaptive neuro swarm intelligence techniques for predicting the California bearing ratio of soils in soaked conditions",
      authors:
        "Kamran S, Samui, P., Ghosh, K., Gandomi, A. H., & Bhattacharyya, S.",
      journal: "Applied Soft Computing",
      year: "2021",
      volume: "110",
      pages: "107595",
      doi: "https://doi.org/10.1016/j.asoc.2021.107595",
    },
    {
      title:
        "Efficient computational techniques for predicting the California bearing ratio of soil in soaked conditions",
      authors:
        "Kamran S, Gokceoglu, C., Burman, A., Samui, P., & Asteris, P. G.",
      journal: "Engineering Geology",
      year: "2021",
      volume: "291",
      pages: "106239",
      doi: "https://doi.org/10.1016/j.enggeo.2021.106239",
    },
    {
      title:
        "Reliability Analysis of Piled Raft Foundation Using a Novel Hybrid Approach of ANN and Equilibrium Optimizer",
      authors:
        "Kamran S Manna, P., Kumar, V., Burman, A., Žlender, B., & Samui, P.",
      journal: "CMES-Computer Modeling in Engineering & Sciences",
      year: "2021",
      volume: "128(3)",
      doi: "https://www.techscience.com/CMES/v128n3/44007",
    },
    {
      title:
        "Hybrid ensemble soft computing approach for predicting penetration rate of tunnel boring machine in a rock environment",
      authors:
        "Kamran S, Kardani, N., GuhaRay, A., Burman, A., Samui, P., & Zhang, Y.",
      journal: "Journal of Rock Mechanics and Geotechnical Engineering",
      year: "2021",
      volume: "13(6)",
      pages: "1398-1412",
      doi: "https://doi.org/10.1016/j.jrmge.2021.06.015",
    },
  ];

  const publicationsByYear = {
    "2025": [
      "Asteris, P. G., Gandomi, A. H., Armaghani, D. J., Mohammed, A. S., Bousiou, Z., Batsis, I., ..<span class='text-blue-600 font-semibold'>Kamran S</span>, .... & Gavriilaki, E. (2025). Pre-transplant and transplant parameters predict long-term survival after hematopoietic cell transplantation using machine learning. Transplant Immunology, 102211.",
      "Kaloop, M. R., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Hu, J. W., & Elsharawy, M. (2025). Comparative study on deep and machine learning approaches for predicting wind pressures on tall buildings. Alexandria Engineering Journal, 111, 610-627.",
    ],
    "2024": [
      "<span class='text-blue-600 font-semibold'>Kamran S</span> (2024). Probabilistic assessment of heavy-haul railway track using multi-gene genetic programming. Applied Mathematical Modelling, 125, 687-720.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Kumar, S., Kumar, A., Suman, S. K., & Biswas, R. (2024). Compressive Strength Estimation of Manufactured Sand Concrete Using Hybrid ANN Paradigms Constructed with Meta-heuristic Algorithm﻿ s. Iranian Journal of Science and Technology, Transactions of Civil Engineering, 48(6), 4233-4253.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Ozcan, N. T., Asteris, P. G., & Gokceoglu, C. (2024). Hybrid ensemble paradigms for estimating tunnel boring machine penetration rate for the 10-km long Bahce-Nurdagi twin tunnels. Engineering Applications of Artificial Intelligence, 136, 108997.",
      "Asteris, P. G., Gavriilaki, E., Kampaktsis, P. N., Gandomi, A. H., Armaghani, D. J., Tsoukalas, M. Z., . <span class='text-blue-600 font-semibold'>Kamran S</span>,.... & Gkaliagkousi, E. (2024). Revealing the nature of cardiovascular disease using DERGA, a novel data ensemble refinement greedy algorithm. International journal of cardiology, 412, 132339.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Suman, S. K., Kumar, S., & Asteris, P. G. (2024). An efficient framework of optimized ensemble paradigm for estimating resilient modulus of subgrades. Transportation Geotechnics, 48, 101315.",
      "Iqbal, M., Salami, B. A., Khan, M. A., Jalal, F. E., Jamal, A., & <span class='text-blue-600 font-semibold'>Kamran S</span> (2024). Computational approach towards shear strength prediction of squat RC walls implementing ensemble and hybrid SVR paradigms. Materials Today Communications, 40, 109921.",
      "Kardani, N., Kumar, A., Kumar, S., Karr, O., & <span class='text-blue-600 font-semibold'>Kamran S</span> (2024). A Deep Learning Approach for Modelling of Resilient Modulus of Compacted Subgrade Subjected to Freezing-Thaw Cycles and Moistures. Transportation Infrastructure Geotechnology, 1-24.",
      "Asteris, P. G., Gandomi, A. H., Armaghani, D. J., Kokoris, S., Papandreadi, A. T., Roumelioti, A., ....<span class='text-blue-600 font-semibold'>Kamran S</span>,... & Terpos, E. (2024). Prognosis of COVID-19 severity using DERGA, a novel machine learning algorithm. European Journal of Internal Medicine, 125, 67-73.",
      "Asteris, P. G., Gandomi, A. H., Armaghani, D. J., Tsoukalas, M. Z., Gavriilaki, E., Gerber, G., .....<span class='text-blue-600 font-semibold'>Kamran S</span>,... & Dimopoulos, M. A. (2024). Genetic justification of COVID‐19 patient outcomes using DERGA, a novel data ensemble refinement greedy algorithm. Journal of Cellular and Molecular Medicine, 28(4), e18105.",
      "Ghani, S., Sapkota, S. C., Singh, R. K., <span class='text-blue-600 font-semibold'>Kamran S</span>, & Asteris, P. G. (2024). Modelling and validation of liquefaction potential index of fine-grained soils using ensemble learning paradigms. Soil Dynamics and Earthquake Engineering, 177, 108399.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Singh, R. K., Alatiyyah, M., & Alateyah, S. A. (2024). An Effective Hybrid Model of ELM and Enhanced GWO for Estimating Compressive Strength of Metakaolin-Contained Cemented Materials. Computer Modeling in Engineering & Sciences (CMES), 139(2).",
    ],
    "2023": [
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Alzo'ubi, A. K., Palanivelu, S., Hamidian, P., GuhaRay, A., Kumar, G., ... & Asteris, P. G. (2023). A hybrid approach of ANN and improved PSO for estimating soaked CBR of subgrade soils of heavy-haul railway corridor. International Journal of Pavement Engineering, 24(1), 2176494.",
      "Kumar, S., Choudhary, S. S., Burman, A., Singh, R. K., <span class='text-blue-600 font-semibold'>Kamran S</span>, & Asteris, P. G. (2023). Probabilistic slope stability analysis of Mount St. Helens using Scoops3D and a hybrid intelligence paradigm. Mathematics, 11(18), 3809.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Kardani, N., GuhaRay, A., Samui, P., Wu, C., Zhang, Y., ... & Gokceoglu, C. (2023). Hybrid neuro swarm intelligence paradigms for predicting the shear strength of sub-soil of heavy-haul freight corridor. Road materials and pavement design, 24(8), 1885-1916.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Singh, R. K., Ghani, S., Konstantakatos, G., & Asteris, P. G. (2023). Modelling soil compaction parameters using an enhanced hybrid intelligence paradigm of ANFIS and improved grey wolf optimiser. Mathematics, 11(14), 3064.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, & Asteris, P. G. (2023). Application of hybrid ANN paradigms built with nature inspired meta-heuristics for modelling soil compaction parameters. Transportation Geotechnics, 41, 100995.",
      "Kumar, V., Rao, B., Burman, A., Kumar, S., & <span class='text-blue-600 font-semibold'>Kamran S</span> (2023). An exact solution of three-dimensional rock mass strength criterion. Modeling Earth Systems and Environment, 9(1), 723-734.",
      "Singh, P., <span class='text-blue-600 font-semibold'>Kamran S</span>, Han, F., Samui, P., & Zhang, W. (2023). A critical review of conventional and soft computing methods for slope stability analysis. Modeling Earth Systems and Environment, 9(1), 1-17.",
      "Raja, M. N. A., Jaffar, S. T. A., <span class='text-blue-600 font-semibold'>Kamran S</span>, & Shukla, S. K. (2023). Predicting and validating the load-settlement behavior of large-scale geosynthetic-reinforced soil abutments using hybrid intelligent modeling. Journal of Rock Mechanics and Geotechnical Engineering, 15(3), 773-788.",
      "Kaloop, M. R., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Hu, J. W., & Zarzoura, F. (2023). Computational intelligence approaches for estimating the unconfined compressive strength of rocks. Arabian Journal of Geosciences, 16(1), 37.",
      "Asteris, P. G., Kokoris, S., Gavriilaki, E., Tsoukalas, M. Z., Houpas, P., Paneta, M., ...... <span class='text-blue-600 font-semibold'>Kamran S</span>,..... & Dimopoulos, M. A. (2023). Early prediction of COVID-19 outcome using artificial intelligence techniques and only five laboratory indices. Clinical Immunology, 246, 109218.",
      "Skentou, A. D., <span class='text-blue-600 font-semibold'>Kamran S</span>, Mamou, A., Lemonis, M. E., Kumar, G., Samui, P., ... & Asteris, P. G. (2023). Closed-form equation for estimating unconfined compressive strength of granite from three non-destructive tests using soft computing models. Rock Mechanics and Rock Engineering, 56(1), 487-514.",
    ],
    "2022": [
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, & Samui, P. (2022). Probabilistic slope stability analysis of Heavy-haul freight corridor using a hybrid machine learning paradigm. Transportation Geotechnics, 37, 100815.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Kardani, N., Alzo'ubi, A. K., Samui, P., Gandomi, A. H., & Gokceoglu, C. (2022). A comparative analysis of hybrid computational models constructed with swarm intelligence algorithms for estimating soil compression index. Archives of Computational Methods in Engineering, 29(7), 4735-4773.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Kardani, N., Alzo'ubi, A. K., Roy, B., Samui, P., & Gandomi, A. H. (2022). Novel integration of extreme learning machine and improved Harris hawks optimization with particle swarm optimization-based mutation for predicting soil consolidation parameter. Journal of Rock Mechanics and Geotechnical Engineering, 14(5), 1588-1608.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Biswas, R., Kardani, N., Iqbal, M., Samui, P., Singh, M. P., & Asteris, P. G. (2022). A novel integrated approach of augmented grey wolf optimizer and ANN for estimating axial load carrying-capacity of concrete-filled steel tube columns. Construction and Building Materials, 337, 127454.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, & Samui, P. (2022). Application of artificial intelligence techniques in slope stability analysis: a short review and future prospects. International Journal of Geotechnical Earthquake Engineering (IJGEE), 13(1), 1-23.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, GuhaRay, A., Gupta, S., Pradhan, B., & Gokceoglu, C. (2022). A novel integrated approach of ELM and modified equilibrium optimizer for predicting soil compression index of subgrade layer of Dedicated Freight Corridor. Transportation Geotechnics, 32, 100678.",
      "Kardani, N., <span class='text-blue-600 font-semibold'>Kamran S</span>, Roy, B., Samui, P., Nazem, M., Armaghani, D. J., & Zhou, A. (2022). A novel improved Harris Hawks optimization algorithm coupled with ELM for predicting permeability of tight carbonates. Engineering with Computers, 1-24.",
      "Kaloop, M. R., <span class='text-blue-600 font-semibold'>Kamran S</span>, Hu, J. W., & Abd-Elrahman, M. (2022). Estimation of lightweight aggregate concrete characteristics using a novel stacking ensemble approach. Advances in nano research, 13(5), 499-512.",
      "Khan, K., Iqbal, M., Jalal, F. E., Amin, M. N., Alam, M. W., & <span class='text-blue-600 font-semibold'>Kamran S</span> (2022). Hybrid ANN models for durability of GFRP rebars in alkaline concrete environment using three swarm-based optimization algorithms. Construction and Building Materials, 352, 128862.",
      "Salami, B. A., Iqbal, M., Abdulraheem, A., Jalal, F. E., Alimi, W., Jamal, A., ... & <span class='text-blue-600 font-semibold'>Kamran S</span> (2022). Estimating compressive strength of lightweight foamed concrete using neural, genetic and ensemble machine learning approaches. Cement and Concrete Composites, 133, 104721.",
      "Pradeep, T., GuhaRay, A., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Kumar, S., & Armaghani, D. J. (2022). Reliability and prediction of embedment depth of sheet pile walls using hybrid ANN with optimization techniques. Arabian Journal for Science and Engineering, 47(10), 12853-12871.",
      "Kardani, N., Aminpour, M., Raja, M. N. A., Kumar, G., <span class='text-blue-600 font-semibold'>Kamran S</span>, & Nazem, M. (2022). Prediction of the resilient modulus of compacted subgrade soils using ensemble machine learning methods. Transportation Geotechnics, 36, 100827.",
      "Topal, U. M. U. T., Goodarzimehr, V., <span class='text-blue-600 font-semibold'>Kamran S</span>, Vo-Duy, T., & Shojaee, S. (2022). Maximization of the fundamental frequency of the FG-CNTRC quadrilateral plates using a new hybrid PSOG algorithm. Composite Structures, 295, 115823.",
      "Azam, A., <span class='text-blue-600 font-semibold'>Kamran S</span>, Kaloop, M. R., Samui, P., Alanazi, F., Alzara, M., & Yosri, A. M. (2022). Modeling resilient modulus of subgrade soils using LSSVM optimized with swarm intelligence algorithms. Scientific Reports, 12(1), 14454.",
      "Kardani, N., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Nazem, M., Zhou, A., & Armaghani, D. J. (2022). A novel technique based on the improved firefly algorithm coupled with extreme learning machine (ELM-IFF) for predicting the thermal conductivity of soil. Engineering with Computers, 1-20.",
      "Kardani, N., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Nazem, M., Asteris, P. G., & Zhou, A. (2022). Predicting the thermal conductivity of soils using integrated approach of ANN and PSO with adaptive and time-varying acceleration coefficients. International Journal of Thermal Sciences, 173, 107427.",
      "Pradeep, T., <span class='text-blue-600 font-semibold'>Kamran S</span>, & Samui, P. (2022). Prediction of rock strain using soft computing framework. Innovative Infrastructure Solutions, 7, 1-24.",
      "Das, G., Burman, A., <span class='text-blue-600 font-semibold'>Kamran S</span>, Kumar, S., Choudhary, S. S., & Samui, P. (2022). Risk estimation of soil slope stability problems. Arabian Journal of Geosciences, 15(2), 204.",
    ],
    "2021": [
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Kardani, N., GuhaRay, A., Burman, A., Samui, P., & Zhang, Y. (2021). Hybrid ensemble soft computing approach for predicting penetration rate of tunnel boring machine in a rock environment. Journal of Rock Mechanics and Geotechnical Engineering, 13(6), 1398-1412.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Dhilipkumar, B., Mulagala, L., & Samui, P. (2021, November). Application of bi-directional extreme learning machine in predicting stability of slope of railway embankment in seismic condition. In Stability of Slopes and Underground Excavations: Proceedings of Indian Geotechnical Conference 2020 Volume 3 (pp. 11-22). Singapore: Springer Singapore.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Ghosh, K., Gandomi, A. H., & Bhattacharyya, S. (2021). ELM-based adaptive neuro swarm intelligence techniques for predicting the California bearing ratio of soils in soaked conditions. Applied Soft Computing, 110, 107595.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Gokceoglu, C., Burman, A., Samui, P., & Asteris, P. G. (2021). Efficient computational techniques for predicting the California bearing ratio of soil in soaked conditions. Engineering Geology, 291, 106239.",
      "<span class='text-blue-600 font-semibold'>Kamran S</span>, Manna, P., Kumar, V., Burman, A., Žlender, B., & Samui, P. (2021). Reliability Analysis of Piled Raft Foundation Using a Novel Hybrid Approach of ANN and Equilibrium Optimizer. CMES-Computer Modeling in Engineering & Sciences, 128(3).",
      "Asteris, P. G., Skentou, A. D., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., & Lourenço, P. B. (2021). Soft computing techniques for the prediction of concrete compressive strength using Non-Destructive tests. Construction and Building Materials, 303, 124450.",
      "Pradeep, T., <span class='text-blue-600 font-semibold'>Kamran S</span>, Burman, A., & Samui, P. (2021). Rock strain prediction using deep neural network and hybrid models of anfis and meta-heuristic optimization algorithms. Infrastructures, 6(9), 129.",
      "Kaloop, M. R., <span class='text-blue-600 font-semibold'>Kamran S</span>, Kardani, N., Samui, P., Hu, J. W., & Ramzy, A. (2021). Novel application of adaptive swarm intelligence techniques coupled with adaptive network-based fuzzy inference system in predicting photovoltaic power. Renewable and Sustainable Energy Reviews, 148, 111315.",
      "Ghani, S., Kumari, S., & <span class='text-blue-600 font-semibold'>Kamran S</span> (2021). A novel liquefaction study for fine-grained soil using PCA-based hybrid soft computing models. Sādhanā, 46(3), 113.",
      "Dhilipkumar, B., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., & Kumar, S. (2021). Predicting Probability of Liquefaction Susceptibility based on a wide range of CPT data. International Journal of Geotechnical Earthquake Engineering (IJGEE), 12(2), 18-41.",
      "Asteris, P. G., Skentou, A. D., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., & Pilakoutas, K. (2021). Predicting concrete compressive strength using hybrid ensembling of surrogate machine learning models. Cement and Concrete Research, 145, 106449.",
      "Kumar, M., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Hu, J. W., & Kaloop, M. R. (2021). Reliability analysis of pile foundation using soft computing techniques: a comparative study. Processes, 9(3), 486.",
      "Kardani, N., <span class='text-blue-600 font-semibold'>Kamran S</span>, Kim, D., Samui, P., & Zhou, A. (2021). Modelling the energy performance of residential buildings using advanced computational frameworks based on RVM, GMDH, ANFIS-BBO and ANFIS-IPSO. Journal of Building Engineering, 35, 102105.",
      "Biswas, R., <span class='text-blue-600 font-semibold'>Kamran S</span>, Samui, P., Rai, B., Nayak, S., & Armaghani, D. J. (2021). Efficient soft computing techniques for the prediction of compressive strength of geopolymer concrete. Computers and Concrete, 28(2), 221-232.",
      "Kardani, N., <span class='text-blue-600 font-semibold'>Kamran S</span>, Gupta, S., Samui, P., Nazem, M., Zhang, Y., & Zhou, A. (2021). Predicting permeability of tight carbonates using a hybrid machine learning approach of modified equilibrium optimizer and extreme learning machine. Acta Geotechnica, 1-17.",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="text-blue-700 mr-3" size={32} />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Publications
                </h1>
                <p className="text-gray-600 mt-2">
                  Research papers and academic publications
                </p>
              </div>
            </div>
            {/* <div className="w-16 h-8">
              <img
                src="/lovable-uploads/16e5dbdf-5449-4d4b-a581-1670fa21a7e9.png"
                alt="DOCEL.in Logo"
                className="w-full h-full object-contain"
              />
            </div> */}
          </div>
        </div>

        {/* Key Publications */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Publications
          </h2>
          <div className="space-y-6">
            {keyPublications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {pub.authors}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center">
                    <BookOpen size={16} className="mr-1" />
                    {pub.journal}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {pub.year}
                  </span>
                  <span>
                    {pub.volume}, {pub.pages}
                  </span>
                </div>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  {pub.doi}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* All Publications by Year */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Publications
          </h2>

          {Object.entries(publicationsByYear)
            .reverse()
            .map(([year, publications]) => (
              <div key={year} className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
                  {year} ({publications.length} publications)
                </h3>
                <div className="space-y-4">
                  {publications.map((publication, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p
                        className="text-gray-800 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: publication }}
                      ></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Publication Statistics */}
        {/* <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Publication Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900">55+</h3>
              <p className="text-blue-700 text-sm">Total Publications</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900">28</h3>
              <p className="text-green-700 text-sm">H-Index</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900">IF 2.4</h3>
              <p className="text-purple-700 text-sm">Journal Editor</p>
            </div>
          </div>
        </div> */}

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
          {/* <p className="text-sm text-gray-500 mt-6">
            Developed by Kamran S. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Publications;
