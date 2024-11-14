import axiosInstance from './axiosInstance';

export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get(`/user.json`);
    return response.data;
  } catch (error) {
    console.error("Error al cargar los datos de usuario::", error);
    throw error;
  }
};
