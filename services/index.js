async function getData() {
    const daysData = await fetch('./assets/data.json');
    data = await daysData.json();
    return data;
}

async function showData() {
    let newData = await getData();
    console.log(newData["mon"]);
}

showData();