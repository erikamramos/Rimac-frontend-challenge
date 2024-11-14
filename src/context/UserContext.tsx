// context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/types/User";
import { getUserData, saveUserToLocalStorage } from "../services/UserServices";
import { calculateAge } from "../utils/dateUtils";

// Definir el tipo de UserContextProps
interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
  savePaymentResponsible: (formData: any) => void;
}

// Definir las props del proveedor
interface UserProviderProps {
  children: ReactNode;
}

// Crear el contexto
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Implementación del proveedor del contexto
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Cargar datos del usuario cuando el componente se monta
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        if (userData?.birthDay) {
          const age = calculateAge(userData.birthDay);
          setUser({ ...userData, age });
        } else {
          setUser(userData);
        }
        saveUserToLocalStorage(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Guardar el responsable de pago
  const savePaymentResponsible = (formData: any) => {
    const paymentResponsible = {
      documentType: formData.documentType,
      documentNumber: formData.documentNumber,
      cellphone: formData.cellphone,
    };
    localStorage.setItem("paymentResponsible", JSON.stringify(paymentResponsible));
    console.log("Payment Responsible Data:", paymentResponsible);
  };

  return (
    <UserContext.Provider value={{ user, setUser, savePaymentResponsible }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
