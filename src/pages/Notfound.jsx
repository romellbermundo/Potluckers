import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("/home"), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <h1>404 Page Not Found</h1>
              <p>Redirecting to home...</p>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
