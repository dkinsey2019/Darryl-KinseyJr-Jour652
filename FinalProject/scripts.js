


//Bar Chart
var chart2 = c3.generate({
     bindto: '#averagespeeds',
     data: {
       columns: [
         ['Late ModelSportsman', 21.23],
         ['PureStock', 23.73],
         ['Hobbystock', 25.21]

       ],
       type: 'bar'
     },
     color: {
       pattern: ['#FFA014', '#000000', '#7A8080', '#60c4b2', '#973895', '#fae255', '#af3d46', '#f8bb63', '#818281']
     }
   });
//Pie Chart
   var chart3 = c3.generate({
   bindto: '#costschart',
   data: {
     // iris data from R
     columns: [
       ['Late Model Sportsman', 50000],
       ['Pure Stock', 30000],
       ['Hobby Stock', 20000],


     ],
     type : 'pie',
     onclick: function (d, i) { console.log("onclick", d, i); },
     onmouseover: function (d, i) { console.log("onmouseover", d, i); },
     onmouseout: function (d, i) { console.log("onmouseout", d, i); }
   },
   color: {
     pattern: ['#FFA014', '#000000', '#7A8080', '#60c4b2', '#973895']
   }
 });
