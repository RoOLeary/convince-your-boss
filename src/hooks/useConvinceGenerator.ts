import { useState, useCallback } from 'react';
import { FormData } from '../types';
import { generateBusinessCase } from '../utils/businessCaseGenerator';

export const useConvinceGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    userEmail: '',
    bossEmail: '',
    bossName: '',
    companyName: '',
    reasons: ''
  });
  
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);
  
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with 2.5s delay
    setTimeout(() => {
      const businessCase = generateBusinessCase(formData);
      setGeneratedText(businessCase);
      setIsGenerated(true);
      setIsLoading(false);
      
      setTimeout(() => {
        const resultElement = document.querySelector('.animate-fade-in');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }, 2500);
  }, [formData]);
  
  const resetForm = useCallback(() => {
    setFormData({
      userEmail: '',
      bossEmail: '',
      bossName: '',
      companyName: '',
      reasons: ''
    });
    setGeneratedText('');
    setIsGenerated(false);
    setIsLoading(false);
  }, []);
  
  return {
    formData,
    generatedText,
    isGenerated,
    isLoading,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};