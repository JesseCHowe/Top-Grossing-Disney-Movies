var margin = { top: 0, right: 20, bottom: 0, left: 20 },
    width = 1200 - margin.left - margin.right,
    height = 50 - margin.top - margin.bottom;

var parseDate = d3.time.format("%m/%d/%Y").parse;
var formatDecimalComma = d3.format(",.2f"),
    formatMoney = function(d) { return "$" + formatDecimalComma(d); };

var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
  .orient("bottom")
  .scale(x)
  .outerTickSize(0);

var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden");

var tooltip_fixed = d3.select(".tooltip_fixed-contain")
  .append("div")
  .attr("class", "toolTip-fixed");

d3.csv(
  "https://gist.githubusercontent.com/JesseCHowe/c8c2db91d9a8ffa4867571b34d11aeeb/raw/4ff00a6b2d47d4957a3eef199a4c05ef2d23cdfd/disney_movies_total_gross.csv",
  type,
  function(error, data) {
    var symbols = d3
      .nest()
      .key(function(d) { return d.year; })
      .sortKeys(d3.descending)
      .entries(data);

    symbols.forEach(function(s) { s.maxPrice = d3.max(s.values, function(d) { return d.inflation_adjusted_gross; }); });

    x.domain( d3.extent(data, function(d) { return d.day_of_year; }) );

    var rscale = d3.scale.linear()
      .domain([
        d3.min(data, function(d) { return d.inflation_adjusted_gross; }),
        d3.max(data, function(d) { return d.inflation_adjusted_gross; })
      ])
      .range([10, 120]);

    var svg = d3.select("div#container")
      .selectAll("svg")
      .data(symbols)
      .enter()
      .append("div")
      .classed("svg-container", true)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 1200 90")
      .classed("svg-content-responsive", true)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("text")
      .attr("class", "years")
      .attr("x", 0)
      .attr("y", height - 6)
      .style("text-anchor", "start")
      .text(function(d) { return d.key; });

    svg.selectAll("circle")
      .data(function(d) { return d.values; })
      .enter()
      .append("circle")
      .attr("class", function(d) { return "disney " + d.genre.split(" ").join("_"); })
      .attr("cx", function(d) { return x(d.day_of_year); })
      .attr("cy", function(d) { return height; })
      .attr("r", function(d) { return rscale(d.inflation_adjusted_gross); })
      .on("mouseover", function(d) {
        var mq = window.matchMedia( "(max-width: 570px)" );
        if (mq.matches) {
          tooltip.style("visibility", "none")
          tooltip_fixed.style("display", "block")
                    .html(
              "<div class='container yes'><div class='row'>" +
              "<div class=' movie-body col-xs-12 border-" +
              d.genre.split(" ").join("_") + "'>" +
              "<h3>" + d.movie_title + "</h3>" +
              "<p><b>" + d.year + "</b></p>" +
              "<p><b>Production: </b>" + d.genre + "</p>" +
              "<p><b>Gross: " + formatMoney(d.total_gross) + "</b></p>" +
              "</div>" +
              "</div>" +
              "</div>" );
        } else {
          tooltip_fixed.style("display", "none")
          return tooltip
          .style("visibility", "visible")
          .html(
              "<div class='container yes'><div class='row'>" +
              "<div class=' movie-body col-xs-12 border-" +
              d.genre.split(" ").join("_") + "'>" +
              "<h3>" + d.movie_title + "</h3>" +
              "<p><b>" + d.year + "</b></p>" +
              "<p><b>Production: </b>" + d.genre + "</p>" +
              "<p><b>Gross: " + formatMoney(d.total_gross) + "</b></p>" +
              "</div>" +
              "</div>" +
              "</div>" );
        }
      })
      .on("mousemove", function() {
        var w = window.innerWidth;
        var h = document.body.clientHeight;
        
        if (d3.event.pageX < w / 2) {
          tooltip.style("left", d3.event.pageX + 20 + "px");
        } else {
          tooltip.style("left", d3.event.pageX - 240 + "px");
        }
        if (d3.event.pageY < h / 1.035) {
          tooltip.style("top", d3.event.pageY + 20 + "px");
        } else {
          tooltip.style("top", d3.event.pageY - 170 + "px");
        }
      })
      .on("mouseout", function() {
        return tooltip.style("visibility", "hidden");
      });

    svg.append("rect")
      .attr("x", 0)
      .attr("y", height)
      .attr("height", height + 70)
      .attr("width", width + 50)
      .style("fill", "#fff");

    svg.append("rect")
      .attr("x", -20)
      .attr("y", 0)
      .attr("height", height + 20)
      .attr("width", 20)
      .style("fill", "#fff");

    svg.append("rect")
      .attr("x", width)
      .attr("y", -100)
      .attr("height", height + 120)
      .attr("width", 20)
      .style("fill", "#fff");

    svg.append("g")
      .attr("class", "xaxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    /*EXTRA: Appending Labels to Visualization*/
    var extraLabels = function() {
      svg.append("text")
        .filter(function(d) {
          return d.key == 2016;
        })
        .attr("x", 1010)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Moana");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2015;
        })
        .attr("x", 700)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Star Wars Episode VII: </br>The Force Awakens");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2014;
        })
        .attr("x", 500)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Maleficent");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2013;
        })
        .attr("x", 960)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Frozen");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2012;
        })
        .attr("x", 230)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Avengers");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2012;
        })
        .attr("x", 870)
        .attr("y", 15)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Wreck-It Ralph");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2011;
        })
        .attr("x", 960)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Muppets");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2010;
        })
        .attr("x", 420)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Toy Story 3");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2009;
        })
        .attr("x", 430)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Up");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2009;
        })
        .attr("x", 900)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Princess and the Frog");
      svg.append("text")
        .filter(function(d) {
          return d.key == 2008;
        })
        .attr("x", 600)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("WALL-E");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2007;
        })
        .attr("x", 970)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Enchanted");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2006;
        })
        .attr("x", 450)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Cars");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2005;
        })
        .attr("x", 890)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Chicken Little");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2004;
        })
        .attr("x", 840)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Incredibles");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2003;
        })
        .attr("x", 340)
        .attr("y", 0)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Finding Nemo");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2002;
        })
        .attr("x", 1060)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Treasure Planet");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2002;
        })
        .attr("x", 460)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Lilo & Stitch");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2001;
        })
        .attr("x", 860)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Monters Inc.");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 2000;
        })
        .attr("x", 920)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Emperor's New Groove");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1999;
        })
        .attr("x", 500)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Tarzan");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1998;
        })
        .attr("x", 1060)
        .attr("y", 15)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("A Bug's Life");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1998;
        })
        .attr("x", 500)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Mulan");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1997;
        })
        .attr("x", 540)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Hercules");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1996;
        })
        .attr("x", 560)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Hunchback of Notre Dame");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1995;
        })
        .attr("x", 440)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Pocahontas");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1994;
        })
        .attr("x", 900)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Santa Clause");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1994;
        })
        .attr("x", 580)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Lion King");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1992;
        })
        .attr("x", 970)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Aladdin");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1993;
        })
        .attr("x", 660)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Hocus Pocus");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1991;
        })
        .attr("x", 870)
        .attr("y", 10)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Beauty and the Beast");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1990;
        })
        .attr("x", 850)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Rescuers Down Under");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1989;
        })
        .attr("x", 890)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Little Mermaid");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1987;
        })
        .attr("x", 980)
        .attr("y", 15)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Good Morning Vietnam");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1986;
        })
        .attr("x", 580)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Great Mouse Detective");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1985;
        })
        .attr("x", 650)
        .attr("y", 20)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Black Cauldron");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1982;
        })
        .attr("x", 580)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Tron");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1981;
        })
        .attr("x", 420)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Fox and the Hound");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1977;
        })
        .attr("x", 560)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Rescuers");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1977;
        })
        .attr("x", 180)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Many Adventures of Whinnie the Pooh ");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1976;
        })
        .attr("x", 80)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Freaky Friday");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1971;
        })
        .attr("x", 680)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Bedknobs and Broomsticks");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1970;
        })
        .attr("x", 380)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Aristocats");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1967;
        })
        .attr("x", 790)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Jungle Book");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1963;
        })
        .attr("x", 960)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("The Sword in the Stone");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1961;
        })
        .attr("x", 100)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("101 Dalmatians");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1959;
        })
        .attr("x", 100)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Sleeping Beauty");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1955;
        })
        .attr("x", 580)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Lady and the Tramp");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1950;
        })
        .attr("x", 160)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Cinderella");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1940;
        })
        .attr("x", 140)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Pinocchio");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1940;
        })
        .attr("x", 950)
        .attr("y", 25)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Fantasia");
      svg
        .append("text")
        .filter(function(d) {
          return d.key == 1937;
        })
        .attr("x", 870)
        .attr("y", 15)
        .attr("class", "movie-labels")
        .style("text-anchor", "start")
        .html("Snow White and the Seven Dwarfs");
    };
    extraLabels();
  }
);

function type(d) {
  d.inflation_adjusted_gross = +d.total_gross;
  d.year = parseDate(d.release_date).getFullYear();
  d.release_date = parseDate(d.release_date);
  d.day_of_year = +d.day_of_year;
  return d;
}

window.onscroll = function() {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}