
let skills=document.querySelector('.skills-list-content');

function displayskills(){
    skills.innerHTML='<h3>Frontend:</h3> <p> React.js , JavaScript , TypeScript , HTML5 , CSS3 , Tailwind CSS , Bootstrap</p>  <h3>Programming Languages:</h3> <p>C, C++ ,Python</p>'
};

function displayproj(){
    skills.innerHTML='<h3> FlickHive  </h3> <h3> WorkSync  </h3> <h3> BharatSecure    <h3>Ettarra Coffee House Website</h3> </h3> <h3> Turning The Tide Website  </h3>  ';
};

function displayedu(){
    skills.innerHTML='<h3>Fr. Conceicao Rodrigues College of Engineering</h3> <p>  B.Tech (Computer Engineering) ,2023-Current <br> Semester 1 : 9.89 <br> Semester 2: 9.18</p>   <h3> Vidyavardhinis Annasaheb Vartak College</h3> <p>   Junior College - Science ,2021-2023 <br>HSC Percentage : 81%</p>     <h3>  St. Joseph English School</h3> <p>   2011-2021<br> SSC Percentage : 97%</p>';
};

function submitdis(){
    alert('Thank You for Your Message :)');
}

let seeMoreBtn = document.getElementById("see-more");
let workCards = document.querySelectorAll(".work-cards .card1");

let isExpanded = false; // Track if all cards are visible

seeMoreBtn.addEventListener("click", function () {
    if (isExpanded) {
        // Show only the first 3 cards
        workCards.forEach((card, index) => {
            card.style.display = index < 3 ? "block" : "none";
        });
        seeMoreBtn.innerHTML = "<span>See More</span>"; // Update button text
    } else {
        // Show all cards
        workCards.forEach((card) => {
            card.style.display = "block";
        });
        seeMoreBtn.innerHTML = "<span>See Less</span>"; // Update button text
    }
    isExpanded = !isExpanded; // Toggle the state
});

// Initialize by hiding all cards except the first 3
workCards.forEach((card, index) => {
    card.style.display = index < 3 ? "block" : "none";
});
