"use client";

import React, { useEffect, useState } from 'react'
import Connect from "./connect";
import { Navbar } from '@/components/navbar';
import { useSideBarContext } from '@/context/sidebar';
import Paths from "@/components/paths";
import { Card } from '@material-tailwind/react';
import {NavLinks} from '@/app/ui/dashboard/nav-links';

export default function App({ params }) {
    const collapseContext = useSideBarContext();
    const { open } = collapseContext;
    const [isSm, setIsSm] = useState(false);
    const [isDropping, setIsDropping] = useState(false);

    useEffect(() => {
        
        console.log("param: ", params);
        // window.addEventListener("resize", () => {
        //     window.innerWidth >= 960 && collapseContext.setOpen(false);
        //     window.innerWidth <= 611 && setIsSm(true);
        // });
    }, []);

    const handleDrop = () => {
        setIsDropping(true);
    }

    return (
        <>
            {/* <NavLinks /> */}
            <div className="max-h-full flex h-screen" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                {/* <Card className={`lg:w-[25%] bg-base-200 overflow-auto ${!open ? "hidden lg:block" : ""}  ${open && " w-[50%] visible"} shadow-xl rounded-md`}>
                    <Paths />
                </Card> */}
                <div className={`lg:w-[40%] ${open ? "w-[50%]" : ""} w-[100%] overflow-y-auto overflow-x-auto`}>
                    <Connect params={params} />
                </div>
            </div>
        </>
    )
}
