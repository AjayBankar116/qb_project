"use client"

import * as React from "react"
import * as ChipGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ChipGroup = React.forwardRef<
  React.ElementRef<typeof ChipGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ChipGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <ChipGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
ChipGroup.displayName = ChipGroupPrimitive.Root.displayName

const ChipGroupItem = React.forwardRef<
  React.ElementRef<typeof ChipGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ChipGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <ChipGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <ChipGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </ChipGroupPrimitive.Indicator>
    </ChipGroupPrimitive.Item>
  )
})
ChipGroupItem.displayName = ChipGroupPrimitive.Item.displayName

export { ChipGroup, ChipGroupItem }
