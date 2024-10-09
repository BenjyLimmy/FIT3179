var spec = "js/emissions_map.json";
vegaEmbed('#emissions_map', spec, { "actions": false }).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);