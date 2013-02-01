var chart;

// simple comma formatter
// from http://stackoverflow.com/questions/2901102/how-to-print-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {
   Highcharts.setOptions({
         chart: {style: {
            fontFamily : '"Montserrat", Arial, sans-serif;',
            color: '#ac8800',
            fontColor: '#ac8800',
            fontWeight: 'normal'

         }

   }});
   chart = new Highcharts.Chart({
      chart: {
         renderTo: 'chart-container', 
         defaultSeriesType: 'spline',
         height: 250,
         marginRight: 60,
         backgroundColor: '#efcc44',
		 borderRadius: 0
      },

			
      title: {
         //text: 'Employment Recoveries'
         text: ' '
      },
      subtitle: {
        // text: 'Time it took for workforce-size to recover'
      },
      labels: {
                        style: {
                            color: "#ac8800"

                        }
            },
      xAxis: {
         lineColor: '#ac8800',
         title: {
            enabled: true,
            text: ' ',
			margin: 30,
            style: {
                color: "#ac8800",
                fontWeight: 'normal'
            }
         },
		// max: 55,
		categories: ["Jan 2008","Feb 2008","Mar 2008","Apr 2008","May 2008","Jun 2008","Jul 2008","Aug 2008","Sep 2008","Oct 2008","Nov 2008","Dec 2008","Jan 2009","Feb 2009","Mar 2009","Apr 2009","May 2009","Jun 2009","Jul 2009","Aug 2009","Sep 2009","Oct 2009","Nov 2009","Dec 2009","Jan 2010","Feb 2010","Mar 2010","Apr 2010","May 2010","Jun 2010","Jul 2010","Aug 2010","Sep 2010","Oct 2010","Nov 2010","Dec 2010","Jan 2011","Feb 2011","Mar 2011","Apr 2011","May 2011","Jun 2011","Jul 2011","Aug 2011","Sep 2011","Oct 2011","Nov 2011","Dec 2011","Jan 2012","Feb 2012","Mar 2012","Apr 2012","May 2012","Jun 2012","Jul 2012"],
		
	  	startOnTick: true,
		endOnTick: false,
                tickInterval: 12,
                tickWidth: 1,
				tickLength: 6,
				tickColor: "#ac8800",
		showLastLabel: true,
		showFirstLabel: true,
		tickmarkPlacement: "on",
		
		labels: {
			// rotation: -90,
			step: 1,
			x: 21,
			y: 25,
                        style: {
                            color: "#ac8800"

                        }
		}
		
		
		
      },

      yAxis: {
			showLastLabel: true,
			gridLineColor: "#ac8800",
			title: {
				text: 'employed',
				margin: 20,
                                style: {
                                    color: "#ac8800",
                                    fontWeight: 'normal'
                                }
			},
			labels: {
				formatter: function() {
					return numberWithCommas(this.value);
				},
				x: -10,
				y: 0,
                                style: {
                                    color: "#ac8800"

                                }
                            },
			
			plotLines: [{
				value: 0,
				width: 1,
				zIndex: 3
			}]
			
		},

      tooltip: {
         backgroundColor: "rgba(0,0,0,0);",
         shadow: false,

         borderColor: "#333",
         borderRadius: 0,
         borderWidth: 0,
         style: {
            color: 'white',
            zIndex: 15,
            padding: '10px'},
         useHTML: true,
         positioner: function(labelWidth, labelHeight, point)
         {
            var position = {};

            position.x = point.plotX - 20;
            if(position.x + labelWidth > chart.plotSizeX)
            {
                position.x = chart.plotSizeX - labelWidth;
            }
            position.y = -10;
            return position;

         },
         formatter: function() {
                   var pt = this.point;
                   if(pt.hasOwnProperty('detail'))
                   {
                    // A highlight point
                    return '<div class="triangletooltip">' + this.point.name + 
                    "<br />" + "<div class='ttdetail'>" + this.point.detail + "</div>";
                   }

                   else if (this.series.name == 'labels') return '<div style="display:none;"></div>';
                   else if(this.series.name)
                   {
                    // Regular line point

                    return '<div class="regulartooltip"><span class="ttbig">' + numberWithCommas(this.y) + "</span><br />employed in NYC" + '<div class="theDate">' + this.x + '</div></div>';
                   }
                   else return '<div style="display:none;"></div>';
         }
      },
      legend: 'none',


      credits: {
		enabled:!1,
		text:"drawn with Highcharts",
		href:"http://www.highcharts.com"
	  },

      plotOptions: {
         spline: {
            marker: {
               radius: 0,
               symbol: "circle",
               lineColor: null,
               states: {
                  hover: {
                     enabled: true,
                     radius:6 ,
                     fillColor: 'white',
                     lineColor: null,
                     lineWidth:4 
                  }
               }
            },
         shadow: false,
         lineWidth: 7,
            states: {
               hover: {
                  marker: {
                     enabled: true,
                     lineWidth: 5,
                     lineColor: null
                  }


               }
            }
         }
      },

            
      series: [

		{name: 'Employed in NYC',
         color: '#000',
         data: [3792353,3799235,3796903,3803650,3796663,3798818,3801444,3803214,3800612,3791824,3780438,3770453,3750620,3734292,3711805,3689111,3684140,3674583,3699655,3691229,3667620,3673405,3671429,3676365,3678844,3682694,3690063,3708612,3724813,3715342,3699676,3703531,3717123,3734997,3738323,3741001,3753624,3765089,3768444,3786400,3783607,3780259,3813663,3808913,3791794,3788727,3797601,3795431,3817993,3825136,3838007,3844573,3854144,3862110,3872889]
		},{
                 name: 'Points of Interest',
                 lineColor: 'black',
                 marker: {
                    enabled: false,
                    fillColor: null,
                    radius:1,
                    lineWidth: 9,
                    lineColor : '#000000',
                    symbol: 'triangle-down',
                    states:
                      {hover:
                       {fillColor: '#ff3300',
                        lineColor: '#ff3300'}}
                        


                 },
                 color: '#ff3300',
                 lineWidth: 0,

                 data: [
                        // {x:28, y:-5.4, name: "Peak Census Hiring", detail: "The U.S. Census Bureau hired about 800,000 <br />temporary workers for the 2010 census,<br /> peaking in the spring."}
                       ]
                


                 }
                
 
		
	]
},

function (chart) {

}
);
});
