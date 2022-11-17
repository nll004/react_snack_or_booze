### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  > The provide client side routing functionality. React router allows changing the url and UI without sending requests to the server for new pages.

- What is a single page application?
  > A single page application is an application that loads only once and can function without loading additional pages.

- What are some differences between client side and server side routing?
  > Client side routing takes longer to load a page but runs much faster once loaded. Server side routing improves search engine optimization.

- What are two ways of handling redirects with React Router? When would you use each?
  > In react router v6 you can use a redirect method and pass a route as the parameter or use the Navigate component with some logic and the 'to="/route"' prop. You could also try to change the location history.

- What are two different ways to handle page-not-found user experiences using React Router?
  > In react router v6 you could use the redirect method and pass in a url that displays a 404 or add a route with url set to "*" to catch all routes that aren't listed.

- How do you grab URL parameters from within a component using React Router?
  > You define the parameter in the url using /:paramName/ and use the useParams() hook in your component to access url parameters.

- What is context in React? When would you use it?
  > Context is similar to a global variable and can be used in components without having to drill down through components. It allows for cleaner and more intuitive code.

- Describe some differences between class-based components and function components in React.
  > Function based components handle state and effects much easier. Function components provide access to hooks which several issues with class based components. Functional components are also more concise and easier to work with.

- What are some of the problems that hooks were designed to solve?
  > Sharing state across components and avoiding duplication in code.
