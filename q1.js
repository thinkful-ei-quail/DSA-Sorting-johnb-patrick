// UNDERSTANDING MERGE SORT //
/* 
21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
      
                         ||
                        \  /
                         \/
21, 1, 26, 45, 29, 28, 2, 9     16, 49, 39, 27, 43, 34, 46, 40 
                         ||
                        \  /
                         \/   
21, 1, 26, 45    29, 28, 2, 9      16, 49, 39,27   43, 34, 46, 40
                         ||
                        \  /
                         \/   
                         
21, 1    26, 45    29,28    2, 9    16, 49    39, 27,    43, 34    46, 40 
                         ||
                        \  /
                         \/   
                         
1, 21, 26, 45, 28, 29, 2, 9 

After 3 recursive calls we have [21] and [1]

After 16 calls our list has been fully sorted

first 2 to be merged - [21] [1]

7th merge is [2, 9] and everything else on the left
*/