"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type InputRootProps = React.ComponentProps<"div">

function Root({ className, ...props }: InputRootProps) {
  return (
    <div
      data-slot="input-root"
      className={cn(
        "group flex h-11 w-full items-center rounded-md border border-border bg-input/30 transition-colors",
        "hover:border-border/20",
        "focus-within:border-primary",
        "focus-within:ring-4 focus-within:ring-primary/10",
        "has-disabled:pointer-events-none",
        "has-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

type InputFieldProps = React.ComponentProps<"input">

function Field({ className, ...props }: InputFieldProps) {
  return (
    <input
      data-slot="input-field"
      className={cn(
        "flex-1 bg-transparent px-3 text-sm text-zinc-950 outline-none",
        "placeholder:text-zinc-500",
        "disabled:cursor-not-allowed",
        "[appearance:textfield]",
        "[&::-webkit-search-cancel-button]:appearance-none",
        "[&::-webkit-search-decoration]:appearance-none",
        "[&::-webkit-search-results-button]:appearance-none",
        "[&::-webkit-search-results-decoration]:appearance-none",
        "[&::-webkit-outer-spin-button]:appearance-none",
        "[&::-webkit-inner-spin-button]:appearance-none",
        className
      )}
      {...props}
    />
  )
}

type InputIconProps = React.ComponentProps<"div">

function Icon({ className, ...props }: InputIconProps) {
  return (
    <div
      data-slot="input-icon"
      className={cn(
        "flex h-full items-center px-3 text-zinc-500 transition-colors",
        "group-focus-within:text-primary",
        className
      )}
      {...props}
    />
  )
}

type InputActionProps = React.ComponentProps<"button">

function Action({ className, ...props }: InputActionProps) {
  return (
    <button
      data-slot="input-action"
      type="button"
      className={cn(
        "flex h-full items-center justify-center px-3",
        "text-zinc-500 transition-colors",
        "hover:text-zinc-950",
        "focus-visible:outline-none",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "group-focus-within:text-primary",
        className
      )}
      {...props}
    />
  )
}

export const Input = {
  Root,
  Field,
  Icon,
  Action,
}
