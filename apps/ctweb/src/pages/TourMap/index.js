import React, { Component } from "react";
import L from 'leaflet'
import { Map, TileLayer, withLeaflet, MapControl, Popup, Marker, Polyline, Pane } from "react-leaflet";

import Routing from "./components/Routing";
import areaData from './components/areaData'

const polyline = [
  [
    10.16915818579629,
    54.43137670795394
  ],
  [
    10.188773122419871,
    54.41108284905239
  ],
  [
    10.19268816355295,
    54.39034391922871
  ],
  [
    10.17613122318031,
    54.38981837894162
  ],
  [
    10.161161601618021,
    54.385157716193824
  ],
  [
    10.166834097369888,
    54.37790652607658
  ],
  [
    10.154140028437803,
    54.36887915367618
  ],
  [
    10.139535751761056,
    54.368479065191906
  ],
  [
    10.148424812093936,
    54.36641225663234
  ],
  [
    10.139159217794473,
    54.36571267302581
  ],
  [
    10.152083022471288,
    54.36332651841844
  ],
  [
    10.147189721817512,
    54.36345783654288
  ],
  [
    10.149781372686132,
    54.35920624925694
  ],
  [
    10.145521627595143,
    54.36105043128488
  ],
  [
    10.141359828118828,
    54.35390545252558
  ],
  [
    10.155254792569773,
    54.34494582613291
  ],
  [
    10.157702751363473,
    54.338370045284584
  ],
  [
    10.136380988722642,
    54.31751881555284
  ],
  [
    10.132533569351969,
    54.31125490216628
  ],
  [
    10.14863347433938,
    54.3218678044541
  ],
  [
    10.152260386991156,
    54.31972111481034
  ],
  [
    10.1506322918192,
    54.32394492321226
  ],
  [
    10.163896807293202,
    54.324038079610496
  ],
  [
    10.169998217488752,
    54.32875529764969
  ],
  [
    10.166971430903928,
    54.33563578183564
  ],
  [
    10.170677227059,
    54.337599225118495
  ],
  [
    10.177155615297645,
    54.33450798051076
  ],
  [
    10.173018880139184,
    54.33761016590798
  ],
  [
    10.174162084863477,
    54.34574538418509
  ],
  [
    10.180178711607402,
    54.347381951453386
  ],
  [
    10.185522300834522,
    54.34172998205585
  ],
  [
    10.204514210384852,
    54.34114592633952
  ],
  [
    10.206344899572743,
    54.33263113359088
  ],
  [
    10.199338304012812,
    54.326167912857706
  ],
  [
    10.201761861416013,
    54.32445875155257
  ],
  [
    10.215349200446822,
    54.33011087687812
  ],
  [
    10.21868882805097,
    54.324506723432776
  ],
  [
    10.213296324807855,
    54.317742542569114
  ],
  [
    10.209982025323331,
    54.31956661041122
  ],
  [
    10.18988232866604,
    54.31462522030583
  ],
  [
    10.189895814802378,
    54.29785267459933
  ],
  [
    10.205670730156998,
    54.28974663067251
  ],
  [
    10.204124546238326,
    54.28470573347417
  ],
  [
    10.208960868259009,
    54.284375820839244
  ],
  [
    10.207520900081143,
    54.277225074729635
  ],
  [
    10.20492397410676,
    54.27554887232872
  ],
  [
    10.201537992367857,
    54.27927621637453
  ],
  [
    10.199183972997961,
    54.27798658069086
  ],
  [
    10.201182308816986,
    54.26641710795757
  ],
  [
    10.186812670396657,
    54.25957576124868
  ],
  [
    10.18386882051796,
    54.25318402462145
  ],
  [
    10.1743181546407,
    54.25277350108883
  ],
  [
    10.170624457492362,
    54.25651727086529
  ],
  [
    10.15893300278923,
    54.25910805027495
  ],
  [
    10.154139694757685,
    54.25820598060171
  ],
  [
    10.152128827490577,
    54.250828300511614
  ],
  [
    10.134773428251696,
    54.25770218286929
  ],
  [
    10.123428029712464,
    54.25551360957655
  ],
  [
    10.123235528411579,
    54.258233802698996
  ],
  [
    10.113703019237033,
    54.26086275150766
  ],
  [
    10.094555298986856,
    54.26312806543107
  ],
  [
    10.083736697444774,
    54.26838152975214
  ],
  [
    10.091437692058484,
    54.27484497846531
  ],
  [
    10.094913377376988,
    54.2870140877469
  ],
  [
    10.084558811725216,
    54.28969198725677
  ],
  [
    10.066910273056152,
    54.28492732792547
  ],
  [
    10.057636252984315,
    54.288369968046254
  ],
  [
    10.059389908480535,
    54.29696914400019
  ],
  [
    10.047979238005665,
    54.29862805782352
  ],
  [
    10.045961688867827,
    54.30824391116572
  ],
  [
    10.051847715823149,
    54.31132813309943
  ],
  [
    10.042066257983956,
    54.31212664918512
  ],
  [
    10.04279948888289,
    54.32259868586528
  ],
  [
    10.053169206483268,
    54.33425445613795
  ],
  [
    10.069156983681404,
    54.325690642349585
  ],
  [
    10.09281758643203,
    54.328454096971434
  ],
  [
    10.105323781455498,
    54.33665556780803
  ],
  [
    10.097203939184002,
    54.35052865415632
  ],
  [
    10.092468839490087,
    54.34579071110082
  ],
  [
    10.070435952659942,
    54.343733174283734
  ],
  [
    10.06851473507237,
    54.34835055946798
  ],
  [
    10.05031553089909,
    54.34561124182023
  ],
  [
    10.032632255851802,
    54.34933577342019
  ],
  [
    10.035636655076335,
    54.36003129945583
  ],
  [
    10.061449120653583,
    54.3599802041932
  ],
  [
    10.069096977523957,
    54.36384936360887
  ],
  [
    10.072768157681363,
    54.37191543277988
  ],
  [
    10.081879994859262,
    54.36948596287272
  ],
  [
    10.103151321976254,
    54.37223929701722
  ],
  [
    10.119075566223248,
    54.36956805601239
  ],
  [
    10.1398182730423,
    54.38807283202385
  ],
  [
    10.133545402828284,
    54.393399496190995
  ],
  [
    10.134478672379496,
    54.41342652626851
  ],
  [
    10.146352630910975,
    54.41078500736849
  ],
  [
    10.15736439294744,
    54.42919281484855
  ],
  [
    10.16915818579629,
    54.43137670795394
  ]
]

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

class TourMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 54.32313137415068,
      lng: 10.139522552490234,
      zoom: 12,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });

    console.log(map);
    
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap}>
        
          
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.isMapInit && <Routing map={this.map} />}
          
          <Marker position={[54.322818512961135, 10.143492221832275]}>
            <Popup> Kiel Maritime Museum </Popup>
          </Marker>

          <Marker position={[54.338740125896415, 10.12313961982727]}>
            <Popup> Kiel University </Popup>
          </Marker>

          <Marker position={[54.364258145372155, 10.115532875061035]}>
            <Popup>Tannenberg park</Popup>
          </Marker>
          <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
            <Polyline color="green" weight="6" positions={polyline.map(x => [x[1],x[0]])} />
          </Pane>
      </Map>
    );
  }
}

export default TourMap;