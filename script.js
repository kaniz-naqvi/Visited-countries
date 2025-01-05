document.addEventListener("DOMContentLoaded", () => {
  // Select the specific .row inside #HTML
  let HTMLsection = document.querySelector("#HTML .row");

  let practiceHTML = [
    {
      image: "position",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.",
      code: "https://github.com/kaniz-naqvi/My-full-stack-work/tree/main/position",
      demo: "position/index.html",
    },
  ];

  // Iterate over the practiceHTML array and add cards
  practiceHTML.forEach((p) => {
    let HTMLinnerHTML = `
      <div class="card col-lg-5">
        <img src="./images/${p.image}.PNG" class="border mt-2 w-100" alt="${p.image}" />
        <div class="details p-3">
          <h3>Title</h3>
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
