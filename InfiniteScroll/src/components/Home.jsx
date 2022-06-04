import { useEffect, useState } from "react";
export const Home = () => {
  const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {      
        getData();
        console.log("data",Data.length)
        // if(Data.length >= 29) window.removeEventListener("scroll", getScroll);
  }, [page]);

  function scrollToend() {
    console.log(page);
    setPage(page + 1);
  }

  async function getData() {
    const data = await fetch(
      `http://localhost:8080/data?_page=${page}&_limit=5`
    ).then((d) => d.json());
    setData([...Data, ...data]);
  }

  window.onscroll = function getScroll() {
      console.log("At innerHEight", window.innerHeight);
      console.log("At scroll top", document.documentElement.scrollTop);
      console.log(
        "At off set btm",
        document.documentElement.offsetHeight,
        "add",
        window.innerHeight + document.documentElement.scrollTop
      );
    if (
      window.innerHeight + document.documentElement.scrollTop + 5 >=
      document.documentElement.offsetHeight
    ) {
      scrollToend();
    }
  };

  return (
    <div>
      {Data.length > 0 &&
        Data.map((e, i) => (
          <div key={i} style={{ height: "300px",margin:"2%" }}>
            <h3>{e.name}</h3>
            <img height={"70%"} src={e.image_url} alt="" />
            <p>
              {" "}
              <strong>Price : {e.price}</strong>
            </p>
          </div>
        ))}
    </div>
  );
};
