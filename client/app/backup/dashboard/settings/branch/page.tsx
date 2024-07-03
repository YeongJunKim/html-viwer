import BranchList from "@/app/ui/settings/branch";

export default function Page() {
    return (
        <main>
            <div className="flex rounded-lg bg-gray-100 px-6 pb-4 pt-8">
                <BranchList></BranchList>
            </div>
        </main>
    )
  }