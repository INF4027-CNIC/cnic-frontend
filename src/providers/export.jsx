import { ExportContext } from "context/export";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const ExportProvider = ({ children }) => {
  const exportRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
    documentTitle: "Fenyep Qr_Code",
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
