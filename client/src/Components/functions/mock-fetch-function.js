
export const mockFetch = () => {
const mockHeaderItems = Promise.resolve({json: () => Promise.resolve(["destiny", "hunt the ravager", "warcraft", "watch dogs"])});
const mockCompatiblePlatforms = Promise.resolve({json: () => Promise.resolve(["todos", "playstation", "xbox", "personal computer"])});
const mockGenres = Promise.resolve({json: () => Promise.resolve(["adventure", "rpg", "sport", "action", "strategy"])});
const mockNewItems = Promise.resolve({json: () => Promise.resolve(newGamesArr)});
const mockPreorderGamesArr = Promise.resolve({json: () => Promise.resolve(preorderGamesArr)});
global.fetch = (request) => {
    let respond;
    switch(request){
    case "/header-items": respond = mockHeaderItems;
    break;
    case "/compatible-platforms": respond = mockCompatiblePlatforms;
    break; 
    case "/new-items": respond = mockNewItems;
    break;
    case "/preorder-items": respond = mockPreorderGamesArr;
    break;
    case "/genres": respond = mockGenres;
    break;
    }
    return respond;
 } 
}


    var newGamesArr = [{
        name: "The Last of Us Remastered",
        genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2005,
        price: 122.00,
        rate: 10,
        platforms: ["xbox", "personal computer"],
        url:"last of us 2"
    },
    {
        name: "God of War",
        genres: ["adventure"],
        developer: "Beseda",
        year: 2005,
        price: 122.00,
        rate: 10,
        platforms: ["xbox", "personal computer"],
        url:"god of war"
    },
    {
        name: "Assassin's Creed: Odyssey",
        genres: ["action", "arcade"],
        developer: "Beseda",
        year: 2015,
        price: 121.00,
        rate: 10,
        platforms: ["xbox", "personal computer", "playstation"],
        url:"assassins creed"
    },
    {
        name: "Need for Speed: Heat",
        genres: ["action", "arcade", "race"],
        developer: "Beseda",
        year: 2015,
        price: 121.00,
        rate: 10,
        platforms: ["xbox", "personal computer", "playstation"],
        url:"need for speed"
    },
    {
        name: "League of Legends",
        genres: ["action", "strategy", "race"],
        developer: "Beseda",
        year: 2015,
        price: 55.00,
        rate: 8.8,
        platforms: ["personal computer"],
        url:"league of legends"
    },
    {
        name: "Resedent Evil",
        genres: ["action", "arcade", "quest"],
        developer: "Capcom",
        year: 1999,
        price: 121.00,
        rate: 1.5,
        platforms: ["xbox", "personal computer", "playstation"],
        url:"resedent evil"
    },
]

var preorderGamesArr = [
      { genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2012,
        date: new Date("2019-12-15"),
        platforms: ["xbox", "personal computer", "playstation"],
        url:"bloodlines 2",
      },
      { genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2012,
        date: new Date("2019-12-15"),
        platforms: ["xbox", "personal computer", "playstation"],
        url:"cyber punk",
      },
      { genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2012,
        date: new Date("2019-12-15"),
        platforms: ["xbox", "personal computer", "playstation"],
        url:"death stranding",
      },
      { genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2012,
        date: new Date("2019-12-15"),
        platforms: ["xbox", "personal computer", "playstation"],
        url:"mortal combat",
      },
      { genres: ["adventure", "action", "arcade"],
        developer: "Beseda",
        year: 2012,
        date: new Date("2019-12-15"),
        platforms: ["xbox", "personal computer", "playstation"],
        url:"sekiro",
      },

]