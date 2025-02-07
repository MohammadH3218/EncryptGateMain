"use client"

import * as React from "react"
import { Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/20/solid"

interface ToastProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

function Toast({ message, type, onClose }: ToastProps) {
  return (
    <Transition
      show={true}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className={`rounded-md bg-${type === "success" ? "green" : "red"}-50 p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            {type === "success" ? (
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium text-${type === "success" ? "green" : "red"}-800`}>{message}</p>
          </div>
          <div className="ml-auto pl-3">
            <button
              type="button"
              className={`inline-flex rounded-md bg-${type === "success" ? "green" : "red"}-50 p-1.5 text-${type === "success" ? "green" : "red"}-500 hover:bg-${type === "success" ? "green" : "red"}-100 focus:outline-none`}
              onClick={onClose}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}

interface ToastOptions {
  message: string
  type: "success" | "error"
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastOptions[]>([])

  const addToast = React.useCallback((options: ToastOptions) => {
    setToasts((prevToasts) => [...prevToasts, options])
  }, [])

  const removeToast = React.useCallback((index: number) => {
    setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index))
  }, [])

  const ToastContainer = React.useCallback(() => {
    return (
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
        {toasts.map((toast, index) => (
          <Toast key={index} message={toast.message} type={toast.type} onClose={() => removeToast(index)} />
        ))}
      </div>
    )
  }, [toasts, removeToast])

  return {
    toast: addToast,
    ToastContainer,
  }
}
