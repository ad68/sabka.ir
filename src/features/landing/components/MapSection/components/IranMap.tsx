"use client"
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";
import {useIsMobile} from '@/features/products/hooks/useIsMobile';

const TOPO_URL =
    "https://raw.githubusercontent.com/map-ir/datasets/main/dataset_province.topojson";

type Props = {
    onSelect?: (name: string) => void;
    width?: number;
    height?: number;
};

export default function IranProvincesMap({ onSelect, width = 720, height = 520 }: Props) {
    const [tooltip, setTooltip] = React.useState<{ x: number; y: number; text: string } | null>(null);
    const isMobile = useIsMobile();
    // کمک‌تابع: با چند اسم پراپرتی رایج امتحان می‌کند
    const getName = (props: any) =>
        props?.province_name ||
        props?.name ||
        props?.NAME_1 ||
        props?.Name ||
        props?.province ||
        props?.ostan ||
        "نام نامشخص";

    return (
        <div style={{ position: "relative", direction: "rtl" }} >
            {/* Tooltip */}
            {tooltip && (
                <section
                    style={{
                        position: "absolute",
                        top: isMobile ? (tooltip.y - 200) :  (tooltip.y),
                        left:  (tooltip.x) ,
                        background: "#FAFAFA",
                        color: "#000",
                        padding: "6px 10px",
                        borderRadius: 8,
                        pointerEvents: "none",
                        fontSize: 12,
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 12px rgba(0,0,0,.2)",
                    }}
                >
                    {tooltip.text}
                </section>
            )}

            <ComposableMap width={width} height={height} projectionConfig={{ scale: 1200, center: [54, 32] }}>
                {/*<ZoomableGroup minZoom={1} maxZoom={8}>*/}
                    <Geographies geography={TOPO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                // console.log(geo.properties)
                                const name = getName(geo.properties);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={(e) => {
                                            setTooltip({ x: e.clientX , y: e.clientY, text: name });
                                        }}
                                        onMouseMove={(e) => {
                                            setTooltip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : null));
                                        }}
                                        onMouseLeave={() => setTooltip(null)}
                                        onClick={() => onSelect?.(name)}
                                        style={{
                                            default: { fill: "#305F56", outline: "none", stroke: "#888", strokeWidth: 0.6 },
                                            hover: { fill: "#E9AA1E", outline: "none" ,cursor:"pointer"},
                                            pressed: { fill: "#E9AA1E", outline: "none" }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                {/*</ZoomableGroup>*/}
            </ComposableMap>
        </div>
    );
}
