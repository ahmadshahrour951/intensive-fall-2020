# Socialorm

This is a website that allows students to meet and socialize within their dormatries. Think of it more of a mashup of Tinder, Discord, and Facebook but for student dorms! Students would have to enter personal information like their name, dorm room and the top things they like in a submit type format in the profile page. Then, they'll be able to see that same information from other students in the dormatories. This helps instigate conversations and help build a community! This web app will only be a demo of the idea.

## How to use this repo

This repo has one entry file called `index.html`. Either fork or download this repo. Then open the file on finder and double click the file so that it can open in the browser and viola!

Otherwise download the liver server extention for VSCode and follow the instructions to use index.html.

## How each screen should look like

### Home Page

This is a page to see other users in each floor of the residence
![Image of Home Page](

https://drive.google.com/file/d/14dusZ56e2nGu94ntofJnxIEYHJZ6fFEo/view?usp=sharing
)

### Profile Page

This is a page for the user to add biography information
![Image of Profile Page](https://drive.google.com/file/d/1fhoU1gHZhsqpiZZkRr0yMqgBgrKHT6kO/view?usp=sharing)

## The Code Overview

Generally I'm using a technique that grabs, manipulates, and injects html elements using javascript! You wont be finding html files here except for `index.html` which is the root file where all the magic starts.

Since this is a demo and it does not leverage backend support like data storage or manipulation, therefore it will act as a dummy. With dummy website you require dummy data! So you'll find a data structure created in the `./data` directory. I use javascript to grab that data and grab the `#app` element from index.html and I inject the wanted required html code. You'll see nested `for `loops, dont worry! I'm just looping over the data object to extract card information, when there is backend support you won't find those nasty nested inefficient for loops.

I tried my best to modularlize the code as much as possible but alas time can never be in the developers side. Up until now I split each screen page (home and profile) with its individual logic and styling. However, this can be futher modularlized by creating a `components` directory that helps reduce rewriting code like the card elements.

The directories are split as follows:

- ./index.html (where everything starts)
- ./css (where all the styling happens)
  - ./css/home.css
  - ./css/profile.css
  - ./css/index.css
- ./js (where all the logic happens)
  - ./js/home.js
  - ./js/profile.js
  - ./js/index.js
- ./images (all the nice pictures I use locally)
- ./data (dummy data)
  - ./data/home.js
  - ./data/profile.js

## Info

For more information please open an issue in github or shoot me an email at ahmed.shahrour@students.makeschool.com.

Here is a presentation of the idea if you'd like more information:
https://docs.google.com/presentation/d/1WErgRsT_JgZY33QhYhOn8SJZsag1NqSlc5Ucteax9K4/edit#slide=id.ga40e9de59d_5_4
