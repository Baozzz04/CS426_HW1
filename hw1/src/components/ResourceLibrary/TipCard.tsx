import React from "react";

interface ResourceCardProps {
  title: string;
  image: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-4 md:p-6 transition duration-300 hover:scale-95">
      {" "}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 md:p-6">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ResourceCard;
