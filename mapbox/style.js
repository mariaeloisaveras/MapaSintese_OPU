
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleHybrid_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "perimetro_rural_1": {
            "type": "geojson",
            "data": json_perimetro_rural_1
        }
                    ,
        "jundiai_2": {
            "type": "geojson",
            "data": json_jundiai_2
        }
                    ,
        "mata_atlantica_3": {
            "type": "geojson",
            "data": json_mata_atlantica_3
        }
                    ,
        "cerrado_4": {
            "type": "geojson",
            "data": json_cerrado_4
        }
                    ,
        "UGRHI5_jund_5": {
            "type": "geojson",
            "data": json_UGRHI5_jund_5
        }
                    ,
        "curvas_nivel_31983_6": {
            "type": "geojson",
            "data": json_curvas_nivel_31983_6
        }
                    ,
        "Equipamentoseducacionais_7": {
            "type": "geojson",
            "data": json_Equipamentoseducacionais_7
        }
                    ,
        "Equipamentosculturais_8": {
            "type": "geojson",
            "data": json_Equipamentosculturais_8
        }
                    ,
        "equip_sociais_9": {
            "type": "geojson",
            "data": json_equip_sociais_9
        }
                    ,
        "Rios_Riachos_Corregos_10": {
            "type": "geojson",
            "data": json_Rios_Riachos_Corregos_10
        }
                    ,
        "rio_principal_11": {
            "type": "geojson",
            "data": json_rio_principal_11
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
            "id": "lyr_GoogleHybrid_0_0",
            "type": "raster",
            "source": "GoogleHybrid_0"
        },
        {
            "id": "lyr_perimetro_rural_1_0",
            "type": "fill",
            "source": "perimetro_rural_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#cccccc'}
        }
,
        {
            "id": "lyr_jundiai_2_0",
            "type": "line",
            "source": "jundiai_2",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_mata_atlantica_3_0",
            "type": "fill",
            "source": "mata_atlantica_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#4daf4a'}
        }
,
        {
            "id": "lyr_cerrado_4_0",
            "type": "fill",
            "source": "cerrado_4",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffff33'}
        }
,
        {
            "id": "lyr_UGRHI5_jund_5_0",
            "type": "fill",
            "source": "UGRHI5_jund_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'ESTAGIO'], 'consolidado'], 1.0, ['==', ['get', 'ESTAGIO'], 'em consolidacao'], 1.0, ['==', ['get', 'ESTAGIO'], 'rarefeito'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'ESTAGIO'], 'consolidado'], '#e46666', ['==', ['get', 'ESTAGIO'], 'em consolidacao'], '#7b7cb8', ['==', ['get', 'ESTAGIO'], 'rarefeito'], '#db96db', '#ffffff']}
        }
,
        {
            "id": "lyr_curvas_nivel_31983_6_0",
            "type": "line",
            "source": "curvas_nivel_31983_6",
            "layout": {},
            "paint": {'line-width': 0.35714285714285715, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_Equipamentoseducacionais_7_0",
            "type": "circle",
            "source": "Equipamentoseducacionais_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#f2d00b', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#b7b105'}
        }
,
        {
            "id": "lyr_Equipamentosculturais_8_0",
            "type": "circle",
            "source": "Equipamentosculturais_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#a243fb', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#710ade'}
        }
,
        {
            "id": "lyr_equip_sociais_9_0",
            "type": "circle",
            "source": "equip_sociais_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_Rios_Riachos_Corregos_10_0",
            "type": "line",
            "source": "Rios_Riachos_Corregos_10",
            "layout": {},
            "paint": {'line-width': 0.5714285714285714, 'line-opacity': 1.0, 'line-color': '#04d1fa'}
        }
,
        {
            "id": "lyr_rio_principal_11_0",
            "type": "line",
            "source": "rio_principal_11",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#0826e7'}
        }
],
}