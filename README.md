## Elton John GoGoTour

A web page that displays concert information for Elton John GoGoTour!
![](https://media.giphy.com/media/UVqqg9hvcOJOQmxD1i/giphy.gif)

## Installation

Try this app in the development mode by cloning this repo, cd into the correct folder and run:

```
npm install

npm start
```

## Tech Stack

JavaScript, HTML, CSS, React

## Code Implementation

##### Part I

The AllShows page has a list of all events listed out along with the most important details including date, time, city, location, ticket price, and a 'Get Ticket!' button.

##### Part II

The location page has a dropdown list of all locations for the user to select, and upon clicking on the city name, the matching events are displayed.

##### Part III

Although a location filter is helpful, the user might put other deciding factors before the location. For the people who like a good deal, the price may be the most important deciding factor and they might want to immediately see what the price range is and go from there, see Best Deals page for this implementation. For a busy person, date and time may be the most important factor, and instead of having the user manually select the date/time desired, it would be really cool if there's a way to connect the user'personal calendar and we match the events that he/she is able to attend.

## Design Decision

To ensure a better user experience, I think it's important to keep the design as minimal as possible. More often, the users are overloaded by all the information presented to them, and that makes it harder to make decisions. To encourage ticket purchases, I think it's best to filter out all the noises for the users upon visiting the page.

Coding wise, I like to break out my components and containers based on the re-usability and their states. For this project, I have the header, home page, bestDeals page, Allshows page, and the singleEventCard as functional components to simply render the data. For containers, I have the locationFilter and the priceFilter where the states do matter and there are more logic for the data to render properly based on user's choice.
