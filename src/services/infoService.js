const userTokenFromLocalStorage = () =>window.localStorage.getItem("user token");
const removeTokenFromStorage= () => window.localStorage.removeItem("user token");
let USER_TOKEN = userTokenFromLocalStorage();

const setUserToken= (token) => {
    //console.log("setUserToken ", token)
    USER_TOKEN = token;
};
const createUrl = (begin, end) =>{//fill in end date and start date to form url
    return `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${begin}&end_date=${end}`;
};

const getData = async (begin, end) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token "+ USER_TOKEN);

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    return fetch(createUrl(begin, end), requestOptions)
        .then(response =>{

            return response.json();
        })
        .catch(error => console.log("error", error));
};


export default { getData, setUserToken,
    userTokenFromLocalStorage, removeTokenFromStorage };