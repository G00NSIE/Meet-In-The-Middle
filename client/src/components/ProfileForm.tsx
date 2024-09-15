import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Button} from './ui/button'
import {Input} from './ui/input'

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField
} from './ui/form'

const formSchema = z.object({
  address1: z.string().min(2, {
    message: "address1 must be at least 2 characters.",
  }),
  address2: z.string().min(2, {
    message: "address2 must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address1: "",
      address2: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-[300px] mx-auto gap-5">
        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className='text-white'>Address1</FormLabel>
              <FormControl>
                <Input placeholder="enter address 1" {...field} />
              </FormControl>
              <FormDescription className='text-white'>
                enter your first address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="address2"
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className='text-white'>Address 2</FormLabel>
              <FormControl>
                <Input placeholder="enter address 2" {...field} />
              </FormControl>
              <FormDescription className='text-white'>
                enter your second address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-blue-950 mx-auto" type="submit">Submit</Button>
      </form>
    </Form>
  )
}


export default ProfileForm