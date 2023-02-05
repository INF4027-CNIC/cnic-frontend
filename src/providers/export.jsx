import CitizenContext from "context/citizens";
import { ExportContext } from "context/export";
import { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const ExportProvider = ({ children }) => {
  // Get citizen
  const { citizen } = useContext(CitizenContext);
  const exportRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
    documentTitle: `${citizen?.fullname} Qr_code`,
  });

  const value = {
    exportRef: exportRef,
    print: handlePrint,
  };

  return (
    <ExportContext.Provider value={value}>
      {children}
    </ExportContext.Provider>
  );
};
