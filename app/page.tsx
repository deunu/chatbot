// "use client";

// import React from "react";
// import styles from "./page.module.css";

// const Home = () => {
//   const categories = {
//     "SEO Analyzer": "seoanalyzer"
//     // "Basic chat": "basic-chat",
//     // "Function calling": "function-calling",
//     // "File search": "file-search",
//     // All: "all",
//   };

//   return (
//     <main className={styles.main}>
//       <div className={styles.title}>
//         Welcome
//       </div>
//       <div className={styles.container}>
//         {Object.entries(categories).map(([name, url]) => (
//           <a key={name} className={styles.category} href={`/${url}`}>
//             {name}
//           </a>
//         ))}



//       </div>
//     </main>
//   );
// };

// export default Home;

// "use client";

// import React, { useState, ChangeEvent } from "react";
// import styles from "./page.module.css";

// const Home: React.FC = () => {
//   const [url, setUrl] = useState<string>("");

//   const categories: { [key: string]: string } = {
//     "SEO Analyzer": "seoanalyzer",
//     // "Basic chat": "basic-chat",
//     // "Function calling": "function-calling",
//     // "File search": "file-search",
//     // All: "all",
//   };

//   // {Object.entries(categories).map(([name, url]) => (
//   //   <a key={name} className={styles.category} href={`/${url}`}>
//   //     {name}
//   //   </a>
//   // ))}


//   const analyzeURL = (): void => {
//     alert(`URL to analyze: ${url}`);
//     // You can add functionality here to handle the URL, such as sending it to a server or processing it with JavaScript
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setUrl(e.target.value);
//   };

//   return (
//     <main className={styles.main}>
//       <div className={styles.title}>Welcome</div>
//       <div className={styles.container}>
//         <div className={styles.inputContainer}>
//           <input
//             type="text"
//             id="urlInput"
//             value={url}
//             onChange={handleInputChange}
//             placeholder="Enter URL here"
//             className={styles.input}
//           />
//           <button onClick={analyzeURL} className={styles.button}>
//             Search
//           </button>
//         </div>
//         {Object.entries(categories).map(([name, url]) => (
//           <a key={name} className={styles.category} href={`/${url}`}>
//             {name}
//           </a>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;

"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for useRouter in the app directory
import styles from "./page.module.css";

const Home: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const router = useRouter();

  const categories: { [key: string]: string } = {
    "SEO Analyzer": "seoanalyzer",
    // "Basic chat": "basic-chat",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  const analyzeURL = (): void => {
    // Redirect to the SEO Analyzer page with the URL as a query parameter
    router.push(`/seoanalyzer?url=${encodeURIComponent(url)}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Welcome</div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="urlInput"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter URL here"
            className={styles.input}
          />
          <button onClick={analyzeURL} className={styles.button}>
            Search
          </button>
        </div>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;

