#parcel
- Dev build
- create Local server
- HMR = Hot Module Replacement
- file Watching algorithm - written in C++
- Faster build - using caching
- Image optimizatio
- Minification 
- Bundling
- Compressing
- Consistent Hashing
- Code Spliting
- Differential Bundling - to support older browsers
- Diaognostic
- Error Handler
- HTTPs
- Tree Shaking - remove unused code 
- Different Dev and Prod Bundles 
   npx parcel build index.html (create bundle for Produnction) [main in package.   json should not conflict with index.html/app.js]

   npx parcel index.html (create bundle for developement )


# Food Ordering APP
* Header
   - Logo
   - Navbar
* Body
  - search
  - restaurants Container
       > Logo
       > info
 * Footer            


 #  SETTING UP TESTING
  - Install React Testing Library
  - Install jest
  - Install Babel dependencies
  - configure Babel <babel.config.js>
  - configure Parcel config file <.parcelrc> to disable default babel transpiler
  - jest configure  npx jest init => <jest.config.js>
  - Install jsdom library 
  - __tests__ folder for writing method <dunder method>
  - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react include babel config file
 - Install npm i -D @testing-library/jest-dom