/////////////////////////////////////////////////////////////////////////////////////////////////////
// CURVE-EDIT
/////////////////////////////////////////////////////////////////////////////////////////////////////

// http://bl.ocks.org/mbostock/4583749
// https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)
// http://calculus-geometry.hubpages.com/hub/Butterfly-Curves-in-Polar-Coordinates-on-a-Graphing-Calculator
	
	var Eq = [2,4,2,24,5,20];

	var data = {

		'butterfly-curve' : {
			toString : "e" + "sin(θ)".sup() + "-2cos(4θ)" + "sin" + "5".sup() + "(2θ - PI / 24)",
			link : 'https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var r = Math.exp(Math.sin(t))-Eq[0]*Math.cos(Eq[1]*t)+Math.pow(Math.sin((Eq[2]*t-Math.PI)/Eq[3]),Eq[4]);
	  						return Helper.sanitize([t, r*3]);
						});
					},
			states : {
				'default' : 			[2, 4, 2, 24, 5, 20],
				'one' : 				[1, 2, 6, 5, 10, 13],
				'two' : 				[2, 4, 2, 24, 5, 20],
				'three' : 				[2, -4, -6, -7, 1, 17],
				'circle-enemy' : 		[2, 4, 1, 9, 3, 20],
				'five' : 				[0, 4, 7, 5, 6, 18],
				'six' : 				[0, 6, 9, 5, 6, 18],
				'seven' : 				[-1, 0, 9, 24, 1, 17],
				'eight' : 				[0, 4, 0, 24, 5, 20] 				// vary 3rd
			}
		},

		'cardioid-braid' : {
			toString : "",
			link : 'http://www.wolframalpha.com/input/?i=ParametricPlot%5B%7BCos%5Bt%5D+Sinc%5Bt%5D%2C+Sin%5Bt%5D+Sinc%5Bt%5D%7D%2C+%7Bt%2C+0%2C+8+Pi%7D%5D',
			type : 'polar',
			polar : function() {
						return d3.range(.1, Eq[5] * Math.PI, .1).map(function(t) {
							var r = Eq[0] + Eq[2]*Math.sin((Eq[1]*Math.PI*t)/Eq[3]);
	  						return Helper.sanitize([t, r]);
						});

			},
			states : {
				'default' : [10,2,1,1,0,80],
				'wutt' : [9, -2, 1, 1, 5, 80],
				'big' : [-9, 8, 7, 5, 5, 80],
				'yeah' : [-5, -8, 5, 5, 5, 80]
			}
		},
		
		'superformula' : {
			toString : "",
			link : 'https://en.wikipedia.org/wiki/Superformula',
			type : 'polar',
			polar : function() {
						return d3.range(.1, 10 * Math.PI, .1).map(function(t) {
							var a=Eq[0],
								b=Eq[1],
								m=Eq[2],
								n1=Eq[3],
								n2=Eq[4],
								n3=Eq[5];

							var pt1 = Math.pow(Math.abs(Math.cos(m*t/4)/a), n2);
							var pt2 = Math.pow(Math.abs(Math.sin(m*t/4)/b), n3);
							var r = Math.pow(pt1+pt2, -(1/n1));
	  						return Helper.sanitize([t, r*3]);
						});

			},
			states : {
				'default' : [2, 3, 19, 9, 10, 30],
				'triad' : [1,1,3,5,18,18],
				'triad-hump' : [1,1,6,20,7,18],
				'splat' : [1,1,7,3,4,17],
				'eye' : [1,1,2,1,1,1],
				'sunburst' : [1,1,19,9,14,11],
				'skinny' : [1,1,6,1,7,8],
				'circle' : [1,1,2,2,2,2],
				'inhale' : [1,1,4,4,7,7]
			}
		},


		'rose-curve' : {
			toString : "",
			link : 'https://en.wikipedia.org/wiki/Rose_(mathematics)',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var n = Eq[0];
							var d = Eq[1];
						    var k = n/d;
						    var r = Math.cos(k*t);
						    return Helper.sanitize([t, r*8]);
						});
			},
			states : {
				'default' : [3, 8, -7, 1, 1, 24],
				'two' : [-4, -1, 1, 1, 1, 4]
			}
		},



		'golden-spiral' : {
			toString : "ae"+"bθ".sup(),
			link : 'https://en.wikipedia.org/wiki/Golden_spiral',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var r = Math.pow(1.358456,t);
	  						return Helper.sanitize([t, r]);
						});
			},
			states : {
				'default' : [1,1,1,1,1,4]
			}
		},


		'lissajous-curve' : {
			toString : "",
			link : 'https://en.wikipedia.org/wiki/Lissajous_curve',
			type : 'cartesian',
			polar : function() {
						return d3.range(0, 2 * Math.PI, .01).map(function(t) {
							var w = (Eq[4]-1)/Eq[4] * Math.PI/2;
							var x = Eq[0]*Math.sin(Eq[2]*t+w);
							var y = Eq[1]*Math.sin(Eq[3]*t);
							return Helper.sanitize([x*30,y*30]);
						});

			},
			states : {
				'default' : [9, 5, 2, 3, -3, 21]
			}
		},

		'heart-curve' : {
			toString : "",
			link : 'http://mathworld.wolfram.com/HeartCurve.html',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var r = ( ( Eq[0]*Math.sin(t) * Math.sqrt(Math.abs(Math.cos(t*Eq[2]))) ) / ( Math.sin(t*Eq[1]) + (7/5) ) ) - (2 * Math.sin(t)) + 2 ;
	  						return Helper.sanitize([t, r*3]);
						});
			},
			states : {
				'default' : [1,1,1,1,1,2]
			}
		},

		'archimedean-spiral' : {
			toString : "",
			link : 'https://en.wikipedia.org/wiki/Archimedean_spiral',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var r = Eq[0] + Eq[1]*t
	  						return Helper.sanitize([t, r]);
						});
			},
			states : {
				'default' : [1,1,1,1,1,7]
			}
		},

		'cannabis-curve' : {
			toString : "",
			link : 'http://mathworld.wolfram.com/CannabisCurve.html',
			type : 'polar',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .01).map(function(t) {
							var pt1 = 1 + (9/10)*Math.cos(8*t);
							var pt2 = 1 + (1/10)*Math.cos(24*t);
							var pt3 = (9/10) + (1/10)*Math.cos(200*t);
							var pt4 = 1 + Math.sin(t);
							var r = pt1*pt2*pt3*pt4;
	  						return Helper.sanitize([t, r*3]);
						});
			},
			states : {
				'default' : [1,1,1,1,1,23]
			}
		},


		'fermat-spiral' : {
			toString : "",
			link : 'https://en.wikipedia.org/wiki/Fermat%27s_spiral',
			type : 'polar',
			polar : function() {
						return d3.range(-Eq[5] * Math.PI, Eq[5] * Math.PI, .01).map(function(t) {
							var r = Eq[0]*Math.pow(Math.abs(t),.5) - Math.sin(Eq[1]*t);
							if (t < 0) { r = -r; t = -t; }
	  						return Helper.sanitize([t, r]);
						});
			},
			states : {
				'default' : [1,0,1,1,1,15]
			}
		},

		'idk' : {
			toString : "",
			link : 'http://www.wolframalpha.com/input/?i=ParametricPlot%5B%7BCos%5Bt%5D+Sinc%5Bt%5D%2C+Sin%5Bt%5D+Sinc%5Bt%5D%7D%2C+%7Bt%2C+0%2C+8+Pi%7D%5D',
			type : 'cartesian',
			polar : function() {
						return d3.range(.1, 80 * Math.PI, .1).map(function(t) {
							var y = Math.cos(t)*(Math.sin(t)/t);
							var x = Math.sin(t)*(Math.sin(t)/t);
	  						return Helper.sanitize([x*300, y*300]);
						});

			},
			states : {
				'default' : [0,0,0,0,0,0]
			}
		},

		'wuttt' : {
			toString : "",
			link : '',
			type : 'polar',
			polar : function() {
						return d3.range(.1, Eq[5] * Math.PI, .1).map(function(t) {

							var r = t + Eq[0]*Math.sin(Eq[1]*Math.PI*t) + Eq[2]*Math.cos(Eq[3]*Math.PI*t)
	  						return Helper.sanitize([t, r/3]);
						});

			},
			states : {
				'default' : [2,2,4,2,1,12],
				'tripple' : [10, 1, 2, -10, -10, 12],
			}
		},

		'wut' : {
			toString : "",
			link : '',
			type : 'polar',
			polar : function() {
						return d3.range(.1, 12 * Math.PI, .1).map(function(t) {

							var r = t * Math.sin(t);
	  						return Helper.sanitize([t, r/3]);
						});

			},
			states : {
				'default' : [1,1,1,1,1,1]
			}
		},

		'spiral' : {
			toString : "",
			link : '',
			type : 'polar',
			polar : function() {
						return d3.range(.1, 100 * Math.PI, .1).map(function(t) {

							var r = t;
	  						return Helper.sanitize([t, r/10]);
						});

			},
			states : {
				'default' : [1,1,1,1,1,1]
			}
		},


		'teardrop' : {
			toString : "",
			link : '',
			type : 'cartesian',
			polar : function() {
						return d3.range(0, Eq[5] * Math.PI, .1).map(function(t) {
							var x = Eq[1]*Math.cos(Eq[2]*t);
							var y = Eq[3]*Math.sin(t)*Math.pow(Math.sin(t/(2*Eq[4])),Eq[0]);
	  						return Helper.sanitize([x*300, y*300]);
						});

			},
			states : {
				'default' : [1,1,1,1,1,16]
			}
		},


		'sinc' : {
			toString : "",
			link : '',
			type : 'cartesian',
			polar : function() {
						return d3.range(-Eq[5], Eq[5], .01).map(function(t) {
							var y = Eq[0]*Math.sin(t*Eq[1])/t;
	  						return Helper.sanitize([t*100, y*100]);
						});

			},
			states : {
				'default' : [2, -8, -2, 1, 1, 4]
			}
		},

		'benice-equation' : {
			toString : "",
			link : '',
			type : 'polar',
			polar : function() {
						return d3.range(.1, 100 * Math.PI, .1).map(function(t) {
							var a = Math.pow(r,2) / (1+ Math.pow(r,2));
							var b = r / (1 + Math.pow(r,2));
							var d = Math.pow((1/(1-r)),2);
							var p = -Math.pow(r,2);
							//var k = 0,1,2,3...
							var r = Math.sin();
	  						return Helper.sanitize([t, r/10]);
						});

			},
			states : {
				'default' : [1,1,1,1,1,1]
			}
		},
				};


(function () {

	var root = this;  // use global context rather than window object

	// main /////////////////////////////////////////////////////////////////////////////////////////
	var a = {};	
	a.init = function() {
		console.log("a.init fired");

		// globals & state
		var s = {
			width : $(document).width(),
			height : $(document).height(),
			vendors : ['-webkit-', '-moz-', '-o-', ''],
			now: Date.now(),
			debug: (window.location.href.indexOf("debug") > -1) ? true : false,

			activeEq: 'butterfly-curve',
			activeState: 'default'
		};
		root.State = s;

		a.bind();			// attach all the handlers
		a.keyboard();		// bind all the shortcuts

		//a.getData();
		
		a.draw();
		
		a.showEqs();
		a.showStates();

		};
	a.getData = function() {
		console.log("a.getData fired");

		d3.json("data.json",function(error,d){
			if (error) return console.warn(error);
			data = d;
			console.log(data);
		});

		};
	a.bind = function() {
		console.log("a.bind fired");
		var click = (Helper.isMobile()) ? 'touchstart' : 'click';

		$('#slider1').on('input change', function() { Eq[0] = +this.value; a.redraw(); }); 
		$('#slider2').on('input change', function() { Eq[1] = +this.value; a.redraw(); });  // # of wings
		$('#slider3').on('input change', function() { Eq[2] = +this.value; a.redraw(); }); 
		$('#slider4').on('input change', function() { Eq[3] = +this.value; a.redraw(); }); 
		$('#slider5').on('input change', function() { Eq[4] = +this.value; a.redraw(); }); 
		$('#slider6').on('input change', function() { Eq[5] = +this.value; a.redraw(); }); 

		$('.States').on('change', function() { Eq = data[State.activeEq].states[this.value]; h.updateSliders(); a.redraw(); }); 
		$('.Eqs').on('change', function() { State.activeEq = this.value; Eq = data[State.activeEq].states['default']; h.updateSliders(); a.draw(); a.showStates(); }); 

		$('.css-animations').on('change', function() {  }); 
		$('.stroke-dasharray').on('change', function() {  }); 
		$('.stroke-dashoffset').on('change', function() {  }); 

		// update on window resize
		window.onresize = function(event) {};
		$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange',h.resize);


		};
	a.keyboard = function() {
		console.log("a.keyboard fired");

		//Mousetrap.bind('esc', h.hideModals);
		//Mousetrap.bind('space', function() { (audio && audio.paused == false) ? audio.pause() : audio.play(); });

		};

	a.draw = function() {
		console.log("a.draw fired");

		$('#mainSVG').remove();

		width = window.innerWidth,
			height = window.innerHeight-20,
			radius = Math.min(width, height) / 2 - 30;


			//d3.max(data, function(d) { return d.y; })
		if (data[State.activeEq].type == 'polar')
			line = a.drawPolar();
		else
			line = a.drawCartesian();

		var svg = d3.select("body").append("svg")
				.attr('id', 'mainSVG')
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


		// plot equation
		svg.append("path")
			.datum(data[State.activeEq].polar)
			.attr("class", "line")
			.attr("d", line);

		};
	a.drawPolar = function() {

		var r = d3.scale.linear()
					.domain([0, 15])
					.range([0, radius]);

		line = d3.svg.line.radial()
					.radius(function(d) { return r(d[1]); })
					.angle(function(d) { return -d[0] + Math.PI / 2; });

		return line;

		};
	a.drawCartesian = function() {

		var x = d3.scale.linear().domain([0, 1]).range([0, width/2]),
		    y = d3.scale.linear().domain([0, 1]).range([height/2, 0]);

		line = d3.svg.line()
					.x(function(d) { return d[0]; })
					.y(function(d) { return d[1]; });

		return line;

		};
	a.redraw = function() {
		console.log('a.redraw fired');

		var getEq = data[State.activeEq].polar;
		$('.Eq').html(data[State.activeEq].toString);

		d3.selectAll(".line")
			.datum(getEq)
		  .transition()
		    .duration(250)
		  .attr("d", line);

		};

	a.drawPolarAxis = function() {

		var width = window.innerWidth,
			height = window.innerHeight-20,
			radius = Math.min(width, height) / 2 - 30;

		var r = d3.scale.linear()
					.domain([0, 15])
					.range([0, radius]);

		// plot r axis
		var gr = svg.append("g")
				.attr("class", "r axis")
				.selectAll("g")
				.data(r.ticks(5).slice(1))
				.enter().append("g");

		gr.append("circle")
			.attr("r", r);

		// plot a axis
		var ga = svg.append("g")
			.attr("class", "a axis")
			.selectAll("g")
			.data(d3.range(0, 360, 30))
			.enter().append("g")
			.attr("transform", function(d) { return "rotate(" + -d + ")"; });

		ga.append("line")
			.attr("x2", radius);


		};
	a.drawCartesianAxis = function() {
		
	}

	a.showStates = function() {
		var getEq = data[State.activeEq].states;
		var opts = '';

		$.each(getEq, function(index, value) {
			opts += '<option value="'+index+'">' + index + '</option>';
		}); 

		$('.States').html(opts);

		};
	a.showEqs = function() {
		var opts = '';

		$.each(data, function(index, value) {
			opts += '<option value="'+index+'">' + index + '</option>';
		}); 

		$('.Eqs').html(opts);

		};
	root.App = a;

	// helper methods ///////////////////////////////////////////////////////////////////////////////
	var h = {};
	h.sanitize = function(Arr) {
		for (var i = 0; i < Arr.length; i++) {
			Arr[i] = Arr[i] || 0; 
		}
		return Arr;

		};
	h.updateSliders = function() {

		var $range = $("input[type='range']");

		for (var i = 0; i < Eq.length; i++) {
			$($range[i]).val(Eq[i]);
		}
		};
	h.toggleMenu = function(x) {
		console.log('h.toggleMenu');

		if (x == 'toggle')
			x = ($('.menu').hasClass('menu-open')) ? 'close' : 'open';

		if (x == 'open') {
			$('.menu').addClass('menu-open');
			$('.icon-menu').addClass('fadeOut');
			//$("body > svg").attr("class", "svg-open");
		}
		else {
			$('.menu').removeClass('menu-open');
			//$("body > svg").attr("class", "svg-closed");
		}

		};
	h.toggleFullScreen = function() {
		console.log("h.toggleFullScreen fired");

		// thanks mdn

		if (!document.fullscreenElement &&    // alternative standard method
		  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
		}
	h.hideHUD = function() {
		//$('.icon-knobs').is(':hover') || 
		if ($('#mp3_player').is(':hover') || $('.dotstyle').is(':hover') || $('.slider').is(':hover'))
			return;

		$('#mp3_player').addClass('fadeOut');
		$('.icon-menu').addClass('fadeOut');
		$('.menu-wide').addClass('fadeOut');
		$('.menu').addClass('fadeOut');
		$('html').addClass('noCursor');

		}
	h.showHUD = function() {

		$('#mp3_player').removeClass('fadeOut');
		$('.icon-menu').removeClass('fadeOut');
		$('.menu-wide').removeClass('fadeOut');
		$('.menu').removeClass('fadeOut');
		$('html').removeClass('noCursor');

		}
	h.showModal = function(id) {
		if ($(id).hasClass('md-show')) {
			h.hideModals();
			return;
		}

		if ($('.md-show').length > 0) {
			h.hideModals();
		}

		$(id).addClass('md-show');
		
		};
	h.hideModals = function() {
		$('.md-modal').removeClass('md-show');
		};

	h.resize = function() {
		console.log('h.resize fired');		
	    State.width = $(window).width();
		State.height = $(window).height();
		};
	h.stop = function(e) {
	    e.stopPropagation();
	    e.preventDefault();
		};
	h.isMobile = function() {
		// returns true if user agent is a mobile device
		return (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
		};
	h.detectEnvironment = function() {
		if (window.location.protocol.search('chrome-extension') >= 0)
			return 'chrome-extension';

		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
			return 'safari';

		//  https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
		
		if (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
			return 'opera';

		if (typeof InstallTrigger !== 'undefined')
			return 'firefox';

		// var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
		// var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

		return 'unknown';

		};
	h.getCookie = function(c_name) {
		//console.log("h.getCookie fired");
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++) {
		  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		  x=x.replace(/^\s+|\s+$/g,"");
		  if (x==c_name) {
		    return unescape(y);
		  }
		}
		};
	h.setCookie = function(c_name,value,exdays) {
		//console.log("h.setCookie fired");
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie=c_name + "=" + c_value;
		};
	h.prettyLog = function(data) {
		console.log("h.prettyLog fired");
		return false;
		
		var x = data || localStorage.account;
		if (typeof x == 'object') x = JSON.stringify(x);
		if (typeof data == "undefined") return;
		if (typeof data == "string") {
			console.log(data);
			return;
		}
		console.log('\n'+JSON.stringify(JSON.parse(x),null, 4));
		};
	root.Helper = h;

}).call(this);

$(document).ready(App.init);