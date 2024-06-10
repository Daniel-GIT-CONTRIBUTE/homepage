// 'https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/#/'

const {Builder, By, until} = require('selenium-webdriver');
require('chromedriver');
const axios = require('axios');

async function check_availability(link, name){

    let result = await axios.get(link);
    let result_array = [];
    for(let date of result.data){
        let raw_date = new Date(date['date']);
        let day = raw_date.getDay();
        let day_string = intToDay(day);
        result_array.push([date['date'], day_string])
    }
    console.log(name);
    console.log(result_array);

}

function intToDay(some_integer){
    let day = '';
    switch(some_integer){
        case 0:
            day = "Monday";
            break;
        case 1:
            day = "Tuesday";
            break;
        case 2: 
            day = "Wednesday";
            break;
        case 3:
            day = "Thursday";
            break;
        case 4:
            day = "Friday";
            break;
        default:
            day = "Weekend";
    }
    return day;
}


// Link to check Clarenville 
// https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/fcc98732f500631ca2bcdcd1895bc8cb0fdf5682dc12b82bca50525f40101c54/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30
// Link to check Bay Roberts
// https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/0530213b59d05514353e5567e29db9c9f2393c85c284456cfd410162fd44fa8d/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30
// Link to Mount Pearl
// https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/1eeaa32dbd6d7ead5a17b8aa3c7d12544e70ad5bad55eab02d3e03893d2eb42e/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30


async function run(){
    
    let Clarenville = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/fcc98732f500631ca2bcdcd1895bc8cb0fdf5682dc12b82bca50525f40101c54/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
    let BayRoberts = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/0530213b59d05514353e5567e29db9c9f2393c85c284456cfd410162fd44fa8d/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
    let MountPearl = "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/1eeaa32dbd6d7ead5a17b8aa3c7d12544e70ad5bad55eab02d3e03893d2eb42e/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
    await check_availability(Clarenville, "Clarenville");
    await check_availability(BayRoberts, "Bay Roberts");
    await check_availability(MountPearl, "Mount Pearl");
}

run();