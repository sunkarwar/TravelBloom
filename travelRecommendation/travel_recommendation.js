async function fetchData() {
    try {
        const fetchedDataResponse = await fetch('./travel_recommendation_api.json');
        if (!fetchedDataResponse.ok) {
            throw new Error('Network response was not ok');
        }
        return (await fetchedDataResponse.json());
    } catch (error) {
        console.error('There was a problem fetching data from travel recommendation api :', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}
async function retrievePlaces() {
    const allPlaces = await fetchData();
    let filteredData;
    const searchText = (document.getElementsByName('searchText')[0].value).toLowerCase();
    // const BEACHES = ['BEACHES', 'beaches', 'beach', 'BEACH']
    // Filter object based on keys that match the given value
    switch (searchText) {
        case 'beaches':
        case 'beach':
            filteredData = JSON.stringify(filterObjectByKey(allPlaces, 'beaches'));
            break;
        case 'temples':
        case 'temple':
            filteredData = JSON.stringify(filterObjectByKey(allPlaces, 'temples'));
            break;
        case 'countries':
        case 'country':
            filteredData = JSON.stringify(filterObjectByKey(allPlaces, 'countries'));
            break;
        default:
            filteredData = JSON.stringify(allPlaces);
    }
    document.getElementById("div_placeCard").innerHTML = `<h1>${filteredData}</h1>`;
}
function clearAll(){
    document.getElementById("div_placeCard").innerHTML = '';
}
// Function to filter object based on keys that match the given value
function filterObjectByKey(obj, value) {
    const filteredObject = {};
    for (const [key, val] of Object.entries(obj)) {
        if (key === value) {
            console.log(`key : ${key} and value = ${val}`)
            filteredObject[key] = val;
        }
    }
    return filteredObject;
}