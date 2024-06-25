import Chart from "chart.js/auto";

(function () {
  const ctxBar = document.getElementById("bar1");
  new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
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
  const ctxScatter = document.getElementById("scatterChart");
  new Chart(ctxScatter, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: 10,
              y: 20,
            },
            {
              x: 20,
              y: 30,
            },
            {
              x: 30,
              y: 40,
            },
            {
              x: 40,
              y: 50,
            },
            {
              x: 50,
              y: 60,
            },
          ],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });

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

  const ctxPie = document.getElementById("pie1");
  new Chart(ctxPie, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Pie Chart",
          data: [30, 40, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Pie Chart Example",
      },
    },
  });
})();
