import React, { useEffect, useState } from "react";
import "./style.css";
import { fetchApi, getNumberOfImages } from "./Topic1.logic";

const Topic1 = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [listImages, setListImage] = useState<{ urls: string[] }[]>([]);
  useEffect(() => {
    let myData: { urls: string[] }[] = [];
    let totalPages: number = 0;

    const getData = async () => {
      totalPages = Math.ceil((await getNumberOfImages()) / 9);
      myData = await fetchApi(pageNumber, 9);
      console.log(totalPages);
      setTotalPages(totalPages);
      setListImage(myData);
    };
    getData();
  }, [pageNumber]);
  return (
    <div className="container">
      {listImages != null ? (
        <div>
          {listImages.map((item: any, index: number) => {
            return (
              <div
                className="subcontainer"
                // style={{
                //   justifyContent:
                //     item.urls.length < 3 ? "flex-start" : "center",
                // }}
              >
                {item.urls.map((row: string, subIndex: number) => {
                  return (
                    <div className="item">
                      <img src={row} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="pageintion">
        <ul>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (item) => {
              return (
                <li>
                  <a
                    href="#"
                    style={{ color: "white" }}
                    onClick={() => setPageNumber(item)}
                  >
                    {item}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Topic1;
