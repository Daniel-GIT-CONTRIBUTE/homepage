import axios from 'axios';

function intToDay(int_day) {
    switch (int_day) {
        case 0: return "Monday";
        case 1: return "Tuesday";
        case 2: return "Wednesday";
        case 3: return "Thursday";
        case 4: return "Friday";
        default: return "Weekend";
    }
}


async function check_availability(link, name) {
    let result = await axios.get(link);
    let result_array = [];
    for (let date of result.data) {
        let raw_date = new Date(date['date']);
        let day = raw_date.getDay();
        let day_string = intToDay(day);
        result_array.push([date['date'], day_string]);
    }
    return { name, availableDates: result_array };
}

export async function handler(event) {
    const param = event.queryStringParameters?.param;

    const locations = {
        r1: {
            name: "Clarenville",
            url: "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/fcc98732f500631ca2bcdcd1895bc8cb0fdf5682dc12b82bca50525f40101c54/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
        },
        r2: {
            name: "Bay Roberts",
            url: "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/0530213b59d05514353e5567e29db9c9f2393c85c284456cfd410162fd44fa8d/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
        },
        r3: {
            name: "Mount Pearl",
            url: "https://www.mrdappointments.gov.nl.ca/qmaticwebbooking/rest/schedule/branches/1eeaa32dbd6d7ead5a17b8aa3c7d12544e70ad5bad55eab02d3e03893d2eb42e/dates;servicePublicId=378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae;customSlotLength=30"
        }
    };

    if (!param || !locations[param]) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing or invalid 'param'. Use r1, r2, or r3." })
        };
    }

    const { name, url } = locations[param];
    const result = await check_availability(url, name);

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}
