import Chart from "chart.js/auto";

(function () {
 

  const ctxCombo = document.getElementById("combo").getContext("2d");
  new Chart(ctxCombo, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          type: "bar",
          label: "Bar Dataset",
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          type: "line",
          label: "Line Dataset",
          data: [20, 30, 40, 50, 60, 70],
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
      height: 1,
    },
  });
 

 
})();
