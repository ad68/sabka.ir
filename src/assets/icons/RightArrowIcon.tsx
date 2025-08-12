import React from "react";

export function RightArrowIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="14" height="24" {...props} viewBox="0 0 14 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path d="M2.24219 2.54199L11.7576 12.0574L2.24219 21.5728" stroke={props.color ?? '#151516'} strokeWidth="3.23116" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

}