import React, { useEffect } from 'react';
import Button from './common/Button';
import { FormData } from '../types';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { useCompanyLookup } from '../hooks/useCompanyLookup';
import { Search } from 'lucide-react';

interface ConvinceFormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isGenerated: boolean;
}

const ConvinceForm: React.FC<ConvinceFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  isGenerated
}) => {
  const { lookupCompany, companyInfo, isLoading } = useCompanyLookup();

  useEffect(() => {
    if (formData.companyName.length > 2) {
      const debounceTimer = setTimeout(() => {
        lookupCompany(formData.companyName);
      }, 500);

      return () => clearTimeout(debounceTimer);
    }
  }, [formData.companyName, lookupCompany]);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
        <LightbulbIcon className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
        <p className="text-white/90 text-sm leading-relaxed">
          Let's create a compelling business case for adopting Findest. Tell me about your R&D challenges and goals, and I'll help you build a persuasive proposal.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            required
            value={formData.userEmail}
            onChange={onInputChange}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="Your email address"
          />
          <div className="flex-1 relative">
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={onInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all"
              placeholder="Company name"
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-white/50 animate-spin" />
              </div>
            )}
            {companyInfo && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-3">
                <div className="flex items-center space-x-3">
                  {companyInfo.logo && (
                    <img src={companyInfo.logo} alt={companyInfo.name} className="h-8 w-8 rounded" />
                  )}
                  <div>
                    <div className="font-medium text-white">{companyInfo.name}</div>
                    <div className="text-sm text-white/70">{companyInfo.domain}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            id="bossEmail"
            name="bossEmail"
            required
            value={formData.bossEmail}
            onChange={onInputChange}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="Your manager's email"
          />
          <input
            type="text"
            id="bossName"
            name="bossName"
            required
            value={formData.bossName}
            onChange={onInputChange}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all"
            placeholder="Your manager's name"
          />
        </div>

        <div className="relative">
          <textarea
            id="reasons"
            name="reasons"
            value={formData.reasons}
            onChange={onInputChange}
            className="w-full h-40 p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm transition-all font-mono text-sm resize-none"
            placeholder="What R&D challenges is your team facing? How could better innovation intelligence help?"
          />
          <div className="absolute bottom-3 right-3 text-xs text-white/50">
            Press Enter to submit
          </div>
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={isGenerated}
        className={`w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 ${isGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isGenerated ? 'Business Case Generated' : 'Generate My Case'}
      </Button>
    </form>
  );
};

export default ConvinceForm;