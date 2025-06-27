import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ProfileDashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("Username");
  const [tempUsername, setTempUsername] = useState("");
  const [budget, setBudget] = useState("$0");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDescription, setTempDescription] = useState("");
  const [tempSkills, setTempSkills] = useState("");
  const [tempBudget, setTempBudget] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const email = "@example";

  useEffect(() => {
    setProfileImage(localStorage.getItem("profileImage"));
    setBudget(localStorage.getItem("budget") || "$0");
    setDescription(localStorage.getItem("description") || "");
    setSkills(localStorage.getItem("skills") || "");
    setUsername(localStorage.getItem("username") || "Username");
    setPortfolio(JSON.parse(localStorage.getItem("portfolio")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
    localStorage.setItem("budget", budget);
    localStorage.setItem("description", description);
    localStorage.setItem("skills", skills);
    localStorage.setItem("username", username);
    localStorage.setItem("portfolio", JSON.stringify(portfolio));
  }, [profileImage, budget, description, skills, username, portfolio]);

  const onDropProfileImage = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropProfileImage,
    accept: "image/*",
    multiple: false,
  });

  const onDropPortfolio = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPortfolio([...portfolio, ...newImages]);
  };

  const {
    getRootProps: getPortfolioRootProps,
    getInputProps: getPortfolioInputProps,
  } = useDropzone({
    onDrop: onDropPortfolio,
    accept: "image/*",
    multiple: true,
  });

  const handleEditDescription = () => {
    setTempUsername(username);
    setTempDescription(description);
    setTempSkills(skills);
    setTempBudget(budget);
    setIsEditing(true);
  };

  const handleSaveDescription = () => {
    setUsername(tempUsername);
    setDescription(tempDescription);
    setSkills(tempSkills);
    setBudget(tempBudget);
    setIsEditing(false);

    const currentTalent = {
      name: tempUsername,
      email,
      profileImage,
      budget: parseInt(tempBudget.replace("$", "")) || 0,
      description: tempDescription,
      skills: tempSkills,
      portfolio,
    };

    const existingTalents = JSON.parse(localStorage.getItem("talents")) || [];
    const updatedTalents = existingTalents.filter((t) => t.email !== email);
    updatedTalents.push(currentTalent);
    localStorage.setItem("talents", JSON.stringify(updatedTalents));

    setSaveMessage("Profile saved to Hire Dashboard!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <section className="bg-black text-white p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full border-1 p-8 rounded-lg shadow-lg text-center">
        <div className="flex flex-col items-center">
          <div
            {...getRootProps()}
            className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center overflow-hidden cursor-pointer border border-white mb-4"
          >
            <input {...getInputProps()} />
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-lg text-gray-800">Upload</span>
            )}
          </div>

          {isEditing ? (
            <input
              className="text-4xl font-bold bg-gray-800 text-white text-center rounded-md p-2"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
            />
          ) : (
            <h2 className="text-4xl font-bold text-white">{username}</h2>
          )}

          <p className="text-lg text-gray-300">{email}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6">
          {isEditing ? (
            <>
              <div>
                <label className="block text-white mb-2">Description:</label>
                <textarea
                  className="w-full p-3 rounded-md bg-gray-800 text-white resize-none"
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Skills:</label>
                <input
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                  placeholder="e.g., Web Development, UI/UX Design"
                  value={tempSkills}
                  onChange={(e) => setTempSkills(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Budget:</label>
                <input
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                  value={tempBudget}
                  onChange={(e) => setTempBudget(e.target.value)}
                />
              </div>
              <button
                className="mt-2 bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSaveDescription}
              >
                Save
              </button>
              {saveMessage && (
                <p className="text-green-400 mt-2">{saveMessage}</p>
              )}
            </>
          ) : (
            <>
              <div>
                <label className="block text-white mb-2">Description:</label>
                <p className="p-3 rounded-md w-full">
                  {description || "No description added."}
                </p>
              </div>
              <div>
                <label className="block text-white mb-2">Skills:</label>
                <p className="p-3 rounded-md w-full">
                  {skills || "No skills added."}
                </p>
              </div>
              <div>
                <label className="block text-white mb-2">Budget:</label>
                <p className="p-3 rounded-md w-full">{budget}</p>
              </div>
              <button
                className="mt-2 bg-green-800 px-4 py-2 rounded-md hover:bg-green-700"
                onClick={handleEditDescription}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>

      <div className="max-w-4xl w-full mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
        <div
          {...getPortfolioRootProps()}
          className="border border-white p-4 rounded-md cursor-pointer"
        >
          <input {...getPortfolioInputProps()} />
          <p>Click or Drag & Drop to Upload Portfolio Items</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {portfolio.map((img, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Portfolio ${index}`}
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileDashboard;
