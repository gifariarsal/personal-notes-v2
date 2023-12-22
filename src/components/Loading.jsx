import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

const Loading = () => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="loading">
            <h1>{locale === "id" ? "Memuat..." : "Loading..."}</h1>
          </div>
        );
      }}
    </LocaleConsumer>
  );
};

export default Loading;
