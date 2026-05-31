ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_2.png" /> <br />' });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/univ_surabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/univ_surabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/univ_surabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/univ_surabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/univ_surabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/univ_surabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/univ_surabaya_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya_2_9.png" /> <br />' });
var format_PTNdisurabaya_3 = new ol.format.GeoJSON();
var features_PTNdisurabaya_3 = format_PTNdisurabaya_3.readFeatures(json_PTNdisurabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNdisurabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdisurabaya_3.addFeatures(features_PTNdisurabaya_3);
var lyr_PTNdisurabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdisurabaya_3, 
                style: style_PTNdisurabaya_3,
                popuplayertitle: 'PTN di surabaya',
                interactive: true,
    title: 'PTN di surabaya<br />\
    <img src="styles/legend/PTNdisurabaya_3_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdisurabaya_3_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdisurabaya_3_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdisurabaya_3_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdisurabaya_3_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdisurabaya_3_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdisurabaya_3_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdisurabaya_3_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdisurabaya_3_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNdisurabaya_3_9.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_PTNdisurabaya_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2,lyr_PTNdisurabaya_3];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'univ_surabaya_atributQS WUR': 'univ_surabaya_atributQS WUR', 'univ_surabaya_atributDidirikan': 'univ_surabaya_atributDidirikan', 'univ_surabaya_atributFakultas': 'univ_surabaya_atributFakultas', });
lyr_PTNdisurabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'univ_surabaya_atributQS WUR': 'univ_surabaya_atributQS WUR', 'univ_surabaya_atributDidirikan': 'univ_surabaya_atributDidirikan', 'univ_surabaya_atributFakultas': 'univ_surabaya_atributFakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'univ_surabaya_atributQS WUR': 'TextEdit', 'univ_surabaya_atributDidirikan': 'Range', 'univ_surabaya_atributFakultas': 'TextEdit', });
lyr_PTNdisurabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'univ_surabaya_atributQS WUR': 'TextEdit', 'univ_surabaya_atributDidirikan': 'Range', 'univ_surabaya_atributFakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'header label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'univ_surabaya_atributQS WUR': 'no label', 'univ_surabaya_atributDidirikan': 'no label', 'univ_surabaya_atributFakultas': 'no label', });
lyr_PTNdisurabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'univ_surabaya_atributQS WUR': 'no label', 'univ_surabaya_atributDidirikan': 'no label', 'univ_surabaya_atributFakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdisurabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});