var spec = "js/waterfall_chart.json";
vegaEmbed('#waterfall_chart', spec, { "actions": false }).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);