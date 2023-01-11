# rank-compare

compare rank algorithm

---

## constant

### Rank Levels

-   (0, 1000] rookie
-   (1000, 1500] bronze
-   (1500,2000] silver
-   (2000,2500] gold
-   (2500, 3000] platium
-   (3000,3500] diamond
-   (3500, 4000] master
-   (4000,inf) grandmaster

### Season Mode

-   Season 0: when season begin, every player's rankPoints are 500
-   Season 1: when season begin, every player's rankPoints are talent - 1000, the minimum is 0

## Object

### Player Class

`talent`: talent score, readonly

`rankPoints`: current score

`recordX`: Results of the first X matches

`record`: Results of all matches

`winRateX`: win rate of the first X matches

`winRate`: win rate of all matches

`observed`: the player is observed or not
