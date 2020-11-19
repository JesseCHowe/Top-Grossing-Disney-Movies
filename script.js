const data = [
  {
    "movie_title": "Star Wars Ep. VII: The Force Awakens",
    "release_date": "12/18/2015",
    "studio": "Lucas",
    "total_gross": 936662225,
    "inflation_adjusted_gross": 936662225,
    "day_of_year": 352,
    "year": 2015
  },
  {
    "movie_title": "The Avengers",
    "release_date": "5/4/2012",
    "studio": "Marvel",
    "total_gross": 623279547,
    "inflation_adjusted_gross": 660081224,
    "day_of_year": 125,
    "year": 2012
  },
  {
    "movie_title": "Rogue One: A Star Wars Story",
    "release_date": "12/16/2016",
    "studio": "Lucas",
    "total_gross": 529483936,
    "inflation_adjusted_gross": 529483936,
    "day_of_year": 351,
    "year": 2016
  },
  {
    "movie_title": "Finding Dory",
    "release_date": "6/17/2016",
    "studio": "Pixar",
    "total_gross": 486295561,
    "inflation_adjusted_gross": 486295561,
    "day_of_year": 169,
    "year": 2016
  },
  {
    "movie_title": "Avengers: Age of Ultron",
    "release_date": "5/1/2015",
    "studio": "Marvel",
    "total_gross": 459005868,
    "inflation_adjusted_gross": 459005868,
    "day_of_year": 121,
    "year": 2015
  },
  {
    "movie_title": "Pirates of the Caribbean: Dead Man's Chest",
    "release_date": "7/7/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 423315812,
    "inflation_adjusted_gross": 544817142,
    "day_of_year": 188,
    "year": 2006
  },
  {
    "movie_title": "The Lion King",
    "release_date": "6/15/1994",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 422780140,
    "inflation_adjusted_gross": 761640898,
    "day_of_year": 166,
    "year": 1994
  },
  {
    "movie_title": "Toy Story 3",
    "release_date": "6/18/2010",
    "studio": "Pixar",
    "total_gross": 415004880,
    "inflation_adjusted_gross": 443408255,
    "day_of_year": 169,
    "year": 2010
  },
  {
    "movie_title": "Iron Man 3",
    "release_date": "5/3/2013",
    "studio": "Marvel",
    "total_gross": 408992272,
    "inflation_adjusted_gross": 424084233,
    "day_of_year": 123,
    "year": 2013
  },
  {
    "movie_title": "Captain America: Civil War",
    "release_date": "5/6/2016",
    "studio": "Marvel",
    "total_gross": 408084349,
    "inflation_adjusted_gross": 408084349,
    "day_of_year": 127,
    "year": 2016
  },
  {
    "movie_title": "Frozen",
    "release_date": "11/22/2013",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 400738009,
    "inflation_adjusted_gross": 414997174,
    "day_of_year": 326,
    "year": 2013
  },
  {
    "movie_title": "Finding Nemo",
    "release_date": "5/30/2003",
    "studio": "Pixar",
    "total_gross": 380529370,
    "inflation_adjusted_gross": 518148559,
    "day_of_year": 150,
    "year": 2003
  },
  {
    "movie_title": "Running Brave",
    "release_date": "11/4/1983",
    "studio": "",
    "total_gross": 1204595,
    "inflation_adjusted_gross": 3223725,
    "day_of_year": 308,
    "year": 1983
  },
  {
    "movie_title": "Inside Out",
    "release_date": "6/19/2015",
    "studio": "Pixar",
    "total_gross": 356461711,
    "inflation_adjusted_gross": 356461711,
    "day_of_year": 170,
    "year": 2015
  },
  {
    "movie_title": "Zootopia",
    "release_date": "3/4/2016",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 341268248,
    "inflation_adjusted_gross": 341268248,
    "day_of_year": 64,
    "year": 2016
  },
  {
    "movie_title": "Splash",
    "release_date": "3/9/1984",
    "studio": "",
    "total_gross": 62599495,
    "inflation_adjusted_gross": 157057661,
    "day_of_year": 69,
    "year": 1984
  },
  {
    "movie_title": "Guardians of the Galaxy",
    "release_date": "8/1/2014",
    "studio": "Marvel",
    "total_gross": 333172112,
    "inflation_adjusted_gross": 343771168,
    "day_of_year": 213,
    "year": 2014
  },
  {
    "movie_title": "Pirates of the Caribbean: At World's End",
    "release_date": "5/24/2007",
    "studio": "Walt Disney Productions",
    "total_gross": 309420425,
    "inflation_adjusted_gross": 379129960,
    "day_of_year": 144,
    "year": 2007
  },
  {
    "movie_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "release_date": "7/9/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 305411224,
    "inflation_adjusted_gross": 426967926,
    "day_of_year": 190,
    "year": 2003
  },
  {
    "movie_title": "Country",
    "release_date": "9/29/1984",
    "studio": "",
    "total_gross": 8400000,
    "inflation_adjusted_gross": 21075000,
    "day_of_year": 273,
    "year": 1984
  },
  {
    "movie_title": "Up",
    "release_date": "5/29/2009",
    "studio": "Pixar",
    "total_gross": 293004164,
    "inflation_adjusted_gross": 329336681,
    "day_of_year": 149,
    "year": 2009
  },
  {
    "movie_title": "The Chronicles of Narnia: The Lion, The Witch, and The Wardrobe",
    "release_date": "12/9/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 291710957,
    "inflation_adjusted_gross": 381557539,
    "day_of_year": 343,
    "year": 2005
  },
  {
    "movie_title": "Monsters, Inc.",
    "release_date": "11/2/2001",
    "studio": "Pixar",
    "total_gross": 289423425,
    "inflation_adjusted_gross": 416073179,
    "day_of_year": 306,
    "year": 2001
  },
  {
    "movie_title": "Monsters University",
    "release_date": "6/21/2013",
    "studio": "Pixar",
    "total_gross": 268488329,
    "inflation_adjusted_gross": 278395641,
    "day_of_year": 172,
    "year": 2013
  },
  {
    "movie_title": "The Incredibles",
    "release_date": "11/5/2004",
    "studio": "Pixar",
    "total_gross": 261441092,
    "inflation_adjusted_gross": 354488708,
    "day_of_year": 310,
    "year": 2004
  },
  {
    "movie_title": "Captain America: The Winter Soldier",
    "release_date": "4/4/2014",
    "studio": "Marvel",
    "total_gross": 259746958,
    "inflation_adjusted_gross": 268013076,
    "day_of_year": 94,
    "year": 2014
  },
  {
    "movie_title": "Moana",
    "release_date": "11/23/2016",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 246082029,
    "inflation_adjusted_gross": 246082029,
    "day_of_year": 328,
    "year": 2016
  },
  {
    "movie_title": "Toy Story 2",
    "release_date": "11/19/1999",
    "studio": "Pixar",
    "total_gross": 245852179,
    "inflation_adjusted_gross": 404450426,
    "day_of_year": 323,
    "year": 1999
  },
  {
    "movie_title": "Cars",
    "release_date": "6/9/2006",
    "studio": "Pixar",
    "total_gross": 244082982,
    "inflation_adjusted_gross": 314140384,
    "day_of_year": 160,
    "year": 2006
  },
  {
    "movie_title": "Baby: Secret of the Lost Legend",
    "release_date": "3/22/1985",
    "studio": "",
    "total_gross": 14276095,
    "inflation_adjusted_gross": 33900697,
    "day_of_year": 81,
    "year": 1985
  },
  {
    "movie_title": "Pirates of the Caribbean: On Stranger Tides",
    "release_date": "5/20/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 241063875,
    "inflation_adjusted_gross": 256263359,
    "day_of_year": 140,
    "year": 2011
  },
  {
    "movie_title": "Brave",
    "release_date": "6/22/2012",
    "studio": "Pixar",
    "total_gross": 237282182,
    "inflation_adjusted_gross": 251292441,
    "day_of_year": 174,
    "year": 2012
  },
  {
    "movie_title": "My Science Project",
    "release_date": "8/9/1985",
    "studio": "",
    "total_gross": 4100000,
    "inflation_adjusted_gross": 9736051,
    "day_of_year": 221,
    "year": 1985
  },
  {
    "movie_title": "Doctor Strange",
    "release_date": "11/4/2016",
    "studio": "Marvel",
    "total_gross": 232532923,
    "inflation_adjusted_gross": 232532923,
    "day_of_year": 309,
    "year": 2016
  },
  {
    "movie_title": "Down and Out in Beverly Hills",
    "release_date": "1/31/1986",
    "studio": "",
    "total_gross": 62134225,
    "inflation_adjusted_gross": 141183693,
    "day_of_year": 31,
    "year": 1986
  },
  {
    "movie_title": "WALL-E",
    "release_date": "6/27/2008",
    "studio": "Pixar",
    "total_gross": 223808164,
    "inflation_adjusted_gross": 262771918,
    "day_of_year": 179,
    "year": 2008
  },
  {
    "movie_title": "Big Hero 6",
    "release_date": "11/7/2014",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 222527828,
    "inflation_adjusted_gross": 229249222,
    "day_of_year": 311,
    "year": 2014
  },
  {
    "movie_title": "National Treasure 2: Book of Secrets",
    "release_date": "12/21/2007",
    "studio": "Walt Disney Productions",
    "total_gross": 219961501,
    "inflation_adjusted_gross": 267003525,
    "day_of_year": 355,
    "year": 2007
  },
  {
    "movie_title": "Beauty and the Beast",
    "release_date": "11/13/1991",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 218951625,
    "inflation_adjusted_gross": 363017667,
    "day_of_year": 317,
    "year": 1991
  },
  {
    "movie_title": "Aladdin",
    "release_date": "11/11/1992",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 217350219,
    "inflation_adjusted_gross": 441969178,
    "day_of_year": 316,
    "year": 1992
  },
  {
    "movie_title": "Ratatouille",
    "release_date": "6/29/2007",
    "studio": "Pixar",
    "total_gross": 206445654,
    "inflation_adjusted_gross": 252955933,
    "day_of_year": 180,
    "year": 2007
  },
  {
    "movie_title": "Thor: The Dark World",
    "release_date": "11/8/2013",
    "studio": "Marvel",
    "total_gross": 206362140,
    "inflation_adjusted_gross": 213962184,
    "day_of_year": 312,
    "year": 2013
  },
  {
    "movie_title": "Off Beat",
    "release_date": "4/11/1986",
    "studio": "",
    "total_gross": 4842778,
    "inflation_adjusted_gross": 11003932,
    "day_of_year": 101,
    "year": 1986
  },
  {
    "movie_title": "Ruthless People",
    "release_date": "6/27/1986",
    "studio": "",
    "total_gross": 71624879,
    "inflation_adjusted_gross": 162748712,
    "day_of_year": 178,
    "year": 1986
  },
  {
    "movie_title": "Tangled",
    "release_date": "11/24/2010",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 200821936,
    "inflation_adjusted_gross": 214388548,
    "day_of_year": 328,
    "year": 2010
  },
  {
    "movie_title": "Tough Guys",
    "release_date": "10/3/1986",
    "studio": "",
    "total_gross": 21458229,
    "inflation_adjusted_gross": 48758184,
    "day_of_year": 276,
    "year": 1986
  },
  {
    "movie_title": "Toy Story",
    "release_date": "11/22/1995",
    "studio": "Pixar",
    "total_gross": 191796233,
    "inflation_adjusted_gross": 370409631,
    "day_of_year": 326,
    "year": 1995
  },
  {
    "movie_title": "Cars 2",
    "release_date": "6/24/2011",
    "studio": "Pixar",
    "total_gross": 191450875,
    "inflation_adjusted_gross": 203522177,
    "day_of_year": 175,
    "year": 2011
  },
  {
    "movie_title": "Wreck-It Ralph",
    "release_date": "11/2/2012",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 189412677,
    "inflation_adjusted_gross": 200354959,
    "day_of_year": 307,
    "year": 2012
  },
  {
    "movie_title": "Snow White and the Seven Dwarfs",
    "release_date": "12/21/1937",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 184925485,
    "inflation_adjusted_gross": 5228953251,
    "day_of_year": 355,
    "year": 1937
  },
  {
    "movie_title": "The Color of Money",
    "release_date": "10/17/1986",
    "studio": "",
    "total_gross": 52293000,
    "inflation_adjusted_gross": 117957323,
    "day_of_year": 290,
    "year": 1986
  },
  {
    "movie_title": "Ant-Man",
    "release_date": "7/17/2015",
    "studio": "Marvel",
    "total_gross": 180202163,
    "inflation_adjusted_gross": 180202163,
    "day_of_year": 198,
    "year": 2015
  },
  {
    "movie_title": "Outrageous Fortune",
    "release_date": "1/30/1987",
    "studio": "",
    "total_gross": 52864741,
    "inflation_adjusted_gross": 113976921,
    "day_of_year": 30,
    "year": 1987
  },
  {
    "movie_title": "National Treasure",
    "release_date": "11/19/2004",
    "studio": "Walt Disney Productions",
    "total_gross": 173005002,
    "inflation_adjusted_gross": 234069353,
    "day_of_year": 324,
    "year": 2004
  },
  {
    "movie_title": "Tron: Legacy",
    "release_date": "12/17/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 172062763,
    "inflation_adjusted_gross": 183619259,
    "day_of_year": 351,
    "year": 2010
  },
  {
    "movie_title": "Tarzan",
    "release_date": "6/16/1999",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 171091819,
    "inflation_adjusted_gross": 283900254,
    "day_of_year": 167,
    "year": 1999
  },
  {
    "movie_title": "Tin Men",
    "release_date": "3/6/1987",
    "studio": "",
    "total_gross": 25411386,
    "inflation_adjusted_gross": 54787202,
    "day_of_year": 65,
    "year": 1987
  },
  {
    "movie_title": "Ernest Goes to Camp",
    "release_date": "5/22/1987",
    "studio": "",
    "total_gross": 23509382,
    "inflation_adjusted_gross": 50686462,
    "day_of_year": 142,
    "year": 1987
  },
  {
    "movie_title": "Adventures in Babysitting",
    "release_date": "7/3/1987",
    "studio": "",
    "total_gross": 33790923,
    "inflation_adjusted_gross": 72853569,
    "day_of_year": 184,
    "year": 1987
  },
  {
    "movie_title": "Stakeout",
    "release_date": "8/5/1987",
    "studio": "",
    "total_gross": 65673233,
    "inflation_adjusted_gross": 141592160,
    "day_of_year": 217,
    "year": 1987
  },
  {
    "movie_title": "A Bug's Life",
    "release_date": "11/20/1998",
    "studio": "Pixar",
    "total_gross": 162798565,
    "inflation_adjusted_gross": 288981698,
    "day_of_year": 324,
    "year": 1998
  },
  {
    "movie_title": "Can't Buy Me Love",
    "release_date": "8/14/1987",
    "studio": "",
    "total_gross": 31623833,
    "inflation_adjusted_gross": 68181300,
    "day_of_year": 226,
    "year": 1987
  },
  {
    "movie_title": "Who Framed Roger Rabbit?",
    "release_date": "6/22/1988",
    "studio": "Amblin Entertainment",
    "total_gross": 154112492,
    "inflation_adjusted_gross": 316250084,
    "day_of_year": 174,
    "year": 1988
  },
  {
    "movie_title": "101 Dalmatians",
    "release_date": "1/25/1961",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 153000000,
    "inflation_adjusted_gross": 1362870985,
    "day_of_year": 25,
    "year": 1961
  },
  {
    "movie_title": "Lilo & Stitch",
    "release_date": "6/21/2002",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 145771527,
    "inflation_adjusted_gross": 211506702,
    "day_of_year": 172,
    "year": 2002
  },
  {
    "movie_title": "The Santa Clause",
    "release_date": "11/11/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 144833357,
    "inflation_adjusted_gross": 298369717,
    "day_of_year": 315,
    "year": 1994
  },
  {
    "movie_title": "The Jungle Book",
    "release_date": "10/18/1967",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 141843000,
    "inflation_adjusted_gross": 789612346,
    "day_of_year": 291,
    "year": 1967
  },
  {
    "movie_title": "The Chronicles of Narnia: Prince Caspian",
    "release_date": "5/16/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 141621490,
    "inflation_adjusted_gross": 166277038,
    "day_of_year": 137,
    "year": 2008
  },
  {
    "movie_title": "Pocahontas",
    "release_date": "6/10/1995",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 141579773,
    "inflation_adjusted_gross": 274370957,
    "day_of_year": 161,
    "year": 1995
  },
  {
    "movie_title": "Hello Again",
    "release_date": "11/6/1987",
    "studio": "",
    "total_gross": 20419446,
    "inflation_adjusted_gross": 44024529,
    "day_of_year": 310,
    "year": 1987
  },
  {
    "movie_title": "The Santa Clause 2",
    "release_date": "11/1/2002",
    "studio": "Walt Disney Productions",
    "total_gross": 139225854,
    "inflation_adjusted_gross": 201959095,
    "day_of_year": 305,
    "year": 2002
  },
  {
    "movie_title": "3 Men and a Baby",
    "release_date": "11/25/1987",
    "studio": "",
    "total_gross": 167780960,
    "inflation_adjusted_gross": 353334607,
    "day_of_year": 329,
    "year": 1987
  },
  {
    "movie_title": "Dinosaur",
    "release_date": "5/19/2000",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 137748063,
    "inflation_adjusted_gross": 215438985,
    "day_of_year": 140,
    "year": 2000
  },
  {
    "movie_title": "Good Morning Vietnam",
    "release_date": "12/23/1987",
    "studio": "",
    "total_gross": 123922370,
    "inflation_adjusted_gross": 254414837,
    "day_of_year": 357,
    "year": 1987
  },
  {
    "movie_title": "101 Dalmatians",
    "release_date": "11/27/1996",
    "studio": "Walt Disney Productions",
    "total_gross": 136189294,
    "inflation_adjusted_gross": 258728898,
    "day_of_year": 332,
    "year": 1996
  },
  {
    "movie_title": "Chicken Little",
    "release_date": "11/4/2005",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 135386665,
    "inflation_adjusted_gross": 177954661,
    "day_of_year": 308,
    "year": 2005
  },
  {
    "movie_title": "Shoot to Kill",
    "release_date": "2/12/1988",
    "studio": "",
    "total_gross": 29300000,
    "inflation_adjusted_gross": 60097074,
    "day_of_year": 43,
    "year": 1988
  },
  {
    "movie_title": "D.O.A.",
    "release_date": "3/18/1988",
    "studio": "",
    "total_gross": 12706478,
    "inflation_adjusted_gross": 26062188,
    "day_of_year": 78,
    "year": 1988
  },
  {
    "movie_title": "Honey, I Shrunk the Kids",
    "release_date": "6/23/1989",
    "studio": "Walt Disney Productions",
    "total_gross": 130724172,
    "inflation_adjusted_gross": 276191669,
    "day_of_year": 174,
    "year": 1989
  },
  {
    "movie_title": "Big Business",
    "release_date": "6/10/1988",
    "studio": "",
    "total_gross": 40150487,
    "inflation_adjusted_gross": 82352451,
    "day_of_year": 162,
    "year": 1988
  },
  {
    "movie_title": "Cocktail",
    "release_date": "7/29/1988",
    "studio": "",
    "total_gross": 78222753,
    "inflation_adjusted_gross": 160442289,
    "day_of_year": 211,
    "year": 1988
  },
  {
    "movie_title": "The Rescue",
    "release_date": "8/5/1988",
    "studio": "",
    "total_gross": 5855392,
    "inflation_adjusted_gross": 12009960,
    "day_of_year": 218,
    "year": 1988
  },
  {
    "movie_title": "Heartbreak Hotel",
    "release_date": "9/30/1988",
    "studio": "",
    "total_gross": 5509417,
    "inflation_adjusted_gross": 11300331,
    "day_of_year": 274,
    "year": 1988
  },
  {
    "movie_title": "The Good Dinosaur",
    "release_date": "11/25/2015",
    "studio": "Pixar",
    "total_gross": 123087120,
    "inflation_adjusted_gross": 123087120,
    "day_of_year": 329,
    "year": 2015
  },
  {
    "movie_title": "Mulan",
    "release_date": "6/19/1998",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 120620254,
    "inflation_adjusted_gross": 216807832,
    "day_of_year": 170,
    "year": 1998
  },
  {
    "movie_title": "The Good Mother",
    "release_date": "11/4/1988",
    "studio": "",
    "total_gross": 4764606,
    "inflation_adjusted_gross": 9772655,
    "day_of_year": 309,
    "year": 1988
  },
  {
    "movie_title": "Remember the Titans",
    "release_date": "9/29/2000",
    "studio": "Walt Disney Productions",
    "total_gross": 115654751,
    "inflation_adjusted_gross": 180742479,
    "day_of_year": 273,
    "year": 2000
  },
  {
    "movie_title": "Ernest Saves Christmas",
    "release_date": "11/11/1988",
    "studio": "",
    "total_gross": 28202109,
    "inflation_adjusted_gross": 57845202,
    "day_of_year": 316,
    "year": 1988
  },
  {
    "movie_title": "Bolt",
    "release_date": "11/21/2008",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 114053759,
    "inflation_adjusted_gross": 133702498,
    "day_of_year": 326,
    "year": 2008
  },
  {
    "movie_title": "The Pacifier",
    "release_date": "3/4/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 113006880,
    "inflation_adjusted_gross": 148619029,
    "day_of_year": 63,
    "year": 2005
  },
  {
    "movie_title": "Beaches",
    "release_date": "12/21/1988",
    "studio": "",
    "total_gross": 57041866,
    "inflation_adjusted_gross": 120381757,
    "day_of_year": 356,
    "year": 1988
  },
  {
    "movie_title": "The Little Mermaid",
    "release_date": "11/15/1989",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 111543479,
    "inflation_adjusted_gross": 223726012,
    "day_of_year": 319,
    "year": 1989
  },
  {
    "movie_title": "Freaky Friday",
    "release_date": "8/6/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 110222438,
    "inflation_adjusted_gross": 154090360,
    "day_of_year": 218,
    "year": 2003
  },
  {
    "movie_title": "Three Fugitives",
    "release_date": "1/27/1989",
    "studio": "",
    "total_gross": 40590000,
    "inflation_adjusted_gross": 85757817,
    "day_of_year": 27,
    "year": 1989
  },
  {
    "movie_title": "The Princess Diaries",
    "release_date": "8/3/2001",
    "studio": "Walt Disney Productions",
    "total_gross": 108244774,
    "inflation_adjusted_gross": 161218928,
    "day_of_year": 215,
    "year": 2001
  },
  {
    "movie_title": "George Of The Jungle",
    "release_date": "7/16/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 105263257,
    "inflation_adjusted_gross": 193326632,
    "day_of_year": 197,
    "year": 1997
  },
  {
    "movie_title": "New York Stories",
    "release_date": "3/1/1989",
    "studio": "",
    "total_gross": 10763469,
    "inflation_adjusted_gross": 22740861,
    "day_of_year": 60,
    "year": 1989
  },
  {
    "movie_title": "The Princess and the Frog",
    "release_date": "11/25/2009",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 104400899,
    "inflation_adjusted_gross": 116316457,
    "day_of_year": 329,
    "year": 2009
  },
  {
    "movie_title": "Disorganized Crime",
    "release_date": "4/14/1989",
    "studio": "",
    "total_gross": 7210149,
    "inflation_adjusted_gross": 15233465,
    "day_of_year": 104,
    "year": 1989
  },
  {
    "movie_title": "Dead Poets Society",
    "release_date": "6/2/1989",
    "studio": "",
    "total_gross": 95860116,
    "inflation_adjusted_gross": 202531517,
    "day_of_year": 153,
    "year": 1989
  },
  {
    "movie_title": "Turner & Hooch",
    "release_date": "7/28/1989",
    "studio": "",
    "total_gross": 71079915,
    "inflation_adjusted_gross": 150176361,
    "day_of_year": 209,
    "year": 1989
  },
  {
    "movie_title": "The Hunchback of Notre Dame",
    "release_date": "6/21/1996",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 100138851,
    "inflation_adjusted_gross": 190988799,
    "day_of_year": 173,
    "year": 1996
  },
  {
    "movie_title": "An Innocent Man",
    "release_date": "10/6/1989",
    "studio": "",
    "total_gross": 19397847,
    "inflation_adjusted_gross": 40983414,
    "day_of_year": 279,
    "year": 1989
  },
  {
    "movie_title": "Hercules",
    "release_date": "6/13/1997",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 99112101,
    "inflation_adjusted_gross": 182029412,
    "day_of_year": 164,
    "year": 1997
  },
  {
    "movie_title": "Meet the Robinsons",
    "release_date": "3/30/2007",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 97822171,
    "inflation_adjusted_gross": 119860589,
    "day_of_year": 89,
    "year": 2007
  },
  {
    "movie_title": "Inspector Gadget",
    "release_date": "7/23/1999",
    "studio": "Walt Disney Productions",
    "total_gross": 97387965,
    "inflation_adjusted_gross": 161610341,
    "day_of_year": 204,
    "year": 1999
  },
  {
    "movie_title": "Gross Anatomy",
    "release_date": "10/20/1989",
    "studio": "",
    "total_gross": 11346186,
    "inflation_adjusted_gross": 23972012,
    "day_of_year": 293,
    "year": 1989
  },
  {
    "movie_title": "Blaze",
    "release_date": "12/13/1989",
    "studio": "",
    "total_gross": 19049727,
    "inflation_adjusted_gross": 39884640,
    "day_of_year": 347,
    "year": 1989
  },
  {
    "movie_title": "Stella",
    "release_date": "2/2/1990",
    "studio": "",
    "total_gross": 20062347,
    "inflation_adjusted_gross": 40077147,
    "day_of_year": 33,
    "year": 1990
  },
  {
    "movie_title": "Where the Heart Is",
    "release_date": "2/23/1990",
    "studio": "",
    "total_gross": 1106475,
    "inflation_adjusted_gross": 2210321,
    "day_of_year": 54,
    "year": 1990
  },
  {
    "movie_title": "Lady and the Tramp",
    "release_date": "6/22/1955",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 93600000,
    "inflation_adjusted_gross": 1236035515,
    "day_of_year": 173,
    "year": 1955
  },
  {
    "movie_title": "Pretty Woman",
    "release_date": "3/23/1990",
    "studio": "",
    "total_gross": 178406268,
    "inflation_adjusted_gross": 356389765,
    "day_of_year": 82,
    "year": 1990
  },
  {
    "movie_title": "Flubber",
    "release_date": "11/26/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 92993801,
    "inflation_adjusted_gross": 170406423,
    "day_of_year": 330,
    "year": 1997
  },
  {
    "movie_title": "Ernest Goes to Jail",
    "release_date": "4/6/1990",
    "studio": "",
    "total_gross": 25029569,
    "inflation_adjusted_gross": 49999822,
    "day_of_year": 96,
    "year": 1990
  },
  {
    "movie_title": "Spaced Invaders",
    "release_date": "4/27/1990",
    "studio": "",
    "total_gross": 15000000,
    "inflation_adjusted_gross": 29964452,
    "day_of_year": 117,
    "year": 1990
  },
  {
    "movie_title": "Fire Birds",
    "release_date": "5/24/1990",
    "studio": "",
    "total_gross": 14760451,
    "inflation_adjusted_gross": 29485923,
    "day_of_year": 144,
    "year": 1990
  },
  {
    "movie_title": "Dick Tracy",
    "release_date": "6/15/1990",
    "studio": "",
    "total_gross": 103738726,
    "inflation_adjusted_gross": 207231621,
    "day_of_year": 166,
    "year": 1990
  },
  {
    "movie_title": "Disney Planes",
    "release_date": "8/9/2013",
    "studio": "DisneyToon Studios",
    "total_gross": 90282580,
    "inflation_adjusted_gross": 93614037,
    "day_of_year": 221,
    "year": 2013
  },
  {
    "movie_title": "Betsy's Wedding",
    "release_date": "6/22/1990",
    "studio": "",
    "total_gross": 19740070,
    "inflation_adjusted_gross": 39433357,
    "day_of_year": 173,
    "year": 1990
  },
  {
    "movie_title": "Arachnophobia",
    "release_date": "7/18/1990",
    "studio": "",
    "total_gross": 53208180,
    "inflation_adjusted_gross": 106290270,
    "day_of_year": 199,
    "year": 1990
  },
  {
    "movie_title": "Taking Care of Business",
    "release_date": "8/17/1990",
    "studio": "",
    "total_gross": 20005435,
    "inflation_adjusted_gross": 39963460,
    "day_of_year": 229,
    "year": 1990
  },
  {
    "movie_title": "The Emperor's New Groove",
    "release_date": "12/15/2000",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 89296573,
    "inflation_adjusted_gross": 136789252,
    "day_of_year": 350,
    "year": 2000
  },
  {
    "movie_title": "Mr. Destiny",
    "release_date": "10/12/1990",
    "studio": "",
    "total_gross": 15379253,
    "inflation_adjusted_gross": 30722056,
    "day_of_year": 285,
    "year": 1990
  },
  {
    "movie_title": "3 Men and a Little Lady",
    "release_date": "11/21/1990",
    "studio": "",
    "total_gross": 71609321,
    "inflation_adjusted_gross": 143108869,
    "day_of_year": 325,
    "year": 1990
  },
  {
    "movie_title": "Green Card",
    "release_date": "12/25/1990",
    "studio": "",
    "total_gross": 29804169,
    "inflation_adjusted_gross": 59679131,
    "day_of_year": 359,
    "year": 1990
  },
  {
    "movie_title": "Brother Bear",
    "release_date": "10/24/2003",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 85336277,
    "inflation_adjusted_gross": 119218333,
    "day_of_year": 297,
    "year": 2003
  },
  {
    "movie_title": "Cinderella",
    "release_date": "2/15/1950",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 85000000,
    "inflation_adjusted_gross": 920608730,
    "day_of_year": 46,
    "year": 1950
  },
  {
    "movie_title": "Scenes from a Mall",
    "release_date": "2/22/1991",
    "studio": "",
    "total_gross": 9563393,
    "inflation_adjusted_gross": 19149495,
    "day_of_year": 53,
    "year": 1991
  },
  {
    "movie_title": "The Santa Clause 3: The Escape Clause",
    "release_date": "11/3/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 84500122,
    "inflation_adjusted_gross": 108694869,
    "day_of_year": 307,
    "year": 2006
  },
  {
    "movie_title": "Pinocchio",
    "release_date": "2/9/1940",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 84300000,
    "inflation_adjusted_gross": 2188229052,
    "day_of_year": 40,
    "year": 1940
  },
  {
    "movie_title": "Atlantis: The Lost Empire",
    "release_date": "6/8/2001",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 84052762,
    "inflation_adjusted_gross": 125188122,
    "day_of_year": 159,
    "year": 2001
  },
  {
    "movie_title": "Fantasia",
    "release_date": "11/13/1940",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 83320000,
    "inflation_adjusted_gross": 2187090808,
    "day_of_year": 318,
    "year": 1940
  },
  {
    "movie_title": "Haakon Haakonsen",
    "release_date": "3/1/1991",
    "studio": "",
    "total_gross": 15024232,
    "inflation_adjusted_gross": 30084149,
    "day_of_year": 60,
    "year": 1991
  },
  {
    "movie_title": "The Marrying Man",
    "release_date": "4/5/1991",
    "studio": "",
    "total_gross": 12454768,
    "inflation_adjusted_gross": 24939118,
    "day_of_year": 95,
    "year": 1991
  },
  {
    "movie_title": "Bridge to Terabithia",
    "release_date": "2/16/2007",
    "studio": "Walt Disney Productions",
    "total_gross": 82234139,
    "inflation_adjusted_gross": 100760721,
    "day_of_year": 47,
    "year": 2007
  },
  {
    "movie_title": "Eight Below",
    "release_date": "2/17/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 81612565,
    "inflation_adjusted_gross": 105037235,
    "day_of_year": 48,
    "year": 2006
  },
  {
    "movie_title": "Snow Dogs",
    "release_date": "1/18/2002",
    "studio": "Walt Disney Productions",
    "total_gross": 81150692,
    "inflation_adjusted_gross": 117745317,
    "day_of_year": 18,
    "year": 2002
  },
  {
    "movie_title": "Oscar",
    "release_date": "4/26/1991",
    "studio": "",
    "total_gross": 23562716,
    "inflation_adjusted_gross": 47181395,
    "day_of_year": 116,
    "year": 1991
  },
  {
    "movie_title": "One Good Cop",
    "release_date": "5/3/1991",
    "studio": "",
    "total_gross": 11276846,
    "inflation_adjusted_gross": 22580472,
    "day_of_year": 123,
    "year": 1991
  },
  {
    "movie_title": "What About Bob?",
    "release_date": "5/17/1991",
    "studio": "",
    "total_gross": 63710000,
    "inflation_adjusted_gross": 127571325,
    "day_of_year": 137,
    "year": 1991
  },
  {
    "movie_title": "The Doctor",
    "release_date": "7/24/1991",
    "studio": "",
    "total_gross": 37497480,
    "inflation_adjusted_gross": 75084021,
    "day_of_year": 205,
    "year": 1991
  },
  {
    "movie_title": "Paradise",
    "release_date": "9/18/1991",
    "studio": "",
    "total_gross": 18634643,
    "inflation_adjusted_gross": 37313540,
    "day_of_year": 261,
    "year": 1991
  },
  {
    "movie_title": "Deceived",
    "release_date": "9/27/1991",
    "studio": "",
    "total_gross": 28738096,
    "inflation_adjusted_gross": 57544453,
    "day_of_year": 270,
    "year": 1991
  },
  {
    "movie_title": "Ernest Scared Stupid",
    "release_date": "10/11/1991",
    "studio": "",
    "total_gross": 14143280,
    "inflation_adjusted_gross": 28320147,
    "day_of_year": 284,
    "year": 1991
  },
  {
    "movie_title": "The Haunted Mansion",
    "release_date": "11/26/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 75817994,
    "inflation_adjusted_gross": 105775678,
    "day_of_year": 330,
    "year": 2003
  },
  {
    "movie_title": "The Rookie",
    "release_date": "3/29/2002",
    "studio": "Walt Disney Productions",
    "total_gross": 75600072,
    "inflation_adjusted_gross": 109691666,
    "day_of_year": 88,
    "year": 2002
  },
  {
    "movie_title": "Billy Bathgate",
    "release_date": "11/1/1991",
    "studio": "",
    "total_gross": 15565363,
    "inflation_adjusted_gross": 31167691,
    "day_of_year": 305,
    "year": 1991
  },
  {
    "movie_title": "Father of the Bride",
    "release_date": "12/20/1991",
    "studio": "",
    "total_gross": 89325780,
    "inflation_adjusted_gross": 179821881,
    "day_of_year": 354,
    "year": 1991
  },
  {
    "movie_title": "The Hand That Rocks the Cradle",
    "release_date": "1/10/1992",
    "studio": "",
    "total_gross": 88036683,
    "inflation_adjusted_gross": 178831137,
    "day_of_year": 10,
    "year": 1992
  },
  {
    "movie_title": "Medicine Man",
    "release_date": "2/7/1992",
    "studio": "",
    "total_gross": 44948240,
    "inflation_adjusted_gross": 91304495,
    "day_of_year": 38,
    "year": 1992
  },
  {
    "movie_title": "Blame it on the Bellboy",
    "release_date": "3/6/1992",
    "studio": "",
    "total_gross": 2891055,
    "inflation_adjusted_gross": 5872667,
    "day_of_year": 66,
    "year": 1992
  },
  {
    "movie_title": "Noises Off...",
    "release_date": "3/20/1992",
    "studio": "",
    "total_gross": 2280148,
    "inflation_adjusted_gross": 4631720,
    "day_of_year": 80,
    "year": 1992
  },
  {
    "movie_title": "Straight Talk",
    "release_date": "4/3/1992",
    "studio": "",
    "total_gross": 21202099,
    "inflation_adjusted_gross": 43068356,
    "day_of_year": 94,
    "year": 1992
  },
  {
    "movie_title": "Passed Away",
    "release_date": "4/24/1992",
    "studio": "",
    "total_gross": 4030793,
    "inflation_adjusted_gross": 8187848,
    "day_of_year": 115,
    "year": 1992
  },
  {
    "movie_title": "The Kid",
    "release_date": "7/7/2000",
    "studio": "Walt Disney Productions",
    "total_gross": 69688384,
    "inflation_adjusted_gross": 108993148,
    "day_of_year": 189,
    "year": 2000
  },
  {
    "movie_title": "Cool Runnings",
    "release_date": "10/1/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 68856263,
    "inflation_adjusted_gross": 140392731,
    "day_of_year": 274,
    "year": 1993
  },
  {
    "movie_title": "Holes",
    "release_date": "4/18/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 67383924,
    "inflation_adjusted_gross": 94203395,
    "day_of_year": 108,
    "year": 2003
  },
  {
    "movie_title": "Encino Man",
    "release_date": "5/22/1992",
    "studio": "",
    "total_gross": 40057130,
    "inflation_adjusted_gross": 81369058,
    "day_of_year": 143,
    "year": 1992
  },
  {
    "movie_title": "Sister Act",
    "release_date": "5/29/1992",
    "studio": "",
    "total_gross": 139605150,
    "inflation_adjusted_gross": 283583472,
    "day_of_year": 150,
    "year": 1992
  },
  {
    "movie_title": "A Stranger Among Us",
    "release_date": "7/17/1992",
    "studio": "",
    "total_gross": 12282994,
    "inflation_adjusted_gross": 24950752,
    "day_of_year": 199,
    "year": 1992
  },
  {
    "movie_title": "102 Dalmatians",
    "release_date": "11/22/2000",
    "studio": "Walt Disney Productions",
    "total_gross": 66941559,
    "inflation_adjusted_gross": 104055039,
    "day_of_year": 327,
    "year": 2000
  },
  {
    "movie_title": "The Parent Trap",
    "release_date": "7/29/1998",
    "studio": "Walt Disney Productions",
    "total_gross": 66308518,
    "inflation_adjusted_gross": 119185667,
    "day_of_year": 210,
    "year": 1998
  },
  {
    "movie_title": "Herbie: Fully Loaded",
    "release_date": "6/22/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 66010682,
    "inflation_adjusted_gross": 86812798,
    "day_of_year": 173,
    "year": 2005
  },
  {
    "movie_title": "3 Ninjas",
    "release_date": "8/7/1992",
    "studio": "",
    "total_gross": 29028000,
    "inflation_adjusted_gross": 58965304,
    "day_of_year": 220,
    "year": 1992
  },
  {
    "movie_title": "A Gun in Betty Lou's Handbag",
    "release_date": "8/21/1992",
    "studio": "",
    "total_gross": 3591460,
    "inflation_adjusted_gross": 7295423,
    "day_of_year": 234,
    "year": 1992
  },
  {
    "movie_title": "Captain Ron",
    "release_date": "9/18/1992",
    "studio": "",
    "total_gross": 22518097,
    "inflation_adjusted_gross": 45741576,
    "day_of_year": 262,
    "year": 1992
  },
  {
    "movie_title": "Sarafina!",
    "release_date": "9/18/1992",
    "studio": "",
    "total_gross": 7306242,
    "inflation_adjusted_gross": 14841352,
    "day_of_year": 262,
    "year": 1992
  },
  {
    "movie_title": "Song of the South",
    "release_date": "11/12/1946",
    "studio": "Walt Disney Productions",
    "total_gross": 65000000,
    "inflation_adjusted_gross": 1078510579,
    "day_of_year": 316,
    "year": 1946
  },
  {
    "movie_title": "Miracle",
    "release_date": "2/6/2004",
    "studio": "Walt Disney Productions",
    "total_gross": 64378093,
    "inflation_adjusted_gross": 87392478,
    "day_of_year": 37,
    "year": 2004
  },
  {
    "movie_title": "Innocent Blood",
    "release_date": "9/25/1992",
    "studio": "",
    "total_gross": 4877567,
    "inflation_adjusted_gross": 9907922,
    "day_of_year": 269,
    "year": 1992
  },
  {
    "movie_title": "Sky High",
    "release_date": "7/29/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 63939454,
    "inflation_adjusted_gross": 84088854,
    "day_of_year": 210,
    "year": 2005
  },
  {
    "movie_title": "1492: Conquest of Paradise",
    "release_date": "10/9/1992",
    "studio": "",
    "total_gross": 7099531,
    "inflation_adjusted_gross": 14421454,
    "day_of_year": 283,
    "year": 1992
  },
  {
    "movie_title": "Consenting Adults",
    "release_date": "10/16/1992",
    "studio": "",
    "total_gross": 21591728,
    "inflation_adjusted_gross": 43859823,
    "day_of_year": 290,
    "year": 1992
  },
  {
    "movie_title": "The Distinguished Gentleman",
    "release_date": "12/4/1992",
    "studio": "",
    "total_gross": 46434570,
    "inflation_adjusted_gross": 94349900,
    "day_of_year": 339,
    "year": 1992
  },
  {
    "movie_title": "Alive",
    "release_date": "1/15/1993",
    "studio": "",
    "total_gross": 36299670,
    "inflation_adjusted_gross": 73914543,
    "day_of_year": 15,
    "year": 1993
  },
  {
    "movie_title": "Aspen Extreme",
    "release_date": "1/22/1993",
    "studio": "",
    "total_gross": 7843388,
    "inflation_adjusted_gross": 15970955,
    "day_of_year": 22,
    "year": 1993
  },
  {
    "movie_title": "The Shaggy Dog",
    "release_date": "3/10/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 61123569,
    "inflation_adjusted_gross": 78667428,
    "day_of_year": 69,
    "year": 2006
  },
  {
    "movie_title": "The Cemetery Club",
    "release_date": "2/3/1993",
    "studio": "",
    "total_gross": 5583621,
    "inflation_adjusted_gross": 11369541,
    "day_of_year": 34,
    "year": 1993
  },
  {
    "movie_title": "Swing Kids",
    "release_date": "3/5/1993",
    "studio": "",
    "total_gross": 5632086,
    "inflation_adjusted_gross": 11468231,
    "day_of_year": 64,
    "year": 1993
  },
  {
    "movie_title": "Fantasia 2000 (IMAX)",
    "release_date": "1/1/2000",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 60507228,
    "inflation_adjusted_gross": 94852354,
    "day_of_year": 1,
    "year": 2000
  },
  {
    "movie_title": "Born Yesterday",
    "release_date": "3/26/1993",
    "studio": "",
    "total_gross": 17760754,
    "inflation_adjusted_gross": 36165012,
    "day_of_year": 85,
    "year": 1993
  },
  {
    "movie_title": "Jungle 2 Jungle",
    "release_date": "3/7/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 59925026,
    "inflation_adjusted_gross": 110058379,
    "day_of_year": 66,
    "year": 1997
  },
  {
    "movie_title": "Bound by Honor",
    "release_date": "4/16/1993",
    "studio": "",
    "total_gross": 4496583,
    "inflation_adjusted_gross": 9156084,
    "day_of_year": 106,
    "year": 1993
  },
  {
    "movie_title": "Planes: Fire and Rescue",
    "release_date": "7/18/2014",
    "studio": "DisneyToon Studios",
    "total_gross": 59157732,
    "inflation_adjusted_gross": 61040349,
    "day_of_year": 199,
    "year": 2014
  },
  {
    "movie_title": "Honey I Blew Up the Kid",
    "release_date": "7/17/1992",
    "studio": "Walt Disney Productions",
    "total_gross": 58662452,
    "inflation_adjusted_gross": 119162518,
    "day_of_year": 199,
    "year": 1992
  },
  {
    "movie_title": "Indian Summer",
    "release_date": "4/23/1993",
    "studio": "",
    "total_gross": 14717851,
    "inflation_adjusted_gross": 29968953,
    "day_of_year": 113,
    "year": 1993
  },
  {
    "movie_title": "Super Mario Bros.",
    "release_date": "5/28/1993",
    "studio": "",
    "total_gross": 20844907,
    "inflation_adjusted_gross": 42445058,
    "day_of_year": 148,
    "year": 1993
  },
  {
    "movie_title": "Guilty as Sin",
    "release_date": "6/4/1993",
    "studio": "",
    "total_gross": 22622537,
    "inflation_adjusted_gross": 46064723,
    "day_of_year": 155,
    "year": 1993
  },
  {
    "movie_title": "Life With Mikey",
    "release_date": "6/4/1993",
    "studio": "",
    "total_gross": 12349549,
    "inflation_adjusted_gross": 25146538,
    "day_of_year": 155,
    "year": 1993
  },
  {
    "movie_title": "Invincible",
    "release_date": "8/25/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 57806952,
    "inflation_adjusted_gross": 74398864,
    "day_of_year": 237,
    "year": 2006
  },
  {
    "movie_title": "What's Love Got to Do With It",
    "release_date": "6/9/1993",
    "studio": "",
    "total_gross": 39100956,
    "inflation_adjusted_gross": 79618610,
    "day_of_year": 160,
    "year": 1993
  },
  {
    "movie_title": "Son in Law",
    "release_date": "7/2/1993",
    "studio": "",
    "total_gross": 25989889,
    "inflation_adjusted_gross": 52921433,
    "day_of_year": 183,
    "year": 1993
  },
  {
    "movie_title": "Another Stakeout",
    "release_date": "7/23/1993",
    "studio": "",
    "total_gross": 20107504,
    "inflation_adjusted_gross": 40943541,
    "day_of_year": 204,
    "year": 1993
  },
  {
    "movie_title": "My Boyfriend's Back",
    "release_date": "8/6/1993",
    "studio": "",
    "total_gross": 3218882,
    "inflation_adjusted_gross": 6554384,
    "day_of_year": 218,
    "year": 1993
  },
  {
    "movie_title": "Father Hood",
    "release_date": "8/27/1993",
    "studio": "",
    "total_gross": 3268203,
    "inflation_adjusted_gross": 6654819,
    "day_of_year": 239,
    "year": 1993
  },
  {
    "movie_title": "The Aristocats",
    "release_date": "4/24/1970",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 55675257,
    "inflation_adjusted_gross": 255161499,
    "day_of_year": 114,
    "year": 1970
  },
  {
    "movie_title": "The Joy Luck Club",
    "release_date": "9/8/1993",
    "studio": "",
    "total_gross": 32790064,
    "inflation_adjusted_gross": 66768171,
    "day_of_year": 251,
    "year": 1993
  },
  {
    "movie_title": "Money for Nothing",
    "release_date": "9/10/1993",
    "studio": "",
    "total_gross": 1044824,
    "inflation_adjusted_gross": 2127496,
    "day_of_year": 253,
    "year": 1993
  },
  {
    "movie_title": "The Program",
    "release_date": "9/24/1993",
    "studio": "",
    "total_gross": 23042200,
    "inflation_adjusted_gross": 46919256,
    "day_of_year": 267,
    "year": 1993
  },
  {
    "movie_title": "Sister Act 2 Back in the Habit",
    "release_date": "12/10/1993",
    "studio": "",
    "total_gross": 57319029,
    "inflation_adjusted_gross": 116965668,
    "day_of_year": 344,
    "year": 1993
  },
  {
    "movie_title": "Tombstone",
    "release_date": "12/25/1993",
    "studio": "",
    "total_gross": 56505065,
    "inflation_adjusted_gross": 115781734,
    "day_of_year": 359,
    "year": 1993
  },
  {
    "movie_title": "The Three Musketeers",
    "release_date": "11/12/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 53661805,
    "inflation_adjusted_gross": 109310377,
    "day_of_year": 316,
    "year": 1993
  },
  {
    "movie_title": "The Air Up There",
    "release_date": "1/7/1994",
    "studio": "",
    "total_gross": 20782439,
    "inflation_adjusted_gross": 42940186,
    "day_of_year": 7,
    "year": 1994
  },
  {
    "movie_title": "Cabin Boy",
    "release_date": "1/7/1994",
    "studio": "",
    "total_gross": 3469493,
    "inflation_adjusted_gross": 7168577,
    "day_of_year": 7,
    "year": 1994
  },
  {
    "movie_title": "Red Rock West",
    "release_date": "1/28/1994",
    "studio": "",
    "total_gross": 2502551,
    "inflation_adjusted_gross": 5170709,
    "day_of_year": 28,
    "year": 1994
  },
  {
    "movie_title": "Angie",
    "release_date": "3/4/1994",
    "studio": "",
    "total_gross": 9252349,
    "inflation_adjusted_gross": 19116981,
    "day_of_year": 63,
    "year": 1994
  },
  {
    "movie_title": "The Ref",
    "release_date": "3/9/1994",
    "studio": "",
    "total_gross": 11325885,
    "inflation_adjusted_gross": 23401275,
    "day_of_year": 68,
    "year": 1994
  },
  {
    "movie_title": "Holy Matrimony",
    "release_date": "4/8/1994",
    "studio": "",
    "total_gross": 713234,
    "inflation_adjusted_gross": 1473665,
    "day_of_year": 98,
    "year": 1994
  },
  {
    "movie_title": "The Inkwell",
    "release_date": "4/22/1994",
    "studio": "",
    "total_gross": 8864699,
    "inflation_adjusted_gross": 18316030,
    "day_of_year": 112,
    "year": 1994
  },
  {
    "movie_title": "When a Man Loves a Woman",
    "release_date": "4/29/1994",
    "studio": "",
    "total_gross": 50021959,
    "inflation_adjusted_gross": 103354194,
    "day_of_year": 119,
    "year": 1994
  },
  {
    "movie_title": "3 Ninjas Kick Back",
    "release_date": "5/6/1994",
    "studio": "",
    "total_gross": 11744960,
    "inflation_adjusted_gross": 24267154,
    "day_of_year": 126,
    "year": 1994
  },
  {
    "movie_title": "Renaissance Man",
    "release_date": "6/3/1994",
    "studio": "",
    "total_gross": 24172899,
    "inflation_adjusted_gross": 49945474,
    "day_of_year": 154,
    "year": 1994
  },
  {
    "movie_title": "I Love Trouble",
    "release_date": "6/29/1994",
    "studio": "",
    "total_gross": 30806194,
    "inflation_adjusted_gross": 63651027,
    "day_of_year": 180,
    "year": 1994
  },
  {
    "movie_title": "In the Army Now",
    "release_date": "8/12/1994",
    "studio": "",
    "total_gross": 28881266,
    "inflation_adjusted_gross": 59673787,
    "day_of_year": 224,
    "year": 1994
  },
  {
    "movie_title": "The Mighty Ducks",
    "release_date": "10/2/1992",
    "studio": "Walt Disney Productions",
    "total_gross": 50752337,
    "inflation_adjusted_gross": 103120810,
    "day_of_year": 276,
    "year": 1992
  },
  {
    "movie_title": "Mighty Joe Young",
    "release_date": "12/25/1998",
    "studio": "Walt Disney Productions",
    "total_gross": 50632037,
    "inflation_adjusted_gross": 87906042,
    "day_of_year": 359,
    "year": 1998
  },
  {
    "movie_title": "The Nightmare Before Christmas",
    "release_date": "10/13/1993",
    "studio": "Skellington Productions",
    "total_gross": 50408318,
    "inflation_adjusted_gross": 100026637,
    "day_of_year": 286,
    "year": 1993
  },
  {
    "movie_title": "Angels in the Outfield",
    "release_date": "7/15/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 50236831,
    "inflation_adjusted_gross": 103798152,
    "day_of_year": 196,
    "year": 1994
  },
  {
    "movie_title": "Color of Night",
    "release_date": "8/19/1994",
    "studio": "",
    "total_gross": 19750470,
    "inflation_adjusted_gross": 40804816,
    "day_of_year": 231,
    "year": 1994
  },
  {
    "movie_title": "Home on the Range",
    "release_date": "4/2/2004",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 50026353,
    "inflation_adjusted_gross": 67910166,
    "day_of_year": 93,
    "year": 2004
  },
  {
    "movie_title": "Camp Nowhere",
    "release_date": "8/26/1994",
    "studio": "",
    "total_gross": 10442641,
    "inflation_adjusted_gross": 21576332,
    "day_of_year": 238,
    "year": 1994
  },
  {
    "movie_title": "Oliver & Company",
    "release_date": "11/18/1988",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 49576671,
    "inflation_adjusted_gross": 102254492,
    "day_of_year": 323,
    "year": 1988
  },
  {
    "movie_title": "It's Pat",
    "release_date": "8/26/1994",
    "studio": "",
    "total_gross": 60822,
    "inflation_adjusted_gross": 125666,
    "day_of_year": 238,
    "year": 1994
  },
  {
    "movie_title": "The Rescuers",
    "release_date": "6/22/1977",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 48775599,
    "inflation_adjusted_gross": 159743914,
    "day_of_year": 173,
    "year": 1977
  },
  {
    "movie_title": "Peter Pan: Return to Neverland",
    "release_date": "2/15/2002",
    "studio": "DisneyToon Studios",
    "total_gross": 48430258,
    "inflation_adjusted_gross": 70269715,
    "day_of_year": 46,
    "year": 2002
  },
  {
    "movie_title": "A Simple Twist of Fate",
    "release_date": "9/2/1994",
    "studio": "",
    "total_gross": 3404935,
    "inflation_adjusted_gross": 7035189,
    "day_of_year": 245,
    "year": 1994
  },
  {
    "movie_title": "Quiz Show",
    "release_date": "9/14/1994",
    "studio": "",
    "total_gross": 24787282,
    "inflation_adjusted_gross": 50840394,
    "day_of_year": 257,
    "year": 1994
  },
  {
    "movie_title": "The Jungle Book 2",
    "release_date": "2/14/2003",
    "studio": "DisneyToon Studios",
    "total_gross": 47901582,
    "inflation_adjusted_gross": 66966883,
    "day_of_year": 45,
    "year": 2003
  },
  {
    "movie_title": "Terminal Velocity",
    "release_date": "9/23/1994",
    "studio": "",
    "total_gross": 16478900,
    "inflation_adjusted_gross": 34048315,
    "day_of_year": 266,
    "year": 1994
  },
  {
    "movie_title": "The Rocketeer",
    "release_date": "6/21/1991",
    "studio": "Walt Disney Productions",
    "total_gross": 46573027,
    "inflation_adjusted_gross": 93256673,
    "day_of_year": 172,
    "year": 1991
  },
  {
    "movie_title": "Ed Wood",
    "release_date": "9/30/1994",
    "studio": "",
    "total_gross": 5828466,
    "inflation_adjusted_gross": 12042634,
    "day_of_year": 273,
    "year": 1994
  },
  {
    "movie_title": "The Puppet Masters",
    "release_date": "10/21/1994",
    "studio": "",
    "total_gross": 8579626,
    "inflation_adjusted_gross": 17727017,
    "day_of_year": 294,
    "year": 1994
  },
  {
    "movie_title": "D2: The Mighty Ducks",
    "release_date": "3/25/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 45604206,
    "inflation_adjusted_gross": 94226333,
    "day_of_year": 84,
    "year": 1994
  },
  {
    "movie_title": "The Tigger Movie",
    "release_date": "2/11/2000",
    "studio": "DisneyToon Studios",
    "total_gross": 45542421,
    "inflation_adjusted_gross": 71228678,
    "day_of_year": 42,
    "year": 2000
  },
  {
    "movie_title": "A Low Down Dirty Shame",
    "release_date": "11/23/1994",
    "studio": "",
    "total_gross": 29317886,
    "inflation_adjusted_gross": 60321919,
    "day_of_year": 327,
    "year": 1994
  },
  {
    "movie_title": "Houseguest",
    "release_date": "1/6/1995",
    "studio": "",
    "total_gross": 26325256,
    "inflation_adjusted_gross": 51016522,
    "day_of_year": 6,
    "year": 1995
  },
  {
    "movie_title": "Bad Company",
    "release_date": "1/20/1995",
    "studio": "",
    "total_gross": 3523909,
    "inflation_adjusted_gross": 6829092,
    "day_of_year": 20,
    "year": 1995
  },
  {
    "movie_title": "Miami Rhapsody",
    "release_date": "1/27/1995",
    "studio": "",
    "total_gross": 5086578,
    "inflation_adjusted_gross": 9857435,
    "day_of_year": 27,
    "year": 1995
  },
  {
    "movie_title": "The Jungle Book",
    "release_date": "12/25/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 44342956,
    "inflation_adjusted_gross": 88930321,
    "day_of_year": 359,
    "year": 1994
  },
  {
    "movie_title": "The Jerky Boys",
    "release_date": "2/3/1995",
    "studio": "",
    "total_gross": 7555256,
    "inflation_adjusted_gross": 14641561,
    "day_of_year": 34,
    "year": 1995
  },
  {
    "movie_title": "The Fox and the Hound",
    "release_date": "7/10/1981",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 43899231,
    "inflation_adjusted_gross": 133118889,
    "day_of_year": 191,
    "year": 1981
  },
  {
    "movie_title": "Roommates",
    "release_date": "3/3/1995",
    "studio": "",
    "total_gross": 12076989,
    "inflation_adjusted_gross": 23404369,
    "day_of_year": 62,
    "year": 1995
  },
  {
    "movie_title": "A Pyromaniac's Love Story",
    "release_date": "3/28/1995",
    "studio": "",
    "total_gross": 468240,
    "inflation_adjusted_gross": 907414,
    "day_of_year": 87,
    "year": 1995
  },
  {
    "movie_title": "Jefferson in Paris",
    "release_date": "3/31/1995",
    "studio": "",
    "total_gross": 2461628,
    "inflation_adjusted_gross": 4770461,
    "day_of_year": 90,
    "year": 1995
  },
  {
    "movie_title": "Funny Bones",
    "release_date": "3/31/1995",
    "studio": "",
    "total_gross": 529135,
    "inflation_adjusted_gross": 1025425,
    "day_of_year": 90,
    "year": 1995
  },
  {
    "movie_title": "The Lizzie McGuire Movie",
    "release_date": "5/2/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 42734455,
    "inflation_adjusted_gross": 59743191,
    "day_of_year": 122,
    "year": 2003
  },
  {
    "movie_title": "Glory Road",
    "release_date": "1/13/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 42647449,
    "inflation_adjusted_gross": 54888236,
    "day_of_year": 13,
    "year": 2006
  },
  {
    "movie_title": "While You Were Sleeping",
    "release_date": "4/21/1995",
    "studio": "",
    "total_gross": 81057016,
    "inflation_adjusted_gross": 157082900,
    "day_of_year": 111,
    "year": 1995
  },
  {
    "movie_title": "Homeward Bound: The Incredible Journey",
    "release_date": "2/3/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 41833324,
    "inflation_adjusted_gross": 85182343,
    "day_of_year": 34,
    "year": 1993
  },
  {
    "movie_title": "Crimson Tide",
    "release_date": "5/12/1995",
    "studio": "",
    "total_gross": 91387195,
    "inflation_adjusted_gross": 177102077,
    "day_of_year": 132,
    "year": 1995
  },
  {
    "movie_title": "Mad Love",
    "release_date": "5/26/1995",
    "studio": "",
    "total_gross": 15446532,
    "inflation_adjusted_gross": 29934306,
    "day_of_year": 146,
    "year": 1995
  },
  {
    "movie_title": "Judge Dredd",
    "release_date": "6/30/1995",
    "studio": "",
    "total_gross": 34687912,
    "inflation_adjusted_gross": 67222776,
    "day_of_year": 181,
    "year": 1995
  },
  {
    "movie_title": "Man of the House",
    "release_date": "3/3/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 40029009,
    "inflation_adjusted_gross": 77573459,
    "day_of_year": 62,
    "year": 1995
  },
  {
    "movie_title": "Dangerous Minds",
    "release_date": "8/11/1995",
    "studio": "",
    "total_gross": 84919401,
    "inflation_adjusted_gross": 164552293,
    "day_of_year": 223,
    "year": 1995
  },
  {
    "movie_title": "Hocus Pocus",
    "release_date": "7/16/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 39360491,
    "inflation_adjusted_gross": 80147079,
    "day_of_year": 197,
    "year": 1993
  },
  {
    "movie_title": "The Tie That Binds",
    "release_date": "9/8/1995",
    "studio": "",
    "total_gross": 5762795,
    "inflation_adjusted_gross": 11167895,
    "day_of_year": 251,
    "year": 1995
  },
  {
    "movie_title": "Unstrung Heroes",
    "release_date": "9/15/1995",
    "studio": "",
    "total_gross": 7929000,
    "inflation_adjusted_gross": 15365850,
    "day_of_year": 258,
    "year": 1995
  },
  {
    "movie_title": "Dead Presidents",
    "release_date": "10/4/1995",
    "studio": "",
    "total_gross": 24120194,
    "inflation_adjusted_gross": 46741467,
    "day_of_year": 277,
    "year": 1995
  },
  {
    "movie_title": "The Scarlet Letter",
    "release_date": "10/13/1995",
    "studio": "",
    "total_gross": 10359006,
    "inflation_adjusted_gross": 20075033,
    "day_of_year": 286,
    "year": 1995
  },
  {
    "movie_title": "Treasure Planet",
    "release_date": "11/27/2002",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 38120554,
    "inflation_adjusted_gross": 55189145,
    "day_of_year": 331,
    "year": 2002
  },
  {
    "movie_title": "Feast of July",
    "release_date": "10/13/1995",
    "studio": "",
    "total_gross": 293274,
    "inflation_adjusted_gross": 568342,
    "day_of_year": 286,
    "year": 1995
  },
  {
    "movie_title": "Powder",
    "release_date": "10/27/1995",
    "studio": "",
    "total_gross": 30833914,
    "inflation_adjusted_gross": 59727216,
    "day_of_year": 300,
    "year": 1995
  },
  {
    "movie_title": "The Wild",
    "release_date": "4/14/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 37384046,
    "inflation_adjusted_gross": 48114115,
    "day_of_year": 104,
    "year": 2006
  },
  {
    "movie_title": "Father of the Bride Part II",
    "release_date": "12/8/1995",
    "studio": "",
    "total_gross": 76578911,
    "inflation_adjusted_gross": 147658438,
    "day_of_year": 342,
    "year": 1995
  },
  {
    "movie_title": "My Favorite Martian",
    "release_date": "2/12/1999",
    "studio": "Walt Disney Productions",
    "total_gross": 36850101,
    "inflation_adjusted_gross": 61150849,
    "day_of_year": 43,
    "year": 1999
  },
  {
    "movie_title": "Nixon",
    "release_date": "12/20/1995",
    "studio": "",
    "total_gross": 13668249,
    "inflation_adjusted_gross": 26302005,
    "day_of_year": 354,
    "year": 1995
  },
  {
    "movie_title": "Mr. Holland's Opus",
    "release_date": "12/29/1995",
    "studio": "",
    "total_gross": 82582604,
    "inflation_adjusted_gross": 157508868,
    "day_of_year": 363,
    "year": 1995
  },
  {
    "movie_title": "White Squall",
    "release_date": "2/2/1996",
    "studio": "",
    "total_gross": 10229300,
    "inflation_adjusted_gross": 19509726,
    "day_of_year": 33,
    "year": 1996
  },
  {
    "movie_title": "The Black Hole",
    "release_date": "12/21/1979",
    "studio": "Walt Disney Productions",
    "total_gross": 35841901,
    "inflation_adjusted_gross": 120377374,
    "day_of_year": 355,
    "year": 1979
  },
  {
    "movie_title": "A Goofy Movie",
    "release_date": "4/7/1995",
    "studio": "DisneyToon Studios",
    "total_gross": 35336439,
    "inflation_adjusted_gross": 68479579,
    "day_of_year": 97,
    "year": 1995
  },
  {
    "movie_title": "Mr. Wrong",
    "release_date": "2/16/1996",
    "studio": "",
    "total_gross": 12805071,
    "inflation_adjusted_gross": 24422334,
    "day_of_year": 47,
    "year": 1996
  },
  {
    "movie_title": "Before and After",
    "release_date": "2/23/1996",
    "studio": "",
    "total_gross": 8642118,
    "inflation_adjusted_gross": 16482589,
    "day_of_year": 54,
    "year": 1996
  },
  {
    "movie_title": "White Fang",
    "release_date": "1/18/1991",
    "studio": "Walt Disney Productions",
    "total_gross": 34729091,
    "inflation_adjusted_gross": 69540672,
    "day_of_year": 18,
    "year": 1991
  },
  {
    "movie_title": "Up Close & Personal",
    "release_date": "3/1/1996",
    "studio": "",
    "total_gross": 51045801,
    "inflation_adjusted_gross": 97356578,
    "day_of_year": 61,
    "year": 1996
  },
  {
    "movie_title": "Muppet Treasure Island",
    "release_date": "2/16/1996",
    "studio": "Jim Henson Productions",
    "total_gross": 34327391,
    "inflation_adjusted_gross": 65470567,
    "day_of_year": 47,
    "year": 1996
  },
  {
    "movie_title": "Two Much",
    "release_date": "3/15/1996",
    "studio": "",
    "total_gross": 1078555,
    "inflation_adjusted_gross": 2057055,
    "day_of_year": 75,
    "year": 1996
  },
  {
    "movie_title": "Un indien dans la ville",
    "release_date": "3/22/1996",
    "studio": "",
    "total_gross": 1029731,
    "inflation_adjusted_gross": 1963937,
    "day_of_year": 82,
    "year": 1996
  },
  {
    "movie_title": "Celtic Pride",
    "release_date": "4/19/1996",
    "studio": "",
    "total_gross": 9240378,
    "inflation_adjusted_gross": 17623615,
    "day_of_year": 110,
    "year": 1996
  },
  {
    "movie_title": "Homeward Bound II: Lost in San Francisco",
    "release_date": "3/8/1996",
    "studio": "Walt Disney Productions",
    "total_gross": 32709423,
    "inflation_adjusted_gross": 62384706,
    "day_of_year": 68,
    "year": 1996
  },
  {
    "movie_title": "Last Dance",
    "release_date": "5/3/1996",
    "studio": "",
    "total_gross": 5857534,
    "inflation_adjusted_gross": 11171714,
    "day_of_year": 124,
    "year": 1996
  },
  {
    "movie_title": "Boys",
    "release_date": "5/10/1996",
    "studio": "",
    "total_gross": 21930418,
    "inflation_adjusted_gross": 41826566,
    "day_of_year": 131,
    "year": 1996
  },
  {
    "movie_title": "Spy Hard",
    "release_date": "5/24/1996",
    "studio": "",
    "total_gross": 26936265,
    "inflation_adjusted_gross": 51373912,
    "day_of_year": 145,
    "year": 1996
  },
  {
    "movie_title": "Eddie",
    "release_date": "5/31/1996",
    "studio": "",
    "total_gross": 31369401,
    "inflation_adjusted_gross": 59828966,
    "day_of_year": 152,
    "year": 1996
  },
  {
    "movie_title": "The Apple Dumpling Gang",
    "release_date": "7/1/1975",
    "studio": "Walt Disney Productions",
    "total_gross": 31916500,
    "inflation_adjusted_gross": 131246872,
    "day_of_year": 182,
    "year": 1975
  },
  {
    "movie_title": "The Rock",
    "release_date": "6/7/1996",
    "studio": "",
    "total_gross": 134069511,
    "inflation_adjusted_gross": 255702705,
    "day_of_year": 159,
    "year": 1996
  },
  {
    "movie_title": "Phenomenon",
    "release_date": "7/5/1996",
    "studio": "",
    "total_gross": 104636382,
    "inflation_adjusted_gross": 199559799,
    "day_of_year": 187,
    "year": 1996
  },
  {
    "movie_title": "Kazaam",
    "release_date": "7/17/1996",
    "studio": "",
    "total_gross": 18880508,
    "inflation_adjusted_gross": 36009655,
    "day_of_year": 199,
    "year": 1996
  },
  {
    "movie_title": "Jack",
    "release_date": "8/9/1996",
    "studio": "",
    "total_gross": 58617334,
    "inflation_adjusted_gross": 111792852,
    "day_of_year": 222,
    "year": 1996
  },
  {
    "movie_title": "The Rich Man's Wife",
    "release_date": "9/13/1996",
    "studio": "",
    "total_gross": 8538318,
    "inflation_adjusted_gross": 16284619,
    "day_of_year": 257,
    "year": 1996
  },
  {
    "movie_title": "Toy Story 3D Double Feature",
    "release_date": "10/2/2009",
    "studio": "Pixar",
    "total_gross": 30702446,
    "inflation_adjusted_gross": 34509545,
    "day_of_year": 275,
    "year": 2009
  },
  {
    "movie_title": "The Associate",
    "release_date": "10/25/1996",
    "studio": "",
    "total_gross": 12772657,
    "inflation_adjusted_gross": 24333094,
    "day_of_year": 299,
    "year": 1996
  },
  {
    "movie_title": "Blank Check",
    "release_date": "2/11/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 30573770,
    "inflation_adjusted_gross": 63170804,
    "day_of_year": 42,
    "year": 1994
  },
  {
    "movie_title": "Ransom",
    "release_date": "11/8/1996",
    "studio": "",
    "total_gross": 136492681,
    "inflation_adjusted_gross": 259807820,
    "day_of_year": 313,
    "year": 1996
  },
  {
    "movie_title": "The War at Home",
    "release_date": "11/20/1996",
    "studio": "",
    "total_gross": 34368,
    "inflation_adjusted_gross": 65543,
    "day_of_year": 325,
    "year": 1996
  },
  {
    "movie_title": "The Preacher's Wife",
    "release_date": "12/13/1996",
    "studio": "",
    "total_gross": 48102795,
    "inflation_adjusted_gross": 91076877,
    "day_of_year": 348,
    "year": 1996
  },
  {
    "movie_title": "Confessions of a Teenage Drama Queen",
    "release_date": "2/20/2004",
    "studio": "Walt Disney Productions",
    "total_gross": 29331068,
    "inflation_adjusted_gross": 39816568,
    "day_of_year": 51,
    "year": 2004
  },
  {
    "movie_title": "Evita",
    "release_date": "12/25/1996",
    "studio": "",
    "total_gross": 50047179,
    "inflation_adjusted_gross": 92077628,
    "day_of_year": 360,
    "year": 1996
  },
  {
    "movie_title": "Metro",
    "release_date": "1/17/1997",
    "studio": "",
    "total_gross": 32017895,
    "inflation_adjusted_gross": 58804106,
    "day_of_year": 17,
    "year": 1997
  },
  {
    "movie_title": "Prefontaine",
    "release_date": "1/24/1997",
    "studio": "",
    "total_gross": 590817,
    "inflation_adjusted_gross": 1085093,
    "day_of_year": 24,
    "year": 1997
  },
  {
    "movie_title": "Shadow Conspiracy",
    "release_date": "1/31/1997",
    "studio": "",
    "total_gross": 2154540,
    "inflation_adjusted_gross": 3957025,
    "day_of_year": 31,
    "year": 1997
  },
  {
    "movie_title": "The Sixth Man",
    "release_date": "3/28/1997",
    "studio": "",
    "total_gross": 14765099,
    "inflation_adjusted_gross": 27117599,
    "day_of_year": 87,
    "year": 1997
  },
  {
    "movie_title": "Grosse Pointe Blank",
    "release_date": "4/11/1997",
    "studio": "",
    "total_gross": 28084357,
    "inflation_adjusted_gross": 51579764,
    "day_of_year": 101,
    "year": 1997
  },
  {
    "movie_title": "James and the Giant Peach",
    "release_date": "4/12/1996",
    "studio": "Walt Disney Productions",
    "total_gross": 28921264,
    "inflation_adjusted_gross": 55159783,
    "day_of_year": 103,
    "year": 1996
  },
  {
    "movie_title": "Romy and Michele's High School Reunion",
    "release_date": "4/25/1997",
    "studio": "",
    "total_gross": 29235353,
    "inflation_adjusted_gross": 53693680,
    "day_of_year": 115,
    "year": 1997
  },
  {
    "movie_title": "Gone Fishin'",
    "release_date": "5/30/1997",
    "studio": "",
    "total_gross": 19745922,
    "inflation_adjusted_gross": 36265379,
    "day_of_year": 150,
    "year": 1997
  },
  {
    "movie_title": "Con Air",
    "release_date": "6/6/1997",
    "studio": "",
    "total_gross": 101117573,
    "inflation_adjusted_gross": 185712664,
    "day_of_year": 157,
    "year": 1997
  },
  {
    "movie_title": "20,000 Leagues Under the Sea",
    "release_date": "12/23/1954",
    "studio": "Walt Disney Productions",
    "total_gross": 28200000,
    "inflation_adjusted_gross": 528279994,
    "day_of_year": 357,
    "year": 1954
  },
  {
    "movie_title": "Nothing To Lose",
    "release_date": "7/18/1997",
    "studio": "",
    "total_gross": 44480039,
    "inflation_adjusted_gross": 81692095,
    "day_of_year": 199,
    "year": 1997
  },
  {
    "movie_title": "Herbie Goes to Monte Carlo",
    "release_date": "6/24/1977",
    "studio": "Walt Disney Productions",
    "total_gross": 28000000,
    "inflation_adjusted_gross": 105847527,
    "day_of_year": 175,
    "year": 1977
  },
  {
    "movie_title": "The Rescuers Down Under",
    "release_date": "11/16/1990",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 27931461,
    "inflation_adjusted_gross": 55796728,
    "day_of_year": 320,
    "year": 1990
  },
  {
    "movie_title": "G.I. Jane",
    "release_date": "8/22/1997",
    "studio": "",
    "total_gross": 48169156,
    "inflation_adjusted_gross": 88467531,
    "day_of_year": 234,
    "year": 1997
  },
  {
    "movie_title": "Never Cry Wolf",
    "release_date": "10/7/1983",
    "studio": "Walt Disney Productions",
    "total_gross": 27668764,
    "inflation_adjusted_gross": 70669955,
    "day_of_year": 280,
    "year": 1983
  },
  {
    "movie_title": "A Thousand Acres",
    "release_date": "9/19/1997",
    "studio": "",
    "total_gross": 7928412,
    "inflation_adjusted_gross": 14561324,
    "day_of_year": 262,
    "year": 1997
  },
  {
    "movie_title": "The Muppet Christmas Carol",
    "release_date": "12/11/1992",
    "studio": "Jim Henson Productions",
    "total_gross": 27281507,
    "inflation_adjusted_gross": 55417615,
    "day_of_year": 346,
    "year": 1992
  },
  {
    "movie_title": "Washington Square",
    "release_date": "10/5/1997",
    "studio": "",
    "total_gross": 1775644,
    "inflation_adjusted_gross": 3257546,
    "day_of_year": 278,
    "year": 1997
  },
  {
    "movie_title": "Playing God",
    "release_date": "10/17/1997",
    "studio": "",
    "total_gross": 4166918,
    "inflation_adjusted_gross": 7652965,
    "day_of_year": 290,
    "year": 1997
  },
  {
    "movie_title": "Tron",
    "release_date": "7/9/1982",
    "studio": "Walt Disney Productions",
    "total_gross": 26918576,
    "inflation_adjusted_gross": 77184895,
    "day_of_year": 190,
    "year": 1982
  },
  {
    "movie_title": "An American Werewolf in Paris",
    "release_date": "12/25/1997",
    "studio": "",
    "total_gross": 26570463,
    "inflation_adjusted_gross": 48546161,
    "day_of_year": 359,
    "year": 1997
  },
  {
    "movie_title": "Winnie the Pooh",
    "release_date": "7/15/2011",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 26692846,
    "inflation_adjusted_gross": 28375869,
    "day_of_year": 196,
    "year": 2011
  },
  {
    "movie_title": "Kundun",
    "release_date": "12/25/1997",
    "studio": "",
    "total_gross": 5686694,
    "inflation_adjusted_gross": 10236836,
    "day_of_year": 359,
    "year": 1997
  },
  {
    "movie_title": "First Kid",
    "release_date": "8/30/1996",
    "studio": "Walt Disney Productions",
    "total_gross": 26465920,
    "inflation_adjusted_gross": 50465108,
    "day_of_year": 243,
    "year": 1996
  },
  {
    "movie_title": "Deep Rising",
    "release_date": "1/30/1998",
    "studio": "",
    "total_gross": 11203026,
    "inflation_adjusted_gross": 20136775,
    "day_of_year": 30,
    "year": 1998
  },
  {
    "movie_title": "Krippendorf's Tribe",
    "release_date": "2/27/1998",
    "studio": "",
    "total_gross": 7571115,
    "inflation_adjusted_gross": 13608633,
    "day_of_year": 58,
    "year": 1998
  },
  {
    "movie_title": "Freaky Friday",
    "release_date": "1/17/1976",
    "studio": "Walt Disney Productions",
    "total_gross": 25942000,
    "inflation_adjusted_gross": 98067733,
    "day_of_year": 21,
    "year": 1976
  },
  {
    "movie_title": "An Alan Smithee Film: Burn Hollywood Burn",
    "release_date": "2/27/1998",
    "studio": "",
    "total_gross": 45779,
    "inflation_adjusted_gross": 82277,
    "day_of_year": 58,
    "year": 1998
  },
  {
    "movie_title": "Beauty and the Beast (IMAX)",
    "release_date": "1/1/2002",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 25487028,
    "inflation_adjusted_gross": 36980311,
    "day_of_year": 1,
    "year": 2002
  },
  {
    "movie_title": "He Got Game",
    "release_date": "5/1/1998",
    "studio": "",
    "total_gross": 21567853,
    "inflation_adjusted_gross": 38766948,
    "day_of_year": 121,
    "year": 1998
  },
  {
    "movie_title": "The Horse Whisperer",
    "release_date": "5/15/1998",
    "studio": "",
    "total_gross": 75383563,
    "inflation_adjusted_gross": 135497531,
    "day_of_year": 135,
    "year": 1998
  },
  {
    "movie_title": "The Absent Minded Professor",
    "release_date": "3/16/1961",
    "studio": "Walt Disney Productions",
    "total_gross": 25381407,
    "inflation_adjusted_gross": 310094574,
    "day_of_year": 75,
    "year": 1961
  },
  {
    "movie_title": "Six Days, Seven Nights",
    "release_date": "6/12/1998",
    "studio": "",
    "total_gross": 74339294,
    "inflation_adjusted_gross": 133620516,
    "day_of_year": 163,
    "year": 1998
  },
  {
    "movie_title": "Armageddon",
    "release_date": "7/1/1998",
    "studio": "",
    "total_gross": 201578182,
    "inflation_adjusted_gross": 362324957,
    "day_of_year": 182,
    "year": 1998
  },
  {
    "movie_title": "Jane Austen's Mafia",
    "release_date": "7/24/1998",
    "studio": "",
    "total_gross": 19843795,
    "inflation_adjusted_gross": 35668055,
    "day_of_year": 205,
    "year": 1998
  },
  {
    "movie_title": "Operation Dumbo Drop",
    "release_date": "7/28/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 24670346,
    "inflation_adjusted_gross": 47809421,
    "day_of_year": 209,
    "year": 1995
  },
  {
    "movie_title": "Air Bud",
    "release_date": "8/1/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 24646936,
    "inflation_adjusted_gross": 45266588,
    "day_of_year": 213,
    "year": 1997
  },
  {
    "movie_title": "Ice Princess",
    "release_date": "3/18/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 24381334,
    "inflation_adjusted_gross": 32064685,
    "day_of_year": 77,
    "year": 2005
  },
  {
    "movie_title": "Firelight",
    "release_date": "9/4/1998",
    "studio": "",
    "total_gross": 784419,
    "inflation_adjusted_gross": 1409943,
    "day_of_year": 247,
    "year": 1998
  },
  {
    "movie_title": "Simon Birch",
    "release_date": "9/11/1998",
    "studio": "",
    "total_gross": 18253415,
    "inflation_adjusted_gross": 32809442,
    "day_of_year": 254,
    "year": 1998
  },
  {
    "movie_title": "The Adventures of Huck Finn",
    "release_date": "4/2/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 24103594,
    "inflation_adjusted_gross": 49080505,
    "day_of_year": 92,
    "year": 1993
  },
  {
    "movie_title": "Holy Man",
    "release_date": "10/9/1998",
    "studio": "",
    "total_gross": 12069719,
    "inflation_adjusted_gross": 21694605,
    "day_of_year": 282,
    "year": 1998
  },
  {
    "movie_title": "Around the World in 80 Days",
    "release_date": "6/16/2004",
    "studio": "Walt Disney Productions",
    "total_gross": 24004159,
    "inflation_adjusted_gross": 32585356,
    "day_of_year": 168,
    "year": 2004
  },
  {
    "movie_title": "Beloved",
    "release_date": "10/16/1998",
    "studio": "",
    "total_gross": 22852487,
    "inflation_adjusted_gross": 41062682,
    "day_of_year": 289,
    "year": 1998
  },
  {
    "movie_title": "Tom and Huck",
    "release_date": "12/22/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 23837227,
    "inflation_adjusted_gross": 45911517,
    "day_of_year": 356,
    "year": 1995
  },
  {
    "movie_title": "The Great Mouse Detective",
    "release_date": "7/2/1986",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 23605534,
    "inflation_adjusted_gross": 53637367,
    "day_of_year": 183,
    "year": 1986
  },
  {
    "movie_title": "The Waterboy",
    "release_date": "11/6/1998",
    "studio": "",
    "total_gross": 161491646,
    "inflation_adjusted_gross": 288691833,
    "day_of_year": 310,
    "year": 1998
  },
  {
    "movie_title": "Enemy of the State",
    "release_date": "11/20/1998",
    "studio": "",
    "total_gross": 111549836,
    "inflation_adjusted_gross": 198472008,
    "day_of_year": 324,
    "year": 1998
  },
  {
    "movie_title": "Piglet's Big Movie",
    "release_date": "3/21/2003",
    "studio": "DisneyToon Studios",
    "total_gross": 23103423,
    "inflation_adjusted_gross": 32298812,
    "day_of_year": 80,
    "year": 2003
  },
  {
    "movie_title": "Rushmore",
    "release_date": "12/11/1998",
    "studio": "",
    "total_gross": 17105219,
    "inflation_adjusted_gross": 28392518,
    "day_of_year": 345,
    "year": 1998
  },
  {
    "movie_title": "A Civil Action",
    "release_date": "12/25/1998",
    "studio": "",
    "total_gross": 56709981,
    "inflation_adjusted_gross": 94139530,
    "day_of_year": 359,
    "year": 1998
  },
  {
    "movie_title": "D3: The Mighty Ducks",
    "release_date": "10/4/1996",
    "studio": "Walt Disney Productions",
    "total_gross": 22936273,
    "inflation_adjusted_gross": 43713554,
    "day_of_year": 278,
    "year": 1996
  },
  {
    "movie_title": "The Other Sister",
    "release_date": "2/26/1999",
    "studio": "",
    "total_gross": 27807627,
    "inflation_adjusted_gross": 46145331,
    "day_of_year": 57,
    "year": 1999
  },
  {
    "movie_title": "Doug's 1st Movie",
    "release_date": "3/26/1999",
    "studio": "",
    "total_gross": 19421271,
    "inflation_adjusted_gross": 32228598,
    "day_of_year": 85,
    "year": 1999
  },
  {
    "movie_title": "Ten Things I Hate About You",
    "release_date": "3/31/1999",
    "studio": "",
    "total_gross": 38177966,
    "inflation_adjusted_gross": 63354375,
    "day_of_year": 90,
    "year": 1999
  },
  {
    "movie_title": "Instinct",
    "release_date": "6/4/1999",
    "studio": "",
    "total_gross": 34105207,
    "inflation_adjusted_gross": 56595842,
    "day_of_year": 155,
    "year": 1999
  },
  {
    "movie_title": "The Sword in the Stone",
    "release_date": "12/25/1963",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 22182353,
    "inflation_adjusted_gross": 153870834,
    "day_of_year": 359,
    "year": 1963
  },
  {
    "movie_title": "Summer of Sam",
    "release_date": "7/2/1999",
    "studio": "",
    "total_gross": 19288130,
    "inflation_adjusted_gross": 32007656,
    "day_of_year": 183,
    "year": 1999
  },
  {
    "movie_title": "The Sixth Sense",
    "release_date": "8/6/1999",
    "studio": "",
    "total_gross": 293506292,
    "inflation_adjusted_gross": 485424724,
    "day_of_year": 218,
    "year": 1999
  },
  {
    "movie_title": "The 13th Warrior",
    "release_date": "8/27/1999",
    "studio": "",
    "total_gross": 32698899,
    "inflation_adjusted_gross": 54262148,
    "day_of_year": 239,
    "year": 1999
  },
  {
    "movie_title": "Breakfast of Champions",
    "release_date": "9/17/1999",
    "studio": "",
    "total_gross": 178287,
    "inflation_adjusted_gross": 295851,
    "day_of_year": 260,
    "year": 1999
  },
  {
    "movie_title": "Mumford",
    "release_date": "9/24/1999",
    "studio": "",
    "total_gross": 4559569,
    "inflation_adjusted_gross": 7566363,
    "day_of_year": 267,
    "year": 1999
  },
  {
    "movie_title": "Blackbeard's Ghost",
    "release_date": "2/8/1968",
    "studio": "Walt Disney Productions",
    "total_gross": 21540050,
    "inflation_adjusted_gross": 138612686,
    "day_of_year": 39,
    "year": 1968
  },
  {
    "movie_title": "Mystery, Alaska",
    "release_date": "10/1/1999",
    "studio": "",
    "total_gross": 8891623,
    "inflation_adjusted_gross": 14755189,
    "day_of_year": 274,
    "year": 1999
  },
  {
    "movie_title": "Mr. Magoo",
    "release_date": "12/25/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 21437192,
    "inflation_adjusted_gross": 39145784,
    "day_of_year": 359,
    "year": 1997
  },
  {
    "movie_title": "The Insider",
    "release_date": "11/5/1999",
    "studio": "",
    "total_gross": 28965197,
    "inflation_adjusted_gross": 47794214,
    "day_of_year": 309,
    "year": 1999
  },
  {
    "movie_title": "Cradle Will Rock",
    "release_date": "12/8/1999",
    "studio": "",
    "total_gross": 2899970,
    "inflation_adjusted_gross": 4609153,
    "day_of_year": 342,
    "year": 1999
  },
  {
    "movie_title": "The Black Cauldron",
    "release_date": "7/24/1985",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 21288692,
    "inflation_adjusted_gross": 50553142,
    "day_of_year": 205,
    "year": 1985
  },
  {
    "movie_title": "Deuce Bigalow: Male Gigolo",
    "release_date": "12/10/1999",
    "studio": "",
    "total_gross": 65535067,
    "inflation_adjusted_gross": 106921374,
    "day_of_year": 344,
    "year": 1999
  },
  {
    "movie_title": "Bicentennial Man",
    "release_date": "12/17/1999",
    "studio": "",
    "total_gross": 58220776,
    "inflation_adjusted_gross": 94838225,
    "day_of_year": 351,
    "year": 1999
  },
  {
    "movie_title": "Play it to the Bone",
    "release_date": "12/24/1999",
    "studio": "",
    "total_gross": 8427204,
    "inflation_adjusted_gross": 13180524,
    "day_of_year": 358,
    "year": 1999
  },
  {
    "movie_title": "Iron Will",
    "release_date": "1/14/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 20623071,
    "inflation_adjusted_gross": 42610902,
    "day_of_year": 14,
    "year": 1994
  },
  {
    "movie_title": "Gun Shy",
    "release_date": "2/4/2000",
    "studio": "",
    "total_gross": 1638202,
    "inflation_adjusted_gross": 2562155,
    "day_of_year": 35,
    "year": 2000
  },
  {
    "movie_title": "Mission to Mars",
    "release_date": "3/10/2000",
    "studio": "",
    "total_gross": 60874615,
    "inflation_adjusted_gross": 95208344,
    "day_of_year": 70,
    "year": 2000
  },
  {
    "movie_title": "High Fidelity",
    "release_date": "3/31/2000",
    "studio": "",
    "total_gross": 27277055,
    "inflation_adjusted_gross": 42661516,
    "day_of_year": 91,
    "year": 2000
  },
  {
    "movie_title": "Keeping the Faith",
    "release_date": "4/14/2000",
    "studio": "",
    "total_gross": 37036404,
    "inflation_adjusted_gross": 57925202,
    "day_of_year": 105,
    "year": 2000
  },
  {
    "movie_title": "Shanghai Noon",
    "release_date": "5/26/2000",
    "studio": "",
    "total_gross": 56932305,
    "inflation_adjusted_gross": 89042541,
    "day_of_year": 147,
    "year": 2000
  },
  {
    "movie_title": "Gone in 60 Seconds",
    "release_date": "6/9/2000",
    "studio": "",
    "total_gross": 101643008,
    "inflation_adjusted_gross": 158970411,
    "day_of_year": 161,
    "year": 2000
  },
  {
    "movie_title": "Coyote Ugly",
    "release_date": "8/4/2000",
    "studio": "",
    "total_gross": 60786269,
    "inflation_adjusted_gross": 95070168,
    "day_of_year": 217,
    "year": 2000
  },
  {
    "movie_title": "The Crew",
    "release_date": "8/25/2000",
    "studio": "",
    "total_gross": 13019253,
    "inflation_adjusted_gross": 20362201,
    "day_of_year": 238,
    "year": 2000
  },
  {
    "movie_title": "Duets",
    "release_date": "9/15/2000",
    "studio": "",
    "total_gross": 4734235,
    "inflation_adjusted_gross": 7404372,
    "day_of_year": 259,
    "year": 2000
  },
  {
    "movie_title": "Valiant",
    "release_date": "8/19/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 19478106,
    "inflation_adjusted_gross": 25616292,
    "day_of_year": 231,
    "year": 2005
  },
  {
    "movie_title": "Unbreakable",
    "release_date": "11/22/2000",
    "studio": "",
    "total_gross": 94999143,
    "inflation_adjusted_gross": 148208901,
    "day_of_year": 327,
    "year": 2000
  },
  {
    "movie_title": "O Brother, Where Art Thou?",
    "release_date": "12/22/2000",
    "studio": "",
    "total_gross": 45506619,
    "inflation_adjusted_gross": 67922002,
    "day_of_year": 357,
    "year": 2000
  },
  {
    "movie_title": "Double Take",
    "release_date": "1/12/2001",
    "studio": "",
    "total_gross": 29823162,
    "inflation_adjusted_gross": 44418589,
    "day_of_year": 12,
    "year": 2001
  },
  {
    "movie_title": "Recess: School's Out",
    "release_date": "2/16/2001",
    "studio": "",
    "total_gross": 36696761,
    "inflation_adjusted_gross": 54656124,
    "day_of_year": 47,
    "year": 2001
  },
  {
    "movie_title": "Just Visiting",
    "release_date": "4/6/2001",
    "studio": "",
    "total_gross": 4777007,
    "inflation_adjusted_gross": 7114869,
    "day_of_year": 96,
    "year": 2001
  },
  {
    "movie_title": "Tuck Everlasting",
    "release_date": "10/11/2002",
    "studio": "Walt Disney Productions",
    "total_gross": 19161999,
    "inflation_adjusted_gross": 27789959,
    "day_of_year": 284,
    "year": 2002
  },
  {
    "movie_title": "Pearl Harbor",
    "release_date": "5/25/2001",
    "studio": "",
    "total_gross": 198539855,
    "inflation_adjusted_gross": 295705112,
    "day_of_year": 145,
    "year": 2001
  },
  {
    "movie_title": "crazy/beautiful",
    "release_date": "6/29/2001",
    "studio": "",
    "total_gross": 16929123,
    "inflation_adjusted_gross": 25214223,
    "day_of_year": 180,
    "year": 2001
  },
  {
    "movie_title": "Bubble Boy",
    "release_date": "8/24/2001",
    "studio": "",
    "total_gross": 5002310,
    "inflation_adjusted_gross": 7450434,
    "day_of_year": 236,
    "year": 2001
  },
  {
    "movie_title": "The Boatniks",
    "release_date": "7/1/1970",
    "studio": "Walt Disney Productions",
    "total_gross": 18607492,
    "inflation_adjusted_gross": 101200742,
    "day_of_year": 182,
    "year": 1970
  },
  {
    "movie_title": "Flight of the Navigator",
    "release_date": "7/30/1986",
    "studio": "Walt Disney Productions",
    "total_gross": 18564613,
    "inflation_adjusted_gross": 42183197,
    "day_of_year": 211,
    "year": 1986
  },
  {
    "movie_title": "That Darn Cat",
    "release_date": "2/14/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 18301828,
    "inflation_adjusted_gross": 33613158,
    "day_of_year": 45,
    "year": 1997
  },
  {
    "movie_title": "Corky Romano",
    "release_date": "10/12/2001",
    "studio": "",
    "total_gross": 23978402,
    "inflation_adjusted_gross": 35705805,
    "day_of_year": 285,
    "year": 2001
  },
  {
    "movie_title": "High Heels and Low Lifes",
    "release_date": "10/26/2001",
    "studio": "",
    "total_gross": 226792,
    "inflation_adjusted_gross": 337782,
    "day_of_year": 299,
    "year": 2001
  },
  {
    "movie_title": "Pooh's Heffalump Movie",
    "release_date": "2/11/2005",
    "studio": "DisneyToon Studios",
    "total_gross": 18098433,
    "inflation_adjusted_gross": 23801835,
    "day_of_year": 42,
    "year": 2005
  },
  {
    "movie_title": "DuckTales: The Movie - Treasure of the Lost Lamp",
    "release_date": "8/3/1990",
    "studio": "DisneyToon Studios",
    "total_gross": 18075331,
    "inflation_adjusted_gross": 36107823,
    "day_of_year": 215,
    "year": 1990
  },
  {
    "movie_title": "Bedknobs and Broomsticks",
    "release_date": "10/7/1971",
    "studio": "Walt Disney Productions",
    "total_gross": 17871174,
    "inflation_adjusted_gross": 91305448,
    "day_of_year": 280,
    "year": 1971
  },
  {
    "movie_title": "Out Cold",
    "release_date": "11/21/2001",
    "studio": "",
    "total_gross": 13906394,
    "inflation_adjusted_gross": 20700691,
    "day_of_year": 325,
    "year": 2001
  },
  {
    "movie_title": "The Royal Tenenbaums",
    "release_date": "12/14/2001",
    "studio": "",
    "total_gross": 52353636,
    "inflation_adjusted_gross": 76758193,
    "day_of_year": 348,
    "year": 2001
  },
  {
    "movie_title": "The Big Green",
    "release_date": "9/29/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 17736619,
    "inflation_adjusted_gross": 34372339,
    "day_of_year": 272,
    "year": 1995
  },
  {
    "movie_title": "Heavy Weights",
    "release_date": "2/17/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 17671310,
    "inflation_adjusted_gross": 34245779,
    "day_of_year": 48,
    "year": 1995
  },
  {
    "movie_title": "Max Keeble's Big Move",
    "release_date": "10/5/2001",
    "studio": "Walt Disney Productions",
    "total_gross": 17292381,
    "inflation_adjusted_gross": 25749730,
    "day_of_year": 278,
    "year": 2001
  },
  {
    "movie_title": "Frank McKlusky C.I.",
    "release_date": "1/1/2002",
    "studio": "",
    "total_gross": 0,
    "inflation_adjusted_gross": 0,
    "day_of_year": 1,
    "year": 2002
  },
  {
    "movie_title": "The Count of Monte Cristo",
    "release_date": "1/25/2002",
    "studio": "",
    "total_gross": 54228104,
    "inflation_adjusted_gross": 78682079,
    "day_of_year": 25,
    "year": 2002
  },
  {
    "movie_title": "Ghosts of the Abyss",
    "release_date": "4/11/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 17093668,
    "inflation_adjusted_gross": 23803108,
    "day_of_year": 101,
    "year": 2003
  },
  {
    "movie_title": "The Country Bears",
    "release_date": "7/26/2002",
    "studio": "Walt Disney Productions",
    "total_gross": 16988996,
    "inflation_adjusted_gross": 24650121,
    "day_of_year": 207,
    "year": 2002
  },
  {
    "movie_title": "Reign of Fire",
    "release_date": "2/19/2002",
    "studio": "",
    "total_gross": 43061982,
    "inflation_adjusted_gross": 62480631,
    "day_of_year": 50,
    "year": 2002
  },
  {
    "movie_title": "Sorority Boys",
    "release_date": "3/22/2002",
    "studio": "",
    "total_gross": 10198766,
    "inflation_adjusted_gross": 14797862,
    "day_of_year": 81,
    "year": 2002
  },
  {
    "movie_title": "Big Trouble",
    "release_date": "4/5/2002",
    "studio": "",
    "total_gross": 7262288,
    "inflation_adjusted_gross": 10537188,
    "day_of_year": 95,
    "year": 2002
  },
  {
    "movie_title": "ESPN's Ultimate X - The Movie",
    "release_date": "5/10/2002",
    "studio": "",
    "total_gross": 4197175,
    "inflation_adjusted_gross": 6089874,
    "day_of_year": 130,
    "year": 2002
  },
  {
    "movie_title": "The Devil and Max Devlin",
    "release_date": "1/1/1981",
    "studio": "Walt Disney Productions",
    "total_gross": 16000000,
    "inflation_adjusted_gross": 48517980,
    "day_of_year": 1,
    "year": 1981
  },
  {
    "movie_title": "Bad Company",
    "release_date": "6/7/2002",
    "studio": "",
    "total_gross": 30157016,
    "inflation_adjusted_gross": 43756218,
    "day_of_year": 158,
    "year": 2002
  },
  {
    "movie_title": "Rocket Man",
    "release_date": "10/10/1997",
    "studio": "Walt Disney Productions",
    "total_gross": 15448043,
    "inflation_adjusted_gross": 28371890,
    "day_of_year": 283,
    "year": 1997
  },
  {
    "movie_title": "Signs",
    "release_date": "8/2/2002",
    "studio": "",
    "total_gross": 227965690,
    "inflation_adjusted_gross": 330754439,
    "day_of_year": 214,
    "year": 2002
  },
  {
    "movie_title": "Sen to Chihiro no Kamikakushi",
    "release_date": "9/20/2002",
    "studio": "",
    "total_gross": 10049886,
    "inflation_adjusted_gross": 14338992,
    "day_of_year": 263,
    "year": 2002
  },
  {
    "movie_title": "Sweet Home Alabama",
    "release_date": "9/27/2002",
    "studio": "",
    "total_gross": 127214072,
    "inflation_adjusted_gross": 184521151,
    "day_of_year": 270,
    "year": 2002
  },
  {
    "movie_title": "The Greatest Game Ever Played",
    "release_date": "9/30/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 15331289,
    "inflation_adjusted_gross": 20162672,
    "day_of_year": 273,
    "year": 2005
  },
  {
    "movie_title": "Benji the Hunted",
    "release_date": "6/5/1987",
    "studio": "Walt Disney Productions",
    "total_gross": 15212539,
    "inflation_adjusted_gross": 32798382,
    "day_of_year": 156,
    "year": 1987
  },
  {
    "movie_title": "Moonlight Mile",
    "release_date": "9/27/2002",
    "studio": "",
    "total_gross": 6830957,
    "inflation_adjusted_gross": 9909094,
    "day_of_year": 270,
    "year": 2002
  },
  {
    "movie_title": "The Hot Chick",
    "release_date": "12/13/2002",
    "studio": "",
    "total_gross": 35081550,
    "inflation_adjusted_gross": 50624654,
    "day_of_year": 347,
    "year": 2002
  },
  {
    "movie_title": "25th Hour",
    "release_date": "12/19/2002",
    "studio": "",
    "total_gross": 13084595,
    "inflation_adjusted_gross": 18325463,
    "day_of_year": 353,
    "year": 2002
  },
  {
    "movie_title": "The Recruit",
    "release_date": "1/31/2003",
    "studio": "",
    "total_gross": 52784696,
    "inflation_adjusted_gross": 73793522,
    "day_of_year": 31,
    "year": 2003
  },
  {
    "movie_title": "Shanghai Knights",
    "release_date": "2/7/2003",
    "studio": "",
    "total_gross": 60470220,
    "inflation_adjusted_gross": 84537962,
    "day_of_year": 38,
    "year": 2003
  },
  {
    "movie_title": "Bringing Down the House",
    "release_date": "3/7/2003",
    "studio": "",
    "total_gross": 132675402,
    "inflation_adjusted_gross": 185481530,
    "day_of_year": 66,
    "year": 2003
  },
  {
    "movie_title": "Open Range",
    "release_date": "8/15/2003",
    "studio": "",
    "total_gross": 58331254,
    "inflation_adjusted_gross": 81547672,
    "day_of_year": 227,
    "year": 2003
  },
  {
    "movie_title": "Cold Creek Manor",
    "release_date": "9/19/2003",
    "studio": "",
    "total_gross": 21384035,
    "inflation_adjusted_gross": 29895090,
    "day_of_year": 262,
    "year": 2003
  },
  {
    "movie_title": "Under the Tuscan Sun",
    "release_date": "9/26/2003",
    "studio": "",
    "total_gross": 43601508,
    "inflation_adjusted_gross": 60944053,
    "day_of_year": 269,
    "year": 2003
  },
  {
    "movie_title": "Return to Snowy River",
    "release_date": "4/15/1988",
    "studio": "Walt Disney Productions",
    "total_gross": 13687027,
    "inflation_adjusted_gross": 28073384,
    "day_of_year": 106,
    "year": 1988
  },
  {
    "movie_title": "Veronica Guerin",
    "release_date": "10/17/2003",
    "studio": "",
    "total_gross": 1569918,
    "inflation_adjusted_gross": 2194759,
    "day_of_year": 290,
    "year": 2003
  },
  {
    "movie_title": "A Kid in King Arthur's Court",
    "release_date": "8/11/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 13406717,
    "inflation_adjusted_gross": 25981285,
    "day_of_year": 223,
    "year": 1995
  },
  {
    "movie_title": "One Magic Christmas",
    "release_date": "11/22/1985",
    "studio": "Walt Disney Productions",
    "total_gross": 13229514,
    "inflation_adjusted_gross": 31415432,
    "day_of_year": 326,
    "year": 1985
  },
  {
    "movie_title": "Calendar Girls",
    "release_date": "12/19/2003",
    "studio": "",
    "total_gross": 31011616,
    "inflation_adjusted_gross": 42379650,
    "day_of_year": 353,
    "year": 2003
  },
  {
    "movie_title": "Teacher's Pet: The Movie",
    "release_date": "1/16/2004",
    "studio": "",
    "total_gross": 6491969,
    "inflation_adjusted_gross": 8812764,
    "day_of_year": 16,
    "year": 2004
  },
  {
    "movie_title": "A Far Off Place",
    "release_date": "3/12/1993",
    "studio": "Walt Disney Productions",
    "total_gross": 12890752,
    "inflation_adjusted_gross": 26248558,
    "day_of_year": 71,
    "year": 1993
  },
  {
    "movie_title": "Hidalgo",
    "release_date": "3/5/2004",
    "studio": "",
    "total_gross": 67286731,
    "inflation_adjusted_gross": 91340921,
    "day_of_year": 65,
    "year": 2004
  },
  {
    "movie_title": "The Ladykillers",
    "release_date": "3/26/2004",
    "studio": "",
    "total_gross": 39692139,
    "inflation_adjusted_gross": 53881593,
    "day_of_year": 86,
    "year": 2004
  },
  {
    "movie_title": "The Alamo",
    "release_date": "4/9/2004",
    "studio": "",
    "total_gross": 22406362,
    "inflation_adjusted_gross": 30416359,
    "day_of_year": 100,
    "year": 2004
  },
  {
    "movie_title": "Raising Helen",
    "release_date": "5/28/2004",
    "studio": "",
    "total_gross": 37485528,
    "inflation_adjusted_gross": 50886144,
    "day_of_year": 149,
    "year": 2004
  },
  {
    "movie_title": "King Arthur",
    "release_date": "7/7/2004",
    "studio": "",
    "total_gross": 51877963,
    "inflation_adjusted_gross": 70423706,
    "day_of_year": 189,
    "year": 2004
  },
  {
    "movie_title": "The Village",
    "release_date": "7/30/2004",
    "studio": "",
    "total_gross": 114197520,
    "inflation_adjusted_gross": 155021748,
    "day_of_year": 212,
    "year": 2004
  },
  {
    "movie_title": "The Princess Diaries 2: Royal Engagement",
    "release_date": "8/11/2004",
    "studio": "",
    "total_gross": 95149435,
    "inflation_adjusted_gross": 129164207,
    "day_of_year": 224,
    "year": 2004
  },
  {
    "movie_title": "Mr. 3000",
    "release_date": "9/17/2004",
    "studio": "",
    "total_gross": 21800302,
    "inflation_adjusted_gross": 29593641,
    "day_of_year": 261,
    "year": 2004
  },
  {
    "movie_title": "The Last Shot",
    "release_date": "9/24/2004",
    "studio": "",
    "total_gross": 463730,
    "inflation_adjusted_gross": 629502,
    "day_of_year": 268,
    "year": 2004
  },
  {
    "movie_title": "I'll Be Home For Christmas",
    "release_date": "11/13/1998",
    "studio": "Walt Disney Productions",
    "total_gross": 12214338,
    "inflation_adjusted_gross": 21941840,
    "day_of_year": 317,
    "year": 1998
  },
  {
    "movie_title": "Ladder 49",
    "release_date": "10/1/2004",
    "studio": "",
    "total_gross": 74541707,
    "inflation_adjusted_gross": 101161045,
    "day_of_year": 275,
    "year": 2004
  },
  {
    "movie_title": "The Life Aquatic with Steve Zissou",
    "release_date": "12/10/2004",
    "studio": "",
    "total_gross": 24006726,
    "inflation_adjusted_gross": 32198655,
    "day_of_year": 345,
    "year": 2004
  },
  {
    "movie_title": "A Lot Like Love",
    "release_date": "4/22/2005",
    "studio": "",
    "total_gross": 21835784,
    "inflation_adjusted_gross": 28716947,
    "day_of_year": 112,
    "year": 2005
  },
  {
    "movie_title": "The Hitchhiker's Guide to the Galaxy",
    "release_date": "4/29/2005",
    "studio": "",
    "total_gross": 51019112,
    "inflation_adjusted_gross": 67096891,
    "day_of_year": 119,
    "year": 2005
  },
  {
    "movie_title": "Hauru no ugoku shiro",
    "release_date": "6/10/2005",
    "studio": "",
    "total_gross": 4710455,
    "inflation_adjusted_gross": 6194870,
    "day_of_year": 161,
    "year": 2005
  },
  {
    "movie_title": "Dark Water",
    "release_date": "7/8/2005",
    "studio": "",
    "total_gross": 25473093,
    "inflation_adjusted_gross": 33500491,
    "day_of_year": 189,
    "year": 2005
  },
  {
    "movie_title": "Flightplan",
    "release_date": "9/23/2005",
    "studio": "",
    "total_gross": 89706988,
    "inflation_adjusted_gross": 117960425,
    "day_of_year": 266,
    "year": 2005
  },
  {
    "movie_title": "Shopgirl",
    "release_date": "10/21/2005",
    "studio": "",
    "total_gross": 10284523,
    "inflation_adjusted_gross": 13519621,
    "day_of_year": 294,
    "year": 2005
  },
  {
    "movie_title": "The Last Flight of Noah's Ark",
    "release_date": "6/25/1980",
    "studio": "Walt Disney Productions",
    "total_gross": 11000000,
    "inflation_adjusted_gross": 34472116,
    "day_of_year": 177,
    "year": 1980
  },
  {
    "movie_title": "Casanova",
    "release_date": "12/25/2005",
    "studio": "",
    "total_gross": 11304403,
    "inflation_adjusted_gross": 14574087,
    "day_of_year": 359,
    "year": 2005
  },
  {
    "movie_title": "Return to Oz",
    "release_date": "6/21/1985",
    "studio": "Walt Disney Productions",
    "total_gross": 10618813,
    "inflation_adjusted_gross": 25215934,
    "day_of_year": 172,
    "year": 1985
  },
  {
    "movie_title": "Annapolis",
    "release_date": "1/27/2006",
    "studio": "",
    "total_gross": 17127992,
    "inflation_adjusted_gross": 22044113,
    "day_of_year": 27,
    "year": 2006
  },
  {
    "movie_title": "Stay Alive",
    "release_date": "3/24/2006",
    "studio": "",
    "total_gross": 23086480,
    "inflation_adjusted_gross": 29712825,
    "day_of_year": 83,
    "year": 2006
  },
  {
    "movie_title": "Roving Mars",
    "release_date": "1/27/2006",
    "studio": "Walt Disney Productions",
    "total_gross": 10407978,
    "inflation_adjusted_gross": 12948025,
    "day_of_year": 27,
    "year": 2006
  },
  {
    "movie_title": "Stick It",
    "release_date": "4/28/2006",
    "studio": "",
    "total_gross": 26910736,
    "inflation_adjusted_gross": 34634731,
    "day_of_year": 118,
    "year": 2006
  },
  {
    "movie_title": "Goal! The Dream Begins",
    "release_date": "5/12/2006",
    "studio": "",
    "total_gross": 4283255,
    "inflation_adjusted_gross": 5512647,
    "day_of_year": 132,
    "year": 2006
  },
  {
    "movie_title": "Step Up",
    "release_date": "8/11/2006",
    "studio": "",
    "total_gross": 65328121,
    "inflation_adjusted_gross": 84078780,
    "day_of_year": 223,
    "year": 2006
  },
  {
    "movie_title": "Babes in Toyland",
    "release_date": "12/14/1961",
    "studio": "Walt Disney Productions",
    "total_gross": 10218316,
    "inflation_adjusted_gross": 124841160,
    "day_of_year": 348,
    "year": 1961
  },
  {
    "movie_title": "The Guardian",
    "release_date": "9/29/2006",
    "studio": "",
    "total_gross": 55011732,
    "inflation_adjusted_gross": 70801353,
    "day_of_year": 272,
    "year": 2006
  },
  {
    "movie_title": "The Prestige",
    "release_date": "10/20/2006",
    "studio": "",
    "total_gross": 53089891,
    "inflation_adjusted_gross": 68289913,
    "day_of_year": 293,
    "year": 2006
  },
  {
    "movie_title": "Tim Burton's The Nightmare Before Christmas",
    "release_date": "10/20/2006",
    "studio": "",
    "total_gross": 24732041,
    "inflation_adjusted_gross": 30737517,
    "day_of_year": 293,
    "year": 2006
  },
  {
    "movie_title": "Deja Vu",
    "release_date": "11/22/2006",
    "studio": "",
    "total_gross": 64038616,
    "inflation_adjusted_gross": 82267038,
    "day_of_year": 326,
    "year": 2006
  },
  {
    "movie_title": "The Journey of Natty Gann",
    "release_date": "9/27/1985",
    "studio": "Walt Disney Productions",
    "total_gross": 9468512,
    "inflation_adjusted_gross": 22302956,
    "day_of_year": 270,
    "year": 1985
  },
  {
    "movie_title": "Sleeping Beauty",
    "release_date": "1/29/1959",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 9464608,
    "inflation_adjusted_gross": 21505832,
    "day_of_year": 29,
    "year": 1959
  },
  {
    "movie_title": "Apocalypto",
    "release_date": "12/8/2006",
    "studio": "",
    "total_gross": 50866635,
    "inflation_adjusted_gross": 64959548,
    "day_of_year": 342,
    "year": 2006
  },
  {
    "movie_title": "Primeval",
    "release_date": "1/12/2007",
    "studio": "",
    "total_gross": 10597734,
    "inflation_adjusted_gross": 12985302,
    "day_of_year": 12,
    "year": 2007
  },
  {
    "movie_title": "Bon Voyage!",
    "release_date": "5/17/1962",
    "studio": "Walt Disney Productions",
    "total_gross": 9230769,
    "inflation_adjusted_gross": 109581646,
    "day_of_year": 137,
    "year": 1962
  },
  {
    "movie_title": "Fantasia 2000 (Theatrical Release)",
    "release_date": "6/16/2000",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 9103630,
    "inflation_adjusted_gross": 14238144,
    "day_of_year": 168,
    "year": 2000
  },
  {
    "movie_title": "Aliens of the Deep",
    "release_date": "1/28/2005",
    "studio": "Walt Disney Productions",
    "total_gross": 8968684,
    "inflation_adjusted_gross": 11740942,
    "day_of_year": 28,
    "year": 2005
  },
  {
    "movie_title": "Wild Hogs",
    "release_date": "3/2/2007",
    "studio": "",
    "total_gross": 168213584,
    "inflation_adjusted_gross": 206110533,
    "day_of_year": 61,
    "year": 2007
  },
  {
    "movie_title": "The Lookout",
    "release_date": "3/30/2007",
    "studio": "",
    "total_gross": 4600585,
    "inflation_adjusted_gross": 5637048,
    "day_of_year": 89,
    "year": 2007
  },
  {
    "movie_title": "The Hoax",
    "release_date": "4/6/2007",
    "studio": "",
    "total_gross": 7164995,
    "inflation_adjusted_gross": 8779196,
    "day_of_year": 96,
    "year": 2007
  },
  {
    "movie_title": "White Fang 2: Myth of the White Wolf",
    "release_date": "4/15/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 8752399,
    "inflation_adjusted_gross": 18083994,
    "day_of_year": 105,
    "year": 1994
  },
  {
    "movie_title": "The Invisible",
    "release_date": "4/27/2007",
    "studio": "",
    "total_gross": 20568319,
    "inflation_adjusted_gross": 25202168,
    "day_of_year": 117,
    "year": 2007
  },
  {
    "movie_title": "Underdog",
    "release_date": "8/3/2007",
    "studio": "Walt Disney Productions",
    "total_gross": 43760605,
    "inflation_adjusted_gross": 53619462,
    "day_of_year": 215,
    "year": 2007
  },
  {
    "movie_title": "The Game Plan",
    "release_date": "9/22/2007",
    "studio": "",
    "total_gross": 90648202,
    "inflation_adjusted_gross": 111010758,
    "day_of_year": 265,
    "year": 2007
  },
  {
    "movie_title": "Dan in Real Life",
    "release_date": "10/20/2007",
    "studio": "",
    "total_gross": 47642963,
    "inflation_adjusted_gross": 58350234,
    "day_of_year": 293,
    "year": 2007
  },
  {
    "movie_title": "Enchanted",
    "release_date": "11/21/2007",
    "studio": "",
    "total_gross": 127706877,
    "inflation_adjusted_gross": 156074310,
    "day_of_year": 325,
    "year": 2007
  },
  {
    "movie_title": "Tall Tale",
    "release_date": "3/24/1995",
    "studio": "Walt Disney Productions",
    "total_gross": 8247627,
    "inflation_adjusted_gross": 15983331,
    "day_of_year": 83,
    "year": 1995
  },
  {
    "movie_title": "Hannah Montana/Miley Cyrus: Best of Both Worlds",
    "release_date": "2/1/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 65281781,
    "inflation_adjusted_gross": 76646993,
    "day_of_year": 32,
    "year": 2008
  },
  {
    "movie_title": "Step Up 2 the Streets",
    "release_date": "2/14/2008",
    "studio": "",
    "total_gross": 58017783,
    "inflation_adjusted_gross": 68118371,
    "day_of_year": 45,
    "year": 2008
  },
  {
    "movie_title": "College Road Trip",
    "release_date": "3/7/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 45610425,
    "inflation_adjusted_gross": 53550960,
    "day_of_year": 67,
    "year": 2008
  },
  {
    "movie_title": "Swing Vote",
    "release_date": "8/1/2008",
    "studio": "",
    "total_gross": 16289867,
    "inflation_adjusted_gross": 19125841,
    "day_of_year": 214,
    "year": 2008
  },
  {
    "movie_title": "Cheetah",
    "release_date": "8/18/1989",
    "studio": "Walt Disney Productions",
    "total_gross": 7882250,
    "inflation_adjusted_gross": 16653473,
    "day_of_year": 230,
    "year": 1989
  },
  {
    "movie_title": "Goal! 2: Living the Dream...",
    "release_date": "8/29/2008",
    "studio": "",
    "total_gross": 225067,
    "inflation_adjusted_gross": 264247,
    "day_of_year": 242,
    "year": 2008
  },
  {
    "movie_title": "Miracle at St. Anna",
    "release_date": "9/26/2008",
    "studio": "",
    "total_gross": 7916887,
    "inflation_adjusted_gross": 9295171,
    "day_of_year": 270,
    "year": 2008
  },
  {
    "movie_title": "Beverly Hills Chihuahua",
    "release_date": "10/3/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 94514402,
    "inflation_adjusted_gross": 110932022,
    "day_of_year": 277,
    "year": 2008
  },
  {
    "movie_title": "Morning Light",
    "release_date": "10/17/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 275093,
    "inflation_adjusted_gross": 322979,
    "day_of_year": 291,
    "year": 2008
  },
  {
    "movie_title": "Wild Hearts Can't Be Broken",
    "release_date": "5/24/1991",
    "studio": "Walt Disney Productions",
    "total_gross": 7300000,
    "inflation_adjusted_gross": 14617333,
    "day_of_year": 144,
    "year": 1991
  },
  {
    "movie_title": "High School Musical 3: Senior Year",
    "release_date": "10/24/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 90559416,
    "inflation_adjusted_gross": 106308538,
    "day_of_year": 298,
    "year": 2008
  },
  {
    "movie_title": "Bedtime Stories",
    "release_date": "12/25/2008",
    "studio": "Walt Disney Productions",
    "total_gross": 110101975,
    "inflation_adjusted_gross": 128039679,
    "day_of_year": 360,
    "year": 2008
  },
  {
    "movie_title": "Tex",
    "release_date": "11/19/1982",
    "studio": "Walt Disney Productions",
    "total_gross": 7199408,
    "inflation_adjusted_gross": 20643199,
    "day_of_year": 323,
    "year": 1982
  },
  {
    "movie_title": "Confessions of a Shopaholic",
    "release_date": "2/13/2009",
    "studio": "",
    "total_gross": 44277350,
    "inflation_adjusted_gross": 49767744,
    "day_of_year": 44,
    "year": 2009
  },
  {
    "movie_title": "Jonas Brothers: The 3D Concert Experience",
    "release_date": "2/27/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 38174685,
    "inflation_adjusted_gross": 38174685,
    "day_of_year": 58,
    "year": 2009
  },
  {
    "movie_title": "Race to Witch Mountain",
    "release_date": "3/13/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 67172594,
    "inflation_adjusted_gross": 75501997,
    "day_of_year": 72,
    "year": 2009
  },
  {
    "movie_title": "Young Black Stallion",
    "release_date": "12/25/2003",
    "studio": "Walt Disney Productions",
    "total_gross": 6751389,
    "inflation_adjusted_gross": 9254344,
    "day_of_year": 359,
    "year": 2003
  },
  {
    "movie_title": "Hannah Montana the Movie",
    "release_date": "4/10/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 79576189,
    "inflation_adjusted_gross": 89443640,
    "day_of_year": 100,
    "year": 2009
  },
  {
    "movie_title": "The Straight Story",
    "release_date": "10/15/1999",
    "studio": "Walt Disney Productions",
    "total_gross": 6197866,
    "inflation_adjusted_gross": 10111144,
    "day_of_year": 288,
    "year": 1999
  },
  {
    "movie_title": "Earth",
    "release_date": "4/22/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 32011576,
    "inflation_adjusted_gross": 35981010,
    "day_of_year": 112,
    "year": 2009
  },
  {
    "movie_title": "The Proposal",
    "release_date": "6/19/2009",
    "studio": "",
    "total_gross": 163958031,
    "inflation_adjusted_gross": 184288829,
    "day_of_year": 170,
    "year": 2009
  },
  {
    "movie_title": "G-Force",
    "release_date": "7/24/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 119436770,
    "inflation_adjusted_gross": 134246932,
    "day_of_year": 205,
    "year": 2009
  },
  {
    "movie_title": "Gake no ue no Ponyo",
    "release_date": "8/14/2009",
    "studio": "",
    "total_gross": 15090399,
    "inflation_adjusted_gross": 16961607,
    "day_of_year": 226,
    "year": 2009
  },
  {
    "movie_title": "X Games 3D: The Movie",
    "release_date": "8/21/2009",
    "studio": "",
    "total_gross": 1391434,
    "inflation_adjusted_gross": 1563976,
    "day_of_year": 233,
    "year": 2009
  },
  {
    "movie_title": "Something Wicked This Way Comes",
    "release_date": "4/29/1983",
    "studio": "Walt Disney Productions",
    "total_gross": 5656087,
    "inflation_adjusted_gross": 15136765,
    "day_of_year": 119,
    "year": 1983
  },
  {
    "movie_title": "Walt and El Grupo",
    "release_date": "9/10/2009",
    "studio": "",
    "total_gross": 20521,
    "inflation_adjusted_gross": 23064,
    "day_of_year": 253,
    "year": 2009
  },
  {
    "movie_title": "Surrogates",
    "release_date": "9/25/2009",
    "studio": "",
    "total_gross": 38577772,
    "inflation_adjusted_gross": 43361416,
    "day_of_year": 268,
    "year": 2009
  },
  {
    "movie_title": "Disney's A Christmas Carol",
    "release_date": "11/6/2009",
    "studio": "",
    "total_gross": 137855863,
    "inflation_adjusted_gross": 154927105,
    "day_of_year": 310,
    "year": 2009
  },
  {
    "movie_title": "Old Dogs",
    "release_date": "11/25/2009",
    "studio": "Walt Disney Productions",
    "total_gross": 49492060,
    "inflation_adjusted_gross": 55503929,
    "day_of_year": 329,
    "year": 2009
  },
  {
    "movie_title": "When in Rome",
    "release_date": "1/29/2010",
    "studio": "",
    "total_gross": 32680633,
    "inflation_adjusted_gross": 34917330,
    "day_of_year": 29,
    "year": 2010
  },
  {
    "movie_title": "Alice in Wonderland",
    "release_date": "3/5/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 334191110,
    "inflation_adjusted_gross": 357063499,
    "day_of_year": 64,
    "year": 2010
  },
  {
    "movie_title": "Waking Sleeping Beauty",
    "release_date": "3/26/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 80741,
    "inflation_adjusted_gross": 86264,
    "day_of_year": 85,
    "year": 2010
  },
  {
    "movie_title": "The Last Song",
    "release_date": "3/31/2010",
    "studio": "",
    "total_gross": 62950384,
    "inflation_adjusted_gross": 67258772,
    "day_of_year": 90,
    "year": 2010
  },
  {
    "movie_title": "Oceans",
    "release_date": "4/22/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 19422319,
    "inflation_adjusted_gross": 20751600,
    "day_of_year": 112,
    "year": 2010
  },
  {
    "movie_title": "Prince of Persia: Sands of Time",
    "release_date": "5/28/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 90759676,
    "inflation_adjusted_gross": 96971361,
    "day_of_year": 148,
    "year": 2010
  },
  {
    "movie_title": "The Sorcerer's Apprentice",
    "release_date": "7/14/2010",
    "studio": "Walt Disney Productions",
    "total_gross": 63150991,
    "inflation_adjusted_gross": 67473105,
    "day_of_year": 195,
    "year": 2010
  },
  {
    "movie_title": "Step Up 3D",
    "release_date": "8/6/2010",
    "studio": "",
    "total_gross": 42400223,
    "inflation_adjusted_gross": 45302137,
    "day_of_year": 218,
    "year": 2010
  },
  {
    "movie_title": "Gedo Senki (Tales from Earthsea)",
    "release_date": "8/13/2010",
    "studio": "",
    "total_gross": 48658,
    "inflation_adjusted_gross": 51988,
    "day_of_year": 225,
    "year": 2010
  },
  {
    "movie_title": "You Again",
    "release_date": "9/24/2010",
    "studio": "",
    "total_gross": 25702053,
    "inflation_adjusted_gross": 27461121,
    "day_of_year": 267,
    "year": 2010
  },
  {
    "movie_title": "Night Crossing",
    "release_date": "2/5/1982",
    "studio": "Walt Disney Productions",
    "total_gross": 4500000,
    "inflation_adjusted_gross": 12903059,
    "day_of_year": 36,
    "year": 1982
  },
  {
    "movie_title": "Secretariat",
    "release_date": "10/8/2010",
    "studio": "",
    "total_gross": 59699513,
    "inflation_adjusted_gross": 63781920,
    "day_of_year": 281,
    "year": 2010
  },
  {
    "movie_title": "Meet the Deedles",
    "release_date": "3/27/1998",
    "studio": "Walt Disney Productions",
    "total_gross": 4356126,
    "inflation_adjusted_gross": 7829877,
    "day_of_year": 86,
    "year": 1998
  },
  {
    "movie_title": "Trenchcoat",
    "release_date": "3/11/1983",
    "studio": "Walt Disney Productions",
    "total_gross": 4304286,
    "inflation_adjusted_gross": 11519089,
    "day_of_year": 70,
    "year": 1983
  },
  {
    "movie_title": "Gnomeo and Juliet",
    "release_date": "2/11/2011",
    "studio": "",
    "total_gross": 99967670,
    "inflation_adjusted_gross": 106270797,
    "day_of_year": 42,
    "year": 2011
  },
  {
    "movie_title": "I am Number Four",
    "release_date": "2/18/2011",
    "studio": "",
    "total_gross": 55100437,
    "inflation_adjusted_gross": 58574607,
    "day_of_year": 49,
    "year": 2011
  },
  {
    "movie_title": "Mars Needs Moms",
    "release_date": "3/11/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 21392758,
    "inflation_adjusted_gross": 22741603,
    "day_of_year": 70,
    "year": 2011
  },
  {
    "movie_title": "African Cats",
    "release_date": "4/22/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 15428747,
    "inflation_adjusted_gross": 16401551,
    "day_of_year": 112,
    "year": 2011
  },
  {
    "movie_title": "Zokkomon",
    "release_date": "4/22/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 2815,
    "inflation_adjusted_gross": 2984,
    "day_of_year": 112,
    "year": 2011
  },
  {
    "movie_title": "Prom",
    "release_date": "4/29/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 10130219,
    "inflation_adjusted_gross": 10768946,
    "day_of_year": 119,
    "year": 2011
  },
  {
    "movie_title": "The Help",
    "release_date": "8/10/2011",
    "studio": "",
    "total_gross": 169705587,
    "inflation_adjusted_gross": 180404976,
    "day_of_year": 222,
    "year": 2011
  },
  {
    "movie_title": "Fright Night",
    "release_date": "8/19/2011",
    "studio": "",
    "total_gross": 18298649,
    "inflation_adjusted_gross": 19452402,
    "day_of_year": 231,
    "year": 2011
  },
  {
    "movie_title": "Real Steel",
    "release_date": "10/7/2011",
    "studio": "",
    "total_gross": 85463309,
    "inflation_adjusted_gross": 90848019,
    "day_of_year": 280,
    "year": 2011
  },
  {
    "movie_title": "Squanto: A Warrior's Tale",
    "release_date": "10/28/1994",
    "studio": "Walt Disney Productions",
    "total_gross": 3319344,
    "inflation_adjusted_gross": 6858345,
    "day_of_year": 301,
    "year": 1994
  },
  {
    "movie_title": "The Muppets",
    "release_date": "11/23/2011",
    "studio": "Walt Disney Productions",
    "total_gross": 88625922,
    "inflation_adjusted_gross": 94189503,
    "day_of_year": 327,
    "year": 2011
  },
  {
    "movie_title": "War Horse",
    "release_date": "12/25/2011",
    "studio": "",
    "total_gross": 79883359,
    "inflation_adjusted_gross": 84762149,
    "day_of_year": 359,
    "year": 2011
  },
  {
    "movie_title": "The Secret World of Arietty",
    "release_date": "2/17/2012",
    "studio": "",
    "total_gross": 19192510,
    "inflation_adjusted_gross": 20325733,
    "day_of_year": 48,
    "year": 2012
  },
  {
    "movie_title": "Midnight Madness",
    "release_date": "2/8/1980",
    "studio": "Walt Disney Productions",
    "total_gross": 2900000,
    "inflation_adjusted_gross": 9088096,
    "day_of_year": 39,
    "year": 1980
  },
  {
    "movie_title": "John Carter",
    "release_date": "3/9/2012",
    "studio": "Walt Disney Productions",
    "total_gross": 73058679,
    "inflation_adjusted_gross": 77372445,
    "day_of_year": 69,
    "year": 2012
  },
  {
    "movie_title": "Chimpanzee",
    "release_date": "4/20/2012",
    "studio": "Walt Disney Productions",
    "total_gross": 28965459,
    "inflation_adjusted_gross": 30675725,
    "day_of_year": 111,
    "year": 2012
  },
  {
    "movie_title": "Newsies",
    "release_date": "4/8/1992",
    "studio": "Walt Disney Productions",
    "total_gross": 2706352,
    "inflation_adjusted_gross": 5497481,
    "day_of_year": 99,
    "year": 1992
  },
  {
    "movie_title": "People Like Us",
    "release_date": "6/29/2012",
    "studio": "",
    "total_gross": 12431792,
    "inflation_adjusted_gross": 13165822,
    "day_of_year": 181,
    "year": 2012
  },
  {
    "movie_title": "The Odd Life of Timothy Green",
    "release_date": "8/15/2012",
    "studio": "Walt Disney Productions",
    "total_gross": 51853450,
    "inflation_adjusted_gross": 54914942,
    "day_of_year": 228,
    "year": 2012
  },
  {
    "movie_title": "Frankenweenie",
    "release_date": "10/5/2012",
    "studio": "Tim Burton",
    "total_gross": 35287788,
    "inflation_adjusted_gross": 37363513,
    "day_of_year": 279,
    "year": 2012
  },
  {
    "movie_title": "Lincoln",
    "release_date": "11/9/2012",
    "studio": "",
    "total_gross": 182207973,
    "inflation_adjusted_gross": 192122330,
    "day_of_year": 314,
    "year": 2012
  },
  {
    "movie_title": "Oz the Great and Powerful",
    "release_date": "3/8/2013",
    "studio": "Walt Disney Productions",
    "total_gross": 234770996,
    "inflation_adjusted_gross": 243434130,
    "day_of_year": 67,
    "year": 2013
  },
  {
    "movie_title": "The Lone Ranger",
    "release_date": "7/2/2013",
    "studio": "Walt Disney Productions",
    "total_gross": 89302115,
    "inflation_adjusted_gross": 92597388,
    "day_of_year": 183,
    "year": 2013
  },
  {
    "movie_title": "The Fifth Estate",
    "release_date": "10/18/2013",
    "studio": "",
    "total_gross": 3254172,
    "inflation_adjusted_gross": 3374251,
    "day_of_year": 291,
    "year": 2013
  },
  {
    "movie_title": "Kaze Tachinu",
    "release_date": "11/8/2013",
    "studio": "",
    "total_gross": 5201879,
    "inflation_adjusted_gross": 5367415,
    "day_of_year": 312,
    "year": 2013
  },
  {
    "movie_title": "Delivery Man",
    "release_date": "11/22/2013",
    "studio": "",
    "total_gross": 30659817,
    "inflation_adjusted_gross": 31787136,
    "day_of_year": 326,
    "year": 2013
  },
  {
    "movie_title": "Saving Mr. Banks",
    "release_date": "12/13/2013",
    "studio": "Walt Disney Productions",
    "total_gross": 83299761,
    "inflation_adjusted_gross": 86249969,
    "day_of_year": 347,
    "year": 2013
  },
  {
    "movie_title": "Need for Speed",
    "release_date": "3/14/2014",
    "studio": "",
    "total_gross": 43568507,
    "inflation_adjusted_gross": 44955015,
    "day_of_year": 73,
    "year": 2014
  },
  {
    "movie_title": "Muppets Most Wanted",
    "release_date": "3/21/2014",
    "studio": "Walt Disney Productions",
    "total_gross": 51178893,
    "inflation_adjusted_gross": 52807594,
    "day_of_year": 80,
    "year": 2014
  },
  {
    "movie_title": "Bears",
    "release_date": "4/18/2014",
    "studio": "Walt Disney Productions",
    "total_gross": 17780194,
    "inflation_adjusted_gross": 18346024,
    "day_of_year": 108,
    "year": 2014
  },
  {
    "movie_title": "Million Dollar Arm",
    "release_date": "5/10/2014",
    "studio": "Walt Disney Productions",
    "total_gross": 36447959,
    "inflation_adjusted_gross": 37607865,
    "day_of_year": 130,
    "year": 2014
  },
  {
    "movie_title": "Maleficent",
    "release_date": "5/30/2014",
    "studio": "",
    "total_gross": 241407328,
    "inflation_adjusted_gross": 249089809,
    "day_of_year": 150,
    "year": 2014
  },
  {
    "movie_title": "The Hundred-Foot Journey",
    "release_date": "8/8/2014",
    "studio": "",
    "total_gross": 54235441,
    "inflation_adjusted_gross": 55961409,
    "day_of_year": 220,
    "year": 2014
  },
  {
    "movie_title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "release_date": "10/10/2014",
    "studio": "Walt Disney Productions",
    "total_gross": 66954149,
    "inflation_adjusted_gross": 69055550,
    "day_of_year": 283,
    "year": 2014
  },
  {
    "movie_title": "Into the Woods",
    "release_date": "12/25/2014",
    "studio": "Walt Disney Productions",
    "total_gross": 128002372,
    "inflation_adjusted_gross": 130894237,
    "day_of_year": 359,
    "year": 2014
  },
  {
    "movie_title": "Strange Magic",
    "release_date": "1/23/2015",
    "studio": "",
    "total_gross": 12429583,
    "inflation_adjusted_gross": 12429583,
    "day_of_year": 23,
    "year": 2015
  },
  {
    "movie_title": "America's Heart and Soul",
    "release_date": "7/2/2004",
    "studio": "Walt Disney Productions",
    "total_gross": 314000,
    "inflation_adjusted_gross": 426246,
    "day_of_year": 184,
    "year": 2004
  },
  {
    "movie_title": "McFarland, USA",
    "release_date": "2/20/2015",
    "studio": "Walt Disney Productions",
    "total_gross": 44480275,
    "inflation_adjusted_gross": 44480275,
    "day_of_year": 51,
    "year": 2015
  },
  {
    "movie_title": "Cinderella",
    "release_date": "3/13/2015",
    "studio": "Walt Disney Productions",
    "total_gross": 201151353,
    "inflation_adjusted_gross": 201151353,
    "day_of_year": 72,
    "year": 2015
  },
  {
    "movie_title": "Endurance",
    "release_date": "5/14/1999",
    "studio": "Walt Disney Productions",
    "total_gross": 229128,
    "inflation_adjusted_gross": 380218,
    "day_of_year": 134,
    "year": 1999
  },
  {
    "movie_title": "Monkey Kingdom",
    "release_date": "4/17/2015",
    "studio": "Walt Disney Productions",
    "total_gross": 16432322,
    "inflation_adjusted_gross": 16432322,
    "day_of_year": 107,
    "year": 2015
  },
  {
    "movie_title": "Tomorrowland",
    "release_date": "5/22/2015",
    "studio": "Walt Disney Productions",
    "total_gross": 93436322,
    "inflation_adjusted_gross": 93436322,
    "day_of_year": 142,
    "year": 2015
  },
  {
    "movie_title": "Bridge of Spies",
    "release_date": "10/16/2015",
    "studio": "",
    "total_gross": 72313754,
    "inflation_adjusted_gross": 72313754,
    "day_of_year": 289,
    "year": 2015
  },
  {
    "movie_title": "The Finest Hours",
    "release_date": "1/29/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 27569558,
    "inflation_adjusted_gross": 27569558,
    "day_of_year": 29,
    "year": 2016
  },
  {
    "movie_title": "The Jungle Book",
    "release_date": "4/15/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 364001123,
    "inflation_adjusted_gross": 364001123,
    "day_of_year": 106,
    "year": 2016
  },
  {
    "movie_title": "A Beautiful Planet",
    "release_date": "4/29/2016",
    "studio": "",
    "total_gross": 7895708,
    "inflation_adjusted_gross": 7895708,
    "day_of_year": 120,
    "year": 2016
  },
  {
    "movie_title": "Alice Through the Looking Glass",
    "release_date": "5/27/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 77042381,
    "inflation_adjusted_gross": 77042381,
    "day_of_year": 148,
    "year": 2016
  },
  {
    "movie_title": "The BFG",
    "release_date": "7/1/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 55483770,
    "inflation_adjusted_gross": 55483770,
    "day_of_year": 183,
    "year": 2016
  },
  {
    "movie_title": "Pete's Dragon",
    "release_date": "8/12/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 76233151,
    "inflation_adjusted_gross": 76233151,
    "day_of_year": 225,
    "year": 2016
  },
  {
    "movie_title": "The Light Between Oceans",
    "release_date": "9/2/2016",
    "studio": "",
    "total_gross": 12545979,
    "inflation_adjusted_gross": 12545979,
    "day_of_year": 246,
    "year": 2016
  },
  {
    "movie_title": "Amy",
    "release_date": "3/20/1981",
    "studio": "Walt Disney Productions",
    "total_gross": 0,
    "inflation_adjusted_gross": 0,
    "day_of_year": 79,
    "year": 1981
  },
  {
    "movie_title": "Condorman",
    "release_date": "8/7/1981",
    "studio": "Walt Disney Productions",
    "total_gross": 0,
    "inflation_adjusted_gross": 0,
    "day_of_year": 219,
    "year": 1981
  },
  {
    "movie_title": "The Many Adventures of Winnie the Pooh",
    "release_date": "3/11/1977",
    "studio": "Walt Disney Animation Studio",
    "total_gross": 0,
    "inflation_adjusted_gross": 0,
    "day_of_year": 70,
    "year": 1977
  },
  {
    "movie_title": "Queen of Katwe",
    "release_date": "9/23/2016",
    "studio": "Walt Disney Productions",
    "total_gross": 8874389,
    "inflation_adjusted_gross": 8874389,
    "day_of_year": 267,
    "year": 2016
  }
];
data.sort((a, b) => b.inflation_adjusted_gross - a.inflation_adjusted_gross);

const margin = { top: 0, right: 0, bottom: 5, left: 80 },
  width = 1200 - margin.left - margin.right,
  height = 10000 - margin.top - margin.bottom,
  x = d3.scaleLinear().range([0, width]).domain([0, 365]),
  y = d3.scaleLinear().range([height, 0]).domain([1937, 2017]),
  r = d3
    .scaleSqrt()
    .range([10, 250])
    .domain(d3.extent(data, (d) => d.inflation_adjusted_gross));

const tooltip = d3.select("#tooltip");

const parseDate = d3.timeFormat("%m/%d/%Y").parse,
  formatDecimalComma = d3.format(",.2f"),
  formatMoney = (d) => `$${formatDecimalComma(d)}`;

const years = d3
  .select("#years")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 100 10000");

const disney = d3
  .select("#disney")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1200 10000");

disney
  .selectAll("line")
  .data(d3.range(1937, 2017))
  .enter()
  .append("line")
  .attr("x1", 0)
  .attr("y1", (d) => y(d))
  .attr("x2", width + margin.left + margin.right)
  .attr("y2", (d) => y(d))
  .attr("stroke-width", 2)
  .attr("stroke", "#333");

disney
  .selectAll("path")
  .data(data)
  .enter()
  .append("path")
  .attr("class", (d) => d.studio.split(" ").join("_"))
  .attr("transform", (d) => `translate(${x(d.day_of_year)},${y(d.year)})`)
  .attr(
    "d",
    d3
      .arc()
      .outerRadius((d) => r(d.inflation_adjusted_gross))
      .innerRadius(0)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
  )
  .on("mousemove", function (event, d) {
    d3.select(this).style("stroke-width", 2);
    const w = window.innerWidth,
      h = window.innerHeight,
      toolTipWidth = tooltip.node().getBoundingClientRect().width,
      toolTipHeight = tooltip.node().getBoundingClientRect().height;
  
  let studioText;
  d.studio ? studioText = `<br><span class="desc">Studio:</span> ${d.studio}` : ''
    tooltip
      .style("display", "block")
      .html(
        "<div>" +
          "<strong>" +
          d.movie_title +
          "</strong>" +
          "<br>" +
          '<span class="desc">Adjusted Gross:</span> ' + formatMoney(d.inflation_adjusted_gross) +
          "<br>" +
          '<span class="desc">Release Date:</span> ' + d.release_date +
          studioText +
          "</div>"
      );
    tooltip.style("top", "auto").style('bottom','auto')
    if (w > 700) {
      tooltip.style("width", "fit-content");
      event.x < w / 2
        ? tooltip.style("left", event.x + 20 + "px")
        : tooltip.style("left", event.x - toolTipWidth - 20 + "px");
      event.y < h / 1.5
        ? tooltip.style("top", event.y + 20 + "px")
        : tooltip.style("top", event.y - 20 - toolTipHeight + "px");
    } else {
      tooltip.style("bottom", 0).style("left", 0).style("width", "100%");
    }
  })
  .on("mouseout", function (d) {
    d3.select(this).style("stroke-width", 1);
    tooltip.style("display", "none");
  });

years
  .selectAll("text")
  .data(d3.range(1937, 2017))
  .enter()
  .append("text")
  .attr("x", 50)
  .attr("text-anchor", "middle")
  .attr("y", (d) => y(d))
  .text((d) => d);
