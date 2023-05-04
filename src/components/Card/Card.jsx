import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowall] = useState(false);
  const [uniquId, setUniqueId] = useState(null);
  const [singleData, setsingleDta] = useState({});
  // console.log(singleData)
  // console.log(uniquId)

  const handleShowall = () => {
    setShowall(true);
  };

  const handleSort = () => {
    const sortData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setData([...data, sortData]);
  };

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);

  useEffect(() => {
    fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniquId}`)
      .then((res) => res.json())
      .then((data) => setsingleDta(data.data));
  }, [uniquId]);

  return (
    <>
      <span onClick={handleSort}>
        <Button>Sort By Date</Button>
      </span>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-8 px-7 lg:px-12">
        {data.slice(0, showAll ? 12 : 6).map((singledata) => (
          <SingleData
            key={singledata.id}
            singledata={singledata}
            setUniqueId={setUniqueId}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleShowall}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData}></Modal>
    </>
  );
};

export default Card;
