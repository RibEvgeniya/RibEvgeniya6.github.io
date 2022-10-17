function updatePrice() {
    let s = document.getElementsByName("type");
    let select = s[0];
    let price = 0;
    let prices = {
        types: [1200, 1500, 3300],
        options: {
            2: 1000,
        },
        checkboxes: {
            1: 100,
            2: 500,
            3: 800,
        }
    };
    price = prices.types[select.value - 1];
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        if (radio.checked) {
            let optionPrice = prices.options[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" || select.value == "2"? "none" : "block");
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            let cPrice = prices.checkboxes[checkbox.name];
            price += cPrice;
        }
    });
    let count = document.getElementById("count").value;
    if(parseInt(count) < 0) {
        let Price = document.getElementById("price");
        Price.innerHTML = "Введенное количество меньше нуля";
    }
    else {
        price *= parseInt(count);
        if(select.value != "2") {
            if(price-prices.types[select.value - 1] * count>=1000 && select.value != "1" && price-prices.types[select.value - 1] * count!=1300 && price-prices.types[select.value - 1] * count!=1400) {
                price -= 1000 * count;
            }
            if(select.value == "1") {
                price = prices.types[0] * count;
            }
        }
        else if(price/count-prices.types[select.value - 1] == 100 || price/count-prices.types[select.value - 1] == 1100) {
        price -= 100 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 500 || price/count-prices.types[select.value - 1] == 1500) {
            price -= 500 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 800 || price/count-prices.types[select.value - 1] == 1800) {
            price -= 800 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 600 || price/count-prices.types[select.value - 1] == 1600) {
            price -= 600 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 900 || price/count-prices.types[select.value - 1] == 1900) {
            price -= 900 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 1300 || price/count-prices.types[select.value - 1] == 2300) {
            price -= 1300 * count;
        }
        else if(price/count-prices.types[select.value - 1] == 1400 || price/count-prices.types[select.value - 1] == 2400) {
            price -= 1400 * count;
        }
        let Price = document.getElementById("price");
        Price.innerHTML = price + " рублей";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("type");
    let select = s[0];
    select.addEventListener("change", function(event) {
        updatePrice();
    });
    let count = document.getElementById("count");
    count.addEventListener("change", function(event) {
        updatePrice();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
            updatePrice();
        });
    });
    updatePrice();
});
