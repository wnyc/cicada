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
		var hasGreenBand = false;
		var lightItUp = 0;
		var localSim = 52;
		
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container',
	         height: 300,
	         marginRight: 0,
			marginLeft:0,
	         backgroundColor: '#FFF',
			 borderRadius: 0,
			defaultSeriesType: 'spline',
                events: {
                    load: function() {
                    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                         // Get the JSON dict of the latest reading.

                            $.ajax({
				dataType: "jsonp",
				url: 'http://192.168.1.12:8000/readings/retrieve_latest/',
				success: function(data) {
                                     console.log(data);

			             temp = data.temp;
                         confidence = data.confidence;
                                },
				jsonpCallback: 'llamas'
	                    });
                            

                            var x = (new Date()).getTime(), // current time
                                
							// Comment out next two lines for local simulation
								// y = temp;

							// Comment out next two lines for live operation
								// y = getRandomInt(50, 66);
								y = localSim += Math.random();
								if (y >= 67.5) {
									y = 67.5;
									confidence = true;
								} else {
								confidence = false;
								}
								
                            series.addPoint([x, y], true, true);

							$('#big_temp').html(y.toFixed(1) + '&deg;f');
							x_formatted = Highcharts.dateFormat('%l:%M %P %a %b %e, %Y', x, true);
							$('#date_line').html(x_formatted);
							$('#top_date').html(x_formatted);
							
							lightItUp -= 1;
							if (confidence === true) {
								// if you hear a cicada, light up the indicator for 10 seconds
								lightItUp = 5;
							}
							
							if (lightItUp < 1) {
								$('#bug_pic').html('<img src="alertNo.png" />');
								$('#yesno').html('No');
								$('#detected').html('not detected');
							} else {
								$('#bug_pic').html('<img src="alertYes.png" />');
								$('#yesno').html('Yes');
								$('#detected').html('detected!');
							}
							
							if (hasGreenBand === false && y >= 64 ) {
								hasGreenBand = true;
								chart.yAxis[0].removePlotBand('plot-band-gray');
								chart.yAxis[0].addPlotBand({
									color: '#95cb51',
									from: 64,
									to: 73,
									id: 'plot-band-green',
									label: {
										text: "64 f",
										style: {
											color: '#FFF',
											fontWeight: 'bold'

										},
										textAlign: ' ',
										x: 10,
										y: 39
									}
									
								});
							}
							
							if (hasGreenBand === true && y < 64 ) {
								hasGreenBand = false;
								chart.yAxis[0].removePlotBand('plot-band-green');
								chart.yAxis[0].addPlotBand({
									color: '#cccccc',
									from: 64,
									to: 73,
									id: 'plot-band-gray',
									label: {
										text: "64 f",
										style: {
											color: '#FFF',
											fontWeight: 'bold'

										},
										textAlign: ' ',
										x: 10,
										y: 39
									}
									
								});
							}
							
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
	     
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
				labels: {
					enabled: false
				}
            },
	      yAxis: {
				showLastLabel: true,
				gridLineColor: 'rgba(0, 0, 0, 0.10)',
				min: 50,
				max: 70,
				title: {
					text: '',
					margin: 0,
	                                style: {
	                                    color: "#ac8800",
	                                    fontWeight: 'normal'
	                                }
				},
				
				plotBands: [{
					color: '#9d7458',
					from: 40,
					to: 63.8,
					label: {
						text: " ",
						textAlign: ' ',
						x: 20,
						y: -5
					}
					}, {
					color: '#cccccc',
					from: 64,
					to: 73,
					id: 'plot-band-gray',
					label: {
						text: "64 f",
						style: {
							color: '#FFF',
							fontWeight: 'bold'

						},
						textAlign: ' ',
						x: 10,
						y: 39
					}
				}
				],
				
				labels: {
					enabled: false,
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
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

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


            series: [{
                name: 'Recorded Temp',
                color: '#000',
                data: (function() {
                    // generate an initial array y: 50 
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    
                    for (i = -10; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
							y: 50
                        });
                    }
                    return data;
                })()
            }]
        });
    });
    
});
