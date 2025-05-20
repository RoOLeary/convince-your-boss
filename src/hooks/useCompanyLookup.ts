import { useState } from 'react';

interface CompanyInfo {
  name: string;
  domain: string;
  logo: string;
}

export const useCompanyLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  const lookupCompany = async (companyName: string) => {
    if (!companyName) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/company-lookup?name=${encodeURIComponent(companyName)}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      );

      const data = await response.json();
      if (data && data[0]) {
        setCompanyInfo(data[0]);
      }
    } catch (error) {
      console.error('Error looking up company:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { lookupCompany, companyInfo, isLoading };
};