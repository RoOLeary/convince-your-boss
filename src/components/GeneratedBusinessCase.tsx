import React, { useState } from 'react';
import Button from './common/Button';
import { ClipboardCopy, Send, RotateCcw, Check } from 'lucide-react';

interface GeneratedBusinessCaseProps {
  generatedText: string;
  bossEmail: string;
  onReset: () => void;
}

const GeneratedBusinessCase: React.FC<GeneratedBusinessCaseProps> = ({
  generatedText,
  bossEmail,
  onReset
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('WHY WE NEED THE UNIVERSE');
    const body = encodeURIComponent(generatedText);
    window.open(`mailto:${bossEmail}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-white">Your Business Case</h2>
      
      <textarea
        value={generatedText}
        readOnly
        className="w-full h-[400px] p-4 bg-white/10 border border-white/20 rounded-lg text-white font-mono text-sm resize-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
      />
      
      <div className="flex flex-wrap gap-3 mt-4">
        <Button
          onClick={handleCopy}
          variant="secondary"
          className="flex-1 sm:flex-none bg-white/20 hover:bg-white/30 text-white border border-white/30"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <ClipboardCopy className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </>
          )}
        </Button>
        
        <Button
          onClick={handleEmailClick}
          variant="secondary"
          className="flex-1 sm:flex-none bg-white/20 hover:bg-white/30 text-white border border-white/30"
        >
          <Send className="h-4 w-4 mr-2" />
          Email to Boss
        </Button>
        
        <Button
          onClick={onReset}
          variant="outline"
          className="flex-1 sm:flex-none bg-transparent hover:bg-white/10 text-white border border-white/30"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default GeneratedBusinessCase;