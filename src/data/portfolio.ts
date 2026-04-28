export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  impact: string[];
  tech: string[];
  problem: string;
  systemDesign: string;
  approach: string;
  results: string;
  insights: string;
  github?: string;
  demo?: string;
}

export interface SkillCategory {
  name: string;
  value: number; // 0-100 for visualization
  tools: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
}

export const portfolioData = {
  personal: {
    name: "Sahil Rai",
    location: "India",
    email: "sahil.rai234234@gmail.com",
    phone: "+91 8130962251",
    github: "https://github.com/sahilrai1225",
    linkedin: "https://linkedin.com/in/sahil-rai-b4a950352",
    title: "AI/ML Engineer",
    subTitle: "Building intelligent, data-driven systems for real-world decision-making.",
    description: "AI/ML Engineer specializing in intelligent systems, quantitative modeling, NLP, and decision-driven analytics. I combine engineering rigor with data science to deliver production-grade machine learning pipelines that solve complex business problems."
  },
  skills: [
    { name: "AI/ML", value: 95, tools: ["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "Reinforcement Learning"] },
    { name: "NLP/LLM", value: 90, tools: ["RAG Systems", "HuggingFace", "LangChain", "OpenAI API", "Transformers"] },
    { name: "Data Science", value: 92, tools: ["Pandas", "NumPy", "Quantitative Modeling", "Statistical Analysis", "A/B Testing"] },
    { name: "Engineering", value: 85, tools: ["Python", "FastAPI", "Docker", "REST APIs", "System Design"] },
    { name: "Analytics", value: 88, tools: ["SQL", "Power BI", "Tableau", "Data Visualization", "BigQuery"] }
  ] as SkillCategory[],
  projects: [
    {
      id: "stock-market-prediction",
      title: "Stock Market Prediction System",
      oneLiner: "Quantitative modeling for high-accuracy financial forecasting.",
      impact: [
        "Achieved 85%+ directional accuracy on major indices.",
        "Reduced model latency for real-time inference.",
        "Integrated multi-factor sentiment signals from financial news."
      ],
      tech: ["Python", "TensorFlow", "LSTMs", "Prophet", "AlphaVantage API"],
      problem: "Financial markets are stochastic and highly irregular. Traditional models fail to capture deep temporal dependencies and the impact of external sentiment on price movements.",
      systemDesign: "Distributed inference architecture that ingests real-time price feeds and news APIs, processing them through a hybrid LSTM-Transformer pipeline.",
      approach: "Utilized technical indicators combined with NLP-extracted sentiment scores. Implemented walk-forward validation to ensure model robustness against market shifts.",
      results: "Improved Sharpe ratio of test strategies by 1.2x compared to baseline momentum models.",
      insights: "Data quality in financial time-series is more critical than model complexity. Feature engineering for seasonality was the primary driver of performance.",
      github: "https://github.com/sahilrai1225/stock-prediction"
    },
    {
      id: "ai-research-assistant",
      title: "AI Research Assistant (RAG)",
      oneLiner: "Context-aware document retrieval and synthesis using LLMs.",
      impact: [
        "Enabled sub-second retrieval from 10k+ pages of documentation.",
        "Minimized hallucinations using verified source citation mapping.",
        "Enhanced researcher productivity by 40%."
      ],
      tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "Streamlit"],
      problem: "Researchers spend excessive time indexing and cross-referencing papers. Existing search tools are keyword-based rather than semantic.",
      systemDesign: "Modular RAG pipeline with hybrid search (BM25 + Semantic) and a custom re-ranking layer.",
      approach: "Implemented Recursive Character Text Splitting with metadata filtering. Used GPT-4 for synthesis with strict prompt engineering for hallucination control.",
      results: "High-fidelity responses with 98% citation accuracy.",
      insights: "Chunking strategy is the most underrated aspect of RAG quality. Semantic overlap between chunks is vital for coherence.",
      github: "https://github.com/sahilrai1225/research-rag"
    },
    {
      id: "customer-churn-system",
      title: "Predictive Churn Engine",
      oneLiner: "Automated retention analytics for high-growth SaaS environments.",
      impact: [
        "Identified 'at-risk' users with 92% precision.",
        "Interfaced with CRM to trigger automated retention workflows.",
        "Provided explainable AI (SHAP) for account managers."
      ],
      tech: ["Scikit-Learn", "CatBoost", "XGBoost", "SQL", "Flask"],
      problem: "SaaS companies lose revenue due to undetected silent churn. Manual analysis is too slow to prevent user departure.",
      systemDesign: "Real-time behavior tracking integrated with a Gradient Boosted Decision Tree pipeline for risk scoring.",
      approach: "Engineered features around velocity of feature usage and support ticket frequency. Balanced classes using SMOTE-NC.",
      results: "Reduced churn rates by 15% within 6 months of deployment.",
      insights: "The 'time since last login' is a lagging indicator; 'reduction in core feature frequency' is the leading indicator.",
      github: "https://github.com/sahilrai1225/churn-prediction"
    },
    {
      id: "phishing-detection-system",
      title: "Intelligent Phishing Guardian",
      oneLiner: "Real-time URL and email content classification using deep learning.",
      impact: [
        "Detected zero-day phishing attempts with 99% accuracy.",
        "Processed 1M+ samples for training comprehensive security datasets.",
        "Integrated directly with browser extensions."
      ],
      tech: ["PyTorch", "NLP", "Scikit-Learn", "Regex", "Flask"],
      problem: "Phishing attacks are becoming increasingly sophisticated, bypassing traditional signature-based security filters.",
      systemDesign: "Stacked ensemble model combining NLP feature extraction from email text and lexical analysis of URLs.",
      approach: "Used BERT-based embeddings for semantic text analysis and Random Forests for structured lexical features.",
      results: "Outperformed standard blacklist approaches by 40% in zero-day scenario tests.",
      insights: "Combining structural URL features with semantic body analysis is essential as attackers often hide malicious payloads in reputable hosting services.",
      github: "https://github.com/sahilrai1225/phishing-guardian"
    },
    {
      id: "nlp-sentiment-system",
      title: "Multi-Entity Sentiment Tracker",
      oneLiner: "Granular sentiment analysis for brand monitoring across social media.",
      impact: [
        "Analyzed 500k+ tweets/comments per day.",
        "Identified entity-specific sentiment (Aspect-based NLP).",
        "Visualized spikes in negative sentiment for PR response teams."
      ],
      tech: ["Transformers", "HuggingFace", "Python", "Elasticsearch", "Grafana"],
      problem: "General sentiment analysis is too broad. Brands need to know *what specific feature* users are unhappy about in real-time.",
      systemDesign: "Kafka-streamed ingestion pipeline feeding a distributed cluster of BERT inference workers.",
      approach: "Implemented Aspect-Based Sentiment Analysis (ABSA) to isolate sentiment for specific product components.",
      results: "Decreased PR response time to critical issues by 70%.",
      insights: "Sarcasm detection remains the hardest problem in sentiment analysis, required manual linguistic feature injection.",
      github: "https://github.com/sahilrai1225/sentiment-analysis"
    }
  ] as Project[],
  blogs: Array.from({ length: 12 }).map((_, i) => ({
    id: `blog-${i + 1}`,
    title: i === 0 ? "The Future of Decision Intelligence in FinTech" : `Technical Insight: Part ${i + 1}`,
    date: "Oct 2023",
    excerpt: "Exploring the intersection of quantitative modeling and deep learning in modern financial systems...",
    content: "This is a flagship blog post about how AI is reshaping decision intelligence. We discuss RAG, fine-tuning, and the shift towards small, specialized models.",
    readTime: "6 min read"
  })) as BlogPost[]
};
