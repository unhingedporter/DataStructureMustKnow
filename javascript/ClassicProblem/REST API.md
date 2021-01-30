REST API Architectural:

REST stands for REpresentational State Transfer and API stands for Application Program Interface. REST is a software architectural style that defines the set of rules to be used for creating web services. Web services which follow the REST architectural style are known as RESTful web services. It allows requesting systems to access and manipulate web resources by using a uniform and predefined set of rules. Interaction in REST based systems happen through Internet’s Hypertext Transfer Protocol (HTTP).

A Restful system consists of a:

    client who requests for the resources.
    server who has the resources.

It is important to create REST API according to industry standards which results in ease of development and increase client adoption.

Architectural Constraints of RESTful API: There are six architectural constraints which makes any web service are listed below:

    Uniform Interface
    Stateless
    Cacheable
    Client-Server
    Layered System
    Code on Demand

The only optional constraint of REST architecture is code on demand. If a service violates any other constraint, it cannot strictly be referred to as RESTful.

Uniform Interface: It is a key constraint that differentiate between a REST API and Non-REST API. It suggests that there should be an uniform way of interacting with a given server irrespective of device or type of application (website, mobile app).
There are four guidelines principle of Uniform Interface are:

    Resource-Based: Individual resources are identified in requests. For example: API/users.
    Manipulation of Resources Through Representations: Client has representation of resource and it contains enough information to modify or delete the resource on the server, provided it has permission to do so. Example: Usually user get a user id when user request for a list of users and then use that id to delete or modify that particular user.
    Self-descriptive Messages: Each message includes enough information to describe how to process the message so that server can easily analyses the request.
    Hypermedia as the Engine of Application State (HATEOAS): It need to include links for each response so that client can discover other resources easily.

Stateless: It means that the necessary state to handle the request is contained within the request itself and server would not store anything related to the session. In REST, the client must include all information for the server to fulfill the request whether as a part of query params, headers or URI. Statelessness enables greater availability since the server does not have to maintain, update or communicate that session state. There is a drawback when the client need to send too much data to the server so it reduces the scope of network optimization and requires more bandwidth.

Cacheable: Every response should include whether the response is cacheable or not and for how much duration responses can be cached at the client side. Client will return the data from its cache for any subsequent request and there would be no need to send the request again to the server. A well-managed caching partially or completely eliminates some client–server interactions, further improving availability and performance. But sometime there are chances that user may receive stale data.

Client-Server: REST application should have a client-server architecture. A Client is someone who is requesting resources and are not concerned with data storage, which remains internal to each server, and server is someone who holds the resources and are not concerned with the user interface or user state. They can evolve independently. Client doesn’t need to know anything about business logic and server doesn’t need to know anything about frontend UI.

Layered system: An application architecture needs to be composed of multiple layers. Each layer doesn’t know any thing about any layer other than that of immediate layer and there can be lot of intermediate servers between client and the end server. Intermediary servers may improve system availability by enabling load-balancing and by providing shared caches.

Code on demand: It is an optional feature. According to this, servers can also provide executable code to the client. The examples of code on demand may include the compiled components such as Java applets and client-side scripts such as JavaScript.

Rules of REST API: There are certain rules which should be kept in mind while creating REST API endpoints.

    REST is based on the resource or noun instead of action or verb based. It means that a URI of a REST API should always end with a noun. Example: /api/users is a good example, but /api?type=users is a bad example of creating a REST API.
    HTTP verbs are used to identify the action. Some of the HTTP verbs are – GET, PUT, POST, DELETE, UPDATE, PATCH.
    A web application should be organized into resources like users and then uses HTTP verbs like – GET, PUT, POST, DELETE to modify those resources. And as a developer it should be clear that what needs to be done just by looking at the endpoint and HTTP method used.
    URI 	HTTP verb 	Description
    api/users 	GET 	Get all users
    api/users/new 	GET 	Show form for adding new user
    api/users 	POST 	Add a user
    api/users/1 	PUT 	Update a user with id = 1
    api/users/1/edit 	GET 	Show edit form for user with id = 1
    api/users/1 	DELETE 	Delete a user with id = 1
    api/users/1 	GET 	Get a user with id = 1
    Always use plurals in URL to keep an API URI consistent throughout the application.
    Send a proper HTTP code to indicate a success or error status.

Note : You can easily use GET and POST but in order to use PUT and DELETE you will need to install method override. You can do this by following below code :

npm install method-override --save

This simply require this package in your code by writing :

var methodOverride = require("method-override");

Now you can easily use PUT and DELETE routes :

app.use(methodOverride("_method"));

HTTP verbs: Some of the common HTTP methods/verbs are described below:

    GET: Retrieves one or more resources identified by the request URI and it can cache the information receive.
    POST: Create a resource from the submission of a request and response is not cacheable in this case. This method is unsafe if no security is applied to the endpoint as it would allow anyone to create a random resource by submission.
    PUT: Update an existing resource on the server specified by the request URI.
    DELETE: Delete an existing resource on the server specified by the request URI. It always return an appropriate HTTP status for every request.
    GET, PUT, DELETE methods are also known as Idempotent methods. Applying an operation once or applying it multiple times has the same effect. Example: Delete any resource from the server and it succeeds with 200 OK and then try again to delete that resource than it will display an error message 410 GONE.


References: geeksforgeeks