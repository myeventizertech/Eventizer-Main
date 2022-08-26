import React from "react";
import BriefItem from "./BriefItem";
import StatusInfo from "./StatusInfo";
// let corporetFrom = {
//   corporateService: [
//     {
//       requiredService: "gfdddddddddddddddddd",
//       targetBudget: "fdgggggggggggggggggggg",
//     },
//     {
//       requiredService: "dfggggggggggggggggggggggg",
//       targetBudget: "dfgggggggggggggggggg",
//     },
//   ],
//   name: "dfgggggggggg",
//   companyName: "dfgggggggggggggggg",
//   phoneNumber: "01745645654",
//   email: "hjkjh@dfgdf.fgh",
//   eventTitel: "fghfgh",
//   eventLocation: "fghhhhhhhhhh",
//   eventDate: "03/09/2022",
// };

const Main = () => {
  return (
    <>
      {/* <div className="flex gap-10 flex-wrap">
        {[
          { totalBrief: 2,title:"Total Brief Submitted" },
          { totalBrief: 4 ,title:"Total Brief Replied"},
        ].map((item, i) => {
          return (
            <div className="bg-white rounded-xl p-4 w-48 shadow" key={i}>
              <BriefItem item={item} />
            </div>
          );
        })}
      </div> */}

      <StatusInfo />
    </>
  );
};

export default Main;
