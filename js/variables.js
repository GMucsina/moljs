// Ez egy egy soros komment.

/*
    Egy ez több sorból álló komment.
    Ez a második sor.
*/

var cars = [
    {
        type: "A4",
        man: "Audi",
        year: 11
    },
    {
        type: "Yaris",
        man: "Toyota",
        year: 2
    },
    {
        type: "6",
        man: "Mazda",
        year: 22
    },
    {
        type: "525d",
        man: "BMW",
        year: 3
    },
    {
        type: "Insignia",
        man: "Opel",
        year: 10000
    },
    {
        type: "Passat",
        man: "VolksWagen",
        year: 20
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

// Kattintás figyelése
document.querySelector(".load-cars-btn").addEventListener("click", function() {
    fillTable(table, cars);
});

document.querySelector(".load-people-btn").addEventListener("click", function() {
    fillTable(table, people);
});

document.querySelector(".sort-type-btn").addEventListener("click", function() {
    sortList(cars, "year")
    fillTable(table, cars);
});

document.querySelector(".map-btn").addEventListener("click", function() {
    var mappedCars = cars.map(function(item) {
        var newItem = {};
        for (var k in item) {
            newItem[k] = item[k];
        };
        newItem.isNew = item.year > 2009 ? "Igen" : "Nem"
        return newItem;
    });
    fillTable(table, mappedCars);
});

// Szűrés típus alapjánn
document.querySelector(".type-search").addEventListener("keyup", function() {
    var text = this.value.toLowerCase();
    var filteredCars = cars.filter(function(item) {
        return item.type.toLowerCase().indexOf(text) > -1;
    });
    fillTable(table, filteredCars);
}); 


/* kísérletezés volt; 5 másodperccel a töltés után csinálta meg a táblát
setTimeout(function () {
    fillTable(table, people);
}, 5000);
*/

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

function sortList(listToSort, sortAttr) {
    listToSort.sort(function (a, b) {
        return a[sortAttr].toString().localeCompare(b[sortAttr].toString(), undefined, {numeric: true});
    });
}