var chart;

// simple comma formatter
// from http://stackoverflow.com/questions/2901102/how-to-print-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
    
        var chart;
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container',
	         height: 250,
	         marginRight: 60,
	         backgroundColor: '#efcc44',
			 borderRadius: 0,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = getRandomInt(40, 80);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
	     
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
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
	                            }


			},
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },


            series: [{
                name: 'Random data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: getRandomInt(40, 80)
                        });
                    }
                    return data;
                })()
            }]
        });
    });
    
});