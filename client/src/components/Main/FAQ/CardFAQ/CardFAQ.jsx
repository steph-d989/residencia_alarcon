import React from "react";
import '../../../../styles/components/_CardFAQ.scss';

const faqs = [
  {
    question: "Aqui va la pregunta 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aqui va la pregunta 2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aqui va la pregunta 3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  },
  {
    question: "Aqui va la pregunta 4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque veniam qui fuga delectus nesciunt deserunt quae, debitis tempora atque id itaque fugiat earum quam amet, alias aut repellendus reiciendis?",
  }
];

const CardFAQ = () => {
  return (
    <div className="column">
      {faqs.map((faq, index) => (
        <div className="mb-4" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{faq.question}</h5>
              <p className="card-text">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardFAQ;
