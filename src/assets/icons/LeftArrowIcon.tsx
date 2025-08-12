import React from "react";

export function LeftArrowIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="14" height="24" {...props} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7578 2.54199L2.24241 12.0574L11.7578 21.5728" stroke={props.color ?? '#151516'} strokeWidth="3.23116" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}