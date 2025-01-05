document.addEventListener("DOMContentLoaded", () => {
  // Select the specific .row inside #HTML
  let HTMLsection = document.querySelector("#HTML .row");

  let practiceHTML = [
    {
      image: "position",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.",
      code: "",
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
          
          <button class="btn btn-primary"><a href=${p.demo}>Live demo</a></button>
          <button class="btn btn-success">CLICK me</button>
          
        </div>
      </div>
    `;
    // Append each card to the .row inside #HTML
    HTMLsection.innerHTML += HTMLinnerHTML;
  });
});
