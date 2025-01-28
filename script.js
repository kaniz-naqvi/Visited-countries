document.addEventListener("DOMContentLoaded", () => {
  // Select the specific .row elements inside the HTML and JS sections
  let HTMLsection = document.querySelector("#HTML .row");
  let JSsection = document.querySelector("#JS .row");

  // Array to hold HTML practice project details
  let practiceHTML = [
    {
      image: "position",
      detail:
        "This project focused on learning CSS positioning, navigation styling, product card design, and icon integration.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/position",
      demo: "position/index.html",
      title: "Position Practice in CSS",
    },
    {
      image: "portfolio",
      detail:
        "This project was focused on CSS positioning and flex box, uses before after pseudo elements to add images.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/simple%20portfolio",
      demo: "simple portfolio/index.html",
      title: "Position Practice in CSS",
    },
    {
      image: "Our team",
      detail:
        "This project was focused on CSS flex box, use flex box to made it responsive.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/our%20team",
      demo: "our team/index.html",
      title: "Our Team cards",
    },
    {
      image: "easypaisa",
      detail:
        "This project was focused on CSS box shadow, use box inset shadow to make this 3d look.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/box%20shadow",
      demo: "box shadow/index.html",
      title: "Box shadow practice",
    },
    {
      image: "ass1",
      detail:
        "This project was focused on CSS box shadow, use box inset shadow to make this 3d look.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/grid%20practice%201",
      demo: "grid practice 1/index.html",
      title: "Box shadow practice",
    },
  ];

  // Array to hold JS practice project details
  let practiceJS = [
    {
      image: "recording",
      detail:
        "This project is a simple audio recorder app that allows users to record and play audio using the MediaRecorder API. It involves handling microphone access, recording audio in chunks, and playing it back as a blob. Key learnings include working with the MediaRecorder API, managing user interactions, and handling errors for microphone access.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/Recorder%20in%20JS",
      demo: "Recorder%20in%20JS/index.html",
      title: "Position Practice in CSS",
    },
  ];

  // Iterate over the practiceHTML array and dynamically create cards
  practiceHTML.forEach((p) => {
    let HTMLinnerHTML = `
      <div class="card m-2 col-lg-3">
      <a href=${p.demo} target="_blank">
        <img src="./images/${p.image}.PNG" class="border mt-2 w-100" alt="${p.image}" />
        </a>
        <div class="details p-3">
          <h3>${p.title}</h3>
          <p>${p.detail}</p>
          
          <!-- Code and Live Demo buttons -->
          <button class="btn btn-primary text-white">
            <a href="${p.code}" class="text-white text-decoration-none" target="_blank">Code</a>
          </button>
          <button class="btn btn-success text-white">
            <a href="${p.demo}" class="text-white text-decoration-none" target="_blank">Live demo</a>
          </button>
        </div>
      </div>
    `;
    // Append each card to the .row inside #HTML
    HTMLsection.innerHTML += HTMLinnerHTML;
  });

  // Iterate over the practiceJS array and dynamically create cards
  practiceJS.forEach((p) => {
    let JSinnerHTML = `
      <div class="card m-2 col-lg-3">
      <a href=${p.demo}>
        <img src="./images/${p.image}.PNG" class="border mt-2 w-100" alt="${p.image}" />
        </a>
        <div class="details p-3">
          <h3>${p.title}</h3>
          <p>${p.detail}</p>
          
          <!-- Code and Live Demo buttons -->
          <button class="btn btn-primary text-white">
            <a href="${p.code}" class="text-white text-decoration-none" target="_blank">Code</a>
          </button>
          <button class="btn btn-success text-white">
            <a href="${p.demo}" class="text-white text-decoration-none" target="_blank">Live demo</a>
          </button>
        </div>
      </div>
    `;
    // Append each card to the .row inside #JS
    JSsection.innerHTML += JSinnerHTML;
  });
});
