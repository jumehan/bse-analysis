# BSE NBA PROJECT

Basketball data interaction and visualization web application
- [Live Demo](https://nba-analysis.onrender.com/players/265)

---

- [BSE NBA PROJECT](#bse-nba-project)
    - [INTRODUCTION](#introduction)
    - [WALKTHROUGH](#walkthrough)
      - [Player Search](#player-search)
      - [Player Statistics (CHARTS)](#player-statistics-charts)
      - [Player Statistics (TABLE)](#player-statistics-table)
      - [Game Details](#game-details)
    - [DESIGN DOCS](#design-docs)
      - [Tech Stack:](#tech-stack)
      - [Data:](#data)
    - [FUTURE TODOs](#future-todos)
      - [Features:](#features)
      - [Data:](#data-1)
      - [Backend:](#backend)
      - [Authentication:](#authentication)
      - [UI / display:](#ui--display)
      - [UX:](#ux)
      - [Performance:](#performance)
      - [Site Reliability:](#site-reliability)
    - [SETUP](#setup)

---

### INTRODUCTION

This demo project features a NBA relevant application that includes an interface that displays relevant stats for a given player during the 2022-2023 season.
All stats can be sorted by increasing or decreasing order according to preference.
Some game details are displayed for each stats.

For a given player we can now easily find games where a performance metric was at its highest or lowest and use it as a starting point for further analysis.

### WALKTHROUGH

#### Player Search
Search for a player by typing his last name, for example:

- `doncic` will return `Luka Doncic`
- `don` will return all players with a last name that contains `don`

![screen-find-player-name.png](screenshots/screen-find-player-name.png)

#### Player Statistics (CHARTS)
Some key player statistics are available in charts for better visualization.
Hover on a bar (right chart) or on a dot (left chart) provides a list of stats for that game.

![stats-chart-hover.png](screenshots/stats-chart-hover.png)

#### Player Statistics (TABLE)
Player stats are displayed per game, from most recent to oldest. All stats can be sorted so that you can easily compare and find lows and highs for each.

Stats are displayed in table format for better visualization and interaction.
All results are paginated for improved readability.

![player-detailed-stats.png](screenshots/player-detailed-stats.png)

#### Game Details
Clicking on rows in the player stats table will display additional information on the game, including date, teams, scores and line scores:

![toggle-game-details.png](screenshots/toggle-game-details.png)

### DESIGN DOCS

#### Tech Stack:
This project was built on `vitejs` using the `react-ts` framework.
I wanted to build a visual, highlt interactive frontend showcasing using `reactjs`, `JavaScrip` and `TypeScript`.

#### Data:
As a casual basketball fan, and by no means a sports analytics expert, it was not initially obvious to me what data and stats would matter most to a decision-maker in the NBA. I did research on YouTube, looked at online resources (NBA, ESPN, FiveThirtyEight, Basketball Reference, etc), interviewed a masters in sports analytics who had worked at MSG. In the end, I felt that a tool that would be useful would show a wide range of statistics and allow easy sorting of the data.

I decided to forego building a backend because of project scope and time limits and instead, optend to fetch NBA-related data from `RapidAPI`'s `NBA-API`* with `axios`.

Some data is also saved locally in `JSON`, from `NBAData.net` to bypass CORS same-origin-policy issues. The latter is only used to fetch players id to get their respective profile image source url.

For the purposes of this project, data is from the "2022-2023" NBA season. However, the code could be easily modified to allow multi-season data for historical comparisons.

*Please allow some time between calls. This project runs on the free subscription tier and is limited on throttling and number of calls/minutes & calls/day

---

### FUTURE TODOs

Additional features to work on if there was more time or resources.
Includes ideas to improve this project and issues regarding performance, bugs, etc.

#### Features:
- for the scope of the demo, the season was set to "2022" for the 22-23 NBA season
  - allow user to select between season for comparison purposes
- further features to allow more in-depth analysis in this player analysis model:
  - allow users to compare different players against each other
  - allow users to compare player vs team
  - allow users to compare player vs other similar players

#### Data:
- a significant blocker for this project was data access and lack of knowledge of existing tools in the world of basketball, as rapidApi has a free tier fo data exploration that was use for the scope of this demo project, but that has significant drawbacks if used for professional competitive applications (cost, downtime, stale data, etc)
  - further research data sources
  - build web crawler for specific types of data
  - build a backend to access espn/nba/etc. data that is updated
  - collaborate with data analytics team to research pertinent data sources and assess data relevancy

#### Backend:
- build a full backend to allow auth, data management with databases, fetch data from APIs and store & manipulate data

#### Authentication:
- add auth to allow user’s to add comments, save/share data, collaborate

#### UI / display:
- improve chart visualization (zoom in and out)
- improve table horizontal scroll without compressing data on smaller screens

#### UX:
- it would be nice to display game details without having to manually expand
  - however, need to rethink table layout as it is already very dense (perhaps split table into smaller tables)
  - with the data RapidApi provides, no way to do this without making 40+ API calls to fetch each games
- add navigation items to the navbar
  - currently navbar displays teams but does not navigate anywhere
  - future versions could navigate to teams > players | team data & stats
  - allow users to add notes or to flag certain stats/games/players

#### Performance:
- code split and lazy loading to reduce load times
  - started lazy load in the routes
  - further destructure components to optimize performance

#### Site Reliability:
- further testing for Q&A
- elegantly handle API / data fetch errors
    - `RapidApi` `NBA-API` has missing data
    *example*: no team and season data for Isaiah Thomas

---

### SETUP
In the project directory, run:

- `npm install` to download dependencies
- `npm run dev` to run dev mode on your local server

Note: this project requires `.env` variables to run correctly
