## Project Title
- Explorer
## Project Description
> General App Idea/Purpose<br />
- Explorer is a blog like application that helps users store their travel memories and discover new places to travel. 
> What technology stack(s) are you using for your frontend / backend?<br />
- Front End:
   - React, Material UI, JavaScript, HTML/CSS
- Back End:
   -   Express, Mongoose, MongoDB Atlas, NodeJS

> Models including field names and their datatypes<br />
- Posts Model:
   - Title = String
   - Country = String
   - Description = String
   - Images = Array
   - Date = String
   - Favorite = Boolean
  
- User Model:
   - Name = String, required
   - Email = String, required
   - Password = String, required

- Entity Relationship Diagram (ERD)
![ERD Models](https://media.git.generalassemb.ly/user/43459/files/7cc0d9fc-b589-4cd0-9466-48ee14acfe4e)


- Routes:
   - /register = Register a User
   - /login = Login User
   - /logout = Logout User
   - /explorer = Show all Posts (GET)
   - /explorer/new = Create new post (POST)
   - /explorer/:id = Show details of one post (GET)
   - /explorer/:id = Edit a post (PUT)
   - /explorer/:id = Delete a post (DELETE)
  
## Wireframes
> Wireframes with basic page layouts<br />
![Screen Shot 2022-11-01 at 4 26 19 PM](https://media.git.generalassemb.ly/user/43459/files/3824a8e6-005e-47f3-8683-db8357f712af)
![Screen Shot 2022-11-01 at 4 30 14 PM](https://media.git.generalassemb.ly/user/43459/files/975739ec-dacf-4d79-a801-568ea91d9236)
![Screen Shot 2022-11-01 at 7 38 56 PM](https://media.git.generalassemb.ly/user/43459/files/36fa913a-dfe8-486f-9e14-a6c90b340b1b)
![Screen Shot 2022-11-01 at 7 39 17 PM](https://media.git.generalassemb.ly/user/43459/files/68ad6544-7907-4d3a-939d-faa39b4d3b75)



## Feasibility Study
> If you're using an external API or scraping a website, make sure you can get that data. If you're using a new language, framework, or tool, go through it's getting started tutorial. We *will* ask to see your results. If you are planning to use an API, please show an example of a successful fetch below to the API you wish to use in your project.

## User Stories
- As a User, I want to be able to register an account and sign-in with credentials.
- As a User, I want to be able to see only the blog posts that I created.
- As a User, I want to be able to create new blog posts.
- As a User, I want to be able to edit and update blog posts.
- As a User, I want to be able to log-out.

### MVP Goals
- Full CRUD functionality.
-  Authentication for one user to access all of their own posts.

### Stretch Goals
- Use a travel API for the User to get ideas and explore different places.
- A page that renders all the User's photos like a photo album.
- Implement Mapbox feature, so User can pin places that they have visited.