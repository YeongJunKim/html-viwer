import {
  ArrowRightIcon,
  ServerStackIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { ChangeEventHandler, FormEventHandler } from "react";
import { Button } from "../button";

export default function FtpForm({
  formState,
  onSubmit,
  onChange,
}: {
  formState: any;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <form className="" onSubmit={onSubmit}>
      <div className="flex rounded-lg bg-gray-100 px-6 pb-4 pt-8">
        <div className="flex-col grid grap-5">
          <h1 className="mb-3 text-2xl font-semibold">FTP Setup </h1>
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium">
              address
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ftp_host"
                type="text"
                placeholder="localhost"
                value={formState.ftp_host}
                onChange={onChange}
                required
              ></input>
              <ServerStackIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              username
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ftp_username"
                type="text"
                placeholder=""
                value={formState.ftp_username}
                onChange={onChange}
                required
              />
              <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ftp_password"
                type="text"
                placeholder=""
                value={formState.ftp_password}
                onChange={onChange}
                required
              />
              <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="port"
            >
              port
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ftp_port"
                type="text"
                value={formState.ftp_port}
                onChange={onChange}
                required
              />
              <WindowIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="h-10"></div>
          <div>
            {/* {console.log(formState.isSubmitted)} */}
            <Button className="mt-4 w-full" type="submit" disabled={formState.isSubmitted}>
                {
                    formState.isSubmitted && <span className="loading loading-xs loading-spinner"></span>
                }
              Connect
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
