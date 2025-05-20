import React from 'react';
import ConvinceForm from './ConvinceForm';
import GeneratedBusinessCase from './GeneratedBusinessCase';
import { useConvinceGenerator } from '../hooks/useConvinceGenerator';
import { ArrowDown, Bot, Loader2 } from 'lucide-react';

const ConvinceYourBossGenerator: React.FC = () => {
  const { 
    formData, 
    generatedText, 
    isGenerated,
    isLoading,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useConvinceGenerator();

  return (
    <div className="w-full max-w-3xl bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 text-white text-center">
        <div className="flex gap-4 items-center justify-center">
          <Bot size={36} />
          <h1 className="text-3xl md:text-4xl font-bold">IGOR WANTS YOU!</h1>
        </div>
        
        <div className="mt-8">
          <ConvinceForm 
            formData={formData} 
            onInputChange={handleInputChange} 
            onSubmit={handleSubmit} 
            isGenerated={isGenerated}
          />
        </div>
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center mt-8 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
            <p className="text-white/80">Generating your business case...</p>
          </div>
        )}
        
        {isGenerated && !isLoading && (
          <>
            <div className="flex justify-center my-6">
              <div className="bg-white/20 rounded-full p-2 animate-bounce">
                <ArrowDown className="text-white h-6 w-6" />
              </div>
            </div>
            
            <GeneratedBusinessCase 
              generatedText={generatedText} 
              bossEmail={formData.bossEmail}
              onReset={resetForm}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ConvinceYourBossGenerator;