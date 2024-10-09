var spec = "js/deaths_map.json";
vegaEmbed('#deaths_map', spec, { "actions": false }).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);