import React, { useContext, useEffect, useState } from "react";
import qualityService from "../services/quality.service";

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};
export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    const getQualities = async () => {
      try {
        const qualities = await qualityService.fetchAll();
        setQualities(qualities);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);
  return (
    <QualitiesContext.Provider value={"simple text"}>
      {children}
    </QualitiesContext.Provider>
  );
};
