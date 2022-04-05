/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app/";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-En', {style: 'currency', 
    currency: "USD",
}).format(price)

    return newPrice;
}

//web api
//contectar al server
//procesar la respesta, convertir en json
//json>data>renderizar info
window
.fetch(`${baseUrl}api/avo`)
.then(respuesta => respuesta.json())
.then(responJson => {
    const allItems = []
    responJson.data.forEach((item) => {
       const image = document.createElement('img');
       image.src = `${baseUrl}${item.image}`;
       image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

       const title = document.createElement('h2');
       title.textContent = item.name;
       title.className = "text-lg";

       const price = document.createElement('div');
       price.textContent = formatPrice(item.price);
       price.className = "text-gray-600";

       const content = document.createElement('div');
       content.append(title, price);
       content.className = 'text-center md:text-left';
       const container = document.createElement('div');
       container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';
       container.append(image, content);
       allItems.push(container);
    });
    appNode.append(...allItems);
    appNode.className = "grid grid-cols-2 gap-4 place-content-center";
});
