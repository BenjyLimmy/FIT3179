var spec = "js/alluvial_chart.json";
vegaEmbed('#alluvial_chart', spec, { "actions": false }).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);