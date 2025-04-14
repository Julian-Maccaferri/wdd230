const membersURL = 'https://raw.githubusercontent.com/Julian-Maccaferri/wdd230/refs/heads/main/chamber/data/members.json'; // Path to the JSON file
const cards = document.querySelector('#cards');

async function getJsonMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data); // For test only
    displayMembers(data.company);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = `Company Name: ${member.name}`;
        address.textContent = `Address: ${member.address}`;
        website.textContent = `Url: ${member.website}`;

        // Set the image attributes
        img.setAttribute('src', member.img);
        img.setAttribute('alt', `${member.name} logo`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300px');
        img.setAttribute('height', '200px');

        card.appendChild(name);
        card.appendChild(address)
        card.appendChild(website);
        card.appendChild(img);

        cards.appendChild(card);
    });
}

getJsonMembers();


