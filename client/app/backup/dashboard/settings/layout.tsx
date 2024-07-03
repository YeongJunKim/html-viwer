'use client'

import Link from 'next/link';
import { useState } from 'react';
import LoginForm from '@/app/ui/settings/login-form';
import BranchList from '@/app/ui/settings/branch';
import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function SettingLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [address, setAddress] = useState(localStorage.getItem("address") || "");
    const [port, setPort] = useState(localStorage.getItem("port") || "");
    const [isConnected, setIsConnected] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        localStorage.setItem("address", address);
        localStorage.setItem("port", port);

        setIsConnected(true);

        console.log(pathname);
        console.log(searchParams);

        router.push("/dashboard/settings/branch");
    };

    

    const AnimatedDiv = ({ animate }: { animate: boolean; }) => {
        const duration = animate ? 0.5 : 0;
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: -10 }} // 초기 상태
                    animate={{ opacity: 1, x: 0 }} // 애니메이션 중간 상태
                    transition={{ duration: duration }} // 애니메이션 지속 시간
                    style={{}}>

                    <div className="flex flex-row gap-4">
                        <div className="h-[80vh]">
                            <div className="flex flex-col gap-6">
                                <LoginForm title="Setup" text1="address" text2="port" address={address} port={port} onSubmit={handleSubmit} onChangeAddress={(e) => setAddress(e.target.value.toString())} onChangePort={(e) => setPort(e.target.value.toString())} />
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className="flex  flex-col md:flex-row md:overflow-hidden gap-6">
            {/* <AnimatedDiv animate={!isConnected} /> */}
            <div>{children}</div>
        </div>
    );
}