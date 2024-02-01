import React, { useEffect, useState } from "react";

import Card from "./Card";

const Navbar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");

      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once when the component mounts

  // console.log(data);

  return (
    <>
      {data !== null ? (
        <p>
          <p className="ml-12 text-2xl mt-5 "> All shows </p>
          <div className=" flex flex-wrap gap-36">
          {data.map((item, index) => (
            
            <p className="flex flex-wrap px-5"key={index}>
              <Card
              show_id={item.show.id}
                show_n={item.show.name}
                show_r={item.show.rating.average}
                show_l={item.show.language}
                show_t={item.show.type}
                show_s={item.show.summary}
                show_i={item.show.image?item.show.image.original:"https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"}
              />
            </p>
          ))}
          </div>
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Navbar;
