import React from "react";

export function ScrollIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="40" height="58" {...props} viewBox="0 0 40 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="56" rx="19" stroke="#72814E" strokeWidth="2"/>
            <mask id="mask0_2046_13860"  maskUnits="userSpaceOnUse" x="4" y="4" width="32" height="50">
                <rect x="4" y="4" width="32" height="50" rx="16" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2046_13860)">
                <path d="M17.3529 10H22.4118C22.964 10 23.4118 10.4477 23.4118 11V19.5211C23.4118 20.0734 23.8595 20.5211 24.4118 20.5211H27.6109C28.0486 20.5211 28.2751 21.0437 27.9758 21.363L20.612 29.2213C20.2169 29.6429 19.5478 29.6429 19.1527 29.2213L11.7889 21.363C11.4896 21.0437 11.7161 20.5211 12.1538 20.5211H15.3529C15.9052 20.5211 16.3529 20.0734 16.3529 19.5211V11C16.3529 10.4477 16.8007 10 17.3529 10Z" fill="#72814E"/>
            </g>
        </svg>

    );
}