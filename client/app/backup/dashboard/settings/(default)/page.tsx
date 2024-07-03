'use client'

import { useState } from 'react';
import { boolean } from 'zod';
import { WindowIcon, ServerStackIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import LoginForm from '@/app/ui/settings/login-form';
import BranchList from '@/app/ui/settings/branch';
import { motion } from "framer-motion"

export default function Page() {

  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [port, setPort] = useState(localStorage.getItem("port") || "");
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("address", address);
    localStorage.setItem("port", port);
  };

  const AnimatedDiv = ({ isConnected }: { isConnected: boolean; }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }} // 초기 상태
        animate={{ opacity: 1, x: 0 }} // 애니메이션 중간 상태
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        style={{}}>

        <div className="flex flex-row gap-4">
          <div className="h-[80vh]">
            <div className="flex flex-col">
              <LoginForm title="Setup" text1="address" text2="port" address={address} port={port} onSubmit={handleSubmit} onChangeAddress={(e) => setAddress(e.target.value.toString())} onChangePort={(e) => setPort(e.target.value.toString())} />
            </div>
            <div className=""></div>
          </div>
          <div className="">
            {/* <BranchList /> */}
          </div>
        </div>
      </motion.div>
    );
  };

  return <main>
    <AnimatedDiv isConnected={isConnected} />
  </main>;
}
