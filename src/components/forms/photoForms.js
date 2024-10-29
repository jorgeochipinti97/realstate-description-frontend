'use client'
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";

export const PhotosForm = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      language: "",
      tone: "",
      photos: [],
    },
  });

  const onSubmit = (data) => {
    console.log("PhotosForm Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dark:text-black">
    <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Photos-To-Description
              </h2>

              <div className="mb-6">
                <Label>Main Floor Plan Image</Label>
                <Input type="file" {...register("mainFloorPlan")} />
              </div>

              <div className="mb-6">
                <Label>Property Photos (up to 20)</Label>
                <Input type="file" multiple {...register("photos")} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label>Language</Label>
                  <Controller
                    name="languagePhotos"
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
                    name="tonePhotos"
                    control={control}
                    render={({ field }) => (
                      <Select {...field}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Description from Photos
              </Button>
            </div>
    </form>
  );
};
