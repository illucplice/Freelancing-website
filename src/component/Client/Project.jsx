import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !details || !minBudget || !maxBudget) {
      alert("Please fill in all fields!");
      return;
    }

    const newProject = { title, details, minBudget, maxBudget };
    
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setTitle("");
    setDetails("");
    setMinBudget("");
    setMaxBudget("");

    navigate("/dashboard");
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center px-6">
      <div className="self-start mb-4">
        <button 
          className="text-white hover:text-green-500 cursor-pointer" 
          onClick={() => navigate("/dashboard")}
        >
          &larr; Back
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center">Create Project</h1>
      <p className="text-lg text-center mt-2">
        Create your project by filling the following form
      </p>

      <div className="border border-green-600 p-6 mt-6 rounded-md w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-lg font-semibold">Title of the project</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-black"
          />

          <label className="text-lg font-semibold">Project Details</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-black"
            rows="3"
          ></textarea>

          <label className="text-lg font-semibold">Budget</label>
          <div className="flex space-x-4">
            <input
              type="text"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
              className="w-1/2 px-4 py-2 rounded-md bg-white text-black"
              placeholder="Min"
            />
            <input
              type="text"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              className="w-1/2 px-4 py-2 rounded-md bg-white text-black"
              placeholder="Max"
            />
          </div>

          <button 
            type="submit"
            className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-md mt-4 cursor-pointer"
          >
            + Post Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Project;
