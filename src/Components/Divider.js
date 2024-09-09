import React from "react";
const Divider = ({
  // "https://media.istockphoto.com/id/1266459481/vector/shopping-online-in-smartphone-application-digital-marketing-vector-illustration.jpg?s=612x612&w=0&k=20&c=yFTkURyuo4e0qxfCBgISPps6MwYLNAqShj_lxPs2IrQ="
  image,
  title = "Your Title Here",
  description = "Your description goes here. This is some additional text for the divider section.",
}) => {
  return (
    <>
      <div
        className="divider-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="overlay">
          <div className="content-divider text-center">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Divider;
