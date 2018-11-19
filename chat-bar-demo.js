// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = 'blue';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["","","","","","","","","","","","","","","","","",""],
    datasets: [{
      label: "Revenue",
      backgroundColor: "blue",
      borderColor: "light-sky-blue",
      data: [1, 1.2,1.3,1.4,1.7,1.9,2,2.3,2.2,2.4,1.4,1.5,1.6,1.1],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 2,
          maxTicksLimit: 2
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
