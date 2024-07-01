// import React from "react";
// import { Document, Page } from "react-pdf";

// // Interface for component props with type safety
// interface PdfViewerProps {
//   pdfUrl: string; // Explicitly define pdfUrl as a string
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
//   // Handle potential errors during PDF loading or rendering (optional)
//   const [numPages, setNumPages] = React.useState(0); // Track number of pages

//   // Conditional rendering based on number of pages
//   return (
//     <div>
      // <Document file={pdfUrl}>
      //   <Page pageNumber={1} />
      // </Document>
//     </div>
//   );
// };

// export default PdfViewer;

import React from 'react'
// import { Document, Page } from "react-pdf";
interface PdfViewerProps {
  pdfUrl: string; // Explicitly define pdfUrl as a string
}

export default function PdfViewer() {
   const pdfUrl = "./public/chemistry_s1.pdf"
  return (
    <div>
      {/* <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  )
}

