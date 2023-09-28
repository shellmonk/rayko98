import { create } from "zustand";
import { persist } from "zustand/middleware";
const useStore = create(
  persist(
    () => ({
      code: "",
      title: "Untitled",
      language: "plaintext",
      fontSize: 18,
      fontStyle: "courierPrime",
      padding: 64,
    }),
    {
      name: "user-preferences",
    }
  )
);
export default useStore;
