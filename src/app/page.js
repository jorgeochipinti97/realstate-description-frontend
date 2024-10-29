import Image from "next/image";

import { AppSidebar } from "@/components/AppSidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { RealStateForm } from "@/components/Form";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="w-screen min-h-screen flex items-center justify-center ">
        <div className="w-[90vw]  ">
          <RealStateForm />
        </div>
      </div>
    </div>
  );
}
