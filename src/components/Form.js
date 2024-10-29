"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DraftForm } from "./forms/DraftForms";
import { PhotosForm } from "./forms/photoForms";
import { SocialMediaForm } from "./forms/SocialMediaForm";
import { useState } from "react";



export const RealStateForm = () => {
  const [activeTab, setActiveTab] = useState("draft");

  return (
    <div className=" flex justify-center  py-20 min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-[80vw]">
        <TabsList className="mb-4 md:flex-row flex flex-col">
          <TabsTrigger  className='my-2' value="draft">Draft-To-Description</TabsTrigger>
          <TabsTrigger className='my-2' value="photos">Photos-To-Description</TabsTrigger>
          <TabsTrigger className='my-2'  value="social">Social Media Copy</TabsTrigger>
        </TabsList>

        <TabsContent value="draft">
          <DraftForm />
        </TabsContent>

        <TabsContent value="photos">
          <PhotosForm />
        </TabsContent>

        <TabsContent value="social">
          <SocialMediaForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
