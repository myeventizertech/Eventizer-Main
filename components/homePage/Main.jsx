import React from "react";
import Landing from "./heroSection/Landing";
import SectionEventType from "./SectionEventType";
import SectionBookNow from "./SectionBookNow";
import SectionWhyEventizer from "./SectionWhyEventizer";
import SectionBusiness from "./SectionBusiness";
import SectionHowItsWork from "./SectionHowItsWork";
import SectionSubscribe from "./SectionSubscribe";
import SectionReadarticles from "./SectionReadarticles";
import SectionColabWithUs from "./SectionColabWithUs";
import SectionFeedBack from "./SectionFeedBack";

const Main = () => {
  return (
    <>
      <main>
        <section>
          <Landing />
        </section>

        <section>
          <SectionEventType />
        </section>
        <section>
          <SectionBookNow />
        </section>
        <section>
          <SectionWhyEventizer />
        </section>
        <section>
          {/* <SectionBusiness /> */}
          <SectionBusiness/>
        </section>
        <section>
          <SectionHowItsWork />
        </section>
        <section>
          <SectionFeedBack />
        </section>
        <section>
          <SectionColabWithUs />
        </section>
        <section>
          <SectionReadarticles />
        </section>
        <section>
          <SectionSubscribe />
        </section>
      </main>
    </>
  );
};

export default Main;
