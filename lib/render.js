/**
 * Created by cthed on 25/02/2016.
 * this module will render a chart doughnut for json response fromm web
 */

/**
 *
 * @type {*[]} data
 */
var data = [
  {
    value: 61,
    color: "#09355C",
    label: "Label 1"
  }, {
    value: 11,
    color: "#CBCBCB",
    label: "Label 2"
  }, {
    value: 28,
    color: "#B61B12",
    label: "Label 3"
  }];
/**
 *
 * @type {{segmentShowStroke: boolean, animateRotate: boolean, animateScale: boolean, percentageInnerCutout: number, tooltipTemplate: string}} options
 *
 */
var options = {
  segmentShowStroke: false,
  animateRotate: true,
  animateScale: false,
  percentageInnerCutout: 50,
  tooltipTemplate: "<%= value %>%"
}

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx).Doughnut(data, options);

// Note - tooltipTemplate is for the string that shows in the tooltip

// legendTemplate is if you want to generate an HTML legend for the chart and use somewhere else on the page

// e.g:

document.getElementById('js-legend').innerHTML = myChart.generateLegend();
