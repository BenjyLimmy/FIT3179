var spec = "js/waffle_chart.json";
vegaEmbed('#waffle_chart', spec, { "actions": false }).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);