# BMSlevelCalc
TomoAlien's BMS Level Calculator

It's a small script written in JavaScript that allows for easy calculation of difficulty level for BMS songs, using only 3 parameters:
-Amount of normal notes
-Amount of scratches
-Length of the song in seconds

The formula that calculates the score:

```round(((([amount of normal notes]*2)+([amount of scratches]*3)/3)/([song length in seconds]))*(2/3))```

Obviously, this being an automated system, it's more of a suggestion rather than a replacement for rating a song with own judgement.
It's based off 5-Key 9-tier rating system, but it doesn't have an upper limit.

Check out CalcPage.html if you want to try out the script yourself!

Feel free to copy this formula and use it for yourself. Credit is appreciated, but not required! :)
