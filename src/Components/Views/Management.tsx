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
    title: "Strategic Leadership Insights",
    summary:
      "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 2,
    title: "Innovative Management",
    summary:
      "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 3,
    title: " Effective Leadership",
    summary:
      "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 4,
    title: "Change Management",
    summary:
      "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 5,
    title: "Performance Metrics",
    summary:
      "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 6,
    title: "Resource Allocation",
    summary:
      "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 7,
    title: "Corporate Governance",
    summary:
      "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 8,
    title: "Stakeholder Engagement",
    summary:
      "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 9,
    title: "Sustainability Initiatives",
    summary:
      "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 10,
    title: "Crisis Management",
    summary:
      "Our management philosophy is anchored in the pursuit of leadership, where vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions. This year, our management team has demonstrated exceptional acumen in navigating the complex business landscape, making informed decisions that have propelled our organization forward. By embracing a culture of continuous learning and adaptability, we have set new benchmarks for success. Our management philosophy is anchored in the pursuit of strategic leadership, where foresight and vision guide our actions.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 11,
    title: "Innovative Management",
    summary:
      "Innovation in management is not just about new ideas but fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Innovation in management is not just about new ideas but about fostering an environment where those ideas can thrive. Our management has been instrumental in cultivating such an environment, encouraging creativity and collaboration. This approach has yielded transformative solutions that have streamlined operations and enhanced our competitive edge in the marketplace. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
  {
    id: 12,
    title: " Sustainability Initiatives",
    summary:
      "Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor. Effective leadership is the cornerstone of our management strategy. Throughout the year, our leaders have empowered teams by promoting transparency, accountability, and empowerment. This empowerment has not only boosted morale but has also led to higher productivity and a more engaged workforce, driving our organization towards its goals with renewed vigor.",
    getAccess: {
      url: "https://github.com/Usama3030",
      title: "Conditions",
      content:
        "When you're ready, click on the 'Register' button to create your account and join our community. We're excited to have you on board!",
    },
    url: "https://learn.microsoft.com/en-us/power-bi/developer/visuals/dataview-mappings",
  },
];

const Page3 = () => {
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

export default Page3;
