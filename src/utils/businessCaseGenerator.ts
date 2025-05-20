import { FormData } from '../types';

export const generateBusinessCase = (data: FormData): string => {
  const { userEmail, bossName, companyName, reasons } = data;
  const firstName = userEmail.split('@')[0].split('.')[0];
  const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  
  const userReasons = reasons.trim() 
    ? reasons
    : `Our R&D team needs a more efficient way to discover innovations and stay ahead of technological developments. We currently spend significant time manually searching through patents and scientific literature.`;

  return `Dear ${bossName},

I am writing to propose the adoption of Findest's AI-powered R&D intelligence platform for ${companyName}. After careful evaluation, I believe this tool would significantly enhance our research and development capabilities.

KEY CHALLENGES AND OPPORTUNITIES:
${userReasons}

BENEFITS OF FINDEST:
• AI-powered innovation discovery
• Comprehensive patent and scientific literature analysis
• Real-time technology monitoring
• Cross-industry innovation insights
• Reduced research time and improved efficiency

EXPECTED ROI:
• 40-60% reduction in research time
• Earlier identification of relevant technologies
• Reduced risk of missing critical innovations
• Better-informed R&D investment decisions
• Competitive advantage through faster innovation cycles

IMPLEMENTATION PLAN:
1. Initial platform setup and team training (1-2 weeks)
2. Integration with existing R&D workflows
3. Regular effectiveness monitoring and ROI tracking
4. Quarterly review of discovered opportunities

I would appreciate the opportunity to discuss this proposal in detail and demonstrate how Findest can accelerate our R&D initiatives.

Best regards,
${capitalizedName}
${userEmail}`;
};