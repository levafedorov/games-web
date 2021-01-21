
export const mockFetch = () => {
const mockHeaderItems = Promise.resolve({json: () => Promise.resolve(["destiny", "hunt the ravager", "warcraft", "watch dogs"])});
global.fetch = (request) => {
    let respond;
    switch(request){
    case "/header-items": respond = mockHeaderItems;
    }
    return respond;
 } 
}


    