import Table from '@/app/ui/invoices/table';
import Pagination from '@/app/ui/invoices/pagination';

export default function BranchList() {
    return (
        <div className="flex rounded-lg bg-gray-100 px-6 pb-4 pt-8">
            <div className="flex-col grid grap-5">
                <h1 className="mb-3 text-2xl font-semibold">
                    SelectBranch{" "}
                </h1>
                <div>
                    <label className="mb-3 mt-5 block text-xs font-medium">
                        Branch List
                    </label>

                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        Branch
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Commit ID
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Update
                                    </th>
                                    <th scope="col" className="relative py-3 pl-6 pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={5} />
                </div>
            </div>
        </div>
    );
}