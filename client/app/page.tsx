"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { usePasswordContext } from "@/app/context/encrypt-password";
import ImportHotToast from "@/components/import-toaster";
import FtpForm from "@/app/ui/settings/ftp-form";
import CryptoJs from "crypto-js";

export default function Home() {
  const [formData, setFormData] = useState({
    ftp_host: "localhost",
    ftp_username: "colson",
    ftp_password: "5003",
    ftp_port: 21,
    isSubmitted: false,
    formHidden: true,
    encryptedData: "",
  });

  const _password = usePasswordContext();
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormData((prevState) => ({ ...prevState, formHidden: false }));
    }, 900);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { ftp_host, ftp_username, ftp_password, ftp_port } = formData;
    const data = { ftp_host, ftp_username, ftp_password, parseInt };
    console.log(formData);
    let eData = CryptoJs.AES.encrypt(
      JSON.stringify(data),
      _password
    ).toString(); //Encrypted Form Of Data
    console.log("eData: ", eData);
    setFormData((prevState) => ({
      ...prevState,
      isSubmitted: true,
      encryptedData: eData,
    }));
    router.push(`ftp/${encodeURIComponent(eData)}`);
  };

  return (
    <>
      <ImportHotToast />
      <main className="flex min-h-screen flex-col align-middle items-center justify-between p-24">
        {formData.formHidden ? (
          <></>
        ) : (
          <FtpForm
            formState={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </main>
    </>
  );
}
