# Namaste React 

...
# Parcel
- Dev build
- Local Server
- HMR - Hot Module Replacement 
- File watching algorith written in C++
- Caching
- Image Optimization
- Minification 
- Bundling
- Compress 
- Consistent Hashing
- Code Splitting 
- Differential Bundling - to handle opening of app in different browsers(older too) and environments
- HTTPS environments supported too not just local hosts (for testing too)
- Tree Shaking - remove unused code 
- Different dev and prod builds

When you do npx parcel build index.html - error because in pacakage.json you kept "main": App.js which is not required. So remove that 

# Food Ordering App
/*
Header 
-Logo
-Nav Items
Body
-Search
-Restaurant Container
    -Restaurant Card
        - Img
        - Name of Res, Star Rating, Cuisine, Delivery Time 
Footer
-Copyright
-Links
-Address
-Contact
*/

# Types of Export and Import

- Deafult Export and Import 

export default Component;
import Component from "path";

- Named Export and Import (generally for Variables)

export const Component/Variable;
import {Component/Variable} from "path";


# React Hooks 
- Normal JS Utility function

- useState() -- super powerful State variables - Import as named Import
- useEffect() 

These 2 are the most important hooks.






