document.addEventListener("DOMContentLoaded", () => {
  // Select the specific .row inside #HTML
  let HTMLsection = document.querySelector("#HTML .row");

  let practiceHTML = [
    {
      image: "position",
      detail:
        "This project focused on learning CSS positioning, navigation styling, product card design, and icon integration. Key skills included mastering absolute and relative positioning, using rotate for dynamic effects, styling buttons and typography.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/position",
      demo: "position/index.html",
      title: "Position Practice in CSS",
    },
    {
      image: "portfolio",
      detail:"This project was focused on CSS positioning and flex box, uses before after psudo elements to add images."
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/simple-portfolio",
      demo: "simple-portfolio/index.html",
      title: "Position Practice in CSS",
    },
  ];

  // Iterate over the practiceHTML array and add cards
  practiceHTML.forEach((p) => {
    let HTMLinnerHTML = `
      <div class="card col-lg-5">
        <img src="./images/${p.image}.PNG" class="border mt-2 w-100" alt="${p.image}" />
        <div class="details p-3">
          <h3>${p.title}</h3>
          <p>${p.detail}</p>
          
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
});
