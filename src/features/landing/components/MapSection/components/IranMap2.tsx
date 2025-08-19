import React from "react";
import { IranMap } from "react-iran-map";
const mapData = {
    ardabil: 20,
    isfahan: 20,
    alborz: 4,
    ilam: 1,
    eastAzerbaijan: 20,
    westAzerbaijan: 40,
    bushehr: 10,
    tehran: 30,
    chaharmahalandBakhtiari: 6,
    southKhorasan: 40,
    razaviKhorasan: 30,
    northKhorasan: 20,
    khuzestan: 23,
    zanjan: 30,
    semnan: 20,
    sistanAndBaluchestan: 22,
    fars: 10,
    qazvin: 30,
    qom: 12,
    kurdistan: 29,
    kerman: 33,
    kohgiluyehAndBoyerAhmad: 24,
    kermanshah: 20,
    golestan: 36,
    gilan: 44,
    lorestan: 30,
    mazandaran: 30,
    markazi: 13,
    hormozgan: 15,
    hamadan: 12,
    yazd: 20,
}
function App() {
    const selectProvinceHandler = (province: any) => {
        console.log(province)
    }

    return (
        <div>
            <IranMap

                data={mapData}
                colorRange='48, 95, 86'
                tooltipTitle="تعداد شعبه"
                width={"90%"}
                textColor='white'
                defaultSelectedProvince='tehran'
                deactiveProvinceColor='#4caf50'
                selectedProvinceColor='#3bcc6d'
                selectProvinceHandler={selectProvinceHandler}
            />
        </div>
    );
}

export default App;
