const btn = document.querySelector('#generate-restaurant');
const restaurants = [
    {name: 'Angies Pizza & Pier 27 Lounge', phone: '860.536.7300', address: '25 Roosevelt Avenue', website: 'angiespizzapier27.com'},
    {name: 'Anthony Js Bistro', phone: '860.536.0448', address: '6 Holmes Street', website: 'anthonyjsbistro.com'},
    {name: 'Bravo Bravo', phone: '860.536.3228', address: '19 East Main Street', website: 'bravobravoct.com'},
    {name: 'Capt. Daniel Packer Inne', phone: '860.536.3555', address: '32 Water Street', website: 'danielpacker.com'},
    {name: 'Engine Room', phone: '860.415.8117', address: '14 Holmes Street', website: 'engineroomct.com'},
    {name: 'Go Fish', phone: '860.536.2662', address: '22, 27 Coogan Boulevard', website: 'gofishct.com'},
    {name: 'Jealous Monk', phone: '860.536.MONK', address: '27 Coogan Boulevard', website: 'jealous-monk.com'},
    {name: 'Mystic Diner', phone: '860.415.4625', address: '253 Greenmanville Avenue', website: 'dinerhospitalitygroup.com'},
    {name: 'The Mariner', phone: '860.536.5200', address: '21 West Main Street', website: 'themarinermystic.com'},
    {name: 'Mystic Pizza', phone: '860.536.3700', address: '56 W Main Street', website: 'mysticpizzaoriginal.com'},
    {name: 'Pink Basil', phone: '860.245.4470', address: '27 Coogan Boulevard #3B', website: 'pinkbasilct.com'},
    {name: 'Taquerio', phone: '860.245.4420', address: '30 Broadway Avenue', website: 'taquerio-mystic.com'},
];

const generateRestaurants = () => {
    const randomNum = Math.random() * restaurants.length | 0;
    for (let i = 0; i < restaurants.length; i++) {
        const element = restaurants[i];

        if (randomNum === i) {
            const name = document.createTextNode('name: ' + element.name);
            const phone = document.createTextNode('phone: ' + element.phone);
            const address = document.createTextNode('address: ' + element.address);
            const website = 'https://' + element.website;
            console.log(website)


            const pName = document.createElement('p');
            const pPhone = document.createElement('p');
            const pAddress = document.createElement('p');
            const pWebsite = document.createElement('a');

            pName.appendChild(name);
            pPhone.appendChild(phone);
            pAddress.appendChild(address);
            pWebsite.href = website;
            pWebsite.innerHTML = `${element.website}`;

            const result = document.querySelector('#results');
            result.innerHTML = '';
            result.appendChild(pName);
            result.appendChild(pPhone);
            result.appendChild(pAddress);
            result.appendChild(pWebsite);

        }
    }
}

btn.addEventListener('click', generateRestaurants);