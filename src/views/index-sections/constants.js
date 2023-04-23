export const robot_boost = [
    {id:1, name:"Rank Boosting", url:"gc2"},
    {id:2, name:"Placement matches", url:"unranked"},
    {id:3, name:"Seasonal rewards", url:"diamond2"},
    {id:4, name:"Tournament wins", url:"tournamentwin"},
    {id:5, name:"Win boosting", url:"champion1"},
    {id:6, name:"Coaching", url:"ssl"},
    {id:7, name:"Play per hour", url:"champion2"},
]
export const legend_boost = [
    {id: 1, name:"Rank Boosting", url:"rank_boosting"},
    {id: 2, name:"Win Boosting", url:"win_boosting"},
    {id: 3, name:"Duo Boosting", url:"duo_boosting"},
    {id: 4, name:"Placements", url: "placements"},
    {id: 5, name:"Coaching", url: "coaching"},
]

export const rocket_rank = [
    { value:"bronze", name:"Bronze", level:3},
    { value:"silver", name:"Silver", level:3},
    { value:"gold", name:"Gold", level:3},
    { value:"platinum", name:"Platinum", level:3},
    { value:"diamond", name:"Diamond", level:3},
    { value:"champion", name:"Champion", level:3},
    { value:"gc", name:"Grand Champion", level:3},
    { value:"ssl", name:"SuperSonic Legend", level:1},
]
export const legend_rank = [
    { value:"iron", name:"Iron", level:4},
    { value:"bronze", name:"Bronze", level:4},
    { value:"silver", name:"Silver", level:4},
    { value:"gold", name:"Gold", level:4},
    { value:"platinum", name:"Platnium", level:4},
    { value:"diamond", name:"Diamond", level:4},
]
export const rocket_price = {
    rank:[2,2,2.5,2.5,2.5,3,3,3,4,5,6,7,8,9,10.5,12.5,15,22,34,53,77],
    placement:[1.5,1,1.1,1.4,1.8,1.8,2.2,3.8,5.1],
    season:[0.5,0.6,0.7,0.8,1,1.4,2.1,3.3],
    tournament:[8,11,15,18,26,38,48,85],
    win:[0.4,0.4,0.4,0.8,0.8,0.8,1.2,1.2,1.2,1.2,1.2,1.2,1.8,2.2,2.2,2.8,2.8,2.8,3.1,3.3,3.8],
    coach:[8,8,8,8,8,8,8,8,8,10,10,14,14,14,17,17,22,22,22,22,22],
    play:[8,8,8,8,8,8,8,8,8,13,13,13,13,13,13,18,18,18,22,22,22,22],
}
export const legend_price = {
    rank:[3,3,3,5, 5,5,5,6, 6,6,6,10, 10,10,10,15, 21.99,24.99,27.49,33.49, 66.99,84.99,124.99,199.99],
    win:[1.49,1.49,1.49,1.49,1.49,1.49,1.49,1.49,
        2.49,2.49,2.49,2.49,2.49,2.99,3.49,3.49,
        5.49,.49,6.49,7.49,10.49,13.49,16.49,24.49,31.49,],
    duo:[5.99,5.99,5.99,6.99,
        7.99,7.99,8.99,10.99,
        10.99,10.99,12.99,15.99,
        17.99,18.99,20.99,25.99,
        26.99,29.99,34.99,45.99,
        75.99,100.99,165.99,220.99,],
    placements:[2.6,1.6,1.6,1.6,1.6,1.8,1.8,1.8,1.8,2.7,2.7,2.7,2.7,3.6,3.6,3.6,3.6,
                4.5,4.5,4.5,4.5,
                6,6,6,6,
                7,7,7,7,
                8.5],
    coach:14.99,
}
export const robot_boost_label = [
    {},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Rank",dsub:"Select your desired rank"},
    {cheader:"Last known rank",csub:"Select your last known rank",dheader:"Desired Games",dsub:"Select your desired games"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Wins",dsub:"Select your desired reward wins"},
    {cheader:"Desired Tournament Win",csub:"Select your desired tournament win",dheader:"Desired Wins",dsub:"Select your desired reward wins"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Wins",dsub:"Select your desired ranked wins"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Hours",dsub:"Select your desired hours"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Hours",dsub:"Select your desired hours"},
]
export const legend_boost_label = [
    {},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Rank",dsub:"Select your desired rank"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Wins",dsub:"Select your desired wins"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Rank",dsub:"Select your desired rank"},
    {cheader:"Last Known Rank",csub:"Select last known rank",dheader:"Desired Matches",dsub:"Select your desired number of matches"},
    {cheader:"Current Rank",csub:"Select your current rank",dheader:"Desired Hours",dsub:"Select your desired hours"},
]
export const platformList = [
    { value:1, name:"PC" },
    { value:2, name:"PS4" },
    { value:3, name:"XBOX" },
]
export const gamemodeList = [
    { value:1, plus:0.3, name: "3v3 (+30%)", name2: "3v3"},
    { value:2, plus:0, name: "2v2 (Doubles)", name2: "2v2"},
    { value:3, plus:0, name: "1v1 (+0%)", name2: "1v1"},
    { value:4, plus:0.2, name: "Rumble (+20%)", name2: "Rumble"},
    { value:5, plus:0.4, name: "Dropshot (+40%)", name2: "Dropshot"},
    { value:6, plus:0.2, name: "Hoops (+20%)", name2: "Hoops"},
    { value:7, plus:0.4, name: "Snowday (+40%)", name2: "Snowday"},
]
export const serverList = [
    { value:1, name:"North America" },
    { value:2, name:"EU-West" },
    { value:3, name:"EU-Nordic & East" },
    { value:4, name:"Turkey" },
    { value:5, name:"Russia" },
    { value:6, name:"Brazil" },
    { value:7, name:"Latin America North" },
    { value:8, name:"Latin America South" },
    { value:9, name:"Oceania" },
    { value:10, name:"Korea" },
]
export const hours = [
    {value:1, name:"1 hour"},
    {value:2, name:"2 hour (5% OFF)"},
    {value:3, name:"3 hour (10% OFF)"},
    {value:4, name:"4 hour (10% OFF)"},
    {value:5, name:"5 hour (10% OFF)"},
]