
//Line Chart
var chart = c3.generate({
  bindto: '#myLineChart',
  data: {
    x: 'x',
    columns: [
      ['x', 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        ['Killed', 14,4,5,1,5,3,9,9,1,5,1,3,2,32,3,6,6,0,2,5,21],
        
    ]
  },
  color: {
    pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895']
  }
});

//Bar Chart
var chart2 = c3.generate({
     bindto: '#shootingsByTypeChart',
     data: {
       columns: [
         ['City', 101],
         ['Suburb', 58],
         ['Town', 24],
         ['Rural', 31],

       ],
       type: 'bar'
     },
     color: {
       pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895', '#fae255', '#af3d46', '#f8bb63', '#818281']
     }
   });
//Pie Chart
   var chart3 = c3.generate({
   bindto: '#resourceOfficersChart',
   data: {
     // iris data from R
     columns: [
       ['Asian', 1],
       ['American Indian', 3],
       ['Black', 33],
       ['Hispanic', 6],
       ['White', 57],

     ],
     type : 'pie',
     onclick: function (d, i) { console.log("onclick", d, i); },
     onmouseover: function (d, i) { console.log("onmouseover", d, i); },
     onmouseout: function (d, i) { console.log("onmouseout", d, i); }
   },
   color: {
     pattern: ['#2a8dc5', '#455380', '#ee6a4b', '#60c4b2', '#973895']
   }
 });
