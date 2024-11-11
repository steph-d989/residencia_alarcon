import React, { useState } from "react";

const faqs = [
  {
    question: "Aquí va la pregunta 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 5",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 6",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aquí va la pregunta 7",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
];

const CardFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="faq-toggle">{openIndex === index ? "–" : "+"}</span>
          </button>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default CardFAQ;
