import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import LineItem from "./LineItem";
import ResumeCardTwo from "./ResumeCardTwo";

const ResumeTwo = () => {
  const { lineArray } = UseData();
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-12 px-4 md:px-0">
              {/*Resume page title */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
                {/* resume items map */}
                <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
                  Working Skills
                </h4>
                {/* Experience percent element */}
                {lineArray.map((item, i) => (
                  <LineItem item={item} key={i} />
                ))}
              </div>

              {/* knowledge section start */}

              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  Tech Stack
                </h4>

                {/* Knowledges items */}

                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">Python</button>
                  <button className="resume-btn">React</button>
                  <button className="resume-btn">Redux</button>
                  <button className="resume-btn">Express</button>
                  <button className="resume-btn">Flask</button>
                  <button className="resume-btn">Postman</button>
                  <button className="resume-btn">HTML5</button>
                  <button className="resume-btn">CSS3</button>
                  <button className="resume-btn">Git</button>
                  <button className="resume-btn">SQLAlchemy</button>
                  <button className="resume-btn">SQL</button>
                  <button className="resume-btn">AWS</button>
                  <button className="resume-btn">Amazon S3</button>
                </div>
              </div>

              {/* knowledge section end */}
            </div>
          </div>
                <ResumeCardTwo />
              </div>
            </div>
          </div>
          {/* End .container */}


          {/* End .container */}

          <Footer condition={false} bg={"#FFFF"} />
        </div>
      </section>
    </>
  );
};

export default ResumeTwo;
