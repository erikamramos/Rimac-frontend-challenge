import axiosInstance from './axiosInstance';

export const fetchPlans = async () => {
  try {
    const response = await axiosInstance.get(`/plans.json`);
    return response.data.list;
  } catch (error) {
    console.error("Error al cargar los planes:", error);
    throw error;
  }
};
