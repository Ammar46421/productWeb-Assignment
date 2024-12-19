Create an array of objects to represent the product data.
Each product object should contain the following properties:
id: A unique identifier (e.g., 1, 2, etc.).
name: The name of the product (e.g., "Product 1").
price: The price of the product (e.g., "$20").
description: A short description of the product.
Use the map function to create product cards for each item in the dummy data array.
Each card should display:
The product's (use an <h2> or <h3> tag).
The product's .
The product's (use a <p> tag).
Add a to each product card.
Render all the product cards inside a container element (e.g., a <div> with an id of "product-container").
Use JavaScript to manipulate the DOM and insert the product cards dynamically.
When the user clicks the on a product card:
Remove that product from the dummy data array using the filter function.
Refetch the DOM and re-render the updated product list to reflect the deletion.
Use for the structure.
Use to style the product cards (you can apply styles using inline, internal, or external CSS).
Use for DOM manipulation and handling the delete functionality.
Ensure that the product list updates dynamically when a product is deleted. 