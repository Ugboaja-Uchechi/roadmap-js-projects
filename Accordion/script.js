const accordion = document.querySelector(".faq-section");

const accordionSection = [
  {
    question: "Accordion 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "Accordion 2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "Accordion 3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "Accordion 4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    question: "Accordion 5",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

let html = "";

for (let i = 0; i < accordionSection.length; i++) {
  html += `
    <div class="accordion-item" data-index="${i}">
      <h2>${accordionSection[i].question}</h2>
      <button class="accordion-button">Click</button>
      <div class="answer" style="display: none;">
        ${accordionSection[i].answer}
      </div>
    </div>
  `;
}

accordion.innerHTML = html;

// Step 2: Attach event listeners after rendering
const buttons = document.querySelectorAll(".accordion-button");

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
