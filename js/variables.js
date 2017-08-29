// Ez egy egy soros komment.

/*
    Egy ez több sorból álló komment.
    Ez a második sor.
*/

var cars = [
    {
        type: "A4",
        man: "Audi",
        year: 2010
    },
    {
        type: "Yaris",
        man: "Toyota",
        year: 2010
    },
    {
        type: "6",
        man: "Mazda",
        year: 2010
    },
    {
        type: "525d",
        man: "BMW",
        year: 2010
    },
    {
        type: "Insignia",
        man: "Opel",
        year: 2010
    },
    {
        type: "Passat",
        man: "VolksWagen",
        year: 2010
    }
];

var people = [
    {
        Name: "Jon",
        Job: "Asd",
        Age: 23
    },
    {
        Name: "Jim",
        Job: "Dsa",
        Age: 32
    },
    {
        Name: "Tom",
        Job: "Sda",
        Age: 24
    },
    {
        Name: "Red",
        Job: "Ads",
        Age: 42
    },
    {
        Name: "Liz",
        Job: "Das",
        Age: 22
    },
    {
        Name: "Sue",
        Job: "Sad",
        Age: 44
    }
];

var table = document.querySelector("#cars-table");
setTimeout(function () {
    fillTable(table, people);
}, 5000);

// Táblázat kitöltő függény
function fillTable(element, data) {
    var tHead = element.querySelector("thead");
    var tBody = element.querySelector("tbody");

    var head = "";
    head += "<tr>";
    head += "<th>#</th>";
    for (k in data[0]) {
        head += "<td>" + k + "</td>";
    }
    head += "</tr> \n";

    tHead.innerHTML = head;

    var content = "";
    for (var i = 0; i < data.length; i++) {
        content += "<tr>";
        content += "<td>" + (i + 1) + "</td>";
        for (k in data[i]) {
            content += "<td>" + data[i][k] + "</td>";
        }
        content += "</tr> \n";
    }
    tBody.innerHTML = content;
}