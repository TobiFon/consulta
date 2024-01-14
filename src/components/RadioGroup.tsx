"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import {
  MessageCircleIcon,
  MessageCirclePlus,
  Phone,
  Video,
} from "lucide-react";

const FormSchema = z.object({
  type: z.enum(["query", "video", "chat", "phone"], {
    required_error: "You need to select a consultation type.",
  }),
});

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted ",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-purple-950 text-orange-50 p-4">
          submitted
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-10 flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid xl:grid-cols-2 space-y-1 gap-10"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="query" />
                    </FormControl>
                    <FormLabel className="font-normal flex gap-1 justify-center items-center bg-white px-5 py-3 rounded-2xl shadow-lg">
                      <MessageCircleIcon /> Query
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="chat" />
                    </FormControl>
                    <FormLabel className="font-normal flex gap-1 justify-center items-center bg-white px-5 py-3 rounded-2xl shadow-lg">
                      <MessageCirclePlus /> Chat
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="phone" />
                    </FormControl>
                    <FormLabel className="font-normal flex gap-1 justify-center items-center bg-white px-5 py-3 rounded-2xl shadow-lg">
                      <Phone />
                      Phone
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="video" />
                    </FormControl>
                    <FormLabel className="font-normal flex gap-1 justify-center items-center bg-white px-5 py-3 rounded-2xl shadow-lg">
                      <Video />
                      Video
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Start chat consultation</Button>
      </form>
    </Form>
  );
}
