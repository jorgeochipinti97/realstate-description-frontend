"use client";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export const SocialMediaForm = () => {
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      platform: "facebook",
      language: "",
      keyFeatures: "",
    },
  });

  const onSubmit = async (data) => {
    toast({ title: "Aguarde un momento por favor" });
    try {
      const response = await axios.post(
        "https://realstate-description-api-production.up.railway.app/description",
        data
      );
      if (response) {
        toast({ title: "Descripción generada con éxito" });
        setDescription(response.data);
      }
    } catch (err) {
      toast({ title: "Algo salio mal", variant: "destructive" });
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="dark:text-black mt-20 md:mt-0"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Social Media Copy</h2>

        <div className="mb-4">
          <Controller
            name="socialMediaPlatform"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="justSold">X (Twitter)</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="mb-4">
          <Label>Ad Type</Label>
          <Controller
            name="adType"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <SelectTrigger>
                  <SelectValue placeholder="Select ad type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="listing">Property Listing</SelectItem>
                  <SelectItem value="openHouse">Open House</SelectItem>
                  <SelectItem value="justSold">Just Sold</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="mb-4">
          <Label>Key Features</Label>
          <Textarea
            {...register("keyFeatures")}
            placeholder="Enter key features..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <Label>Language</Label>
            <Controller
              name="languageSocial"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Social Media Copy
        </Button>
        <div className="items-start flex justify-center mt-10 ">
          <Textarea
            className="border-2 h-[50vh]  border-black w-screen"
            placeholder="aqui se generara su descripcion"
            value={description}
          />
        </div>
      </div>
    </form>
  );
};
