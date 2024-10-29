"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DraftForm } from "./forms/DraftForms";
import { PhotosForm } from "./forms/photoForms";
import { SocialMediaForm } from "./forms/SocialMediaForm";
import { useState } from "react";



export const RealStateForm = () => {
  const [activeTab, setActiveTab] = useState("draft");

  return (
    <div className="w-screen flex justify-center  py-20 min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="draft">Draft-To-Description</TabsTrigger>
          <TabsTrigger value="photos">Photos-To-Description</TabsTrigger>
          <TabsTrigger value="social">Social Media Copy</TabsTrigger>
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
