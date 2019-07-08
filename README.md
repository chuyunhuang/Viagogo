## Yungogo for Elton John

A web page that displays concert information for Elton John!
<p align="center">
![](https://media.giphy.com/media/lnUBJy2EoYNgs0pBKu/giphy.gif)
</p>

## Installation

Try this app in the development mode by cloning this repo, cd into the correct folder and run:

```
npm install

npm start
```

## Tech Stack

JavaScript, HTML, CSS, React

## Design Decisions

To ensure a better user experience, I think it's important to keep the design as minimal as possible. More often, the users are overloaded by all the information presented to them, and that makes it harder to make decisions. 

To encourage ticket purchases, I think it's best to filter out all the noises for the users upon visiting the page thus the landing page only displays location filter for users to quickly get the information that's most important to them! 

With the users in mind, I asked myself what are the deciding factors for me when going to events - I love a  good deal so the next feature I implemented was the 'Best Deals' page where the user can see and select from a list of prices that are already sorted from lowest to highest. 

Considering that some users might still want to see the list of every single event, I added the 'All Shows' page. 

## Code Implementation
I like to break out my componenets and containers based on the re-usability and their states. For this project, I have the header, home, bestDeals, Allshows, and singleEventCard as functional components to render the data. The containers I have are the locationFilter and the priceFilter where the states do matter and need more logic for the sorting/filtering functions. 
