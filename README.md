# Namste React🚀

# Parcel
- Dev Build
- it provides the local server
- no need to Refresh the Page, Because it has (HMR Hot Module Replacement)
- it has file watching Algorithm\
- Caching for faster Builds
- Diagnotics--> Beautiful error 
- Bundling --> it takes all files amd makes them into one file
- Compressing
- Minification
- Image optimization
- Code splitting
- Tree shaking --> it Removes the unused code.
- HTTPS --> it provides Https when we pass a command----> npx parcel index.html --https

# Babel is compile of Javascript!-
-  Babel converts the code into Reactcode, but the ReactCode is Javascript's Object 😁



# Routing
- There are two types of Routing in Web apps



# Class Based Components 
- constructor--> initializes state.
- render --> displays the initial dummy data.
- componentDidMount --> runs after the first render and fetches data.
- setState --> updates the state.
- React renders again with the fetched data.
- componentDidUpdate --> runs after the update




# The process to make break our Application into small pieces is called 
- Breaking down the Large Applications into small logical chunks 
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy loading --> We don't load everything which is present in the main Application, 
    we only load the component when it was required.

- On demand loading --> the component dose not load with the main application, it only loads when it is called or clicked!
- Dynamic import

- These techniques were done when the Application size was increasing and when the application was bloating.. so that we can reduce the size of the applications
        - so that all the code does not runs at once 
        - Only the required portion of the application only run
                - Example -->
                              Swiggy                 Amazon 
                                |                      |
                              /   \                  /   \
                      instamart    Food        Grocery    Products 
 - Simply it is used to distrubute the load.