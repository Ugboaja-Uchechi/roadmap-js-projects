const accordion = document.querySelector(".faq-section");

const accordionSection = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec ultrices urna quam, ac volutpat lectus sodales nec. Praesent eu porta libero. Quisquam, quod.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec ultrices urna quam, ac volutpat lectus sodales nec. Praesent eu porta libero. Quisquam, quod.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec ultrices urna quam, ac volutpat lectus sodales nec. Praesent eu porta libero. Quisquam, quod.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec ultrices urna quam, ac volutpat lectus sodales nec. Praesent eu porta libero. Quisquam, quod.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec ultrices urna quam, ac volutpat lectus sodales nec. Praesent eu porta libero. Quisquam, quod.",
  },
];

let html = "";

for (let i = 0; i < accordionSection.length; i++) {
  html += `
    <div class="accordion-item" data-index="${i}">
      <div class="faq-flex accordion">
        <h2>${accordionSection[i].question}</h2>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="answer" style="display: none;">
        ${accordionSection[i].answer}
      </div>
    </div>
  `;
}

accordion.innerHTML = html;

// Step 2: Attach event listeners after rendering
const buttons = document.querySelectorAll(".accordion");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => toggleAccordion(index));
});

function toggleAccordion(index) {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item, i) => {
    const answer = item.querySelector(".answer");

    if (i === index) {
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    } else {
      answer.style.display = "none";
    }
  });
}
