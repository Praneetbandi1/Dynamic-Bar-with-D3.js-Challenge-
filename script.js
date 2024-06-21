function barChart() {
    const barChartData=[100,420,230,850,560,925]
    const barChartWidth=500
    const barChartMargin=1
    const barChartHeight=20
    const svgHeight=barChartData.length * (barChartHeight + barChartMargin);

    d3.selet('body')
    .append('svg')
    .attr('width', barChartWidth)
    .attr('height', svgHeight);


}

    
