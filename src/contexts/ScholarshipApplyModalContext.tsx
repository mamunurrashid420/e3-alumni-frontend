import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type ScholarshipApplyModalContextValue = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const defaultValue: ScholarshipApplyModalContextValue = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
}

const ScholarshipApplyModalContext = createContext<ScholarshipApplyModalContextValue>(defaultValue)

export function useScholarshipApplyModal() {
  return useContext(ScholarshipApplyModalContext)
}

export function ScholarshipApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])
  return (
    <ScholarshipApplyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ScholarshipApplyModalContext.Provider>
  )
}
