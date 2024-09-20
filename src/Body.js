import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Body = () => {
  //   const [demoList, setDemoList] = useState();
  const [originalData, setOriginalData] = useState([]);

  //State to skip items
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch logic
      const data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );

      const json = await data.json();
      //console.log(json);
      //setDemoList(json);
      setOriginalData((prevItems) => [...prevItems, ...json.products]);
    };
    fetchData();
  }, [skip]);

  const handleAPI = () => {
    setSkip(skip + 20);
  };
  //   console.log(demoList);
  console.log(originalData);
  return (
    <div>
      <div className="flex justify-around flex-wrap p-4">
        {originalData?.map((prod) => {
          return (
            <ProductCard key={prod.id + { skip }} data={prod}></ProductCard>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className="border border-black" onClick={handleAPI}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Body;
