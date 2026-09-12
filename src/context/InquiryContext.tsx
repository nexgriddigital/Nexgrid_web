import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface InquiryState {
  projectType: string;
  description: string;
  selectedModules?: string[];
  preferredTimeline?: string;
  sourceContext?: string;
}

interface InquiryContextType {
  inquiryState: InquiryState;
  setInquiryPrefill: (data: Partial<InquiryState>) => void;
  resetInquiryPrefill: () => void;
}

const defaultState: InquiryState = {
  projectType: 'Business System',
  description: '',
  selectedModules: [],
  preferredTimeline: '',
  sourceContext: ''
};

const InquiryContext = createContext<InquiryContextType>({
  inquiryState: defaultState,
  setInquiryPrefill: () => {},
  resetInquiryPrefill: () => {}
});

export const InquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inquiryState, setInquiryState] = useState<InquiryState>(defaultState);

  const setInquiryPrefill = (data: Partial<InquiryState>) => {
    setInquiryState((prev) => ({
      ...prev,
      ...data
    }));
  };

  const resetInquiryPrefill = () => {
    setInquiryState(defaultState);
  };

  return (
    <InquiryContext.Provider value={{ inquiryState, setInquiryPrefill, resetInquiryPrefill }}>
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => useContext(InquiryContext);
