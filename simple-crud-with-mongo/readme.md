Simple CRUD with Express and MongoDB in Node

Reference articles
- [Writing a CRUD app with Node.js and MongoDB](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb)

### My suggestions on the reference links

1. [Writing a CRUD app with Node.js and MongoDB](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb)

- The author uses var for most variables where const and let can be a more apt choice for variables.
- Do not name all the files in controller, route and model directory as product.js. It is better to give context-specific better naming to files like product.model.js, product.controller.js and product.route.js
- Some variable names are in camel case but with first letter capital. Try to have variable names that are in camel case and start with a lowercase capital. Coming from C++/Java background, this looks more semantic to me.
- The app.use('/products', productRouteConfig); line in the app.js file should come after the bodyParser app.use() configuration, else express will not get the body in JSON in request object.
- We do not need to keep 'update' and 'delete' as part of request url in PUT and DELETE request respectively. If one is following REST conventions properly, it is understood that PUT updates an entity and DELETE deletes an entity.