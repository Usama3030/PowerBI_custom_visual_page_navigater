import "./style.css";
import { useContext, useState } from "react";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import Pagination from "../Pagination/Pagination";
import { CiSearch } from "react-icons/ci";
import { Context } from "../Context/Context";

const cardData = [
  {
    id: 1,
    title: "Annual Financial Review",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Fiscal Year in Review",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 3,
    title: "Financial Highlights",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 4,
    title: "Annual",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 5,
    title: "Fiscal Year",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 6,
    title: "Financial",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 7,
    title: "card 7",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 8,
    title: "card 8",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 9,
    title: "card 9",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 10,
    title: "card 10",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 11,
    title: "card 11",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 12,
    title: "card 12",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 13,
    title: "Annual Financial Review",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 14,
    title: "Fiscal Year in Review",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 15,
    title: "Financial Highlights",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 16,
    title: "Annual",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 17,
    title: "Fiscal Year",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 18,
    title: "Financial",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 19,
    title: "card 19",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 20,
    title: "card 20",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 21,
    title: "card 21",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 24,
    title: "card 24",
    summary:
      "As we reflect on the past fiscal year, our financial landscape has been marked by robust growth and prudent fiscal management. Our dedicated team has worked tirelessly to ensure that our financial strategies align with our long-term objectives, resulting in a year of solid performance and promising prospects. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering, as we continue to build a foundation of trust with all our stakeholders. Looking ahead, we are poised to embrace the opportunities and challenges of the coming year with confidence and a clear vision. We are grateful for the continued support and dedication of our team, and we remain committed to delivering excellence in all our financial endeavors. We have navigated the complexities of the financial markets with agility and foresight, leading to outcomes that not only meet but often exceed our expectations. Our commitment to transparency and accountability remains unwavering. ",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 22,
    title: "card 22",
    summary:
      "Reflecting on the financial strides made this year, we take pride in the collective efforts that have led to a year of significant achievements. Our financial department has been at the forefront of driving sustainable growth and maintaining fiscal discipline. Through a series of strategic initiatives, we have strengthened our financial position, enabling us to invest in key areas that support our long-term vision. Our approach has been one of proactive management and responsible governance, ensuring that we remain on a path of positive financial trajectory. As we look to the future, we are inspired by the potential that lies ahead. With a foundation of solid financial practices, we are well-positioned to navigate the evolving economic landscape and continue our legacy of financial success. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
  {
    id: 23,
    title: "card 23",
    summary:
      "The conclusion of this fiscal year marks a period of financial stewardship and strategic growth. Our department pursued excellence in financial management, ensuring that decision is made with precision. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to support the overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. Our department has consistently pursued excellence in financial management, ensuring that every decision is made with precision and foresight. Our journey through the fiscal year has been characterized by diligent efforts to optimize our resources and enhance our financial stability. We have embraced innovation and efficiency, which are reflected in our strong financial health and the achievement of our strategic goals. As we turn the page to a new fiscal year, we are equipped with the experience and insights gained from our successes. We are committed to upholding our tradition of financial integrity and excellence, as we continue to overarching mission of our organization. The conclusion of this fiscal year marks a period of steadfast financial stewardship and strategic growth. we are equipped with the experience and insights gained from our successes.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://www.google.com/",
  },
];

const Page1 = () => {
  const context = useContext(Context);
  // if (!context || !context.state) {
  //   return null;
  // }
  console.log("state finance", context);

  const {
    state: { host },
  } = context; //nested destructuring

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const closeFullScreen = () => {
    setExpandedCard(null);
  };

  const navigateToUrl = (url: string) => {
    if (host && host.launchUrl) {
      host?.launchUrl(url);
    } else {
      console.error("Host or launchUrl method is not available");
    }
  };

  const navigateToModalUrl = (url: string) => {
    if (host && host.launchUrl) {
      host?.launchUrl(url);
    } else {
      console.error("Host or launchUrl method is not available");
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by title..."
        />
        <button className="search-button">
          <CiSearch />
        </button>
      </div>
      {filteredCards.length === 0 ? (
        <div className="no-record">No Record Found</div>
      ) : (
        <div className="cards-grid">
          {currentCards.map((card) => (
            <div
              className={`card-wrapper ${
                expandedCard === card.id ? "expanded" : ""
              }`}
              key={card.id}
            >
              <div className="card">
                <div className="title">{card.title}</div>
                <div className="summary">
                  {expandedCard === card.id
                    ? card.summary
                    : `${card.summary.substring(0, 200)}...`}
                  <button
                    className="toggle-button"
                    onClick={() => toggleExpansion(card.id)}
                  >
                    {expandedCard === card.id ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
              <div className="button-container">
                <button
                  className="access-button"
                  onClick={() => openModal(card.getAccess)}
                >
                  Get Access
                </button>
                <button
                  className="go-to-button"
                  onClick={() => navigateToUrl(card.url)}
                >
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {expandedCard && (
        <div className="overlay" onClick={closeFullScreen}></div>
      )}
      {filteredCards.length > cardsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(cardData.length / cardsPerPage)}
          paginate={paginate}
        />
      )}
      {isModalOpen && (
        <div
          className={`modal2 ${isModalOpen ? "show" : ""}`}
          // onClick={closeModal}
        >
          <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h3>{modalContent.title}</h3>
            </div>
            <div className="modal-body">
              <p>{modalContent.content}</p>
            </div>
            <div className="modal-footer">
              <div
                className="modal-footer-link"
                onClick={() => navigateToModalUrl(modalContent.url)}
              >
                More Info
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page1;
