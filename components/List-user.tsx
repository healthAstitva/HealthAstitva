"use client"

import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";

const FormSchema = z.object({
  name: z.string().min(1, { message: "First Name is required." }),
  birthdate: z.string().optional(),
  gender: z.string().optional(),
  startdate: z.string().optional(),
  maritalstatus: z.enum(["married", "unmarried"], {
    required_error: "You need to select Gender.",
  }).optional(),
  guardiansname: z.string().optional(),
  contactnumber: z.string().optional(),
  workaddress: z.string().optional(),
  currentaddress: z.string().optional(),
})


export const ListUser = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data:z.infer<typeof FormSchema>) {
  
    console.log(data);
    form.reset();
  }

  return (
    <div className=" w-[700px] ml-72 pt-[72px] dark:bg-black space-y-6  text-rose-600">

      <p className="text-3xl pl-8 pt-8 font-bold ">User Details Form</p>
      <Separator className="dark:bg-white bg-rose-700 " />

    <Form {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)} className="dark:bg-black p-12 space-y-5 text-rose-600">
        <FormField
          control={form.control}
          name="name"
          defaultValue=""
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-2xl">Name </FormLabel>
              <FormControl>
                <Input placeholder="Enter the name" {...field} className="dark:bg-[#2b2c2f]  focus:border-rose-500  bg-white focus:border-2 "/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthdate"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pr-3 text-xl">Date of Birth </FormLabel>
              <FormControl >
                  <input type="date" className=" w-[222px] p-1 rounded text-gray-400  " {...field}/>
                
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="text-gray-400">
            <FormLabel className="text-xl text-rose-600">Gender</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue  placeholder="Select your gender" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
          )} />

<FormField
          control={form.control}
          name="startdate"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Starting date </FormLabel>
              <FormControl >
                

                  <input type="date" className="text-gray-400 p-2 w-[222px]  rounded" {...field}/>
                
              </FormControl>
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="maritalstatus"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-xl">Marital Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-1 text-gray-600 text-lg"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="married" />
                    </FormControl>
                    <FormLabel className="font-medium">
                      Married
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="unmarried" />
                    </FormControl>
                    <FormLabel className="font-medium">
                      Unmarried
                    </FormLabel>
                  </FormItem>
                  
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="guardiansname"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Guardian's Name </FormLabel>
              <FormControl>
                <Input className="gray-300" placeholder="Enter guardian's name" {...field} />
              </FormControl>
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          defaultValue="1221212112"
          name="contactnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Contact Number </FormLabel>
              <FormControl>
                <Input className="text-gray-400" placeholder="Enter contact number" {...field} />
              </FormControl>
            </FormItem>
          )}

        />
        <FormField
          control={form.control}
          name="workaddress"
          defaultValue="1234adf"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Work Address </FormLabel>
              <FormControl>
                <Input className="text-gray-400" placeholder="Enter work address" {...field} />
              </FormControl>
            </FormItem>
          )}

        />
        <FormField
          control={form.control}
          name="currentaddress"
          defaultValue="adsf"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Current Address </FormLabel>
              <FormControl>
                <Input className="text-gray-400" placeholder="Enter current address" {...field} />
              </FormControl>
            </FormItem>
          )}

        />
          <Button className="bg-rose-500 text-white font-semibold" onClick={()=>onSubmit}>Submit</Button>



      </form></Form>
      </div>

  )
}