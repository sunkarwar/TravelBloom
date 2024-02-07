const allPlacesApi = fetch('./travel_recommendation_api.json');

function retrievePlaces() {
    let allPlaces;
    allPlacesApi.then(data => data.json()).then(data => {
        console.log(`data from arrow :${data}`);
        allPlaces = data
    });
    console.log(allPlaces);
    document.getElementById("div_placeCard").innerHTML = `<h1>${allPlaces}</h1>`;
}