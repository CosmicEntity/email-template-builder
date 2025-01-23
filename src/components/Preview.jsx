import React, { useEffect, useState } from "react";
import { useFieldStore, useFocusStore } from "../store";
import Loader from "./Loader";
import Axios from "../../axios.config";

const Preview = () => {
  const [loading, setLoading] = useState(true);
  const { title, content, footer, imageUrl, logoUrl } = useFieldStore(
    (state) => state.fields
  );
  const { setTitle, setContent, setFooter, setImageUrl, setLogoUrl } =
    useFieldStore((state) => state.setFields);
  const { titleFocus, contentFocus, footerFocus } = useFocusStore(
    (state) => state.focus
  );

  useEffect(() => {
    const data = localStorage.getItem("email-template");
    if (data) {
      const parsedData = JSON.parse(data);
      setTitle(parsedData.title);
      setContent(parsedData.content);
      setFooter(parsedData.footer);
      setImageUrl(parsedData.imageUrl);
      setLogoUrl(parsedData.logoUrl);
    } else {
      Axios.get("/base-template").then((res) => {
        const { title, content, footer, imageUrl, logoUrl } = res.data;
        setTitle(title);
        setContent(content);
        setFooter(footer);
        setImageUrl(imageUrl);
        setLogoUrl(logoUrl);
        setLoading(false);
      });
    }
  }, []);
  return (
    <div className="w-[80%] md:w-[75%] ">
      {loading ? (
        <Loader />
      ) : (
        <div className="m-4 flex flex-col items-center rounded-md text-center  border-2 border-gray-500">
          <div className="pt-2 pb-2 w-32 h-32">
            <img src={logoUrl} alt="Logo" />
          </div>
          <h1
            className=" p-2 w-full text-xl "
            style={{
              border: titleFocus ? "3px solid orangered" : "none",
            }}
          >
            {title}
          </h1>
          <p
            className=" p-2 w-full "
            style={{ border: contentFocus ? "3px solid orangered" : "none" }}
          >
            {content}
          </p>
          <div className="pt-2 pb-2 w-full">
            <img src={imageUrl} alt="Banner" className="w-full " />
          </div>
          <div
            className="p-2 w-full"
            style={{ border: footerFocus ? "3px solid orangered" : "none" }}
          >
            <p>{footer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
