"use client";
import { useForm, Controller, useFieldArray } from "react-hook-form";
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
import { PlusCircle, Sparkles } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const DraftForm = () => {
  const [description, setDescription] = useState('');
  const { toast } = useToast();
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      propertyType: "apartment",
      rooms: [{ name: "Hall" }, { name: "Kitchen" }],
      additionalFeatures: "",
      lang: "",
      tone: "",
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "rooms",
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="dark:text-black">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Draft-To-Description</h2>
          <div className="mb-4">
            <Controller
              name="propertyType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={(value) => field.onChange(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">house</SelectItem>
                    <SelectItem value="apartment">apartment</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label>Location</Label>
              <Input {...register("location")} placeholder="e.g. Canning" />
            </div>
            <div>
              <Label>Address</Label>
              <Input {...register("address")} placeholder="e.g. 123 Main St" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <Label>Number of Rooms</Label>
              <Input
                {...register("numRooms")}
                type="number"
                placeholder="e.g. 4"
              />
            </div>
            <div>
              <Label>Living Area (m²)</Label>
              <Input
                {...register("area")}
                type="number"
                placeholder="e.g. 55"
              />
            </div>
            <div>
              <Label>Floor</Label>
              <Input {...register("floor")} placeholder="e.g. 2 out of 4" />
            </div>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <Label>{field.name}</Label>
              <Textarea
                {...register(`rooms.${index}.description`)}
                placeholder={`Description of the ${field.name.toLowerCase()}`}
              />
            </div>
          ))}

          <Button
            variant="outline"
            type="button"
            className="mb-6 dark:text-white"
            onClick={() => append({ name: `Room ${fields.length + 1}` })}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Room
          </Button>

          <div className="mb-6">
            <Label>Additional Features</Label>
            <Textarea
              {...register("additionalFeatures")}
              placeholder="Enter additional features..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label>Language</Label>
              <Controller
                name="lang"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={(value) => field.onChange(value)}>
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
                name="tone"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Formal">
                        Formal y Profesional
                      </SelectItem>
                      <SelectItem value="Aspiracional">Aspiracional</SelectItem>
                      <SelectItem value="Comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Description
          </Button>
        </div>
      </form>
      <div className="mt-10">
        <Textarea  placeholder='aqui se generara su descripcion' value={description}/>
      </div>
    </div>
  );
};
