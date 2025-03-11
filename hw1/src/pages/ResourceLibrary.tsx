import NavigationBar from "../components/NavigationBar/NavigationBar";
import ResourceCard from "../components/ResourceLibrary/TipCard";
import { resources } from "../utils/constants";

const ResourceLibrary: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <div className="p-10">
        {/* Hero Section */}
        <div className="text-center my-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
            Resource Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of resources to empower your journey.
          </p>
        </div>
        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="transform transition hover:scale-105 duration-300"
            >
              <ResourceCard
                title={resource.title}
                image={resource.image}
                description={resource.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
