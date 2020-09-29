
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleLabels_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "GoogleHybrid_1": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "jundiai_2": {
            "type": "geojson",
            "data": json_jundiai_2
        }
                    ,
        "perimetro_rural_3": {
            "type": "geojson",
            "data": json_perimetro_rural_3
        }
                    ,
        "M_04MATA_ATLANTICA_4": {
            "type": "geojson",
            "data": json_M_04MATA_ATLANTICA_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleLabels_0_0",
            "type": "raster",
            "source": "GoogleLabels_0"
        },
        {
            "id": "lyr_GoogleHybrid_1_1",
            "type": "raster",
            "source": "GoogleHybrid_1"
        },
        {
            "id": "lyr_jundiai_2_0",
            "type": "line",
            "source": "jundiai_2",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_perimetro_rural_3_0",
            "type": "fill",
            "source": "perimetro_rural_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ddbeaa'}
        }
,
        {
            "id": "lyr_M_04MATA_ATLANTICA_4_0",
            "type": "fill",
            "source": "M_04MATA_ATLANTICA_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
],
}