import Image from "next/image";

import { AppSidebar } from "@/components/AppSidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { RealStateForm } from "@/components/Form";

export default function Home() {
  return (
    <div className="border-2 w-screen">
      <div className="w-screen justify-center flex-shrink">
        <div className="w-[90vw]  h-[60vh] mt-10">
          <RealStateForm/>
        </div>
      </div>
    </div>
  );
}
