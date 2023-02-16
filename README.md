# BSE NBA PROJECT
Basketball data interaction and visualization tool

- [BSE NBA PROJECT](#bse-nba-project)
    - [INTRODUCTION](#introduction)
    - [HOW TO USE](#how-to-use)
      - [Player Search](#player-search)
      - [Player Statistics](#player-statistics)
      - [Game Details](#game-details)
    - [BUILT WITH](#built-with)
    - [FUTURE TODOs](#future-todos)
    - [SETUP](#setup)

### INTRODUCTION

### HOW TO USE
#### Player Search
Search for a player by typing his last name, for example:

- `doncic` will return `Luka Doncic`
- `don` will return all players with a last name that contains `don`

![screen-find-player-name.png](screenshots/screen-find-player-name.png)

#### Player Statistics
Player stats are displayed per game, from most recent to oldest. All stats can be sorted so that you can easily compare and find lows and highs for each.

[![sort-player-stats.mp4](screenshots/sort-player-stats.mp4)](screenshots/sort-player-stats.mp4)

#### Game Details
Clicking on rows in the player stats table will display additional information on the game, including date, teams, scores and line scores:

![toggle-game-details.png](screenshots/toggle-game-details.png)

### BUILT WITH

- vitejs, reactjs, typescript, javascript, css, html

### FUTURE TODOs

Additional features to work on if there was more time or resources

- Backend:
    - building a full backend to allow auth, data management with databases, fetch data from APIs and store & manipulate data
- Authentication:
    - add auth to allow user’s to add comments, save/share data, collaborate
- UI / display:
    - improve table horizontal scroll without compressing data on smaller screens
- Site Reliability:
    - further testing for Q&A
    - elegantly handle API / data fetch errors
        - RapidApi `NBA-API` has missing data
        *example*: no 2022 team and season data for Isaiah Thomas
-

### SETUP

In the project directory, run:

- `npm install`
- `npm run dev`