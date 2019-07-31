import React from "react";

import DonutItem from "../components/donut-item";

const RenderDonuts = () => {
  const [donuts, setDonut] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        "https://obscure-taiga-71606.herokuapp.com/donuts"
      )
        .then(response => response.json())
        .then(data => setDonut(data))
        .catch(error => console.log(error));
    };
    fetchData();
  }, []);

  const renderDonuts = () => {
    return donuts.map(donut => {
      return (
        <DonutItem
          key={donut.id}
          id={donut.id}
          title={donut.title}
          text={donut.text}
          image={donut.image}
          price={donut.price}
        />
      );
    });
  };

  return <div>{renderDonuts()}</div>;
};

export default RenderDonuts;
