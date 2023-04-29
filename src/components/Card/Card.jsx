import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowall] = useState(false)
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);
  const handleShowall = () => {
    setShowall(true)
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8 px-7 lg:px-12">
      {
        data.slice(0, showAll ? 12 : 6).map(singledata => <SingleData key={singledata.id} singledata={singledata}></SingleData>)
      }
      </div>
      {!showAll && (
        <span  onClick={handleShowall}>
        <Button>See More</Button>
        </span>
      )
      }
    </>
  );
};

export default Card;
