var data = [10, 20, 30, 40, 50];

// Configurar el lienzo SVG
var svg = d3.select("body").append("svg").attr("width", 300).attr("height", 150);

// Crear barras
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) { return i * 40; })
    .attr("y", function(d) { return 150 - d; })
    .attr("width", 30)
    .attr("height", function(d) { return d; })
    .attr("class", "bar");