/* 
1. The pivot point was either 14 or 17 - all values left of 14 are less than it and last swap could ahve put 17 in the middle, 
 or it could have just been 17 from the start. 

2. Last item as pivot => 1st 10 3 9 12 19 14 17 16 13 15
                         2nd left -> 10 3 9 12   ||   14 13 15 16 19 17
                                    **  [10, 3, 9, 12, 14, 13, 15, 16, 19, 17]

   First it as pivot => 1st 19, 17, 16, 15, 14, 13, 10 3, 9, 12
                        2nd 19 17 16 15 14   ||   13, 10, 3, 9, 12
*/