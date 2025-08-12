import React from "react";

export function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="22" height="4" viewBox="0 0 22 4" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.367 0.670898H19.9416C19.9649 0.670898 20.3142 0.815273 20.3696 0.844439C21.2883 1.33371 21.2891 2.74173 20.3696 3.231C20.3149 3.26017 19.9649 3.40454 19.9416 3.40454H12.367H9.63335H2.05876C2.03543 3.40454 1.68616 3.26017 1.63074 3.231C0.711992 2.74173 0.711263 1.33371 1.63074 0.844439C1.68543 0.815273 2.03543 0.670898 2.05876 0.670898H9.63335H12.367Z" fill={props.color ?? '#72814E'}/>
        </svg>



    );
}