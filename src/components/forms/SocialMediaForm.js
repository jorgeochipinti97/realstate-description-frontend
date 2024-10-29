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

export const SocialMediaForm = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      platform: "facebook",
      language: "",
      tone: "",
      keyFeatures: "",
    },
  });

  const onSubmit = (data) => {
    console.log("SocialMediaForm Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dark:text-black ">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Social Media Copy</h2>

        <div className="mb-4">
          <Label>Select Platform</Label>
          <Controller
            name="socialMediaPlatform"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="facebook" />
                  <Label>Facebook</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instagram" />
                  <Label>Instagram</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="twitter" />
                  <Label>Twitter</Label>
                </div>
              </RadioGroup>
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
          <div>
            <Label>Tone</Label>
            <Controller
              name="toneSocial"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="excited">Excited</SelectItem>
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
      </div>
    </form>
  );
};
