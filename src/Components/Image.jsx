import React from "react";

const styles = {
  height: "500px",
  width: "100%"
};

const Image = (props) => {
  const { img } = props;
  return (
    <div>
      <img style={styles} src={img} alt="dog" />
    </div>
  );
};

export default Image;
