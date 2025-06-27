import React, { useState, useEffect } from "react";

const budgetOptions = [
  { label: "All Budgets", value: "all" },
  { label: "Under $100", value: "100" },
  { label: "$100 - $500", value: "500" },
  { label: "Above $500", value: "1000" },
];

const TalentGrid = () => {
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [talents, setTalents] = useState([]);
  const [selectedTalent, setSelectedTalent] = useState(null);

  useEffect(() => {
    const savedTalents = JSON.parse(localStorage.getItem("talents")) || [];
    setTalents(savedTalents);
  }, []);

  const handleDeleteTalent = (email) => {
    const updatedTalents = talents.filter((talent) => talent.email !== email);
    setTalents(updatedTalents);
    localStorage.setItem("talents", JSON.stringify(updatedTalents));
  };

  const filteredTalents = talents.filter((talent) => {
    if (selectedBudget === "all") return true;
    if (selectedBudget === "100") return talent.budget < 100;
    if (selectedBudget === "500") return talent.budget >= 100 && talent.budget <= 500;
    if (selectedBudget === "1000") return talent.budget > 500;
  });

  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;

    const newJob = {
      title: form.jobTitle.value,
      description: form.jobDescription.value,
      budgetMin: form.budgetMin.value,
      budgetMax: form.budgetMax.value,
      hiredTalent: selectedTalent,
    };

    const currentJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    currentJobs.push(newJob);
    localStorage.setItem("postedJobs", JSON.stringify(currentJobs));

    alert(`Work posted for ${selectedTalent.name}`);
    setSelectedTalent(null);
  };

  return (
    <section className="bg-black text-white py-12 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Find the Perfect Talent</h2>
      <div className="flex justify-center mb-10">
        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="px-5 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none text-lg"
        >
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredTalents.length > 0 ? (
          filteredTalents.map((talent, index) => (
            <div key={index} className="bg-gray-900 p-5 rounded-xl shadow-md hover:bg-gray-800 transition-all relative">
              <button
                onClick={() => handleDeleteTalent(talent.email)}
                className="absolute top-2 right-2 text-red-500 text-xl hover:text-red-400"
              >
                ×
              </button>
              <div
                onClick={() => setSelectedTalent(talent)}
                className="w-full h-32 bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
              >
                {talent.profileImage ? (
                  <img src={talent.profileImage} alt={talent.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="flex items-center justify-center h-full text-gray-400">No Image</span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-bold text-green-400">{talent.name}</h3>
              <div className="bg-green-600 text-white text-center py-1 mt-2 rounded-md font-semibold text-sm">
                ${talent.budget}
              </div>
              <button
                onClick={() => setSelectedTalent(talent)}
                className="mt-3 w-full bg-green-700 hover:bg-green-600 text-white py-1.5 rounded-md text-sm font-medium"
              >
                Hire
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg">No talents available in this budget range.</p>
        )}
      </div>

      {selectedTalent && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 text-white p-5 rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-green-700">
            <button
              onClick={() => setSelectedTalent(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-green-500 text-xl font-bold"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-5">
              {selectedTalent.profileImage && (
                <img
                  src={selectedTalent.profileImage}
                  alt={selectedTalent.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-green-400">{selectedTalent.name}</h3>
                <p className="text-sm text-gray-400">{selectedTalent.email}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-green-500 font-semibold">Budget:</label>
                <p>${selectedTalent.budget}</p>
              </div>
              <div>
                <label className="block text-green-500 font-semibold">Description:</label>
                <p className="text-gray-300">{selectedTalent.description || "No description provided."}</p>
              </div>
              <div>
                <label className="block text-green-500 font-semibold">Skills:</label>
                <p className="text-gray-300">{selectedTalent.skills || "No skills listed."}</p>
              </div>
              <div>
                <label className="block text-green-500 font-semibold mb-1">Portfolio:</label>
                {selectedTalent.portfolio?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {selectedTalent.portfolio.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Portfolio ${idx}`}
                        className="w-full h-20 object-cover rounded-md border border-green-700"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No portfolio items uploaded.</p>
                )}
              </div>
              <div className="mt-4 border-t border-gray-700 pt-3">
                <h4 className="text-lg font-bold text-green-400 mb-2">Post Work</h4>
                <form onSubmit={handlePostJob} className="space-y-3">
                  <div>
                    <label className="block text-green-500 font-semibold">Job Title:</label>
                    <input
                      required
                      name="jobTitle"
                      type="text"
                      className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-green-500 font-semibold">Job Description:</label>
                    <textarea
                      required
                      name="jobDescription"
                      className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white text-sm"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-green-500 font-semibold">Budget Min ($):</label>
                      <input
                        required
                        name="budgetMin"
                        type="number"
                        min="0"
                        className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-green-500 font-semibold">Budget Max ($):</label>
                      <input
                        required
                        name="budgetMax"
                        type="number"
                        min="0"
                        className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded font-bold text-sm"
                  >
                    Post Work
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TalentGrid;
