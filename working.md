# Working Manual - Railway Ticket Booking Website

## 1. Project Introduction

This project is a simple railway ticket booking website inspired by railway reservation websites like IRCTC. It is not a real IRCTC clone and it does not connect to any real train booking system. It is made only as a beginner-level college frontend project.

The main aim of this project is to show how a basic website can be made using HTML, CSS, JavaScript, and basic Tailwind CSS. The project has simple pages like login, home, and profile. It uses dummy data for trains and localStorage for saving the login username.

This website is made in a simple way so that a beginner student can understand and explain it easily during presentation or viva.

---

## 2. Technologies Used

The project uses only frontend technologies.

### 2.1 HTML

HTML is used to create the structure of the website. All pages are made using normal HTML tags like `div`, `form`, `input`, `button`, `nav`, `section`, and `footer`.

HTML is used for:

- Creating the login form
- Creating the navigation bar
- Creating the train search form
- Creating the user profile layout
- Adding page sections like popular routes and available trains

### 2.2 CSS

CSS is used to give basic styling to the website. The file `style.css` contains custom CSS for the project.

CSS is used for:

- Setting font style
- Creating simple cards
- Adding light shadows
- Creating profile circle
- Styling input boxes
- Making the layout clean and simple
- Adding basic responsive behavior for mobile screens

### 2.3 JavaScript

JavaScript is used to add frontend logic to the project.

JavaScript is used for:

- Login form validation
- Saving username in localStorage
- Redirecting user after login
- Checking whether the user is logged in or not
- Showing username on the home page
- Showing dummy train cards dynamically
- Handling train search form validation
- Logout functionality
- Showing edit profile message

### 2.4 Tailwind CSS

Tailwind CSS is used only in a basic way through CDN. It is used for simple utility classes such as:

- Background colors
- Text colors
- Padding
- Margin
- Grid layout
- Flex layout
- Rounded corners
- Simple hover effects

The project does not use advanced Tailwind features. It is used only to make the design faster and cleaner.

---

## 3. Folder Structure

The project contains the following files:

```text
hardik-project-web1/
│
├── index.html
├── home.html
├── profile.html
├── style.css
├── script.js
└── working.md
```

### 3.1 index.html

This is the login page of the website. When the user opens the project, this page appears first.

It contains:

- Railway logo/train icon
- Project title
- Username input box
- Password input box
- Login button
- Basic message area for validation errors

### 3.2 home.html

This is the main page after login.

It contains:

- Navigation bar
- Welcome message with username
- Train search form
- Popular routes section
- Available trains section
- Footer with contact information
- Logout button

### 3.3 profile.html

This page shows dummy user profile information.

It contains:

- User icon
- Name
- Email
- Phone
- City
- Edit Profile button
- Logout button

### 3.4 style.css

This file contains the custom CSS of the project.

It controls:

- Layout width
- Login box design
- Input box style
- Train card design
- Profile page design
- Mobile responsiveness

### 3.5 script.js

This file contains all the JavaScript logic.

It controls:

- Login validation
- localStorage session
- Page protection
- Train card display
- Train search validation
- Logout
- Edit profile message

### 3.6 working.md

This file explains the full working of the project. It is useful for project presentation and viva preparation.

---

## 4. Pages Included in the Website

## 4.1 Login Page

The login page is the first page of the website. It is stored in `index.html`.

### Features of Login Page

- Simple login form
- Username field
- Password field
- Login button
- Train icon/logo
- JavaScript validation
- Redirect to home page after successful login

### Login Page Working

When the user enters username and password and clicks the login button, JavaScript checks whether both fields are filled or not.

If username or password is empty, an error message is shown.

If password length is less than 4 characters, an error message is shown.

If both values are correct, the username is stored in browser localStorage using this line:

```javascript
localStorage.setItem("railwayUser", username);
```

After storing the username, the user is redirected to `home.html`.

```javascript
window.location.href = "home.html";
```

This gives a simple login/session effect without using backend or database.

---

## 4.2 Home Page

The home page is stored in `home.html`. It is the main page of the project.

### Features of Home Page

- Navigation bar
- Welcome message
- Username shown from localStorage
- Train search section
- From station input
- To station input
- Date input
- Search button
- Popular routes cards
- Available train cards
- Footer
- Logout button

### Home Page Working

When the home page opens, JavaScript checks if a user is logged in or not.

The username is taken from localStorage:

```javascript
var user = localStorage.getItem("railwayUser");
```

If the username exists, it is displayed in the welcome message.

Example:

```text
Welcome, Hardik
```

If the username is not found, the user is sent back to the login page.

This prevents direct access to the home page without login.

### Train Search Working

The train search form contains three fields:

- From
- To
- Date

When the user clicks the Search button, JavaScript checks whether all three fields are filled.

If any field is empty, a message is shown:

```text
Please fill From, To and Date before searching.
```

If all fields are filled, a message is shown like:

```text
Showing sample trains for Delhi to Mumbai on 2026-05-07.
```

The website then displays dummy train cards. Since there is no backend or database, the search does not fetch real trains. It only displays sample train data.

---

## 4.3 Profile Page

The profile page is stored in `profile.html`.

### Features of Profile Page

- User icon
- Name
- Email
- Phone
- City
- Edit Profile button
- Navigation bar
- Logout button

### Profile Page Working

When the profile page opens, JavaScript again checks whether the user is logged in.

If the user is logged in, the username from localStorage is displayed as the profile name.

Other details are dummy values:

```text
Email: hardik@example.com
Phone: 9876543210
City: Delhi
```

The Edit Profile button does not update data because there is no backend. When clicked, it shows a simple message:

```text
Edit profile feature is not connected to backend in this project.
```

This is added to show that the button exists but backend functionality is not implemented.

---

## 5. Complete Working Flow of the Website

The website works in the following steps:

### Step 1: User Opens Login Page

The user opens `index.html`. The login page appears.

### Step 2: User Enters Login Details

The user enters a username and password.

Example:

```text
Username: Hardik
Password: 1234
```

### Step 3: JavaScript Validates Login

JavaScript checks:

- Username should not be empty
- Password should not be empty
- Password should be at least 4 characters

### Step 4: Username Is Saved

If validation is successful, the username is saved in localStorage.

### Step 5: User Goes to Home Page

After login, the user is redirected to `home.html`.

### Step 6: Home Page Shows Username

The home page reads the username from localStorage and shows it in the welcome message.

### Step 7: User Searches Trains

The user enters From, To, and Date values and clicks Search.

### Step 8: Dummy Train Cards Are Displayed

The website displays 4 sample trains from JavaScript dummy data.

### Step 9: User Can Open Profile Page

The user can click Profile from the navigation bar.

### Step 10: User Can Logout

When the user clicks Logout, localStorage is cleared and the user is sent back to the login page.

---

## 6. What the Project Includes

This project includes the following things:

### 6.1 Frontend Pages

- Login page
- Home page
- Profile page

### 6.2 Login System

- Basic login validation
- Username storage using localStorage
- Redirect after login
- Simple session check

### 6.3 Railway Search Section

- From station input
- To station input
- Date input
- Search button
- Validation message

### 6.4 Dummy Train Data

The train data is stored in JavaScript as an array of objects.

Each train object contains:

- Train name
- Train number
- Route
- Timing
- Fare

Example:

```javascript
{
    name: "Rajdhani Express",
    number: "12951",
    route: "Delhi to Mumbai",
    time: "16:55 - 08:35",
    price: "₹1850"
}
```

### 6.5 Train Cards

Train cards are created dynamically using JavaScript. This means the train cards are not written manually again and again in HTML. JavaScript reads the train data and creates cards automatically.

### 6.6 Popular Routes

The home page also includes popular route cards such as:

- Delhi to Mumbai
- Delhi to Jaipur
- Kolkata to Patna
- Chennai to Bengaluru

### 6.7 Profile Page

The profile page includes dummy user information and a basic edit profile button.

### 6.8 Logout Button

The logout button removes the username from localStorage and redirects the user back to login page.

---

## 7. How I Made This Project By Myself

I made this project step by step by dividing it into small parts.

First, I planned the basic pages required for a railway reservation website. I decided to make three pages: login page, home page, and profile page.

Then, I created the login page using HTML. I added a simple train icon, username field, password field, and login button. After that, I used JavaScript to check whether the user entered valid details or not.

Next, I created the home page. I added a simple navigation bar, welcome message, train search form, popular route section, train cards section, and footer. I used Tailwind CSS utility classes for simple spacing, colors, and grid layout.

After that, I created the profile page. I kept it simple and added dummy user details like name, email, phone, and city. I also added an Edit Profile button, but since this is a frontend-only project, it only shows a message.

Then, I created the `style.css` file to write common styling. I used normal CSS for input boxes, cards, login box, profile rows, and mobile responsiveness.

Finally, I created the `script.js` file. In this file, I wrote JavaScript for login validation, localStorage session, train card display, search form validation, and logout.

I did not use backend because this is a beginner-level frontend project. I used localStorage to make it look like the user is logged in.

---

## 8. How LocalStorage Is Used

localStorage is a browser feature that stores small data in the user's browser.

In this project, localStorage is used to save the username after login.

When the user logs in, this code runs:

```javascript
localStorage.setItem("railwayUser", username);
```

This saves the username with the key `railwayUser`.

When the home page or profile page opens, this code is used:

```javascript
localStorage.getItem("railwayUser");
```

This gets the saved username from the browser.

When the user logs out, this code runs:

```javascript
localStorage.removeItem("railwayUser");
```

This removes the username and logs out the user.

---

## 9. How JavaScript Displays Train Cards

The train data is stored in an array called `trains`.

JavaScript loops through this array using a `for` loop.

For every train, JavaScript creates a new `div` element.

Then it adds train details inside that div using `innerHTML`.

After that, it adds the card to the train list section using `appendChild()`.

This makes the code easier because if we want to add more trains, we only need to add more train objects in the array.

---

## 10. Why No Backend Is Used

This project does not use backend because it is made for beginner-level frontend practice.

A real railway booking website needs:

- Backend server
- Database
- User authentication
- Real train API
- Payment system
- Ticket generation system
- Admin panel

But this project is only made to show the frontend design and basic working logic.

So, dummy data and localStorage are used instead of backend and database.

---

## 11. Important Functions in script.js

## 11.1 Login Form Event Listener

This checks the login form when the user clicks the login button.

It prevents the form from refreshing the page using:

```javascript
event.preventDefault();
```

Then it checks username and password.

## 11.2 checkLogin()

This function checks whether the user is logged in or not.

If the user is not logged in and tries to open home or profile page directly, the user is redirected to the login page.

## 11.3 displayTrains()

This function displays train cards from dummy train data.

It loops through the train array and creates cards dynamically.

## 11.4 logoutUser()

This function logs out the user by removing username from localStorage.

Then it redirects the user to login page.

## 11.5 editProfileMsg()

This function shows a message when the Edit Profile button is clicked.

It is only a dummy function because there is no backend.

---

## 12. How to Run the Project

This project does not require installation of Node.js, database, or backend server.

To run the project:

1. Open the project folder.
2. Open `index.html` in any browser.
3. Enter any username.
4. Enter a password of at least 4 characters.
5. Click Login.
6. The home page will open.
7. Search trains using From, To, and Date.
8. Open Profile from navigation bar.
9. Click Logout to return to login page.

---

## 13. Limitations of the Project

This is a frontend-only project, so it has some limitations.

- It does not book real tickets.
- It does not use real train data.
- It does not have a real database.
- It does not have real user authentication.
- It does not save profile changes.
- The Book Now button is only for design.
- The search form shows sample trains only.

These limitations are acceptable because this project is made for beginner-level frontend demonstration.

---

## 14. Future Improvements

In the future, this project can be improved by adding:

- Real backend using Node.js or Python
- Database using MySQL or MongoDB
- Real registration page
- Real login authentication
- Seat availability system
- Train search API
- Ticket booking form
- Payment page
- Booking history page
- Admin panel
- PDF ticket download

---

# Viva / Presentation Questions and Answers

## Q1. What is the main purpose of this project?

The main purpose of this project is to create a simple railway ticket booking website using frontend technologies. It is inspired by railway reservation websites, but it does not perform real booking. It is made to demonstrate basic HTML structure, CSS styling, JavaScript validation, localStorage usage, and simple page navigation.

---

## Q2. Which technologies are used in this project?

The project uses HTML, CSS, JavaScript, and basic Tailwind CSS.

HTML is used for creating the page structure. CSS is used for styling the website. JavaScript is used for login validation, localStorage, train card display, and logout. Tailwind CSS is used for simple utility classes like colors, spacing, grid, and flex layout.

---

## Q3. Why did you use HTML in this project?

HTML is used because it is the basic structure of every webpage. In this project, HTML creates the login form, navigation bar, train search form, train sections, profile details, and footer. Without HTML, there would be no structure on the webpage.

---

## Q4. Why did you use CSS?

CSS is used to make the website look clean and readable. It controls the design of input boxes, cards, profile rows, login box, shadows, colors, and spacing. CSS also helps make the website responsive for smaller screens.

---

## Q5. Why did you use JavaScript?

JavaScript is used to make the website interactive. It validates the login form, stores the username in localStorage, checks the login session, displays train cards dynamically, validates the train search form, and handles logout.

---

## Q6. What is Tailwind CSS and why is it used here?

Tailwind CSS is a utility-first CSS framework. It provides ready-made classes for styling elements directly in HTML. In this project, Tailwind CSS is used only in a basic way for colors, padding, margin, flexbox, grid, and responsive layout. It saves time and keeps the design simple.

---

## Q7. What is localStorage?

localStorage is a browser storage feature. It stores data in the user's browser even after page refresh. In this project, localStorage stores the username after login. This makes the website behave like it has a simple login session.

---

## Q8. Is localStorage secure for real login systems?

No, localStorage is not secure for real authentication systems. In real projects, login should be handled using a backend server, database, encrypted passwords, and secure sessions or tokens. In this project, localStorage is used only for learning and demonstration.

---

## Q9. How does the login system work?

The login system checks whether the username and password fields are filled. It also checks that the password has at least 4 characters. If the data is valid, the username is stored in localStorage and the user is redirected to the home page.

---

## Q10. Can the user enter any username and password?

Yes. Since this project does not have a backend or database, the user can enter any username and any password with at least 4 characters. The purpose is only to demonstrate frontend validation and login flow.

---

## Q11. How does the website remember the username?

The website stores the username in localStorage using the key `railwayUser`. When the home page or profile page opens, JavaScript reads this value and displays it on the page.

---

## Q12. What happens when the user logs out?

When the user clicks the Logout button, JavaScript removes the username from localStorage. After that, the user is redirected to the login page. This ends the simple frontend session.

---

## Q13. What is the use of `event.preventDefault()`?

`event.preventDefault()` stops the default form behavior. Normally, when a form is submitted, the page refreshes. In this project, we do not want the page to refresh because JavaScript needs to validate the input first. So `event.preventDefault()` is used.

---

## Q14. What is dummy train data?

Dummy train data means sample train information written manually in JavaScript. It is not real-time data. It is used only to show how train cards will look on the website.

---

## Q15. Where is the train data stored?

The train data is stored in the `script.js` file as an array of objects. Each object represents one train and contains details like train name, train number, route, timing, and price.

---

## Q16. How are train cards displayed?

Train cards are displayed using JavaScript. The `displayTrains()` function loops through the train array. For every train, it creates a card using a `div` element and adds train details inside it. Then the card is added to the train list section on the home page.

---

## Q17. Why did you create train cards using JavaScript instead of writing them directly in HTML?

Creating train cards using JavaScript is better because the data is stored in one place. If we want to add or remove trains, we only need to change the train array. This avoids repeating the same HTML code many times.

---

## Q18. What is an array in JavaScript?

An array is a collection of multiple values stored in one variable. In this project, the `trains` array stores multiple train objects. JavaScript loops through this array to display train cards.

---

## Q19. What is an object in JavaScript?

An object is a collection of key-value pairs. In this project, each train is an object. For example, a train object has keys like name, number, route, time, and price.

---

## Q20. What is DOM?

DOM stands for Document Object Model. It represents the HTML page as objects that JavaScript can access and change. In this project, JavaScript uses DOM methods like `getElementById()`, `createElement()`, and `appendChild()` to update the webpage.

---

## Q21. What is `getElementById()`?

`getElementById()` is a JavaScript method used to select an HTML element by its id. In this project, it is used to get input values, show messages, display username, and access the train list section.

---

## Q22. What is `innerHTML`?

`innerHTML` is used to add or change HTML content inside an element. In this project, it is used to add train details inside each train card.

---

## Q23. What is `appendChild()`?

`appendChild()` adds a new element inside another element. In this project, after creating a train card, JavaScript uses `appendChild()` to add it inside the train list section.

---

## Q24. What is form validation?

Form validation means checking user input before accepting it. In this project, validation checks that username, password, From station, To station, and date fields are not empty.

---

## Q25. Why is validation important?

Validation is important because it prevents users from submitting incomplete or incorrect data. It improves user experience and avoids errors in the application.

---

## Q26. Is this website mobile responsive?

Yes, the website is mobile responsive in a simple way. Tailwind grid classes and CSS media queries are used so that sections adjust properly on smaller screens. The design is simple and does not use complex responsiveness.

---

## Q27. Why is there no database in this project?

There is no database because this is a beginner-level frontend project. The main focus is on HTML, CSS, and JavaScript. Real database work can be added later if the project is extended.

---

## Q28. Why is there no backend in this project?

There is no backend because the project is made only to demonstrate frontend logic. Backend is required for real login, ticket booking, train availability, and payment. Since this is a small college project, dummy data and localStorage are enough.

---

## Q29. What happens if someone directly opens home.html without login?

If someone opens `home.html` directly without login, JavaScript checks localStorage. If the username is not found, the user is redirected to `index.html`. This gives basic page protection.

---

## Q30. What does the Book Now button do?

The Book Now button is added only for design purpose. It does not book a ticket because there is no backend or booking system. It can be connected to a booking page in future improvements.

---

## Q31. What is the role of the profile page?

The profile page shows dummy user information. It displays the username from localStorage and other fixed details like email, phone, and city. It shows how a user profile page can look in a railway booking website.

---

## Q32. Does the Edit Profile button work?

The Edit Profile button does not edit real data. It only shows a message because there is no backend or database. It is included to show where edit profile functionality can be added later.

---

## Q33. Why did you keep the design simple?

The design is kept simple because the project is made for a beginner-level college submission. The goal is to make it look realistic for a student project made in a few days. Advanced effects like animations, 3D design, dark theme, and glassmorphism are avoided.

---

## Q34. How is navigation handled?

Navigation is handled using normal anchor tags. The home link opens `home.html`, the profile link opens `profile.html`, and the logout button calls the `logoutUser()` JavaScript function.

---

## Q35. What is CDN?

CDN stands for Content Delivery Network. In this project, Tailwind CSS is added through CDN using a script link. This means Tailwind is loaded from the internet without installing it locally.

---

## Q36. Can this website work without internet?

The basic HTML, CSS, and JavaScript files can work offline. But Tailwind CSS is loaded using CDN, so Tailwind classes need internet. If Tailwind is downloaded locally, then the full website can work offline.

---

## Q37. What are semantic tags used in this project?

Semantic tags are HTML tags that clearly describe their purpose. In this project, tags like `nav`, `main`, `section`, and `footer` are used. They make the HTML structure more readable and meaningful.

---

## Q38. What is responsive design?

Responsive design means the website adjusts according to different screen sizes. In this project, the layout changes from multiple columns on desktop to single column on mobile screens.

---

## Q39. What is the difference between CSS and Tailwind CSS?

CSS is the normal styling language used to design web pages. Tailwind CSS is a CSS framework that provides ready-made utility classes. In this project, normal CSS is used for custom styling and Tailwind is used for basic layout and spacing.

---

## Q40. How can this project be improved in future?

This project can be improved by adding a backend, real database, real login system, train availability system, booking form, payment page, booking history, admin panel, and ticket download feature.

---

## 15. Short Presentation Explanation

This is a simple railway ticket booking website made using HTML, CSS, JavaScript, and basic Tailwind CSS. It has three main pages: login, home, and profile.

The login page takes username and password and validates them using JavaScript. After successful login, the username is stored in localStorage and the user is redirected to the home page.

The home page shows a welcome message with the username, a train search form, popular routes, available train cards, and footer. The train cards are displayed using dummy train data from JavaScript.

The profile page shows dummy user details and gets the profile name from the logged-in username. Logout removes the username from localStorage and sends the user back to login page.

This project does not use backend or database because it is a frontend-only beginner project. It is made to demonstrate basic web development concepts in a simple and understandable way.
