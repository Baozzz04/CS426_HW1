import NavigationBar from "../components/Cards/NavigationBar";
import ResourceCard from "../components/ResourceLibrary/TipCard";
import { resources } from "../utils/constants";

const ResourceLibrary = () => {
  return (
    <div>
      <NavigationBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            image={resource.image}
            description={resource.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
