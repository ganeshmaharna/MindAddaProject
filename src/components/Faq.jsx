/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import iconImage from "../assets/1.png";

function Faq() {
  const qa_item_wrapper = {
    backgroundColor: "transparent",
    padding: "inherit",
    borderRadius: "none",
    marginBottom: "3rem !important",
  };
  const text = {
    margin: "20px",
    marginTop: "28px",
    marginBottom: "26px",
    paddingLeft: "40px",
    borderLeft: "1px solid #ececec",
    fontSize: "20px",
    fontWeight: "500",
    color: "#C0C2D0",
  };
  const subTitle = {
    lineHeight: 1,
    paddingTop: "10px",
    marginLeft: "28px",
    fontWeight: 600,
    fontSize: "25px",
  };

  return (
    <div className="w-10/12 py-20 bg-gray-500 mx-auto">
      <div className="text-5xl mb-16 text-bold text-center text-white pt-5 px-2">
        Frequently Asked Questions
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 text-white mt-5 px-2 py-md-5">
        {faqItems.map((item, index) => (
          <div key={index} className="pb-4 text-white mt-5 px-2 md:py-5">
            <div className="w-full">
              <div style={qa_item_wrapper}>
                <div className="flex">
                  <div>
                    <img
                      style={{ width: "45px", height: "45px" }}
                      src={item.iconSrc}
                      alt="User Icon"
                    />
                  </div>
                  <div style={subTitle}>{item.title}</div>
                </div>
                <div style={text}>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
  {
    title: "Who is this for?",
    iconSrc: iconImage,
    content:
      "This is for aspiring web developers seeking to master React & Angular quickly and efficiently through our 'Code Evolution Challenge'.",
  },
  {
    title: "How does this work?",
    iconSrc: iconImage,
    content:
      "Join GanDevReactNg for a unique coaching adventure. Progress through levels with weekly live sessions and on-demand tutorials by expert Ganesh Maharna in React and Angular.",
  },
  {
    title: "Is there a money-back guarantee?",
    iconSrc: iconImage,
    content:
      "Yes, we have a no-questions-asked, money-back guarantee on your first membership payment. Cancel any time before your next renewal for a refund.",
  },
  {
    title: "Can I cancel anytime?",
    iconSrc: iconImage,
    content:
      "Yes, you can cancel anytime. In the membership area, select the 3 dots beside GanDevReactNg on the left sidebar and click 'Cancel membership' to stop future charges.",
  },
];

export default Faq;
