import React, { useState } from "react";
import { useFieldStore, useFocusStore } from "../store";
import Axios from "../../axios.config.js";
import DownloadLoader from "./DownloadLoader";

const EmailTemplateEditor = () => {
  const [loading, setLoading] = useState(false);
  const { title, content, footer, imageUrl, logoUrl } = useFieldStore(
    (state) => state.fields
  );
  const { setTitle, setContent, setFooter, setImageUrl, setLogoUrl } =
    useFieldStore((state) => state.setFields);

  const { setTitleFocus, setContentFocus, setFooterFocus } = useFocusStore(
    (state) => state.setFocus
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
      footer,
      imageUrl,
      logoUrl,
    };
    localStorage.setItem("email-template", JSON.stringify(data));
    alert("Template saved successfully!");
  };

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  };

  const handleLogoFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLogoUrl(reader.result);
    };
  };

  const handleDownload = () => {
    setLoading(true);
    const data = {
      title,
      content,
      footer,
      imageUrl,
      logoUrl,
    };
    Axios.post("/download-template", data)
      .then((res) => {
        const blob = new Blob([res.data], { type: "text/html" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "OutputHtml.html";
        a.click();
        window.URL.revokeObjectURL(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" w-[80%] md:w-[25%] m-2 self-center md:self-start">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 py-1 border-2 border-gray-500 rounded outline-[teal]"
          onFocus={() => {
            setTitleFocus(true);
            const element = document.getElementById("title");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
          onBlur={() => setTitleFocus(false)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          className="px-2 py-1 border-2 border-gray-500 rounded outline-[teal]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={() => {
            setContentFocus(true);
            const element = document.getElementById("content");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
          onBlur={() => setContentFocus(false)}
        ></textarea>
        <label htmlFor="footer">Footer:</label>
        <textarea
          name="footer"
          id="footer"
          cols="30"
          rows="5"
          className="px-2 py-1 border-2 border-gray-500 rounded outline-[teal]"
          value={footer}
          onChange={(e) => setFooter(e.target.value)}
          onFocus={() => {
            setFooterFocus(true);
            const element = document.getElementById("footer");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
          onBlur={() => setFooterFocus(false)}
        ></textarea>
        <label htmlFor="logo">Upload Logo:</label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .svg"
          name="logo"
          className="w-full border-2 border-gray-500 rounded outline-[teal]"
          onChange={handleLogoFile}
        />
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .svg"
          name="image"
          className="w-full border-2 border-gray-500 rounded outline-[teal]"
          onChange={handleImageFile}
        />

        <button
          type="submit"
          className="px-2 py-1 my-2 border-2 border-[orangered] text-[orangered] rounded outline-[orangered] hover:bg-[orangered] hover:text-white"
        >
          Save Template
        </button>
      </form>
      <button
        className="w-full px-2 py-1 my-2 border-2 border-[teal] text-[teal] rounded outline-[teal] hover:bg-[teal] hover:text-white"
        onClick={handleDownload}
      >
        {loading ? <DownloadLoader /> : "Download Template"}
      </button>
    </div>
  );
};

export default EmailTemplateEditor;
