//U46368100 
function barChart() {
    const barChartData=[100,420,230,850,560,925]
    const barChartWidth=500
    const barChartMargin=1
    const barChartHeight=20
    const svgHeight=barChartData.length * (barChartHeight + barChartMargin);

    d3.select('body')
    .append('svg')
    .attr('width', barChartWidth)
    .attr('height', svgHeight);

    const scale=d3.scaleLinear()
    .domain([d3.min(barChartData), d3.max(barChartData)])//Includes barChartData
    .range([50,500])

    //creating <g> element within SVG that will house both the <rect> tag for the bar and a<text> for a label
    const barChart=d3.select('svg')
        .selectAll('g')
        .data(barChartData)
        .enter()
        .append('g')
        .attr('transform',function(d,i) {
            return 'translate(0,' +i * barChartHeight + ')'

        })

        barChart.append('rect')
        .attr('fill', 'green')
        .attr('height' , barChartHeight - barChartMargin)
        .transition()
        .ease(d3.easeLinear) //loads bar chart data from the left 
        .duration(1000)
        .attr('width',function(d){
            return scale(d)
        })

        barChart.append('text')
        .attr('fill','pink')      //specifies the color of the text 
        .attr('text-anchor','end')  // position text is aligned to the ending point 
        .attr('y',barChartHeight/2)
        .attr('dy','.36em')
        .text(function(d) {         //displays value of the given text 
            return d 
        })
        .transition()
        .ease(d3.easeLinear) //loads bar chart data from the left
        .duration(1050)
        .delay(1050)  //loads in text after bars have reached full width 
        .attr('x',function (d) {  //sets location of text
            return (scale(d))  

        });
        barChart.selectAll("rect")
        .on("mouseover" , function () { //mouseover changes color to red
            d3.select(this)
            .style("fill" ,"red")

        })

        .on("mouseout" , //mouseout changes color back to green 
            function () {
                d3.select(this)
                .style("fill", "green")

            })
        

        


}

    
