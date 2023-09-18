ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28193").setExtent([-186335.360206, 863032.944626, 495231.307156, 1292187.111730]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var lyr_FILLEDHEBRON_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "FILLED-HEBRON",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FILLEDHEBRON_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3806792.205772, 3433112.910530, 3968422.214033, 3911280.758308]
                            })
                        });
var format_CHANNELHEBRON_3 = new ol.format.GeoJSON();
var features_CHANNELHEBRON_3 = format_CHANNELHEBRON_3.readFeatures(json_CHANNELHEBRON_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_CHANNELHEBRON_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHANNELHEBRON_3.addFeatures(features_CHANNELHEBRON_3);
var lyr_CHANNELHEBRON_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHANNELHEBRON_3, 
                style: style_CHANNELHEBRON_3,
                interactive: true,
                title: '<img src="styles/legend/CHANNELHEBRON_3.png" /> CHANNEL-HEBRON'
            });
var format_palborderHEBRON_4 = new ol.format.GeoJSON();
var features_palborderHEBRON_4 = format_palborderHEBRON_4.readFeatures(json_palborderHEBRON_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_palborderHEBRON_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palborderHEBRON_4.addFeatures(features_palborderHEBRON_4);
var lyr_palborderHEBRON_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_palborderHEBRON_4, 
                style: style_palborderHEBRON_4,
                interactive: true,
                title: '<img src="styles/legend/palborderHEBRON_4.png" /> palborder-HEBRON'
            });
var format_WBVECTORBORDER_5 = new ol.format.GeoJSON();
var features_WBVECTORBORDER_5 = format_WBVECTORBORDER_5.readFeatures(json_WBVECTORBORDER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_WBVECTORBORDER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBVECTORBORDER_5.addFeatures(features_WBVECTORBORDER_5);
var lyr_WBVECTORBORDER_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WBVECTORBORDER_5, 
                style: style_WBVECTORBORDER_5,
                interactive: true,
                title: '<img src="styles/legend/WBVECTORBORDER_5.png" /> WB-VECTOR-BORDER'
            });
var format_MergedCatchments_6 = new ol.format.GeoJSON();
var features_MergedCatchments_6 = format_MergedCatchments_6.readFeatures(json_MergedCatchments_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_MergedCatchments_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergedCatchments_6.addFeatures(features_MergedCatchments_6);
var lyr_MergedCatchments_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MergedCatchments_6, 
                style: style_MergedCatchments_6,
                interactive: true,
    title: 'Merged-Catchments<br />\
    <img src="styles/legend/MergedCatchments_6_0.png" /> UPSLOPE-GAZA-HEBRON1-VECTOR<br />\
    <img src="styles/legend/MergedCatchments_6_1.png" /> UPSLOPE-JAYYOUS-HEBRON1-VECTOR<br />\
    <img src="styles/legend/MergedCatchments_6_2.png" /> Vector-Alras1<br />\
    <img src="styles/legend/MergedCatchments_6_3.png" /> Vector-Attil<br />\
    <img src="styles/legend/MergedCatchments_6_4.png" /> Vector-Auja<br />\
    <img src="styles/legend/MergedCatchments_6_5.png" /> Vector-Auja1<br />\
    <img src="styles/legend/MergedCatchments_6_6.png" /> Vector-Auja2<br />\
    <img src="styles/legend/MergedCatchments_6_7.png" /> Vector-Azzoun<br />\
    <img src="styles/legend/MergedCatchments_6_8.png" /> Vector-Baqa-Sharqiya<br />\
    <img src="styles/legend/MergedCatchments_6_9.png" /> Vector-Beida1<br />\
    <img src="styles/legend/MergedCatchments_6_10.png" /> Vector-Beit Awwa<br />\
    <img src="styles/legend/MergedCatchments_6_11.png" /> Vector-Beitjala<br />\
    <img src="styles/legend/MergedCatchments_6_12.png" /> Vector-Beitjala2<br />\
    <img src="styles/legend/MergedCatchments_6_13.png" /> Vector-Beit-Lahem1<br />\
    <img src="styles/legend/MergedCatchments_6_14.png" /> Vector-Beit-Lahem2<br />\
    <img src="styles/legend/MergedCatchments_6_15.png" /> Vector-Beit-Lahem3<br />\
    <img src="styles/legend/MergedCatchments_6_16.png" /> Vector-Beit-Soreek<br />\
    <img src="styles/legend/MergedCatchments_6_17.png" /> Vector-Beit-Soreek2<br />\
    <img src="styles/legend/MergedCatchments_6_18.png" /> Vector-Beit-Soreek3<br />\
    <img src="styles/legend/MergedCatchments_6_19.png" /> Vector-Budros<br />\
    <img src="styles/legend/MergedCatchments_6_20.png" /> Vector-Deadsea1<br />\
    <img src="styles/legend/MergedCatchments_6_21.png" /> Vector-Deadsea12<br />\
    <img src="styles/legend/MergedCatchments_6_22.png" /> Vector-Deadsea13<br />\
    <img src="styles/legend/MergedCatchments_6_23.png" /> Vector-Deadsea27<br />\
    <img src="styles/legend/MergedCatchments_6_24.png" /> Vector-Deadsea28<br />\
    <img src="styles/legend/MergedCatchments_6_25.png" /> Vector-Deadsea29<br />\
    <img src="styles/legend/MergedCatchments_6_26.png" /> Vector-Deadsea3<br />\
    <img src="styles/legend/MergedCatchments_6_27.png" /> Vector-Deadsea30<br />\
    <img src="styles/legend/MergedCatchments_6_28.png" /> Vector-Deadsea31<br />\
    <img src="styles/legend/MergedCatchments_6_29.png" /> Vector-Deadsea32<br />\
    <img src="styles/legend/MergedCatchments_6_30.png" /> Vector-Deadsea33<br />\
    <img src="styles/legend/MergedCatchments_6_31.png" /> Vector-Deadsea34<br />\
    <img src="styles/legend/MergedCatchments_6_32.png" /> Vector-Deadsea35<br />\
    <img src="styles/legend/MergedCatchments_6_33.png" /> Vector-Deadsea36<br />\
    <img src="styles/legend/MergedCatchments_6_34.png" /> Vector-Deadsea37<br />\
    <img src="styles/legend/MergedCatchments_6_35.png" /> Vector-Deadsea38<br />\
    <img src="styles/legend/MergedCatchments_6_36.png" /> Vector-Deadsea39<br />\
    <img src="styles/legend/MergedCatchments_6_37.png" /> Vector-Deadsea4<br />\
    <img src="styles/legend/MergedCatchments_6_38.png" /> Vector-Deadsea40<br />\
    <img src="styles/legend/MergedCatchments_6_39.png" /> Vector-Deadsea41<br />\
    <img src="styles/legend/MergedCatchments_6_40.png" /> Vector-Deadsea42<br />\
    <img src="styles/legend/MergedCatchments_6_41.png" /> Vector-Deadsea43<br />\
    <img src="styles/legend/MergedCatchments_6_42.png" /> Vector-Deadsea44<br />\
    <img src="styles/legend/MergedCatchments_6_43.png" /> Vector-Deadsea45<br />\
    <img src="styles/legend/MergedCatchments_6_44.png" /> Vector-Deadsea5<br />\
    <img src="styles/legend/MergedCatchments_6_45.png" /> Vector-Deadsea6<br />\
    <img src="styles/legend/MergedCatchments_6_46.png" /> Vector-Deadsea7<br />\
    <img src="styles/legend/MergedCatchments_6_47.png" /> Vector-Deadsea9<br />\
    <img src="styles/legend/MergedCatchments_6_48.png" /> Vector-Dir Baloot<br />\
    <img src="styles/legend/MergedCatchments_6_49.png" /> Vector-Dir-Abu-Dief<br />\
    <img src="styles/legend/MergedCatchments_6_50.png" /> Vector-Dir-Abu-Dief2<br />\
    <img src="styles/legend/MergedCatchments_6_51.png" /> Vector-Faroun<br />\
    <img src="styles/legend/MergedCatchments_6_52.png" /> Vector-Hableh1<br />\
    <img src="styles/legend/MergedCatchments_6_53.png" /> Vector-Hebron11<br />\
    <img src="styles/legend/MergedCatchments_6_54.png" /> Vector-Hebron15<br />\
    <img src="styles/legend/MergedCatchments_6_55.png" /> Vector-Hebron16<br />\
    <img src="styles/legend/MergedCatchments_6_56.png" /> Vector-Hebron18<br />\
    <img src="styles/legend/MergedCatchments_6_57.png" /> Vector-Hebron19<br />\
    <img src="styles/legend/MergedCatchments_6_58.png" /> Vector-Hebron2<br />\
    <img src="styles/legend/MergedCatchments_6_59.png" /> Vector-Hebron20<br />\
    <img src="styles/legend/MergedCatchments_6_60.png" /> Vector-Hebron3<br />\
    <img src="styles/legend/MergedCatchments_6_61.png" /> Vector-Jaroushia<br />\
    <img src="styles/legend/MergedCatchments_6_62.png" /> Vector-Jbara2<br />\
    <img src="styles/legend/MergedCatchments_6_63.png" /> Vector-Jeftlik1<br />\
    <img src="styles/legend/MergedCatchments_6_64.png" /> Vector-Jeftlik2<br />\
    <img src="styles/legend/MergedCatchments_6_65.png" /> Vector-Jeftlik5<br />\
    <img src="styles/legend/MergedCatchments_6_66.png" /> Vector-Jenin1<br />\
    <img src="styles/legend/MergedCatchments_6_67.png" /> Vector-Jenin2<br />\
    <img src="styles/legend/MergedCatchments_6_68.png" /> Vector-Jenin3<br />\
    <img src="styles/legend/MergedCatchments_6_69.png" /> Vector-Jericho1<br />\
    <img src="styles/legend/MergedCatchments_6_70.png" /> Vector-Jericho17<br />\
    <img src="styles/legend/MergedCatchments_6_71.png" /> Vector-Jericho7<br />\
    <img src="styles/legend/MergedCatchments_6_72.png" /> Vector-Jericho9<br />\
    <img src="styles/legend/MergedCatchments_6_73.png" /> Vector-Jerihco11<br />\
    <img src="styles/legend/MergedCatchments_6_74.png" /> Vector-Jerusalem1<br />\
    <img src="styles/legend/MergedCatchments_6_75.png" /> Vector-Jerusalem11<br />\
    <img src="styles/legend/MergedCatchments_6_76.png" /> Vector-Jerusalem22<br />\
    <img src="styles/legend/MergedCatchments_6_77.png" /> Vector-Jerusalem4<br />\
    <img src="styles/legend/MergedCatchments_6_78.png" /> Vector-Kharas<br />\
    <img src="styles/legend/MergedCatchments_6_79.png" /> Vector-Kufrdan<br />\
    <img src="styles/legend/MergedCatchments_6_80.png" /> Vector-Kufrdan2<br />\
    <img src="styles/legend/MergedCatchments_6_81.png" /> Vector-kufrsoor<br />\
    <img src="styles/legend/MergedCatchments_6_82.png" /> Vector-Mailh1<br />\
    <img src="styles/legend/MergedCatchments_6_83.png" /> Vector-Muteleh-Jenin<br />\
    <img src="styles/legend/MergedCatchments_6_84.png" /> Vector-Nahaleen1<br />\
    <img src="styles/legend/MergedCatchments_6_85.png" /> Vector-Nileen<br />\
    <img src="styles/legend/MergedCatchments_6_86.png" /> Vector-Qalqilya2<br />\
    <img src="styles/legend/MergedCatchments_6_87.png" /> Vector-Qalqilya-City<br />\
    <img src="styles/legend/MergedCatchments_6_88.png" /> Vector-Qibya<br />\
    <img src="styles/legend/MergedCatchments_6_89.png" /> Vector-Qifeen<br />\
    <img src="styles/legend/MergedCatchments_6_90.png" /> Vector-Qifeen5<br />\
    <img src="styles/legend/MergedCatchments_6_91.png" /> Vector-Rantees2<br />\
    <img src="styles/legend/MergedCatchments_6_92.png" /> Vector-Salman<br />\
    <img src="styles/legend/MergedCatchments_6_93.png" /> Vector-Tinak1-Jenin<br />\
    <img src="styles/legend/MergedCatchments_6_94.png" /> Vector-Tinak3<br />\
    <img src="styles/legend/MergedCatchments_6_95.png" /> Vector-Tulkarm2<br />\
    <img src="styles/legend/MergedCatchments_6_96.png" /> Vector-Um-Alreehan<br />\
    <img src="styles/legend/MergedCatchments_6_97.png" /> Vector-Yatta<br />\
    <img src="styles/legend/MergedCatchments_6_98.png" /> Vector-Yatta1<br />\
    <img src="styles/legend/MergedCatchments_6_99.png" /> Vector-Yatta2<br />\
    <img src="styles/legend/MergedCatchments_6_100.png" /> Vector-Zawya1<br />\
    <img src="styles/legend/MergedCatchments_6_101.png" /> Vector-Zawya2<br />\
    <img src="styles/legend/MergedCatchments_6_102.png" /> Vector-Zawya3<br />\
    <img src="styles/legend/MergedCatchments_6_103.png" /> Vector-Zboba<br />\
    <img src="styles/legend/MergedCatchments_6_104.png" /> Vector-Zboba2<br />\
    <img src="styles/legend/MergedCatchments_6_105.png" /> Vector-Zeita1<br />\
    <img src="styles/legend/MergedCatchments_6_106.png" /> Vector-Zeita2<br />\
    <img src="styles/legend/MergedCatchments_6_107.png" /> <br />'
        });
var format_VectorJerusalem11_7 = new ol.format.GeoJSON();
var features_VectorJerusalem11_7 = format_VectorJerusalem11_7.readFeatures(json_VectorJerusalem11_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJerusalem11_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJerusalem11_7.addFeatures(features_VectorJerusalem11_7);
var lyr_VectorJerusalem11_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJerusalem11_7, 
                style: style_VectorJerusalem11_7,
                interactive: true,
                title: '<img src="styles/legend/VectorJerusalem11_7.png" /> Vector-Jerusalem11'
            });
var format_VectorYatta_8 = new ol.format.GeoJSON();
var features_VectorYatta_8 = format_VectorYatta_8.readFeatures(json_VectorYatta_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorYatta_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorYatta_8.addFeatures(features_VectorYatta_8);
var lyr_VectorYatta_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorYatta_8, 
                style: style_VectorYatta_8,
                interactive: true,
                title: '<img src="styles/legend/VectorYatta_8.png" /> Vector-Yatta'
            });
var format_VectorYatta1_9 = new ol.format.GeoJSON();
var features_VectorYatta1_9 = format_VectorYatta1_9.readFeatures(json_VectorYatta1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorYatta1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorYatta1_9.addFeatures(features_VectorYatta1_9);
var lyr_VectorYatta1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorYatta1_9, 
                style: style_VectorYatta1_9,
                interactive: true,
                title: '<img src="styles/legend/VectorYatta1_9.png" /> Vector-Yatta1'
            });
var format_VectorDeadsea12_10 = new ol.format.GeoJSON();
var features_VectorDeadsea12_10 = format_VectorDeadsea12_10.readFeatures(json_VectorDeadsea12_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea12_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea12_10.addFeatures(features_VectorDeadsea12_10);
var lyr_VectorDeadsea12_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea12_10, 
                style: style_VectorDeadsea12_10,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea12_10.png" /> Vector-Deadsea12'
            });
var format_VectorDeadsea13_11 = new ol.format.GeoJSON();
var features_VectorDeadsea13_11 = format_VectorDeadsea13_11.readFeatures(json_VectorDeadsea13_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea13_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea13_11.addFeatures(features_VectorDeadsea13_11);
var lyr_VectorDeadsea13_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea13_11, 
                style: style_VectorDeadsea13_11,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea13_11.png" /> Vector-Deadsea13'
            });
var format_VectorJericho7_12 = new ol.format.GeoJSON();
var features_VectorJericho7_12 = format_VectorJericho7_12.readFeatures(json_VectorJericho7_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJericho7_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJericho7_12.addFeatures(features_VectorJericho7_12);
var lyr_VectorJericho7_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJericho7_12, 
                style: style_VectorJericho7_12,
                interactive: true,
                title: '<img src="styles/legend/VectorJericho7_12.png" /> Vector-Jericho7'
            });
var format_VectorRantees2_13 = new ol.format.GeoJSON();
var features_VectorRantees2_13 = format_VectorRantees2_13.readFeatures(json_VectorRantees2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorRantees2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorRantees2_13.addFeatures(features_VectorRantees2_13);
var lyr_VectorRantees2_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorRantees2_13, 
                style: style_VectorRantees2_13,
                interactive: true,
                title: '<img src="styles/legend/VectorRantees2_13.png" /> Vector-Rantees2'
            });
var format_VectorBeitLahem3_14 = new ol.format.GeoJSON();
var features_VectorBeitLahem3_14 = format_VectorBeitLahem3_14.readFeatures(json_VectorBeitLahem3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitLahem3_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitLahem3_14.addFeatures(features_VectorBeitLahem3_14);
var lyr_VectorBeitLahem3_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitLahem3_14, 
                style: style_VectorBeitLahem3_14,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitLahem3_14.png" /> Vector-Beit-Lahem3'
            });
var format_VectorJericho9_15 = new ol.format.GeoJSON();
var features_VectorJericho9_15 = format_VectorJericho9_15.readFeatures(json_VectorJericho9_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJericho9_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJericho9_15.addFeatures(features_VectorJericho9_15);
var lyr_VectorJericho9_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJericho9_15, 
                style: style_VectorJericho9_15,
                interactive: true,
                title: '<img src="styles/legend/VectorJericho9_15.png" /> Vector-Jericho9'
            });
var format_VectorYatta2_16 = new ol.format.GeoJSON();
var features_VectorYatta2_16 = format_VectorYatta2_16.readFeatures(json_VectorYatta2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorYatta2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorYatta2_16.addFeatures(features_VectorYatta2_16);
var lyr_VectorYatta2_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorYatta2_16, 
                style: style_VectorYatta2_16,
                interactive: true,
                title: '<img src="styles/legend/VectorYatta2_16.png" /> Vector-Yatta2'
            });
var format_VectorDeadsea3_17 = new ol.format.GeoJSON();
var features_VectorDeadsea3_17 = format_VectorDeadsea3_17.readFeatures(json_VectorDeadsea3_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea3_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea3_17.addFeatures(features_VectorDeadsea3_17);
var lyr_VectorDeadsea3_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea3_17, 
                style: style_VectorDeadsea3_17,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea3_17.png" /> Vector-Deadsea3'
            });
var format_VectorHebron15_18 = new ol.format.GeoJSON();
var features_VectorHebron15_18 = format_VectorHebron15_18.readFeatures(json_VectorHebron15_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron15_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron15_18.addFeatures(features_VectorHebron15_18);
var lyr_VectorHebron15_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron15_18, 
                style: style_VectorHebron15_18,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron15_18.png" /> Vector-Hebron15'
            });
var format_VectorHebron16_19 = new ol.format.GeoJSON();
var features_VectorHebron16_19 = format_VectorHebron16_19.readFeatures(json_VectorHebron16_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron16_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron16_19.addFeatures(features_VectorHebron16_19);
var lyr_VectorHebron16_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron16_19, 
                style: style_VectorHebron16_19,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron16_19.png" /> Vector-Hebron16'
            });
var format_VectorHebron18_20 = new ol.format.GeoJSON();
var features_VectorHebron18_20 = format_VectorHebron18_20.readFeatures(json_VectorHebron18_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron18_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron18_20.addFeatures(features_VectorHebron18_20);
var lyr_VectorHebron18_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron18_20, 
                style: style_VectorHebron18_20,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron18_20.png" /> Vector-Hebron18'
            });
var format_VectorHebron19_21 = new ol.format.GeoJSON();
var features_VectorHebron19_21 = format_VectorHebron19_21.readFeatures(json_VectorHebron19_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron19_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron19_21.addFeatures(features_VectorHebron19_21);
var lyr_VectorHebron19_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron19_21, 
                style: style_VectorHebron19_21,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron19_21.png" /> Vector-Hebron19'
            });
var format_VectorHebron20_22 = new ol.format.GeoJSON();
var features_VectorHebron20_22 = format_VectorHebron20_22.readFeatures(json_VectorHebron20_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron20_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron20_22.addFeatures(features_VectorHebron20_22);
var lyr_VectorHebron20_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron20_22, 
                style: style_VectorHebron20_22,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron20_22.png" /> Vector-Hebron20'
            });
var format_VectorQibya_23 = new ol.format.GeoJSON();
var features_VectorQibya_23 = format_VectorQibya_23.readFeatures(json_VectorQibya_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorQibya_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorQibya_23.addFeatures(features_VectorQibya_23);
var lyr_VectorQibya_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorQibya_23, 
                style: style_VectorQibya_23,
                interactive: true,
                title: '<img src="styles/legend/VectorQibya_23.png" /> Vector-Qibya'
            });
var format_VectorBaqaSharqiya_24 = new ol.format.GeoJSON();
var features_VectorBaqaSharqiya_24 = format_VectorBaqaSharqiya_24.readFeatures(json_VectorBaqaSharqiya_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBaqaSharqiya_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBaqaSharqiya_24.addFeatures(features_VectorBaqaSharqiya_24);
var lyr_VectorBaqaSharqiya_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBaqaSharqiya_24, 
                style: style_VectorBaqaSharqiya_24,
                interactive: true,
                title: '<img src="styles/legend/VectorBaqaSharqiya_24.png" /> Vector-Baqa-Sharqiya'
            });
var format_VectorAuja1_25 = new ol.format.GeoJSON();
var features_VectorAuja1_25 = format_VectorAuja1_25.readFeatures(json_VectorAuja1_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAuja1_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAuja1_25.addFeatures(features_VectorAuja1_25);
var lyr_VectorAuja1_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAuja1_25, 
                style: style_VectorAuja1_25,
                interactive: true,
                title: '<img src="styles/legend/VectorAuja1_25.png" /> Vector-Auja1'
            });
var format_VectorDeadsea31_26 = new ol.format.GeoJSON();
var features_VectorDeadsea31_26 = format_VectorDeadsea31_26.readFeatures(json_VectorDeadsea31_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea31_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea31_26.addFeatures(features_VectorDeadsea31_26);
var lyr_VectorDeadsea31_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea31_26, 
                style: style_VectorDeadsea31_26,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea31_26.png" /> Vector-Deadsea31'
            });
var format_VectorBeitjala_27 = new ol.format.GeoJSON();
var features_VectorBeitjala_27 = format_VectorBeitjala_27.readFeatures(json_VectorBeitjala_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitjala_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitjala_27.addFeatures(features_VectorBeitjala_27);
var lyr_VectorBeitjala_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitjala_27, 
                style: style_VectorBeitjala_27,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitjala_27.png" /> Vector-Beitjala'
            });
var format_VectorBeitjala2_28 = new ol.format.GeoJSON();
var features_VectorBeitjala2_28 = format_VectorBeitjala2_28.readFeatures(json_VectorBeitjala2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitjala2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitjala2_28.addFeatures(features_VectorBeitjala2_28);
var lyr_VectorBeitjala2_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitjala2_28, 
                style: style_VectorBeitjala2_28,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitjala2_28.png" /> Vector-Beitjala2'
            });
var format_VectorDeadsea27_29 = new ol.format.GeoJSON();
var features_VectorDeadsea27_29 = format_VectorDeadsea27_29.readFeatures(json_VectorDeadsea27_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea27_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea27_29.addFeatures(features_VectorDeadsea27_29);
var lyr_VectorDeadsea27_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea27_29, 
                style: style_VectorDeadsea27_29,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea27_29.png" /> Vector-Deadsea27'
            });
var format_VectorDeadsea28_30 = new ol.format.GeoJSON();
var features_VectorDeadsea28_30 = format_VectorDeadsea28_30.readFeatures(json_VectorDeadsea28_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea28_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea28_30.addFeatures(features_VectorDeadsea28_30);
var lyr_VectorDeadsea28_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea28_30, 
                style: style_VectorDeadsea28_30,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea28_30.png" /> Vector-Deadsea28'
            });
var format_VectorDeadsea29_31 = new ol.format.GeoJSON();
var features_VectorDeadsea29_31 = format_VectorDeadsea29_31.readFeatures(json_VectorDeadsea29_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea29_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea29_31.addFeatures(features_VectorDeadsea29_31);
var lyr_VectorDeadsea29_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea29_31, 
                style: style_VectorDeadsea29_31,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea29_31.png" /> Vector-Deadsea29'
            });
var format_VectorDeadsea30_32 = new ol.format.GeoJSON();
var features_VectorDeadsea30_32 = format_VectorDeadsea30_32.readFeatures(json_VectorDeadsea30_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea30_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea30_32.addFeatures(features_VectorDeadsea30_32);
var lyr_VectorDeadsea30_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea30_32, 
                style: style_VectorDeadsea30_32,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea30_32.png" /> Vector-Deadsea30'
            });
var format_VectorZboba_33 = new ol.format.GeoJSON();
var features_VectorZboba_33 = format_VectorZboba_33.readFeatures(json_VectorZboba_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZboba_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZboba_33.addFeatures(features_VectorZboba_33);
var lyr_VectorZboba_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZboba_33, 
                style: style_VectorZboba_33,
                interactive: true,
                title: '<img src="styles/legend/VectorZboba_33.png" /> Vector-Zboba'
            });
var format_VectorQalqilyaCity_34 = new ol.format.GeoJSON();
var features_VectorQalqilyaCity_34 = format_VectorQalqilyaCity_34.readFeatures(json_VectorQalqilyaCity_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorQalqilyaCity_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorQalqilyaCity_34.addFeatures(features_VectorQalqilyaCity_34);
var lyr_VectorQalqilyaCity_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorQalqilyaCity_34, 
                style: style_VectorQalqilyaCity_34,
                interactive: true,
                title: '<img src="styles/legend/VectorQalqilyaCity_34.png" /> Vector-Qalqilya-City'
            });
var format_VectorQifeen5_35 = new ol.format.GeoJSON();
var features_VectorQifeen5_35 = format_VectorQifeen5_35.readFeatures(json_VectorQifeen5_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorQifeen5_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorQifeen5_35.addFeatures(features_VectorQifeen5_35);
var lyr_VectorQifeen5_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorQifeen5_35, 
                style: style_VectorQifeen5_35,
                interactive: true,
                title: '<img src="styles/legend/VectorQifeen5_35.png" /> Vector-Qifeen5'
            });
var format_VectorZboba2_36 = new ol.format.GeoJSON();
var features_VectorZboba2_36 = format_VectorZboba2_36.readFeatures(json_VectorZboba2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZboba2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZboba2_36.addFeatures(features_VectorZboba2_36);
var lyr_VectorZboba2_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZboba2_36, 
                style: style_VectorZboba2_36,
                interactive: true,
                title: '<img src="styles/legend/VectorZboba2_36.png" /> Vector-Zboba2'
            });
var format_VectorUmAlreehan_37 = new ol.format.GeoJSON();
var features_VectorUmAlreehan_37 = format_VectorUmAlreehan_37.readFeatures(json_VectorUmAlreehan_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorUmAlreehan_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorUmAlreehan_37.addFeatures(features_VectorUmAlreehan_37);
var lyr_VectorUmAlreehan_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorUmAlreehan_37, 
                style: style_VectorUmAlreehan_37,
                interactive: true,
                title: '<img src="styles/legend/VectorUmAlreehan_37.png" /> Vector-Um-Alreehan'
            });
var format_VectorKufrdan_38 = new ol.format.GeoJSON();
var features_VectorKufrdan_38 = format_VectorKufrdan_38.readFeatures(json_VectorKufrdan_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorKufrdan_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorKufrdan_38.addFeatures(features_VectorKufrdan_38);
var lyr_VectorKufrdan_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorKufrdan_38, 
                style: style_VectorKufrdan_38,
                interactive: true,
                title: '<img src="styles/legend/VectorKufrdan_38.png" /> Vector-Kufrdan'
            });
var format_VectorHebron11_39 = new ol.format.GeoJSON();
var features_VectorHebron11_39 = format_VectorHebron11_39.readFeatures(json_VectorHebron11_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron11_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron11_39.addFeatures(features_VectorHebron11_39);
var lyr_VectorHebron11_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron11_39, 
                style: style_VectorHebron11_39,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron11_39.png" /> Vector-Hebron11'
            });
var format_VectorJerusalem22_40 = new ol.format.GeoJSON();
var features_VectorJerusalem22_40 = format_VectorJerusalem22_40.readFeatures(json_VectorJerusalem22_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJerusalem22_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJerusalem22_40.addFeatures(features_VectorJerusalem22_40);
var lyr_VectorJerusalem22_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJerusalem22_40, 
                style: style_VectorJerusalem22_40,
                interactive: true,
                title: '<img src="styles/legend/VectorJerusalem22_40.png" /> Vector-Jerusalem22'
            });
var format_VectorTinak3_41 = new ol.format.GeoJSON();
var features_VectorTinak3_41 = format_VectorTinak3_41.readFeatures(json_VectorTinak3_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorTinak3_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorTinak3_41.addFeatures(features_VectorTinak3_41);
var lyr_VectorTinak3_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorTinak3_41, 
                style: style_VectorTinak3_41,
                interactive: true,
                title: '<img src="styles/legend/VectorTinak3_41.png" /> Vector-Tinak3'
            });
var format_VectorKufrdan2_42 = new ol.format.GeoJSON();
var features_VectorKufrdan2_42 = format_VectorKufrdan2_42.readFeatures(json_VectorKufrdan2_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorKufrdan2_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorKufrdan2_42.addFeatures(features_VectorKufrdan2_42);
var lyr_VectorKufrdan2_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorKufrdan2_42, 
                style: style_VectorKufrdan2_42,
                interactive: true,
                title: '<img src="styles/legend/VectorKufrdan2_42.png" /> Vector-Kufrdan2'
            });
var format_VectorNahaleen1_43 = new ol.format.GeoJSON();
var features_VectorNahaleen1_43 = format_VectorNahaleen1_43.readFeatures(json_VectorNahaleen1_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorNahaleen1_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorNahaleen1_43.addFeatures(features_VectorNahaleen1_43);
var lyr_VectorNahaleen1_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorNahaleen1_43, 
                style: style_VectorNahaleen1_43,
                interactive: true,
                title: '<img src="styles/legend/VectorNahaleen1_43.png" /> Vector-Nahaleen1'
            });
var format_VectorJerusalem4_44 = new ol.format.GeoJSON();
var features_VectorJerusalem4_44 = format_VectorJerusalem4_44.readFeatures(json_VectorJerusalem4_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJerusalem4_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJerusalem4_44.addFeatures(features_VectorJerusalem4_44);
var lyr_VectorJerusalem4_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJerusalem4_44, 
                style: style_VectorJerusalem4_44,
                interactive: true,
                title: '<img src="styles/legend/VectorJerusalem4_44.png" /> Vector-Jerusalem4'
            });
var format_VectorDeadsea9_45 = new ol.format.GeoJSON();
var features_VectorDeadsea9_45 = format_VectorDeadsea9_45.readFeatures(json_VectorDeadsea9_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea9_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea9_45.addFeatures(features_VectorDeadsea9_45);
var lyr_VectorDeadsea9_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea9_45, 
                style: style_VectorDeadsea9_45,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea9_45.png" /> Vector-Deadsea9'
            });
var format_VectorDeadsea7_46 = new ol.format.GeoJSON();
var features_VectorDeadsea7_46 = format_VectorDeadsea7_46.readFeatures(json_VectorDeadsea7_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea7_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea7_46.addFeatures(features_VectorDeadsea7_46);
var lyr_VectorDeadsea7_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea7_46, 
                style: style_VectorDeadsea7_46,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea7_46.png" /> Vector-Deadsea7'
            });
var format_VectorAlras1_47 = new ol.format.GeoJSON();
var features_VectorAlras1_47 = format_VectorAlras1_47.readFeatures(json_VectorAlras1_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAlras1_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAlras1_47.addFeatures(features_VectorAlras1_47);
var lyr_VectorAlras1_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAlras1_47, 
                style: style_VectorAlras1_47,
                interactive: true,
                title: '<img src="styles/legend/VectorAlras1_47.png" /> Vector-Alras1'
            });
var format_VectorJerusalem1_48 = new ol.format.GeoJSON();
var features_VectorJerusalem1_48 = format_VectorJerusalem1_48.readFeatures(json_VectorJerusalem1_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJerusalem1_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJerusalem1_48.addFeatures(features_VectorJerusalem1_48);
var lyr_VectorJerusalem1_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJerusalem1_48, 
                style: style_VectorJerusalem1_48,
                interactive: true,
                title: '<img src="styles/legend/VectorJerusalem1_48.png" /> Vector-Jerusalem1'
            });
var format_VectorTinak1Jenin_49 = new ol.format.GeoJSON();
var features_VectorTinak1Jenin_49 = format_VectorTinak1Jenin_49.readFeatures(json_VectorTinak1Jenin_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorTinak1Jenin_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorTinak1Jenin_49.addFeatures(features_VectorTinak1Jenin_49);
var lyr_VectorTinak1Jenin_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorTinak1Jenin_49, 
                style: style_VectorTinak1Jenin_49,
                interactive: true,
                title: '<img src="styles/legend/VectorTinak1Jenin_49.png" /> Vector-Tinak1-Jenin'
            });
var format_VectorZawya2_50 = new ol.format.GeoJSON();
var features_VectorZawya2_50 = format_VectorZawya2_50.readFeatures(json_VectorZawya2_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZawya2_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZawya2_50.addFeatures(features_VectorZawya2_50);
var lyr_VectorZawya2_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZawya2_50, 
                style: style_VectorZawya2_50,
                interactive: true,
                title: '<img src="styles/legend/VectorZawya2_50.png" /> Vector-Zawya2'
            });
var format_VectorZawya3_51 = new ol.format.GeoJSON();
var features_VectorZawya3_51 = format_VectorZawya3_51.readFeatures(json_VectorZawya3_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZawya3_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZawya3_51.addFeatures(features_VectorZawya3_51);
var lyr_VectorZawya3_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZawya3_51, 
                style: style_VectorZawya3_51,
                interactive: true,
                title: '<img src="styles/legend/VectorZawya3_51.png" /> Vector-Zawya3'
            });
var format_VectorDeadsea6_52 = new ol.format.GeoJSON();
var features_VectorDeadsea6_52 = format_VectorDeadsea6_52.readFeatures(json_VectorDeadsea6_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea6_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea6_52.addFeatures(features_VectorDeadsea6_52);
var lyr_VectorDeadsea6_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea6_52, 
                style: style_VectorDeadsea6_52,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea6_52.png" /> Vector-Deadsea6'
            });
var format_VectorDeadsea4_53 = new ol.format.GeoJSON();
var features_VectorDeadsea4_53 = format_VectorDeadsea4_53.readFeatures(json_VectorDeadsea4_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea4_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea4_53.addFeatures(features_VectorDeadsea4_53);
var lyr_VectorDeadsea4_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea4_53, 
                style: style_VectorDeadsea4_53,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea4_53.png" /> Vector-Deadsea4'
            });
var format_VectorDeadsea5_54 = new ol.format.GeoJSON();
var features_VectorDeadsea5_54 = format_VectorDeadsea5_54.readFeatures(json_VectorDeadsea5_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea5_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea5_54.addFeatures(features_VectorDeadsea5_54);
var lyr_VectorDeadsea5_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea5_54, 
                style: style_VectorDeadsea5_54,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea5_54.png" /> Vector-Deadsea5'
            });
var format_VectorJeftlik5_55 = new ol.format.GeoJSON();
var features_VectorJeftlik5_55 = format_VectorJeftlik5_55.readFeatures(json_VectorJeftlik5_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJeftlik5_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJeftlik5_55.addFeatures(features_VectorJeftlik5_55);
var lyr_VectorJeftlik5_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJeftlik5_55, 
                style: style_VectorJeftlik5_55,
                interactive: true,
                title: '<img src="styles/legend/VectorJeftlik5_55.png" /> Vector-Jeftlik5'
            });
var format_VectorZawya1_56 = new ol.format.GeoJSON();
var features_VectorZawya1_56 = format_VectorZawya1_56.readFeatures(json_VectorZawya1_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZawya1_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZawya1_56.addFeatures(features_VectorZawya1_56);
var lyr_VectorZawya1_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZawya1_56, 
                style: style_VectorZawya1_56,
                interactive: true,
                title: '<img src="styles/legend/VectorZawya1_56.png" /> Vector-Zawya1'
            });
var format_VectorHebron2_57 = new ol.format.GeoJSON();
var features_VectorHebron2_57 = format_VectorHebron2_57.readFeatures(json_VectorHebron2_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron2_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron2_57.addFeatures(features_VectorHebron2_57);
var lyr_VectorHebron2_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron2_57, 
                style: style_VectorHebron2_57,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron2_57.png" /> Vector-Hebron2'
            });
var format_Vectorkufrsoor_58 = new ol.format.GeoJSON();
var features_Vectorkufrsoor_58 = format_Vectorkufrsoor_58.readFeatures(json_Vectorkufrsoor_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_Vectorkufrsoor_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vectorkufrsoor_58.addFeatures(features_Vectorkufrsoor_58);
var lyr_Vectorkufrsoor_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vectorkufrsoor_58, 
                style: style_Vectorkufrsoor_58,
                interactive: true,
                title: '<img src="styles/legend/Vectorkufrsoor_58.png" /> Vector-kufrsoor'
            });
var format_VectorJericho1_59 = new ol.format.GeoJSON();
var features_VectorJericho1_59 = format_VectorJericho1_59.readFeatures(json_VectorJericho1_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJericho1_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJericho1_59.addFeatures(features_VectorJericho1_59);
var lyr_VectorJericho1_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJericho1_59, 
                style: style_VectorJericho1_59,
                interactive: true,
                title: '<img src="styles/legend/VectorJericho1_59.png" /> Vector-Jericho1'
            });
var format_VectorDeadsea1_60 = new ol.format.GeoJSON();
var features_VectorDeadsea1_60 = format_VectorDeadsea1_60.readFeatures(json_VectorDeadsea1_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea1_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea1_60.addFeatures(features_VectorDeadsea1_60);
var lyr_VectorDeadsea1_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea1_60, 
                style: style_VectorDeadsea1_60,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea1_60.png" /> Vector-Deadsea1'
            });
var format_VectorKharas_61 = new ol.format.GeoJSON();
var features_VectorKharas_61 = format_VectorKharas_61.readFeatures(json_VectorKharas_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorKharas_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorKharas_61.addFeatures(features_VectorKharas_61);
var lyr_VectorKharas_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorKharas_61, 
                style: style_VectorKharas_61,
                interactive: true,
                title: '<img src="styles/legend/VectorKharas_61.png" /> Vector-Kharas'
            });
var format_VectorAuja_62 = new ol.format.GeoJSON();
var features_VectorAuja_62 = format_VectorAuja_62.readFeatures(json_VectorAuja_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAuja_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAuja_62.addFeatures(features_VectorAuja_62);
var lyr_VectorAuja_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAuja_62, 
                style: style_VectorAuja_62,
                interactive: true,
                title: '<img src="styles/legend/VectorAuja_62.png" /> Vector-Auja'
            });
var format_VectorAuja2_63 = new ol.format.GeoJSON();
var features_VectorAuja2_63 = format_VectorAuja2_63.readFeatures(json_VectorAuja2_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAuja2_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAuja2_63.addFeatures(features_VectorAuja2_63);
var lyr_VectorAuja2_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAuja2_63, 
                style: style_VectorAuja2_63,
                interactive: true,
                title: '<img src="styles/legend/VectorAuja2_63.png" /> Vector-Auja2'
            });
var format_VectorAzzoun_64 = new ol.format.GeoJSON();
var features_VectorAzzoun_64 = format_VectorAzzoun_64.readFeatures(json_VectorAzzoun_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAzzoun_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAzzoun_64.addFeatures(features_VectorAzzoun_64);
var lyr_VectorAzzoun_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAzzoun_64, 
                style: style_VectorAzzoun_64,
                interactive: true,
                title: '<img src="styles/legend/VectorAzzoun_64.png" /> Vector-Azzoun'
            });
var format_VectorMailh1_65 = new ol.format.GeoJSON();
var features_VectorMailh1_65 = format_VectorMailh1_65.readFeatures(json_VectorMailh1_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorMailh1_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorMailh1_65.addFeatures(features_VectorMailh1_65);
var lyr_VectorMailh1_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorMailh1_65, 
                style: style_VectorMailh1_65,
                interactive: true,
                title: '<img src="styles/legend/VectorMailh1_65.png" /> Vector-Mailh1'
            });
var format_VectorJeftlik1_66 = new ol.format.GeoJSON();
var features_VectorJeftlik1_66 = format_VectorJeftlik1_66.readFeatures(json_VectorJeftlik1_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJeftlik1_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJeftlik1_66.addFeatures(features_VectorJeftlik1_66);
var lyr_VectorJeftlik1_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJeftlik1_66, 
                style: style_VectorJeftlik1_66,
                interactive: true,
                title: '<img src="styles/legend/VectorJeftlik1_66.png" /> Vector-Jeftlik1'
            });
var format_VectorJeftlik2_67 = new ol.format.GeoJSON();
var features_VectorJeftlik2_67 = format_VectorJeftlik2_67.readFeatures(json_VectorJeftlik2_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJeftlik2_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJeftlik2_67.addFeatures(features_VectorJeftlik2_67);
var lyr_VectorJeftlik2_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJeftlik2_67, 
                style: style_VectorJeftlik2_67,
                interactive: true,
                title: '<img src="styles/legend/VectorJeftlik2_67.png" /> Vector-Jeftlik2'
            });
var format_VectorSalman_68 = new ol.format.GeoJSON();
var features_VectorSalman_68 = format_VectorSalman_68.readFeatures(json_VectorSalman_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorSalman_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorSalman_68.addFeatures(features_VectorSalman_68);
var lyr_VectorSalman_68 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorSalman_68, 
                style: style_VectorSalman_68,
                interactive: true,
                title: '<img src="styles/legend/VectorSalman_68.png" /> Vector-Salman'
            });
var format_VectorDirBaloot_69 = new ol.format.GeoJSON();
var features_VectorDirBaloot_69 = format_VectorDirBaloot_69.readFeatures(json_VectorDirBaloot_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDirBaloot_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDirBaloot_69.addFeatures(features_VectorDirBaloot_69);
var lyr_VectorDirBaloot_69 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDirBaloot_69, 
                style: style_VectorDirBaloot_69,
                interactive: true,
                title: '<img src="styles/legend/VectorDirBaloot_69.png" /> Vector-Dir Baloot'
            });
var format_VectorNileen_70 = new ol.format.GeoJSON();
var features_VectorNileen_70 = format_VectorNileen_70.readFeatures(json_VectorNileen_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorNileen_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorNileen_70.addFeatures(features_VectorNileen_70);
var lyr_VectorNileen_70 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorNileen_70, 
                style: style_VectorNileen_70,
                interactive: true,
                title: '<img src="styles/legend/VectorNileen_70.png" /> Vector-Nileen'
            });
var format_VectorMutelehJenin_71 = new ol.format.GeoJSON();
var features_VectorMutelehJenin_71 = format_VectorMutelehJenin_71.readFeatures(json_VectorMutelehJenin_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorMutelehJenin_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorMutelehJenin_71.addFeatures(features_VectorMutelehJenin_71);
var lyr_VectorMutelehJenin_71 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorMutelehJenin_71, 
                style: style_VectorMutelehJenin_71,
                interactive: true,
                title: '<img src="styles/legend/VectorMutelehJenin_71.png" /> Vector-Muteleh-Jenin'
            });
var format_VectorQalqilya2_72 = new ol.format.GeoJSON();
var features_VectorQalqilya2_72 = format_VectorQalqilya2_72.readFeatures(json_VectorQalqilya2_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorQalqilya2_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorQalqilya2_72.addFeatures(features_VectorQalqilya2_72);
var lyr_VectorQalqilya2_72 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorQalqilya2_72, 
                style: style_VectorQalqilya2_72,
                interactive: true,
                title: '<img src="styles/legend/VectorQalqilya2_72.png" /> Vector-Qalqilya2'
            });
var format_UPSLOPEGAZAHEBRON1VECTOR_73 = new ol.format.GeoJSON();
var features_UPSLOPEGAZAHEBRON1VECTOR_73 = format_UPSLOPEGAZAHEBRON1VECTOR_73.readFeatures(json_UPSLOPEGAZAHEBRON1VECTOR_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_UPSLOPEGAZAHEBRON1VECTOR_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPSLOPEGAZAHEBRON1VECTOR_73.addFeatures(features_UPSLOPEGAZAHEBRON1VECTOR_73);
var lyr_UPSLOPEGAZAHEBRON1VECTOR_73 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPSLOPEGAZAHEBRON1VECTOR_73, 
                style: style_UPSLOPEGAZAHEBRON1VECTOR_73,
                interactive: true,
                title: '<img src="styles/legend/UPSLOPEGAZAHEBRON1VECTOR_73.png" /> UPSLOPE-GAZA-HEBRON1-VECTOR'
            });
var format_UPSLOPEJAYYOUSHEBRON1VECTOR_74 = new ol.format.GeoJSON();
var features_UPSLOPEJAYYOUSHEBRON1VECTOR_74 = format_UPSLOPEJAYYOUSHEBRON1VECTOR_74.readFeatures(json_UPSLOPEJAYYOUSHEBRON1VECTOR_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_UPSLOPEJAYYOUSHEBRON1VECTOR_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPSLOPEJAYYOUSHEBRON1VECTOR_74.addFeatures(features_UPSLOPEJAYYOUSHEBRON1VECTOR_74);
var lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPSLOPEJAYYOUSHEBRON1VECTOR_74, 
                style: style_UPSLOPEJAYYOUSHEBRON1VECTOR_74,
                interactive: true,
                title: '<img src="styles/legend/UPSLOPEJAYYOUSHEBRON1VECTOR_74.png" /> UPSLOPE-JAYYOUS-HEBRON1-VECTOR'
            });
var format_VectorFaroun_75 = new ol.format.GeoJSON();
var features_VectorFaroun_75 = format_VectorFaroun_75.readFeatures(json_VectorFaroun_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorFaroun_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorFaroun_75.addFeatures(features_VectorFaroun_75);
var lyr_VectorFaroun_75 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorFaroun_75, 
                style: style_VectorFaroun_75,
                interactive: true,
                title: '<img src="styles/legend/VectorFaroun_75.png" /> Vector-Faroun'
            });
var format_VectorHebron3_76 = new ol.format.GeoJSON();
var features_VectorHebron3_76 = format_VectorHebron3_76.readFeatures(json_VectorHebron3_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHebron3_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHebron3_76.addFeatures(features_VectorHebron3_76);
var lyr_VectorHebron3_76 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHebron3_76, 
                style: style_VectorHebron3_76,
                interactive: true,
                title: '<img src="styles/legend/VectorHebron3_76.png" /> Vector-Hebron3'
            });
var format_VectorJaroushia_77 = new ol.format.GeoJSON();
var features_VectorJaroushia_77 = format_VectorJaroushia_77.readFeatures(json_VectorJaroushia_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJaroushia_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJaroushia_77.addFeatures(features_VectorJaroushia_77);
var lyr_VectorJaroushia_77 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJaroushia_77, 
                style: style_VectorJaroushia_77,
                interactive: true,
                title: '<img src="styles/legend/VectorJaroushia_77.png" /> Vector-Jaroushia'
            });
var format_VectorAttil_78 = new ol.format.GeoJSON();
var features_VectorAttil_78 = format_VectorAttil_78.readFeatures(json_VectorAttil_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorAttil_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorAttil_78.addFeatures(features_VectorAttil_78);
var lyr_VectorAttil_78 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorAttil_78, 
                style: style_VectorAttil_78,
                interactive: true,
                title: '<img src="styles/legend/VectorAttil_78.png" /> Vector-Attil'
            });
var format_VectorZeita1_79 = new ol.format.GeoJSON();
var features_VectorZeita1_79 = format_VectorZeita1_79.readFeatures(json_VectorZeita1_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZeita1_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZeita1_79.addFeatures(features_VectorZeita1_79);
var lyr_VectorZeita1_79 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZeita1_79, 
                style: style_VectorZeita1_79,
                interactive: true,
                title: '<img src="styles/legend/VectorZeita1_79.png" /> Vector-Zeita1'
            });
var format_VectorZeita2_80 = new ol.format.GeoJSON();
var features_VectorZeita2_80 = format_VectorZeita2_80.readFeatures(json_VectorZeita2_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorZeita2_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorZeita2_80.addFeatures(features_VectorZeita2_80);
var lyr_VectorZeita2_80 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorZeita2_80, 
                style: style_VectorZeita2_80,
                interactive: true,
                title: '<img src="styles/legend/VectorZeita2_80.png" /> Vector-Zeita2'
            });
var format_VectorQifeen_81 = new ol.format.GeoJSON();
var features_VectorQifeen_81 = format_VectorQifeen_81.readFeatures(json_VectorQifeen_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorQifeen_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorQifeen_81.addFeatures(features_VectorQifeen_81);
var lyr_VectorQifeen_81 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorQifeen_81, 
                style: style_VectorQifeen_81,
                interactive: true,
                title: '<img src="styles/legend/VectorQifeen_81.png" /> Vector-Qifeen'
            });
var format_VectorTulkarm2_82 = new ol.format.GeoJSON();
var features_VectorTulkarm2_82 = format_VectorTulkarm2_82.readFeatures(json_VectorTulkarm2_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorTulkarm2_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorTulkarm2_82.addFeatures(features_VectorTulkarm2_82);
var lyr_VectorTulkarm2_82 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorTulkarm2_82, 
                style: style_VectorTulkarm2_82,
                interactive: true,
                title: '<img src="styles/legend/VectorTulkarm2_82.png" /> Vector-Tulkarm2'
            });
var format_VectorJenin1_83 = new ol.format.GeoJSON();
var features_VectorJenin1_83 = format_VectorJenin1_83.readFeatures(json_VectorJenin1_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJenin1_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJenin1_83.addFeatures(features_VectorJenin1_83);
var lyr_VectorJenin1_83 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJenin1_83, 
                style: style_VectorJenin1_83,
                interactive: true,
                title: '<img src="styles/legend/VectorJenin1_83.png" /> Vector-Jenin1'
            });
var format_VectorHableh1_84 = new ol.format.GeoJSON();
var features_VectorHableh1_84 = format_VectorHableh1_84.readFeatures(json_VectorHableh1_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorHableh1_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorHableh1_84.addFeatures(features_VectorHableh1_84);
var lyr_VectorHableh1_84 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorHableh1_84, 
                style: style_VectorHableh1_84,
                interactive: true,
                title: '<img src="styles/legend/VectorHableh1_84.png" /> Vector-Hableh1'
            });
var format_VectorBudros_85 = new ol.format.GeoJSON();
var features_VectorBudros_85 = format_VectorBudros_85.readFeatures(json_VectorBudros_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBudros_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBudros_85.addFeatures(features_VectorBudros_85);
var lyr_VectorBudros_85 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBudros_85, 
                style: style_VectorBudros_85,
                interactive: true,
                title: '<img src="styles/legend/VectorBudros_85.png" /> Vector-Budros'
            });
var format_VectorJenin2_86 = new ol.format.GeoJSON();
var features_VectorJenin2_86 = format_VectorJenin2_86.readFeatures(json_VectorJenin2_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJenin2_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJenin2_86.addFeatures(features_VectorJenin2_86);
var lyr_VectorJenin2_86 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJenin2_86, 
                style: style_VectorJenin2_86,
                interactive: true,
                title: '<img src="styles/legend/VectorJenin2_86.png" /> Vector-Jenin2'
            });
var format_VectorJenin3_87 = new ol.format.GeoJSON();
var features_VectorJenin3_87 = format_VectorJenin3_87.readFeatures(json_VectorJenin3_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJenin3_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJenin3_87.addFeatures(features_VectorJenin3_87);
var lyr_VectorJenin3_87 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJenin3_87, 
                style: style_VectorJenin3_87,
                interactive: true,
                title: '<img src="styles/legend/VectorJenin3_87.png" /> Vector-Jenin3'
            });
var format_VectorDeadsea32_88 = new ol.format.GeoJSON();
var features_VectorDeadsea32_88 = format_VectorDeadsea32_88.readFeatures(json_VectorDeadsea32_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea32_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea32_88.addFeatures(features_VectorDeadsea32_88);
var lyr_VectorDeadsea32_88 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea32_88, 
                style: style_VectorDeadsea32_88,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea32_88.png" /> Vector-Deadsea32'
            });
var format_VectorDeadsea33_89 = new ol.format.GeoJSON();
var features_VectorDeadsea33_89 = format_VectorDeadsea33_89.readFeatures(json_VectorDeadsea33_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea33_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea33_89.addFeatures(features_VectorDeadsea33_89);
var lyr_VectorDeadsea33_89 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea33_89, 
                style: style_VectorDeadsea33_89,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea33_89.png" /> Vector-Deadsea33'
            });
var format_VectorDeadsea34_90 = new ol.format.GeoJSON();
var features_VectorDeadsea34_90 = format_VectorDeadsea34_90.readFeatures(json_VectorDeadsea34_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea34_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea34_90.addFeatures(features_VectorDeadsea34_90);
var lyr_VectorDeadsea34_90 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea34_90, 
                style: style_VectorDeadsea34_90,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea34_90.png" /> Vector-Deadsea34'
            });
var format_VectorDeadsea35_91 = new ol.format.GeoJSON();
var features_VectorDeadsea35_91 = format_VectorDeadsea35_91.readFeatures(json_VectorDeadsea35_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea35_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea35_91.addFeatures(features_VectorDeadsea35_91);
var lyr_VectorDeadsea35_91 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea35_91, 
                style: style_VectorDeadsea35_91,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea35_91.png" /> Vector-Deadsea35'
            });
var format_VectorDeadsea36_92 = new ol.format.GeoJSON();
var features_VectorDeadsea36_92 = format_VectorDeadsea36_92.readFeatures(json_VectorDeadsea36_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea36_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea36_92.addFeatures(features_VectorDeadsea36_92);
var lyr_VectorDeadsea36_92 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea36_92, 
                style: style_VectorDeadsea36_92,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea36_92.png" /> Vector-Deadsea36'
            });
var format_VectorDeadsea37_93 = new ol.format.GeoJSON();
var features_VectorDeadsea37_93 = format_VectorDeadsea37_93.readFeatures(json_VectorDeadsea37_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea37_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea37_93.addFeatures(features_VectorDeadsea37_93);
var lyr_VectorDeadsea37_93 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea37_93, 
                style: style_VectorDeadsea37_93,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea37_93.png" /> Vector-Deadsea37'
            });
var format_VectorDeadsea40_94 = new ol.format.GeoJSON();
var features_VectorDeadsea40_94 = format_VectorDeadsea40_94.readFeatures(json_VectorDeadsea40_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea40_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea40_94.addFeatures(features_VectorDeadsea40_94);
var lyr_VectorDeadsea40_94 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea40_94, 
                style: style_VectorDeadsea40_94,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea40_94.png" /> Vector-Deadsea40'
            });
var format_VectorDeadsea38_95 = new ol.format.GeoJSON();
var features_VectorDeadsea38_95 = format_VectorDeadsea38_95.readFeatures(json_VectorDeadsea38_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea38_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea38_95.addFeatures(features_VectorDeadsea38_95);
var lyr_VectorDeadsea38_95 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea38_95, 
                style: style_VectorDeadsea38_95,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea38_95.png" /> Vector-Deadsea38'
            });
var format_VectorDeadsea39_96 = new ol.format.GeoJSON();
var features_VectorDeadsea39_96 = format_VectorDeadsea39_96.readFeatures(json_VectorDeadsea39_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea39_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea39_96.addFeatures(features_VectorDeadsea39_96);
var lyr_VectorDeadsea39_96 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea39_96, 
                style: style_VectorDeadsea39_96,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea39_96.png" /> Vector-Deadsea39'
            });
var format_VectorDeadsea43_97 = new ol.format.GeoJSON();
var features_VectorDeadsea43_97 = format_VectorDeadsea43_97.readFeatures(json_VectorDeadsea43_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea43_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea43_97.addFeatures(features_VectorDeadsea43_97);
var lyr_VectorDeadsea43_97 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea43_97, 
                style: style_VectorDeadsea43_97,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea43_97.png" /> Vector-Deadsea43'
            });
var format_VectorDeadsea44_98 = new ol.format.GeoJSON();
var features_VectorDeadsea44_98 = format_VectorDeadsea44_98.readFeatures(json_VectorDeadsea44_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea44_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea44_98.addFeatures(features_VectorDeadsea44_98);
var lyr_VectorDeadsea44_98 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea44_98, 
                style: style_VectorDeadsea44_98,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea44_98.png" /> Vector-Deadsea44'
            });
var format_VectorDeadsea45_99 = new ol.format.GeoJSON();
var features_VectorDeadsea45_99 = format_VectorDeadsea45_99.readFeatures(json_VectorDeadsea45_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea45_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea45_99.addFeatures(features_VectorDeadsea45_99);
var lyr_VectorDeadsea45_99 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea45_99, 
                style: style_VectorDeadsea45_99,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea45_99.png" /> Vector-Deadsea45'
            });
var format_VectorJerihco11_100 = new ol.format.GeoJSON();
var features_VectorJerihco11_100 = format_VectorJerihco11_100.readFeatures(json_VectorJerihco11_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJerihco11_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJerihco11_100.addFeatures(features_VectorJerihco11_100);
var lyr_VectorJerihco11_100 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJerihco11_100, 
                style: style_VectorJerihco11_100,
                interactive: true,
                title: '<img src="styles/legend/VectorJerihco11_100.png" /> Vector-Jerihco11'
            });
var format_VectorDirAbuDief_101 = new ol.format.GeoJSON();
var features_VectorDirAbuDief_101 = format_VectorDirAbuDief_101.readFeatures(json_VectorDirAbuDief_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDirAbuDief_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDirAbuDief_101.addFeatures(features_VectorDirAbuDief_101);
var lyr_VectorDirAbuDief_101 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDirAbuDief_101, 
                style: style_VectorDirAbuDief_101,
                interactive: true,
                title: '<img src="styles/legend/VectorDirAbuDief_101.png" /> Vector-Dir-Abu-Dief'
            });
var format_VectorJbara2_102 = new ol.format.GeoJSON();
var features_VectorJbara2_102 = format_VectorJbara2_102.readFeatures(json_VectorJbara2_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJbara2_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJbara2_102.addFeatures(features_VectorJbara2_102);
var lyr_VectorJbara2_102 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJbara2_102, 
                style: style_VectorJbara2_102,
                interactive: true,
                title: '<img src="styles/legend/VectorJbara2_102.png" /> Vector-Jbara2'
            });
var format_VectorBeitSoreek_103 = new ol.format.GeoJSON();
var features_VectorBeitSoreek_103 = format_VectorBeitSoreek_103.readFeatures(json_VectorBeitSoreek_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitSoreek_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitSoreek_103.addFeatures(features_VectorBeitSoreek_103);
var lyr_VectorBeitSoreek_103 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitSoreek_103, 
                style: style_VectorBeitSoreek_103,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitSoreek_103.png" /> Vector-Beit-Soreek'
            });
var format_VectorBeitLahem2_104 = new ol.format.GeoJSON();
var features_VectorBeitLahem2_104 = format_VectorBeitLahem2_104.readFeatures(json_VectorBeitLahem2_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitLahem2_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitLahem2_104.addFeatures(features_VectorBeitLahem2_104);
var lyr_VectorBeitLahem2_104 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitLahem2_104, 
                style: style_VectorBeitLahem2_104,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitLahem2_104.png" /> Vector-Beit-Lahem2'
            });
var format_VectorBeitSoreek2_105 = new ol.format.GeoJSON();
var features_VectorBeitSoreek2_105 = format_VectorBeitSoreek2_105.readFeatures(json_VectorBeitSoreek2_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitSoreek2_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitSoreek2_105.addFeatures(features_VectorBeitSoreek2_105);
var lyr_VectorBeitSoreek2_105 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitSoreek2_105, 
                style: style_VectorBeitSoreek2_105,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitSoreek2_105.png" /> Vector-Beit-Soreek2'
            });
var format_VectorBeitSoreek3_106 = new ol.format.GeoJSON();
var features_VectorBeitSoreek3_106 = format_VectorBeitSoreek3_106.readFeatures(json_VectorBeitSoreek3_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitSoreek3_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitSoreek3_106.addFeatures(features_VectorBeitSoreek3_106);
var lyr_VectorBeitSoreek3_106 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitSoreek3_106, 
                style: style_VectorBeitSoreek3_106,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitSoreek3_106.png" /> Vector-Beit-Soreek3'
            });
var format_VectorBeitLahem1_107 = new ol.format.GeoJSON();
var features_VectorBeitLahem1_107 = format_VectorBeitLahem1_107.readFeatures(json_VectorBeitLahem1_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitLahem1_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitLahem1_107.addFeatures(features_VectorBeitLahem1_107);
var lyr_VectorBeitLahem1_107 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitLahem1_107, 
                style: style_VectorBeitLahem1_107,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitLahem1_107.png" /> Vector-Beit-Lahem1'
            });
var format_VectorDeadsea41_108 = new ol.format.GeoJSON();
var features_VectorDeadsea41_108 = format_VectorDeadsea41_108.readFeatures(json_VectorDeadsea41_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea41_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea41_108.addFeatures(features_VectorDeadsea41_108);
var lyr_VectorDeadsea41_108 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea41_108, 
                style: style_VectorDeadsea41_108,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea41_108.png" /> Vector-Deadsea41'
            });
var format_VectorJericho17_109 = new ol.format.GeoJSON();
var features_VectorJericho17_109 = format_VectorJericho17_109.readFeatures(json_VectorJericho17_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorJericho17_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorJericho17_109.addFeatures(features_VectorJericho17_109);
var lyr_VectorJericho17_109 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorJericho17_109, 
                style: style_VectorJericho17_109,
                interactive: true,
                title: '<img src="styles/legend/VectorJericho17_109.png" /> Vector-Jericho17'
            });
var format_VectorDirAbuDief2_110 = new ol.format.GeoJSON();
var features_VectorDirAbuDief2_110 = format_VectorDirAbuDief2_110.readFeatures(json_VectorDirAbuDief2_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDirAbuDief2_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDirAbuDief2_110.addFeatures(features_VectorDirAbuDief2_110);
var lyr_VectorDirAbuDief2_110 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDirAbuDief2_110, 
                style: style_VectorDirAbuDief2_110,
                interactive: true,
                title: '<img src="styles/legend/VectorDirAbuDief2_110.png" /> Vector-Dir-Abu-Dief2'
            });
var format_VectorDeadsea42_111 = new ol.format.GeoJSON();
var features_VectorDeadsea42_111 = format_VectorDeadsea42_111.readFeatures(json_VectorDeadsea42_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorDeadsea42_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorDeadsea42_111.addFeatures(features_VectorDeadsea42_111);
var lyr_VectorDeadsea42_111 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorDeadsea42_111, 
                style: style_VectorDeadsea42_111,
                interactive: true,
                title: '<img src="styles/legend/VectorDeadsea42_111.png" /> Vector-Deadsea42'
            });
var format_VectorBeitAwwa_112 = new ol.format.GeoJSON();
var features_VectorBeitAwwa_112 = format_VectorBeitAwwa_112.readFeatures(json_VectorBeitAwwa_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_VectorBeitAwwa_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VectorBeitAwwa_112.addFeatures(features_VectorBeitAwwa_112);
var lyr_VectorBeitAwwa_112 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VectorBeitAwwa_112, 
                style: style_VectorBeitAwwa_112,
                interactive: true,
                title: '<img src="styles/legend/VectorBeitAwwa_112.png" /> Vector-Beit Awwa'
            });
var group_CatchmentsVectors = new ol.layer.Group({
                                layers: [lyr_VectorJerusalem11_7,lyr_VectorYatta_8,lyr_VectorYatta1_9,lyr_VectorDeadsea12_10,lyr_VectorDeadsea13_11,lyr_VectorJericho7_12,lyr_VectorRantees2_13,lyr_VectorBeitLahem3_14,lyr_VectorJericho9_15,lyr_VectorYatta2_16,lyr_VectorDeadsea3_17,lyr_VectorHebron15_18,lyr_VectorHebron16_19,lyr_VectorHebron18_20,lyr_VectorHebron19_21,lyr_VectorHebron20_22,lyr_VectorQibya_23,lyr_VectorBaqaSharqiya_24,lyr_VectorAuja1_25,lyr_VectorDeadsea31_26,lyr_VectorBeitjala_27,lyr_VectorBeitjala2_28,lyr_VectorDeadsea27_29,lyr_VectorDeadsea28_30,lyr_VectorDeadsea29_31,lyr_VectorDeadsea30_32,lyr_VectorZboba_33,lyr_VectorQalqilyaCity_34,lyr_VectorQifeen5_35,lyr_VectorZboba2_36,lyr_VectorUmAlreehan_37,lyr_VectorKufrdan_38,lyr_VectorHebron11_39,lyr_VectorJerusalem22_40,lyr_VectorTinak3_41,lyr_VectorKufrdan2_42,lyr_VectorNahaleen1_43,lyr_VectorJerusalem4_44,lyr_VectorDeadsea9_45,lyr_VectorDeadsea7_46,lyr_VectorAlras1_47,lyr_VectorJerusalem1_48,lyr_VectorTinak1Jenin_49,lyr_VectorZawya2_50,lyr_VectorZawya3_51,lyr_VectorDeadsea6_52,lyr_VectorDeadsea4_53,lyr_VectorDeadsea5_54,lyr_VectorJeftlik5_55,lyr_VectorZawya1_56,lyr_VectorHebron2_57,lyr_Vectorkufrsoor_58,lyr_VectorJericho1_59,lyr_VectorDeadsea1_60,lyr_VectorKharas_61,lyr_VectorAuja_62,lyr_VectorAuja2_63,lyr_VectorAzzoun_64,lyr_VectorMailh1_65,lyr_VectorJeftlik1_66,lyr_VectorJeftlik2_67,lyr_VectorSalman_68,lyr_VectorDirBaloot_69,lyr_VectorNileen_70,lyr_VectorMutelehJenin_71,lyr_VectorQalqilya2_72,lyr_UPSLOPEGAZAHEBRON1VECTOR_73,lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74,lyr_VectorFaroun_75,lyr_VectorHebron3_76,lyr_VectorJaroushia_77,lyr_VectorAttil_78,lyr_VectorZeita1_79,lyr_VectorZeita2_80,lyr_VectorQifeen_81,lyr_VectorTulkarm2_82,lyr_VectorJenin1_83,lyr_VectorHableh1_84,lyr_VectorBudros_85,lyr_VectorJenin2_86,lyr_VectorJenin3_87,lyr_VectorDeadsea32_88,lyr_VectorDeadsea33_89,lyr_VectorDeadsea34_90,lyr_VectorDeadsea35_91,lyr_VectorDeadsea36_92,lyr_VectorDeadsea37_93,lyr_VectorDeadsea40_94,lyr_VectorDeadsea38_95,lyr_VectorDeadsea39_96,lyr_VectorDeadsea43_97,lyr_VectorDeadsea44_98,lyr_VectorDeadsea45_99,lyr_VectorJerihco11_100,lyr_VectorDirAbuDief_101,lyr_VectorJbara2_102,lyr_VectorBeitSoreek_103,lyr_VectorBeitLahem2_104,lyr_VectorBeitSoreek2_105,lyr_VectorBeitSoreek3_106,lyr_VectorBeitLahem1_107,lyr_VectorDeadsea41_108,lyr_VectorJericho17_109,lyr_VectorDirAbuDief2_110,lyr_VectorDeadsea42_111,lyr_VectorBeitAwwa_112,],
                                title: "Catchments Vectors"});
var group_MainFiles = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_BingVirtualEarth_1,lyr_FILLEDHEBRON_2,lyr_CHANNELHEBRON_3,lyr_palborderHEBRON_4,lyr_WBVECTORBORDER_5,lyr_MergedCatchments_6,],
                                title: "Main Files"});

lyr_OSMStandard_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(true);lyr_FILLEDHEBRON_2.setVisible(true);lyr_CHANNELHEBRON_3.setVisible(true);lyr_palborderHEBRON_4.setVisible(true);lyr_WBVECTORBORDER_5.setVisible(true);lyr_MergedCatchments_6.setVisible(true);lyr_VectorJerusalem11_7.setVisible(true);lyr_VectorYatta_8.setVisible(true);lyr_VectorYatta1_9.setVisible(true);lyr_VectorDeadsea12_10.setVisible(true);lyr_VectorDeadsea13_11.setVisible(true);lyr_VectorJericho7_12.setVisible(true);lyr_VectorRantees2_13.setVisible(true);lyr_VectorBeitLahem3_14.setVisible(true);lyr_VectorJericho9_15.setVisible(true);lyr_VectorYatta2_16.setVisible(true);lyr_VectorDeadsea3_17.setVisible(true);lyr_VectorHebron15_18.setVisible(true);lyr_VectorHebron16_19.setVisible(true);lyr_VectorHebron18_20.setVisible(true);lyr_VectorHebron19_21.setVisible(true);lyr_VectorHebron20_22.setVisible(true);lyr_VectorQibya_23.setVisible(true);lyr_VectorBaqaSharqiya_24.setVisible(true);lyr_VectorAuja1_25.setVisible(true);lyr_VectorDeadsea31_26.setVisible(true);lyr_VectorBeitjala_27.setVisible(true);lyr_VectorBeitjala2_28.setVisible(true);lyr_VectorDeadsea27_29.setVisible(true);lyr_VectorDeadsea28_30.setVisible(true);lyr_VectorDeadsea29_31.setVisible(true);lyr_VectorDeadsea30_32.setVisible(true);lyr_VectorZboba_33.setVisible(true);lyr_VectorQalqilyaCity_34.setVisible(true);lyr_VectorQifeen5_35.setVisible(true);lyr_VectorZboba2_36.setVisible(true);lyr_VectorUmAlreehan_37.setVisible(true);lyr_VectorKufrdan_38.setVisible(true);lyr_VectorHebron11_39.setVisible(true);lyr_VectorJerusalem22_40.setVisible(true);lyr_VectorTinak3_41.setVisible(true);lyr_VectorKufrdan2_42.setVisible(true);lyr_VectorNahaleen1_43.setVisible(true);lyr_VectorJerusalem4_44.setVisible(true);lyr_VectorDeadsea9_45.setVisible(true);lyr_VectorDeadsea7_46.setVisible(true);lyr_VectorAlras1_47.setVisible(true);lyr_VectorJerusalem1_48.setVisible(true);lyr_VectorTinak1Jenin_49.setVisible(true);lyr_VectorZawya2_50.setVisible(true);lyr_VectorZawya3_51.setVisible(true);lyr_VectorDeadsea6_52.setVisible(true);lyr_VectorDeadsea4_53.setVisible(true);lyr_VectorDeadsea5_54.setVisible(true);lyr_VectorJeftlik5_55.setVisible(true);lyr_VectorZawya1_56.setVisible(true);lyr_VectorHebron2_57.setVisible(true);lyr_Vectorkufrsoor_58.setVisible(true);lyr_VectorJericho1_59.setVisible(true);lyr_VectorDeadsea1_60.setVisible(true);lyr_VectorKharas_61.setVisible(true);lyr_VectorAuja_62.setVisible(true);lyr_VectorAuja2_63.setVisible(true);lyr_VectorAzzoun_64.setVisible(true);lyr_VectorMailh1_65.setVisible(true);lyr_VectorJeftlik1_66.setVisible(true);lyr_VectorJeftlik2_67.setVisible(true);lyr_VectorSalman_68.setVisible(true);lyr_VectorDirBaloot_69.setVisible(true);lyr_VectorNileen_70.setVisible(true);lyr_VectorMutelehJenin_71.setVisible(true);lyr_VectorQalqilya2_72.setVisible(true);lyr_UPSLOPEGAZAHEBRON1VECTOR_73.setVisible(true);lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74.setVisible(true);lyr_VectorFaroun_75.setVisible(true);lyr_VectorHebron3_76.setVisible(true);lyr_VectorJaroushia_77.setVisible(true);lyr_VectorAttil_78.setVisible(true);lyr_VectorZeita1_79.setVisible(true);lyr_VectorZeita2_80.setVisible(true);lyr_VectorQifeen_81.setVisible(true);lyr_VectorTulkarm2_82.setVisible(true);lyr_VectorJenin1_83.setVisible(true);lyr_VectorHableh1_84.setVisible(true);lyr_VectorBudros_85.setVisible(true);lyr_VectorJenin2_86.setVisible(true);lyr_VectorJenin3_87.setVisible(true);lyr_VectorDeadsea32_88.setVisible(true);lyr_VectorDeadsea33_89.setVisible(true);lyr_VectorDeadsea34_90.setVisible(true);lyr_VectorDeadsea35_91.setVisible(true);lyr_VectorDeadsea36_92.setVisible(true);lyr_VectorDeadsea37_93.setVisible(true);lyr_VectorDeadsea40_94.setVisible(true);lyr_VectorDeadsea38_95.setVisible(true);lyr_VectorDeadsea39_96.setVisible(true);lyr_VectorDeadsea43_97.setVisible(true);lyr_VectorDeadsea44_98.setVisible(true);lyr_VectorDeadsea45_99.setVisible(true);lyr_VectorJerihco11_100.setVisible(true);lyr_VectorDirAbuDief_101.setVisible(true);lyr_VectorJbara2_102.setVisible(true);lyr_VectorBeitSoreek_103.setVisible(true);lyr_VectorBeitLahem2_104.setVisible(true);lyr_VectorBeitSoreek2_105.setVisible(true);lyr_VectorBeitSoreek3_106.setVisible(true);lyr_VectorBeitLahem1_107.setVisible(true);lyr_VectorDeadsea41_108.setVisible(true);lyr_VectorJericho17_109.setVisible(true);lyr_VectorDirAbuDief2_110.setVisible(true);lyr_VectorDeadsea42_111.setVisible(true);lyr_VectorBeitAwwa_112.setVisible(true);
var layersList = [group_MainFiles,group_CatchmentsVectors];
lyr_CHANNELHEBRON_3.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_palborderHEBRON_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'Location': 'Location', });
lyr_WBVECTORBORDER_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', 'Location': 'Location', });
lyr_MergedCatchments_6.set('fieldAliases', {'DN': 'DN', 'AREA': 'AREA', 'layer': 'layer', 'path': 'path', 'Area -km': 'Area -km', });
lyr_VectorJerusalem11_7.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorYatta_8.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorYatta1_9.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea12_10.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea13_11.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJericho7_12.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorRantees2_13.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitLahem3_14.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJericho9_15.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorYatta2_16.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea3_17.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron15_18.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron16_19.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron18_20.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron19_21.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron20_22.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorQibya_23.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBaqaSharqiya_24.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAuja1_25.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea31_26.set('fieldAliases', {'DN': 'DN', 'area': 'area', });
lyr_VectorBeitjala_27.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitjala2_28.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea27_29.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea28_30.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea29_31.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea30_32.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZboba_33.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorQalqilyaCity_34.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorQifeen5_35.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZboba2_36.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorUmAlreehan_37.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorKufrdan_38.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron11_39.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJerusalem22_40.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorTinak3_41.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorKufrdan2_42.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorNahaleen1_43.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJerusalem4_44.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea9_45.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea7_46.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAlras1_47.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJerusalem1_48.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorTinak1Jenin_49.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZawya2_50.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZawya3_51.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea6_52.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea4_53.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea5_54.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJeftlik5_55.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZawya1_56.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron2_57.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_Vectorkufrsoor_58.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJericho1_59.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea1_60.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorKharas_61.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAuja_62.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAuja2_63.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAzzoun_64.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorMailh1_65.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJeftlik1_66.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJeftlik2_67.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorSalman_68.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDirBaloot_69.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorNileen_70.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorMutelehJenin_71.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorQalqilya2_72.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_UPSLOPEGAZAHEBRON1VECTOR_73.set('fieldAliases', {'DN': 'DN', 'AREA': 'AREA', });
lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74.set('fieldAliases', {'DN': 'DN', 'AREA': 'AREA', });
lyr_VectorFaroun_75.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHebron3_76.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJaroushia_77.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorAttil_78.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZeita1_79.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorZeita2_80.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorQifeen_81.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorTulkarm2_82.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJenin1_83.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorHableh1_84.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBudros_85.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJenin2_86.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJenin3_87.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea32_88.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea33_89.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea34_90.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea35_91.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea36_92.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea37_93.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea40_94.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea38_95.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea39_96.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea43_97.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea44_98.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea45_99.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJerihco11_100.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDirAbuDief_101.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJbara2_102.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitSoreek_103.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitLahem2_104.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitSoreek2_105.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitSoreek3_106.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitLahem1_107.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea41_108.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorJericho17_109.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDirAbuDief2_110.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorDeadsea42_111.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_VectorBeitAwwa_112.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_CHANNELHEBRON_3.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_palborderHEBRON_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', 'Location': 'TextEdit', });
lyr_WBVECTORBORDER_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', 'Location': 'TextEdit', });
lyr_MergedCatchments_6.set('fieldImages', {'DN': 'Range', 'AREA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Area -km': 'TextEdit', });
lyr_VectorJerusalem11_7.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorYatta_8.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorYatta1_9.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea12_10.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea13_11.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJericho7_12.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorRantees2_13.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitLahem3_14.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJericho9_15.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorYatta2_16.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea3_17.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron15_18.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron16_19.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron18_20.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron19_21.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron20_22.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorQibya_23.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBaqaSharqiya_24.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAuja1_25.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea31_26.set('fieldImages', {'DN': '', 'area': '', });
lyr_VectorBeitjala_27.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitjala2_28.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea27_29.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea28_30.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea29_31.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea30_32.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZboba_33.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorQalqilyaCity_34.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorQifeen5_35.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZboba2_36.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorUmAlreehan_37.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorKufrdan_38.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron11_39.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJerusalem22_40.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorTinak3_41.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorKufrdan2_42.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorNahaleen1_43.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJerusalem4_44.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea9_45.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea7_46.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAlras1_47.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJerusalem1_48.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorTinak1Jenin_49.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZawya2_50.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZawya3_51.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea6_52.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea4_53.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea5_54.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJeftlik5_55.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZawya1_56.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron2_57.set('fieldImages', {'DN': '', 'Area': '', });
lyr_Vectorkufrsoor_58.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJericho1_59.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea1_60.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorKharas_61.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAuja_62.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAuja2_63.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAzzoun_64.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorMailh1_65.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJeftlik1_66.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJeftlik2_67.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorSalman_68.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDirBaloot_69.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorNileen_70.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorMutelehJenin_71.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorQalqilya2_72.set('fieldImages', {'DN': '', 'Area': '', });
lyr_UPSLOPEGAZAHEBRON1VECTOR_73.set('fieldImages', {'DN': '', 'AREA': '', });
lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74.set('fieldImages', {'DN': '', 'AREA': '', });
lyr_VectorFaroun_75.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHebron3_76.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJaroushia_77.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorAttil_78.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZeita1_79.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorZeita2_80.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorQifeen_81.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorTulkarm2_82.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJenin1_83.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorHableh1_84.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBudros_85.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJenin2_86.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJenin3_87.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea32_88.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea33_89.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea34_90.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea35_91.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea36_92.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea37_93.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea40_94.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea38_95.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea39_96.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea43_97.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea44_98.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea45_99.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJerihco11_100.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDirAbuDief_101.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJbara2_102.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitSoreek_103.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitLahem2_104.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitSoreek2_105.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitSoreek3_106.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitLahem1_107.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea41_108.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorJericho17_109.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDirAbuDief2_110.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorDeadsea42_111.set('fieldImages', {'DN': '', 'Area': '', });
lyr_VectorBeitAwwa_112.set('fieldImages', {'DN': '', 'Area': '', });
lyr_CHANNELHEBRON_3.set('fieldLabels', {});
lyr_palborderHEBRON_4.set('fieldLabels', {});
lyr_WBVECTORBORDER_5.set('fieldLabels', {});
lyr_MergedCatchments_6.set('fieldLabels', {});
lyr_VectorJerusalem11_7.set('fieldLabels', {});
lyr_VectorYatta_8.set('fieldLabels', {});
lyr_VectorYatta1_9.set('fieldLabels', {});
lyr_VectorDeadsea12_10.set('fieldLabels', {});
lyr_VectorDeadsea13_11.set('fieldLabels', {});
lyr_VectorJericho7_12.set('fieldLabels', {});
lyr_VectorRantees2_13.set('fieldLabels', {});
lyr_VectorBeitLahem3_14.set('fieldLabels', {});
lyr_VectorJericho9_15.set('fieldLabels', {});
lyr_VectorYatta2_16.set('fieldLabels', {});
lyr_VectorDeadsea3_17.set('fieldLabels', {});
lyr_VectorHebron15_18.set('fieldLabels', {});
lyr_VectorHebron16_19.set('fieldLabels', {});
lyr_VectorHebron18_20.set('fieldLabels', {});
lyr_VectorHebron19_21.set('fieldLabels', {});
lyr_VectorHebron20_22.set('fieldLabels', {});
lyr_VectorQibya_23.set('fieldLabels', {});
lyr_VectorBaqaSharqiya_24.set('fieldLabels', {});
lyr_VectorAuja1_25.set('fieldLabels', {});
lyr_VectorDeadsea31_26.set('fieldLabels', {});
lyr_VectorBeitjala_27.set('fieldLabels', {});
lyr_VectorBeitjala2_28.set('fieldLabels', {});
lyr_VectorDeadsea27_29.set('fieldLabels', {});
lyr_VectorDeadsea28_30.set('fieldLabels', {});
lyr_VectorDeadsea29_31.set('fieldLabels', {});
lyr_VectorDeadsea30_32.set('fieldLabels', {});
lyr_VectorZboba_33.set('fieldLabels', {});
lyr_VectorQalqilyaCity_34.set('fieldLabels', {});
lyr_VectorQifeen5_35.set('fieldLabels', {});
lyr_VectorZboba2_36.set('fieldLabels', {});
lyr_VectorUmAlreehan_37.set('fieldLabels', {});
lyr_VectorKufrdan_38.set('fieldLabels', {});
lyr_VectorHebron11_39.set('fieldLabels', {});
lyr_VectorJerusalem22_40.set('fieldLabels', {});
lyr_VectorTinak3_41.set('fieldLabels', {});
lyr_VectorKufrdan2_42.set('fieldLabels', {});
lyr_VectorNahaleen1_43.set('fieldLabels', {});
lyr_VectorJerusalem4_44.set('fieldLabels', {});
lyr_VectorDeadsea9_45.set('fieldLabels', {});
lyr_VectorDeadsea7_46.set('fieldLabels', {});
lyr_VectorAlras1_47.set('fieldLabels', {});
lyr_VectorJerusalem1_48.set('fieldLabels', {});
lyr_VectorTinak1Jenin_49.set('fieldLabels', {});
lyr_VectorZawya2_50.set('fieldLabels', {});
lyr_VectorZawya3_51.set('fieldLabels', {});
lyr_VectorDeadsea6_52.set('fieldLabels', {});
lyr_VectorDeadsea4_53.set('fieldLabels', {});
lyr_VectorDeadsea5_54.set('fieldLabels', {});
lyr_VectorJeftlik5_55.set('fieldLabels', {});
lyr_VectorZawya1_56.set('fieldLabels', {});
lyr_VectorHebron2_57.set('fieldLabels', {});
lyr_Vectorkufrsoor_58.set('fieldLabels', {});
lyr_VectorJericho1_59.set('fieldLabels', {});
lyr_VectorDeadsea1_60.set('fieldLabels', {});
lyr_VectorKharas_61.set('fieldLabels', {});
lyr_VectorAuja_62.set('fieldLabels', {});
lyr_VectorAuja2_63.set('fieldLabels', {});
lyr_VectorAzzoun_64.set('fieldLabels', {});
lyr_VectorMailh1_65.set('fieldLabels', {});
lyr_VectorJeftlik1_66.set('fieldLabels', {});
lyr_VectorJeftlik2_67.set('fieldLabels', {});
lyr_VectorSalman_68.set('fieldLabels', {});
lyr_VectorDirBaloot_69.set('fieldLabels', {});
lyr_VectorNileen_70.set('fieldLabels', {});
lyr_VectorMutelehJenin_71.set('fieldLabels', {});
lyr_VectorQalqilya2_72.set('fieldLabels', {});
lyr_UPSLOPEGAZAHEBRON1VECTOR_73.set('fieldLabels', {});
lyr_UPSLOPEJAYYOUSHEBRON1VECTOR_74.set('fieldLabels', {});
lyr_VectorFaroun_75.set('fieldLabels', {});
lyr_VectorHebron3_76.set('fieldLabels', {});
lyr_VectorJaroushia_77.set('fieldLabels', {});
lyr_VectorAttil_78.set('fieldLabels', {});
lyr_VectorZeita1_79.set('fieldLabels', {});
lyr_VectorZeita2_80.set('fieldLabels', {});
lyr_VectorQifeen_81.set('fieldLabels', {});
lyr_VectorTulkarm2_82.set('fieldLabels', {});
lyr_VectorJenin1_83.set('fieldLabels', {});
lyr_VectorHableh1_84.set('fieldLabels', {});
lyr_VectorBudros_85.set('fieldLabels', {});
lyr_VectorJenin2_86.set('fieldLabels', {});
lyr_VectorJenin3_87.set('fieldLabels', {});
lyr_VectorDeadsea32_88.set('fieldLabels', {});
lyr_VectorDeadsea33_89.set('fieldLabels', {});
lyr_VectorDeadsea34_90.set('fieldLabels', {});
lyr_VectorDeadsea35_91.set('fieldLabels', {});
lyr_VectorDeadsea36_92.set('fieldLabels', {});
lyr_VectorDeadsea37_93.set('fieldLabels', {});
lyr_VectorDeadsea40_94.set('fieldLabels', {});
lyr_VectorDeadsea38_95.set('fieldLabels', {});
lyr_VectorDeadsea39_96.set('fieldLabels', {});
lyr_VectorDeadsea43_97.set('fieldLabels', {});
lyr_VectorDeadsea44_98.set('fieldLabels', {});
lyr_VectorDeadsea45_99.set('fieldLabels', {});
lyr_VectorJerihco11_100.set('fieldLabels', {});
lyr_VectorDirAbuDief_101.set('fieldLabels', {});
lyr_VectorJbara2_102.set('fieldLabels', {});
lyr_VectorBeitSoreek_103.set('fieldLabels', {});
lyr_VectorBeitLahem2_104.set('fieldLabels', {});
lyr_VectorBeitSoreek2_105.set('fieldLabels', {});
lyr_VectorBeitSoreek3_106.set('fieldLabels', {});
lyr_VectorBeitLahem1_107.set('fieldLabels', {});
lyr_VectorDeadsea41_108.set('fieldLabels', {});
lyr_VectorJericho17_109.set('fieldLabels', {});
lyr_VectorDirAbuDief2_110.set('fieldLabels', {});
lyr_VectorDeadsea42_111.set('fieldLabels', {});
lyr_VectorBeitAwwa_112.set('fieldLabels', {});
lyr_VectorBeitAwwa_112.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});