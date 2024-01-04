import React from "react";
import "./Content.css";
import bluebird from "./img/bluebird.webp"

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.


const Content = () => {
  const parStyle = {
    fontFamily: "tohama",
    fontSize: "1.1rem",
    textAlign: "justify",
    margin: "auto",
  };
  const imgStyle = {
    borderRadius: "20px",
    width: "500px",
    height: "500px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  };
  return (
    <main>
      <h2>Lorem ipsum dolor sit.</h2>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat
        voluptates consectetur totam, voluptas provident quisquam cum incidunt
        fugit enim.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_1280.jpg"
        alt="mountain"
      />
      <h3>123aliveli</h3>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        natus.
      </p>
      <img src={bluebird} alt="bluebird" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, velit.</p>
      <img src="./asset/dog.jpg" alt="dog" />

      //!
      {/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}

      
      <img
        style={imgStyle}
        src="https://media.istockphoto.com/id/492849800/nl/foto/high-mountain-peaks-panorama-snowy-summits-tumbling-glaciers-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=b-Pzp5SyxwmKW9YqqTbVyZiShN8L9jPOFIYh3M109FY="
        alt="mountain2"
      />
      <h3 className="content-h3">bu bir h3dur</h3>
    </main>
  );
};

export default Content;
