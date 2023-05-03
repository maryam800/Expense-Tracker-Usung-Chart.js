"use strict";

var ctx = document.getElementById("canva");

function getData() {
  var items = [];
  var label = [];
  var values = [];
  axios.get("./data.json").then(function (response) {
    items = response.data;
    label = items.map(function (item) {
      return item.day;
    });
    values = items.map(function (item) {
      return item.amount;
    });

    var titleTooltip = function titleTooltip(e) {
      return "$".concat(e[0].formattedValue);
    };

    var labelTooltip = function labelTooltip(e) {
      return "";
    };

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: label,
        datasets: [{
          data: values,
          backgroundColor: ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)"],
          hoverBackgroundColor: ["hsl(10,79%,75%)", "hsl(10,79%,75%)", "hsl(186, 34%, 75%)", "hsl(10,79%,75%)", "hsl(10,79%,75%)", "hsl(10,79%,75%)", "hsl(10,79%,75%)"]
        }]
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            }
          },
          y: {
            display: false,
            ticks: {
              display: false
            },
            grid: {
              display: false,
              drawBorder: false,
              drawTicks: false
            }
          }
        },
        // Hide title of bar
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            yAlign: "bottom",
            displayColors: {
              display: false
            },
            callbacks: {
              title: titleTooltip,
              label: labelTooltip
            }
          }
        } // legend: {
        //   display: false
        //   },

      }
    });
  })["catch"](function (error) {
    return alert(error);
  });
}

getData();