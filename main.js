const ctx = document.getElementById("canva");
function getData() {
  let items = [];
  let label = [];
  let values = [];
  axios
    .get("./data.json")
    .then((response) => {
      items = response.data;
      label = items.map((item) => item.day);
      values = items.map((item) => item.amount);
      const titleTooltip=(e)=>`$${e[0].formattedValue}`
      const labelTooltip=(e)=>"";
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
              ],
              hoverBackgroundColor: [
                "hsl(10,79%,75%)",
                "hsl(10,79%,75%)",
                "hsl(186, 34%, 75%)",
                "hsl(10,79%,75%)",
                "hsl(10,79%,75%)",
                "hsl(10,79%,75%)",
                "hsl(10,79%,75%)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              display:false,
              ticks:{
                display:false,
              },
              grid: {
                display: false,
                drawBorder: false,
                drawTicks:false
              },
            },
          },
          // Hide title of bar
          plugins:{
            legend:{
              display:false,
            },
            tooltip:{
              yAlign:"bottom",
              displayColors:{
                display:false
              },
              callbacks:{
               title: titleTooltip,
               label:labelTooltip,

              }

            }
          }
          // legend: {
          //   display: false
          //   },
        },
      });
    })
    .catch((error) => alert(error));
}
getData();
