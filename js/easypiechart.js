google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Coding Skills', ''],
          ['Python',     11],
          ['Html',      2],
          ['Css',  2],
          ['Java Script', 2],
          ['C',    7]
        ]);

        var options = {
          title: 'Coding Knowledge'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
