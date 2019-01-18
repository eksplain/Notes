// Depends on d3.js

!function() {

  var visuals = {
    version : "0.0.1"
  };

  let arrayDefaultConfig = {
      bgcolor : '#eee',
      width : 800,
      height: 60,
      margin: {
        top: 15,
        left: 40,
        right: 40,
        bottom: 15
      },
      cell: {
        height: 30,
        width: 30,
        fill: '#fff',
        stroke: '#000'
      },
      text: {
        padding: 7
      }
  }

  visuals.array = function(selector, data, options = {}) {
    let config = Object.assign({}, arrayDefaultConfig, options);
    var vizArray = {};

    var state = {
      data : data
    }

    console.log("selector is " + selector);
    console.log("data is " + data);

    var svg = d3.select(selector)
    .attr("width", config.width)
    .attr("height", config.height)
    .style("background-color", config.bgcolor);

    var cX = function(d, i) {
      return config.margin.left + (i* config.cell.width);
    }

    svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => cX(d, i))
    .attr("y", config.margin.top)
    .attr("height", config.cell.height)
    .attr("width", config.cell.width)
    .style("fill", config.cell.fill)
    .style("stroke", config.cell.stroke);

    svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i) => cX(d, i) + config.text.padding)
    .attr("y", config.margin.top + config.cell.height - config.text.padding)
    .html((d) => d);


    return vizArray;
  };


  if (typeof define === "function" && define.amd) {
    define(visuals);
  } else if (typeof module === "object" && module.exports) {
    module.exports = visuals;
  } else {
    this.visuals = visuals;
  }
}();
