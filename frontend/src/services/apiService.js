const API_URL = "https://yoliday-task.onrender.com/api";

const apiService = {
  getProjects: async () => {
    try {
      const response = await fetch(`${API_URL}/project`);
      if (!response.ok)
        throw new Error(
          `Failed to fetch project data: ${response.status} ${response.statusText}`
        );
      return await response.json();
    } catch (error) {
      console.error("Error in getProjects:", error);
      return [];
    }
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
