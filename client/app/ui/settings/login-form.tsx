import { ArrowRightIcon, ServerStackIcon, WindowIcon } from "@heroicons/react/24/outline";
import { ChangeEventHandler, FormEventHandler } from "react";
import { Button } from "../button";


export default function LoginForm({
    title= "Setup",
    text1 = "text1",
    text2 = "text2",
    address,
    port,
    password,
    onSubmit,
    onChangeAddress,
    onChangePort }: {
        title: string;
        text1: string;
        text2: string;
        address: string;
        port: string;
        password: string;
        onSubmit: FormEventHandler<HTMLFormElement>;
        onChangeAddress: ChangeEventHandler<HTMLInputElement>;
        onChangePort: ChangeEventHandler<HTMLInputElement>;
    }) {

    return (<form className='' onSubmit={onSubmit}>
        <div className="flex rounded-lg bg-gray-100 px-6 pb-4 pt-8">
            <div className="flex-col grid grap-5">
                <h1 className="mb-3 text-2xl font-semibold">
                    {title}{" "}
                </h1>
                <div>
                    <label className="mb-3 mt-5 block text-xs font-medium">
                        {text1}
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="address"
                            placeholder="localhost"
                            value={address}
                            onChange={onChangeAddress}
                            required>
                        </input>
                        <ServerStackIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>

                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="port">
                        {text2}
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="9999"
                            value={port}
                            onChange={onChangePort}
                            required
                        />
                        <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="port">
                        username
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder=""
                            value={port}
                            onChange={onChangePort}
                            required
                        />
                        <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="port">
                        password
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder=""
                            value={port}
                            onChange={onChangePort}
                            required
                        />
                        <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div className='h-10'>

                </div>
                <div>
                    <Button className="mt-4 w-full" type="submit">
                        Connect
                        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                    </Button>
                </div>
            </div>
        </div>
    </form>);
}