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

async function changeBar() {
    let newData = await getData();

    document.getElementById("mon__chart-bar").style.setProperty('height', newData["mon"].concat("px")); 
    document.getElementById("tue__chart-bar").style.setProperty('height', newData["tue"].concat("px"));
    document.getElementById("wed__chart-bar").style.setProperty('height', newData["wed"].concat("px"));
    document.getElementById("thu__chart-bar").style.setProperty('height', newData["thu"].concat("px"));
    document.getElementById("fri__chart-bar").style.setProperty('height', newData["fri"].concat("px"));
    document.getElementById("sat__chart-bar").style.setProperty('height', newData["sat"].concat("px"));
    document.getElementById("sun__chart-bar").style.setProperty('height', newData["sun"].concat("px"));

}

changeBar();

showData();