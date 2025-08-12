import React from "react";

export function ArrowTLIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="26" height="27" viewBox="0 0 26 27" fill="none"  {...props} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2257_8682)">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.50036 7H19.5004V9.16668H10.1992L19.9492 18.9167L18.4171 20.4487L8.66704 10.6986V20H6.50036V7Z" fill={'currentColor'} />
            </g>
            <defs>
                <clipPath id="clip0_2257_8682">
                    <rect width="26" height="26" fill={props.fill ?? 'white'} transform="matrix(-1 0 0 1 26 0.5)"/>
                </clipPath>
            </defs>
        </svg>

    );
}