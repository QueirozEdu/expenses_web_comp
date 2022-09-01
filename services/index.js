async function getData() {
    const daysData = await fetch('./assets/data.json');
    data = await daysData.json();
    return data;
}

async function showData() {
    let newData = await getData();

    document.getElementById("mon__amount").innerText = "$".concat(newData["mon"]);
    document.getElementById("tue__amount").innerText = "$".concat(newData["tue"]);
    document.getElementById("wed__amount").innerText = "$".concat(newData["wed"]);
    document.getElementById("thu__amount").innerText = "$".concat(newData["thu"]);
    document.getElementById("fri__amount").innerText = "$".concat(newData["fri"]);
    document.getElementById("sat__amount").innerText = "$".concat(newData["sat"]);
    document.getElementById("sun__amount").innerText = "$".concat(newData["sun"]);

}

showData();