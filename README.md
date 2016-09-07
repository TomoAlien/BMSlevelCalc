# BMSlevelCalc
TomoAlien's BMS Level Calculator

It's a small script written in JavaScript that allows for easy calculation of difficulty level for BMS songs based on 6 parameters:
  -Amount of Standard Notes
  -Amount of Scratch Notes
  -Song Length (in seconds)
  -Weight for Standard Note
  -Weight for Scratch Note
  -Overall difficulty meter multiplier
  
Weights change how much does the type of note affect the result.

Generalized Function:
`BMSlevelCalc(notes,noteWeight,scratch,scratchWeight,length,multiplier)`

Optimum Five-Key chart rating function:
`FiveLevelCalc(notes,scratch,length)`

The formula that calculates the score:
``(notes*noteWeight+scratch*scratchWeight)/length*multiplier```

Obviously, this being an automated system, it's more of a suggestion rather than a replacement for rating a song with own judgement.

Feel free to copy this formula and use it for yourself. Credit is appreciated, but not required! :)
