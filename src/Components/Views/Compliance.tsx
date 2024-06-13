import "./style.css";
import { useState, useEffect, useContext } from "react";
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import Pagination from "../Pagination/Pagination";
import { CiSearch } from "react-icons/ci";
import useApp from "../Hooks/useApp";
import { Context } from "../Context/Context";

const cardData = [
  {
    id: 1,
    title: "Compliance Cornerstones",
    summary:
      "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 2,
    title: "Regulatory Excellence",
    summary:
      "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 3,
    title: "Ethical Standards in Action",
    summary:
      "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 4,
    title: "Compliance Overview",
    summary:
      "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 5,
    title: "Risk Management",
    summary:
      "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 6,
    title: "Ethical Conduct",
    summary:
      "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 7,
    title: "Regulatory Compliance",
    summary:
      "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 8,
    title: "Audit Readiness",
    summary:
      "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 9,
    title: "Training & Awareness",
    summary:
      "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 10,
    title: "Policy Enforcement",
    summary:
      "In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice. In the realm of compliance, our organization stands firm on the foundational principles of integrity and adherence to regulations. This year has been a testament to our unwavering commitment to upholding the highest standards of compliance across all operations. Our proactive measures and comprehensive policies have ensured that we not only meet but exceed regulatory expectations, fostering a culture of trust and ethical practice.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 11,
    title: "Supplier Compliance",
    summary:
      "Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity. Achieving regulatory excellence is a continuous journey, and our compliance department has navigated this path with diligence and expertise. By staying abreast of the latest regulatory changes and implementing best practices, we have fortified our compliance framework. This dedication to regulatory excellence serves as the backbone of our risk management strategy, securing our reputation as a compliant and trustworthy entity.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
  {
    id: 12,
    title: "Anti-Corruption Measures",
    summary:
      "Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action. Throughout the year, our compliance team has actively engaged with every department to ensure that our ethical guidelines are not just understood but embodied in our daily operations. This hands-on approach has led to a robust compliance environment where ethical considerations are at the forefront of decision-making processes. Our commitment to ethical standards is more than a policy—it's a commitment to action.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup",
  },
];

const Page2 = () => {
  const context = useContext(Context);

  // if (!context || !context.state) return null;

  const {
    state: { host },
  } = context;

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
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
      host.launchUrl(url);
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
              <div className="card" key={card.id}>
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

export default Page2;
