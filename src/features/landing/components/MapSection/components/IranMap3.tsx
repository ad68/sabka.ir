import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/iran-provinces.json"; // فایل GeoJSON ایران

const IranMap = () => (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1500, center: [54, 32] }}>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                            default: { fill: "#e0e0e0", stroke: "#000" },
                            hover: { fill: "#4caf50" },
                            pressed: { fill: "#2e7d32" },
                        }}
                    />
                ))
            }
        </Geographies>
    </ComposableMap>
);

export default IranMap;
