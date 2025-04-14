const baseURL = "https://julian-maccaferri.github.io/wdd230/";
const linksURL = "https://julian-maccaferri.github.io/wdd230/data/links.json";

async function getJsonLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // For test only
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let weekList = document.createElement("ul");
        let weekNumber = document.createElement("li");
        weekNumber.textContent = `${week.week}:`; // Correctly access `week.week`
        weekList.appendChild(weekNumber);

        week.links.forEach((item) => {
            let linkItem = document.createElement("li");
            let link = document.createElement("a"); // Create an <a> element for the link
            link.href = item.link; // Set the href attribute for the link
            link.textContent = item.title; // Set the text content for the link
            linkItem.appendChild(link); // Append the <a> to the link <li>
            weekList.appendChild(linkItem); // Append the link item to the week list

            document.querySelector(".card").appendChild(weekList); // Append the list to the DOM
        });
    });
}

getJsonLinks();