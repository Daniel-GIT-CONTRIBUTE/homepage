// // 'https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/#/'

// // const {Builder, By, until} = require('selenium-webdriver');
// // require('chromedriver');
// // const axios = require('axios');

// // async function check_availability(link, name){

// //     let result = await axios.get(link);
// //     // 2D array where each index holds 2 items: 
// //         // - 1)DATE OBJ date
// //         // - 2)STRING day-of-week
// //     let result_array = [];
// //     for(let date of result.data){
// //         let raw_date = new Date(date['date']);
// //         let day = raw_date.getDay();
// //         let day_string = intToDay(day);
// //         result_array.push([date['date'], day_string])
// //     }
// //     console.log(name);
// //     console.log(result_array);
// //     return result_array

// // }



// async function check_availability(link, name){
//     try {
//         let result = await axios.get(link);
//         let result_array = [];
//         for (let date of result.data) {
//             let raw_date = new Date(date['date']);
//             let day = raw_date.getDay();
//             let day_string = intToDay(day);
//             result_array.push([date['date'], day_string]);
//         }
//         console.log(name);
//         console.log(result_array);
//         return result_array; // Return the result array for further use
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }    
// }

// function intToDay(some_integer){
//     let day = '';
//     switch(some_integer){
//         case 0:
//             day = "Monday";
//             break;
//         case 1:
//             day = "Tuesday";
//             break;
//         case 2: 
//             day = "Wednesday";
//             break;
//         case 3:
//             day = "Thursday";
//             break;
//         case 4:
//             day = "Friday";
//             break;
//         default:
//             day = "Weekend";
//     }
//     return day;
// }


// // Link to check Clarenville 
// // https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/fcc98732f500631ca2bcdcd1895bc8cb0fdf5682dc12b82bca50525f40101c54/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30
// // Link to check Bay Roberts
// // https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/0530213b59d05514353e5567e29db9c9f2393c85c284456cfd410162fd44fa8d/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30
// // Link to Mount Pearl
// // https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/1eeaa32dbd6d7ead5a17b8aa3c7d12544e70ad5bad55eab02d3e03893d2eb42e/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30


// function getSJ(){
//     let MountPearl = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/1eeaa32dbd6d7ead5a17b8aa3c7d12544e70ad5bad55eab02d3e03893d2eb42e/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
//     let data = processResult(check_availability(MountPearl, "Mount Pearl"));
//     // $('#SJ-info').text(data);
// }

// function getCV(){
//     let Clarenville = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/fcc98732f500631ca2bcdcd1895bc8cb0fdf5682dc12b82bca50525f40101c54/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
//     let data = processResult(check_availability(Clarenville, "Clarenville"));
//     // $('#CV-info').text(data);
// }

// function getBR(){
//     let BayRoberts = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/0530213b59d05514353e5567e29db9c9f2393c85c284456cfd410162fd44fa8d/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
//     let data = processResult(check_availability(BayRoberts, "Bay Roberts"));
//     // $('#BR-info').text(data);
// }

// function processResult(result_array){
//     if(result_array.length == 0){return "no dates"}
//     else{return result_array}
// }

// $(document).ready(function(){

// })



async function fetchScrapedData() {
    try {
        const response = await fetch('YOUR_CLOUD_FUNCTION_URL');
        const data = await response.json();
        document.getElementById('scrapedData').textContent = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching scraped data:', error);
    }
}


async function getBR(){
    try{
        const response = await fetch('https://us-central1-omega-booster-425919-s7.cloudfunctions.net/?location=${location}`');
        $('#BR-info').text(response);
    } catch (error) {
        console.log(error);
    }
}

async function getCV(){
    try{
        const response = await fetch('https://us-central1-omega-booster-425919-s7.cloudfunctions.net/?location=${location}`')
        $('#CV-info').text(response);
    } catch (error) {
        console.log(error);
    }
}

async function getMP(){
    try{
        const response = await fetch('https://us-central1-omega-booster-425919-s7.cloudfunctions.net/scrape')
        console.log('hi');
        $('#MP-info').text(response);
    } catch (error) {
        console.log(error);
    }
}

