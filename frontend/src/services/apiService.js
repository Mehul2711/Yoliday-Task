const API_URL = "http://localhost:5001/api";

const apiService = {
  getProjects: async () => {
    const response = await fetch(`${API_URL}/project`);
    if (!response.ok) throw new Error("Failed to fetch project data");
    return await response.json();
  },
  getSaved: async () => {
    const response = await fetch(`${API_URL}/saved`);
    if (!response.ok) throw new Error("Failed to fetch saved data");
    return await response.json();
  },
  getShared: async () => {
    const response = await fetch(`${API_URL}/shared`);
    if (!response.ok) throw new Error("Failed to fetch shared data");
    return await response.json();
  },
  getAchievements: async () => {
    const response = await fetch(`${API_URL}/achievement`);
    if (!response.ok) throw new Error("Failed to fetch achievement data");
    return await response.json();
  },
};

export default apiService;
