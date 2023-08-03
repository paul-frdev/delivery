import React, { FC, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '../../libs';
import { Button } from '../ui/button';
import { CgArrowLongRight } from 'react-icons/cg';

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
});

type SubscribeFormValues = z.infer<typeof schema> & { plan?: string };

export const SubscribeForm: FC = () => {
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: SubscribeFormValues) => {
    console.log(data);
  };

  return (
    <>
      <form className="max-w-[450px] w-full m-auto bg-white p-8 rounded-lg border-2 border-gray-200" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col justify-start items-start">
          <label className={cn(`text-lg text-neutral-600 font-semibold mb-2`, errors.name?.message && 'text-accent')}>Name:</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <input
                  className={cn(
                    `peer w-full mb-8 rounded-full border-2 bg-white py-3 px-4 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                    errors.name?.message ? 'border-accent' : 'border-gray-200'
                  )}
                  {...field}
                  type="text"
                  placeholder="Your name"
                />
                {errors.name && <p className="absolute bottom-0 left-0 text-accent text-lg">{errors.name.message}</p>}
              </>
            )}
          />
        </div>
        <div className="relative flex flex-col justify-start items-start">
          <label className={cn(`text-lg text-neutral-600  font-semibold mb-2`, errors.email?.message && 'text-accent')}>Email address:</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <input
                  className={cn(
                    `peer w-full mb-8 rounded-full border-2 bg-white py-3 px-4  font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                    errors.email?.message ? 'border-accent' : 'border-gray-200'
                  )}
                  {...field}
                  type="text"
                  placeholder="Your email adddress"
                />
                {errors.email && <p className="absolute bottom-0 left-0 text-accent text-lg">{errors.email.message}</p>}
              </>
            )}
          />
        </div>
        <div className="flex justify-start  items-center">
          <Button className="w-[270px] rounded-full flex justify-center items-center transition">
            Get Started
            <span>
              <CgArrowLongRight className="text-[30px]" />
            </span>
          </Button>
        </div>
      </form>
    </>
  );
};
