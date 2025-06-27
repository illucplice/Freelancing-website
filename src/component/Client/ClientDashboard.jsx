import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(savedJobs);
  }, []);

  const handleDelete = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    localStorage.setItem("postedJobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans px-6 py-4">
      <h2 className="text-2xl">Hello User,</h2>

      <div className="flex justify-end">
        <button 
          className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md mt-2 cursor-pointer transition duration-200"
          onClick={() => navigate("/project")}
        >
          + Post Job
        </button>
      </div>

      <h3 className="text-xl font-bold mt-6">POSTED JOBS</h3>
      <div className="mt-4">
        {jobs.length === 0 ? (
          <p className="text-gray-400 text-center">No jobs posted yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="border border-white p-4 rounded-md relative">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-300 mt-2">{job.description}</p>
                <p className="mt-2 text-green-400">Budget: ${job.budgetMin} - ${job.budgetMax}</p>
                
                {job.hiredTalent && (
                  <div className="mt-4">
                    <h4 className="text-green-500 font-semibold">Hired Talent</h4>
                    <div className="flex items-center gap-3 mt-2">
                      {job.hiredTalent.profileImage && (
                        <img
                          src={job.hiredTalent.profileImage}
                          alt={job.hiredTalent.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                        />
                      )}
                      <div>
                        <p className="text-lg font-bold">{job.hiredTalent.name}</p>
                        <p className="text-sm text-gray-400">{job.hiredTalent.email}</p>
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-500"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
