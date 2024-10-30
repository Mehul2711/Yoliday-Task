import React from "react";

function Card({ project, onAddToCart }) {
  return (
    <div className="bg-white  flex flex-row gap-5 p-5   rounded shadow-2xl">
      <div className="">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mr-5">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
        <p className="text-sm text-gray-600">Category: {project.category}</p>
        <p className="text-sm text-gray-600">By: {project.author}</p>
        <div className="flex justify-end ">
          <button
            onClick={() => onAddToCart(project)}
            className="mt-4 bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
