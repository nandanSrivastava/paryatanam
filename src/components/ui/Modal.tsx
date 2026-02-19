"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

function ModalShell({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-2xl mx-4 sm:mx-6 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:bg-neutral-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export default ModalShell;

export function CallbackModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hook up API / analytics
    onClose();
  }

  return (
    <ModalShell open={open} onClose={onClose} title="Request a Callback">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-neutral-700">
            Full Name*
          </label>
          <Input required name="name" placeholder="Full Name" />
        </div>

        <div>
          <label className="text-sm font-medium text-neutral-700">Email*</label>
          <Input type="email" required name="email" placeholder="Email" />
        </div>

        <div className="flex gap-3">
          <div className="w-24">
            <label className="text-sm font-medium text-neutral-700">Code</label>
            <div className="flex">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm"
              >
                +91
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-neutral-700">
              Your Phone*
            </label>
            <Input required name="phone" placeholder="Your Phone" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Travel Date*
            </label>
            <Input type="date" name="travelDate" />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Traveller Count*
            </label>
            <Input
              type="number"
              min={1}
              name="travellerCount"
              placeholder="1"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-neutral-700">
            Message
          </label>
          <textarea
            className="min-h-[100px] w-full rounded-md border border-neutral-200 px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            placeholder="Message..."
          />
        </div>

        <div>
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-semibold"
          >
            Submit
          </Button>
        </div>
      </form>
    </ModalShell>
  );
}
