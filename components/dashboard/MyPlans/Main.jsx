import React, { useState, useEffect } from "react";
import BriefItem from "./BriefItem";
import StatusInfo from "./StatusInfo";
import Loader from "../../reUseComponents/Loader";
let corporetFrom = [
  {
    corporateService: [
      {
        requiredService: "hjhj",
        targetBudget: 10000,
      },
      {
        requiredService: "jhj",
        targetBudget: 6,
      },
    ],
    name: "hjhj",
    companyName: "hjhj",
    phoneNumber: "01745645654",
    email: "hjkjh@dfgdf.fgh",
    eventTitel: "fghfgh",
    eventLocation: "fghhhhhhhhhh",
    eventDate: "03/09/2022",
  },
  {
    corporateService: [
      {
        requiredService: "jhj",
        targetBudget: 700000,
      },
      {
        requiredService: "hjhj",
        targetBudget: 8,
      },
    ],
    name: "hjjhj",
    companyName: "hjhj",
    phoneNumber: "01745645654",
    email: "hjkjh@dfgdf.fgh",
    eventTitel: "fghfgh",
    eventLocation: "fghhhhhhhhhh",
    eventDate: "03/09/2022",
  },
  {
    corporateService: [
      {
        requiredService: "hjhjh",
        targetBudget: 4,
      },
      {
        requiredService: "hjhjh",
        targetBudget: 4,
      },
    ],
    name: "dfgggghjhjhgggggg",
    companyName: "dfggggggghjhjhggggggggg",
    phoneNumber: "01745645654",
    email: "hjkjh@dfgdf.fgh",
    eventTitel: "fghfgh",
    eventLocation: "fghhhhhhhhhh",
    eventDate: "03/09/2022",
  },
];
let corporateEvent = [
  { id: 1, totalBrief: 2, title: "Total Brief Submitted", status: "Pending" },
  { id: 2, totalBrief: 4, title: "Total Brief Replied", status: "Replied" },
];
const Main = () => {
  const [currList, setCurrList] = useState(corporateEvent[0].id);
  const [loader, setLoader] = useState(false);
  let hadleCurrList = (id) => setCurrList(id);
  let [data, setData] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        setData(corporetFrom);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex gap-5 sm:gap-10 flex-wrap">
        {corporateEvent.map((item, i) => {
          return (
            <div
              role="button"
              className={`bg-white rounded-xl p-4 flex-1 shadow cursor-pointer border btn-hover min-w-[8rem]
              ${
                item.id !== currList ? "border-[#ded6d6]" : "border-[#141414] "
              }`}
              key={i}
              onClick={() => hadleCurrList(item.id)}
            >
              <BriefItem item={item} />
            </div>
          );
        })}
      </div>
      <h3 className="font-22 md:font-26 font-normal color4 mt-8 mb-4">
        List Of Events{" "}
      </h3>
      {loader ? (
        <Loader center={true} colorDefault={false} />
      ) : (
        <>
          {data.length == 0 ? (
            <h5 className="font-26 md:font-18 font-normal color4 mt-4 text-center">
              You have no event
            </h5>
          ) : (
            <>
              <div className=" grid sm:grid-cols-2 gap-8">
                {data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 flex-1 shadow"
                    >
                      <StatusInfo item={item} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Main;
