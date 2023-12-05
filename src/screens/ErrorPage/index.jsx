import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Сторінка відсутня</p>
      <a href="/">НАЗАД</a>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;