import Chart from "chart.js/auto";

(function () {

  const ctxStackedBar = document.getElementById("stackedBar").getContext("2d");
  new Chart(ctxStackedBar, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Puerto Rico"],
      datasets: [
        {
          label: "2019 Votes",
          data: [12, 19, 3, 5, 2],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "2020 Votes",
          data: [20, 10, 15, 12, 1],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

})();
