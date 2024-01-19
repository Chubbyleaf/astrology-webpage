cloud = {
    make: function (options) {

        if (options == undefined) options = {}
        if (options.width == undefined) options.width = 300
        if (options.height == undefined) options.height = 300
        if (options.font == undefined) options.font = "SongTi-regular"
        if (options.container == undefined) options.container = "body"
        if (options.words == undefined) options.words = [{ text: "This", size: 40 }, { text: "is", size: 40 }, { text: "an", size: 40 }, { text: "Example", size: 40 }]

        function fillOpacity(size) {
            if (size >= 70) return 1;
            else if (size >= 20) return 0.7;
            else return 0.3;
        }

        var fontSizeScale = d3.scale.linear()
            .domain([d3.min(options.words, function (d) { return d.size; }), d3.max(options.words, function (d) { return d.size; })])
            .range(options.fontRange);
            
        d3.layout.cloud().size([options.width, options.height])
            .words(options.words)
            .rotate(0)
            .font(options.font)
            .fontSize(function (d) { return fontSizeScale(d.size); })
            .on("end", function (words) {
                var svg = d3.select(options.container).append("svg")
                    .attr("width", options.width)
                    .attr("height", options.height)
                    .append("g")
                    .attr("transform", "translate(" + (options.width / 2) + "," + (options.height / 2) + ")");

                // Add tooltip
                var tooltip = d3.select(options.container)
                    .append("div")
                    .style("position", "absolute")
                    .style("visibility", "hidden")
                    .style("background-color", "rgba(255, 255, 255, 0.8)")
                    .style("color", "black")
                    .style("padding", "5px")
                    .style("border-radius", "5px")
                    .style("box-shadow", "0 0 10px rgba(0, 0, 0, 0.2)")

                svg.selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", function (d) { return d.size + "px"; })
                    .style("font-family", options.font)
                    .style("fill", function (d) {
                        return "rgba(255, 255, 255, " + fillOpacity(d.count) + ")";
                    })
                    .attr("text-anchor", "middle")
                    .attr("transform", function (d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function (d) { return d.text; })

                    .on("mouseover", function (d) {
                        tooltip.html(`【${d.text}】,属于「${d.originName}」,共出现「${d.count}」次`)
                            .style("visibility", "visible")
                            .style("font-weight","bolder")
                    })
                    .on("mouseout", function () {
                        tooltip.style("visibility", "hidden");
                    });
            })
            .start();
    }
}

