let htmlSectionContainer = document.querySelector("#HTML .innerDiv");
let htmlOverlay = document.querySelector("#HTMLoverlay");

// Homework data for multiple classes with paragraphs
let homeworkData = [
  {
    class: 5,
    h3: "Class 5",
    topic: "Understanding HTML Basics",
    homework: "Understanding of HTML, Basics of HTML",
    how: "Search on MDN & W3 School",
    paragraph: `
      <h4>HTML Intro</h4>
      HTML is the standard markup language for Web pages.<br><br>
      <h4>HTML Advanced Topics:</h4>
      HTML &lt;canvas&gt; uses getContext() of JS method.<br><br>
      <h4>HTML HTTPS Codes:</h4><br>
      Learn on <a href="https://www.w3schools.com/tags/ref_httpmessages.asp" target="_blank">W3Schools</a>.
    `,
    link: "https://www.youtube.com/watch?v=rr-8yflPIX0&feature=youtu.be",
  },
  {
    class: 8,
    h3: "Class 8",
    topic: "Elements in CSS",
    homework: "Elements in CSS, Inline VS Block Element",
    how: "Read on MDN",
    paragraph: `
      <h4>How to convert inline to block?</h4>
      <pre><code>
      display:block;
      </code></pre>

      <h4>How to convert block to inline?</h4>
      <pre><code>
      display:inline;
      </code></pre>

      <h4>What are inline block elements?</h4>
      <p>
      Ans: Inline-block elements are the elements which only occupy the space that is needed, we can give them width and height.
      </p>
      <h4>Which type of element is img?</h4>
      <p>
      Ans: Images are inline-block elements.
      </p>
    `,
    link: "https://www.youtube.com/watch?v=weCVbP-fmmo",
  },
  {
    class: 9,
    h3: "Class 9",
    topic: " Tables in HTML",
    homework: "Making a table!",
    how: "Code in VS code",
    paragraph: `
      <img src="images/table.png" alt="Description of the GIF">
      <h4>Code</h4>
    `,
    link: "https://www.youtube.com/watch?v=x7HLDqywZVI",
  },
  {
    class: 10,
    h3: "Class 10",
    topic: "Forms in HTML",
    homework: "Search about input attributes, Input pattrens, Showing --selecet an option-- in select tag by default",
    how: "Code in VS code, and search on MDN",
    paragraph: `
      <img src="images/table.png" alt="Description of the GIF">
      <h4>Code</h4>
    `,
    link: "https://www.youtube.com/watch?v=h38GV7vmMYs",
  },
];

// Dynamically adding the inner HTML of the 'HTML' section
function renderHTMLsection() {
  htmlSectionContainer.innerHTML = ""; // Clear any existing content
  let htmlContentHTML = "";

  // Create HTML for each homework item
  homeworkData.forEach((obj, index) => {
    htmlContentHTML += `
        <div class="homework-item">
            <h3>${obj.h3}</h3>
            <div class="topic"><a href="${obj.link}" target="_blank">${obj.topic}</a></div>
            <div class="question">
                <ol>
                ${obj.homework
                  .split(",")
                  .map((item) => `<li>${item.trim()}</li>`)
                  .join("")}
                </ol>
            </div>
            <h4>How to do it?</h4>
            <p>${obj.how}</p>
            <div class="view-detail" data-index="${index}" data-class="${obj.class}">View Detail</div>
        </div>`;
  });

  // Add the generated HTML to the section
  htmlSectionContainer.innerHTML = htmlContentHTML;

  // Add event listeners to each "View Detail" button
  const viewDetailButtons = document.querySelectorAll(".view-detail");
  viewDetailButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const classNumber = event.target.getAttribute("data-class"); // Get class number
      showOverlayByClass(Number(classNumber)); // Call function with class number
    });
  });
}

// Function to filter and show overlay by class
function showOverlayByClass(classNumber) {
  const selectedData = homeworkData.find((data) => data.class === classNumber); // Filter data
  if (selectedData) {
    showOverlay(
      selectedData.topic,
      selectedData.homework,
      selectedData.paragraph
    ); // Show overlay
  }
}

// Function to show overlay
function showOverlay(topic, homework, paragraph) {
  htmlOverlay.style.display = "block";
  htmlOverlay.innerHTML = `
    <div class="overlay-content">
        <h3>${topic}</h3>
        <div class="overlay-2div">
        <div class="overlay-homework">
            <h4>Homework:</h4>
            <ol>
                ${homework
                  .split(",")
                  .map((item) => `<li>${item.trim()}</li>`)
                  .join("")}
            </ol>
        </div>
        <div class="overlay-paragraph">
            ${paragraph}
        </div>
        </div>
        <button class="close-btn">Close</button>
    </div>
  `;

  // Close overlay functionality
  const closeButton = htmlOverlay.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    htmlOverlay.style.display = "none";
  });
}

renderHTMLsection();
