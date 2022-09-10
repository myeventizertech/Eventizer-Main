import React from "react";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
let facility = [
    { value: "Free product delivery" },
    { value: "Design without cost" },
    { value: "No hidden charge" },
    { value: "Design" },
    { value: "Design" },
  ];
  let faq = [
    {
      title: "Free product",
      desc: "Fast Refresh will perform ",
    },
    {
      title: "Free  delivery",
      desc: "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the ",
    },
  ];
  

const Overview = ({data,service}) => {
  let info =data
 let review = info?.Reviews?.items
 let serve =""
async function check(){
  if (service === "photography") {
   serve ="Photographer Overview"
  }
  if (service === "cinematography") {
    serve ="Cinematographer Overview"
  }
  if (service === "dj-musician") {
    serve ="Dj-Musician Overview"
  }
  if (service === "mehedi-artist") {
    serve ="Mehedi Artist Overview"
  }
  if (service === "makeup-artist") {
    serve ="Makeup Artist Overview"
  }
}
check()
  return (
    <div className="container">
      <div className="max-w-[700px] px-2 sm:px-5">
        {/* ====================== */}
        <section className="mt-10 scroll-mt-20 sm:scroll-mt-28" id="details">
          <h1 className="font-22 text-[#202020] font-semibold mb-2">
            {serve}
          </h1>
          <p className="text-[#595959] font-normal font-18 ">
{info?.detailsAboutYou}
          </p>
        </section>
        {/* ==================================== */}
        {/* <section className="mt-10 scroll-mt-20 sm:scroll-mt-28" id="facility">
          <h1 className="font-22 text-[#202020] font-semibold mb-2">
            Facility
          </h1>
          <span className="text-[#595959] font-normal font-14 flex flex-wrap gap-4">
            {facility.map((items, i) => {
              return (
                <span
                  key={i}
                  className="px-4 py-1 font-12 sm:font-16 rounded-full border border-[#8C8C8C]"
                >
                  {items.value}
                </span>
              );
            })}
          </span>
        </section> */}
        {/* ============================== */}
        {/* <section className="mt-10 scroll-mt-20 sm:scroll-mt-28" id="faq">
          <h1 className="font-22 text-[#202020] font-semibold mb-2">FAQ</h1>
          <div className="font-14 text-[#595959] font-normal ">
            {faq.map((item, i) => {
              return (
                <div key={i} className="mt-3">
                  <FAQ title={item.title} description={item.desc} />
                </div>
              );
            })}
          </div>
        </section> */}
        {/* ================================ */}
{review?.length !==0  ?         <section className="mt-10 scroll-mt-20 sm:scroll-mt-28" id="reviews">
          <h1 className="font-22 text-[#202020] font-semibold mb-2">
            Review of {info?.title}
          </h1>
          <div className="font-14 text-[#595959] font-normal max-h-[20rem] bar-thin overflow-auto">
            {review?.map((item, i) => {
              return (
                <div key={i}>
                  <Reviews
                    name={item.userName}
                    review={item.description}
                    rate={item.average}
                    userImg={item.userPicture}
                  />
                </div>
              );
            })}
          </div>
        </section>: <div></div>
        
        }
      </div>
    </div>
  );
};

export default Overview;
