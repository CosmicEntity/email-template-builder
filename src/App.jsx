import React, { useEffect } from "react";
import Preview from "./components/Preview";
import EmailTemplateEditor from "./components/EmailTemplateEditor";

const App = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row justify-center items-center">
      <Preview />
      <EmailTemplateEditor />
    </div>
  );
};

export default App;
