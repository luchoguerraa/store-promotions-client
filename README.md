# ![React + Redux Store promotions]

[[STORE-FORNT-END]]()

> ### React + Redux codebase for Store Promotions proyect

### [Demo](https://react-redux.realworld.io)&nbsp;&nbsp;&nbsp;&nbsp;[Store Promotions](https://github.com/luchoguerraa/store-promotions-client)

Originally created for this [GH issue](https://github.com/luchoguerraa/store-product-web.git). The codebase is now feature complete; please submit bug fixes via pull requests & feedback via issues.

## Getting started

You can view a live demo over at https://store-products-web.herokuapp.com/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 3000 instead of standard React's port 3000,4100 or 8080 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
 
### Making requests to the backend API

For convenience, we have a live API server running at https://serverproducts-backend.herokuapp.com/api/v1/private/store/products/ for the application to make requests against.

The source code for the backend server (available for Node) can be found in the [main repo](https://github.com/luchoguerraa/serveproducts.git).

## Functionality 

The example application is a little store of products with promotions for it when you search products using palindrome words.


