const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/data/hire-content.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const additions = {
  defaultContent: {
    keyword: "Hire Expert Developers",
    slug: "",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "Teams 24 made it incredibly easy to scale our development. Their commitment and flexibility are exactly what an early-stage startup needs." },
      { name: "Sasha Ray", title: "Product Lead", quote: "The discovery call was eye-opening. We had our core team set up in less than 72 hours, which is unheard of in traditional recruitment." },
      { name: "Anand", title: "Founder, AuraGold", quote: "We've tried multiple agencies and it didn't work. With Teams 24 we had no timeline constraints or boundaries in setting up our core team." }
    ]
  },
  fullStackDeveloperContent: {
    keyword: "Hire Full Stack Developers",
    slug: "/hire/full-stack-developer",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "We needed a senior full stack developer who could own our React/Node architecture. Teams 24 provided an expert in 48 hours who immediately started shipping features." },
      { name: "Sasha Ray", title: "Product Lead", quote: "The vetting process is real. Our full stack developer from Teams 24 writes cleaner code and collaborates better than many of our in-house hires." },
      { name: "Anand", title: "Founder, AuraGold", quote: "Scaling our development team was a nightmare until we found Teams 24. We got a dedicated full stack engineer who treats our product like their own." }
    ]
  },
  customerSupportContent: {
    keyword: "Hire Customer Support Specialists",
    slug: "/hire/customer-support-specialist",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "Our CSAT scores jumped 20% within a month of bringing on our Teams 24 support specialist. They mastered our Zendesk setup instantly." },
      { name: "Sasha Ray", title: "Product Lead", quote: "We needed someone who understood AI support tools and human empathy. Teams 24 found us the perfect specialist who handles escalations flawlessly." },
      { name: "Anand", title: "Founder, AuraGold", quote: "During Q4, we scaled our support team with three specialists from Teams 24. They integrated into our Slack and Shopify workflow without missing a beat." }
    ]
  },
  pythonDeveloperContent: {
    keyword: "Hire Python Developers",
    slug: "/hire/python-developer",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "We needed a Python developer to rebuild our ETL pipelines and optimize our Django backend. The expert from Teams 24 delivered beyond our expectations." },
      { name: "Sasha Ray", title: "Product Lead", quote: "Our Teams 24 Python engineer helped us transition to a RAG architecture using LangChain in record time. Their deep understanding of AI frameworks is unmatched." },
      { name: "Anand", title: "Founder, AuraGold", quote: "Finding a Python developer who writes secure, scalable code is hard. Finding one in 3 days who integrates perfectly into our CI/CD pipeline is incredible. Thanks Teams 24." }
    ]
  },
  expressJsContent: {
    keyword: "Hire Express.js Developers",
    slug: "/hire/express.js-developer",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "We migrated our monolithic backend to Express.js microservices. Our Teams 24 developer drove the entire architecture redesign effortlessly." },
      { name: "Sasha Ray", title: "Product Lead", quote: "The Node.js expertise we got from Teams 24 is top-tier. They set up our REST APIs, authentication, and caching layers flawlessly." },
      { name: "Anand", title: "Founder, AuraGold", quote: "We needed a backend that could scale to thousands of concurrent users. Our dedicated Express.js engineer built exactly that." }
    ]
  },
  automationTestingContent: {
    keyword: "Hire Automation Testers",
    slug: "/hire/automation-tester",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "Our Teams 24 automation tester built our entire Playwright suite from scratch. We've reduced regression testing time by 80%." },
      { name: "Sasha Ray", title: "Product Lead", quote: "Integrating automated tests into our CI/CD pipeline was a struggle until our QA engineer from Teams 24 stepped in and stabilized our releases." },
      { name: "Anand", title: "Founder, AuraGold", quote: "The level of detail in their test scenarios is amazing. They don't just automate tests; they improve our overall software quality." }
    ]
  },
  salesforceDeveloperContent: {
    keyword: "Hire Salesforce Developers",
    slug: "/hire/salesforce-developer",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "We needed complex Apex triggers and LWC components built fast. Our Teams 24 Salesforce developer delivered clean, optimized code that transformed our CRM." },
      { name: "Sasha Ray", title: "Product Lead", quote: "The expertise our developer has across Sales Cloud and Marketing Cloud is phenomenal. They automated workflows that saved our team hours every week." },
      { name: "Anand", title: "Founder, AuraGold", quote: "Integrating Salesforce with our legacy ERP was daunting. Our dedicated developer from Teams 24 handled the API integrations securely and efficiently." }
    ]
  },
  powerBIContent: {
    keyword: "Hire Power BI Developers",
    slug: "/hire/power-bi",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "The financial dashboards our Power BI developer built give us real-time visibility we never had before. Their DAX expertise is brilliant." },
      { name: "Sasha Ray", title: "Product Lead", quote: "We were drowning in data until Teams 24 provided an expert who modeled our data warehouse and created intuitive, actionable reports." },
      { name: "Anand", title: "Founder, AuraGold", quote: "Having a dedicated Power BI expert means we no longer wait weeks for reports. They understand our business metrics and visualize them perfectly." }
    ]
  },
  aiEngineerContent: {
    keyword: "Hire AI Engineers",
    slug: "/hire/ai-engineer",
    testimonials: [
      { name: "Niranjan Venugopal", title: "Founder, Specflicks", quote: "Our Teams 24 AI engineer fine-tuned open-source LLMs on our proprietary data and deployed them seamlessly via AWS SageMaker." },
      { name: "Sasha Ray", title: "Product Lead", quote: "We wanted to build custom AI agents for our platform. The expertise we got in LangChain, vector databases, and prompt engineering was world-class." },
      { name: "Anand", title: "Founder, AuraGold", quote: "Hiring an AI engineer locally would have taken months. Teams 24 gave us a deep learning expert in 3 days who completely revolutionized our computer vision pipeline." }
    ]
  }
};

for (const [key, data] of Object.entries(additions)) {
  const startObj = content.indexOf(`export const ${key}`);
  if (startObj === -1) {
    console.log(`Could not find ${key}`);
    continue;
  }
  
  const seoStart = content.indexOf('seo: {', startObj);
  const seoEnd = content.indexOf('},', seoStart);
  
  if (seoStart !== -1 && seoEnd !== -1) {
    const seoBlock = content.substring(seoStart, seoEnd + 2);
    if (!seoBlock.includes('primaryKeyword')) {
      const newSeoBlock = seoBlock.replace('},', `,
    primaryKeyword: "${data.keyword}",
    secondaryKeywords: "hire ${data.keyword.toLowerCase()}, dedicated experts, Teams 24",
    canonicalUrl: "https://teams24.co${data.slug}"
  },`);
      content = content.replace(seoBlock, newSeoBlock);
    }
  }

  const afterStartObj = content.indexOf(`export const ${key}`);
  const faqsStart = content.indexOf('faqs: [', afterStartObj);
  if (faqsStart !== -1) {
      let bracketCount = 0;
      let faqsEnd = -1;
      for (let i = faqsStart + 6; i < content.length; i++) {
          if (content[i] === '[') bracketCount++;
          if (content[i] === ']') {
              bracketCount--;
              if (bracketCount === 0) {
                  faqsEnd = i;
                  break;
              }
          }
      }
      
      if (faqsEnd !== -1) {
          const nextChars = content.substring(faqsEnd, faqsEnd + 100);
          if (!nextChars.includes('testimonials:')) {
              const testimonialsStr = `],\n  testimonials: [\n` + data.testimonials.map(t => 
                `    {\n      name: "${t.name}",\n      title: "${t.title}",\n      quote: "${t.quote}"\n    }`
              ).join(',\n') + `\n  ]`;
              
              content = content.slice(0, faqsEnd) + testimonialsStr + content.slice(faqsEnd + 1);
          }
      }
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update complete!');
