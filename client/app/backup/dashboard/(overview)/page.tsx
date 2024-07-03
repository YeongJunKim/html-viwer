'use client'
// 'use server'

// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';
import { Suspense, useEffect, useState } from 'react';
// import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import LoginForm from '@/app/ui/settings/login-form';



export default async function Page() {
    const searchParams = useSearchParams()
    const [address, setAddress] = useState('');
    const [port, setPort] = useState('');
    const paramAddress = searchParams.get('address') as string;
    const paramPort = searchParams.get('port') as string;
    const router = useRouter();

    useEffect(() => {
        if (paramAddress != null) {
            localStorage.setItem("address", paramAddress);
        }
        if (paramPort != null) {
            localStorage.setItem("port", paramPort);
        }
        const storageAddress = localStorage.getItem("address") || null;
        const storagePort = localStorage.getItem("port") || null;
        if (storageAddress != null){
            setAddress(storageAddress);
        }
        if (storagePort != null){
            setPort(storagePort);
        }
    })
    // <Card title='Address' />

    // const {
    //     numberOfCustomers,
    //     numberOfInvoices,
    //     totalPaidInvoices,
    //     totalPendingInvoices, } = await fetchCardData();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("address", address);
        localStorage.setItem("port", port);
        router.push(`/dashboard/settings?address=${address}&port=${port}`);
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
        <main>
            https://{address}:{port}
            <AnimatedDiv animate={true} />


            
            {/* <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-2'>
                <Card title="address" value={address} type="collected"></Card>
                <Card title="port" value={port} type="collected"></Card>
            </div> */}
            {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1> */}
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div> */}
            {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div> */}
        </main>
    );
}