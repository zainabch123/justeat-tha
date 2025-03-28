# Just Eat Coding Assignment

## Setting up

This project contains seperate **frontend** and **backend** directories. To run the app, open up your terminal and do as follows:

1. Clone the repository: `git clone git@github.com:username/project.git`.
2. Navigate to the projects directory: `cd projectname`
3. Navigate to **backend** folder: `cd backend`
4. Install dependencies: `npm install`
5. In the **backend** folder change the `.env.example` file to `.env`
6. Navigate to the **frontend** folder: `cd ../frontend`
7. Install dependencies: `npm install`
8. In the **frontend** folder change the `.env.evample` file to `.env`
9. To run the **backend**, navigate to the backend folder with `cd ../backend`. Then run `npm start`. The backend server should start.
10. To run the **frontend**, navigate to the backend folder with `cd ../frontend`. Then run `npm run dev`. The frontend app should start.
11. NOTE: You can edit the values of the port variables in the `.env` files as long as they are both changed to the same value. E.g. `VITE_PORT=4000` in the frontend and `PORT=4000` in the backend.

## Assumptions/Additionw

Overall, I found this task to be quite straightforward. The emphasis was clear that this was a frontend-focused task. Nevertheless, this section will outline aspects of the task were I made assumptions / made additions:

1. Adding a backend - I sought clarification on this and was encouraged to showcase as many of my skills as possible. I felt a backend would greatly enhance the user experience as it would enable my to process and filter the `restaurantData` without slowing down my frontend.  
2. Multiple pages - My app uses `react-router` to display multiple pages. This was not outlined as a requirement but I felt an additional landing page would further showcase my skills and add an additional feature/aspect to my UI.
3. Adding my own image - I added an image of some food items to the `restaurantDataCards`, sourced from `pexels.com`. While the focus of the task is to display the 4 specified data points, I felt that some imagery would greatly enhance the UI especially as this assigment is all about the display of data.
4. Using restaurant logos - I noticed the restaurantObj also included logoUrl's. I thought this was a great way to tie in the specific restaurant brands and to further add to the display.
5. Sorting function - I wanted to showcase skills in being able to display the data in different ways by including the ability to sort the `restaurantData`.
6. Ability to search any postcode - I did this to further add to the functionality of my app and to further showcase my skills.
7. Responsive/Mobile-friendly approach - I wanted to showcase my skills in creating flexible layouts using css grid, flexbox, and media queries.



## Improvements

