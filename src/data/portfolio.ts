export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  category: "AI/ML" | "NLP" | "Data Science" | "BI & Analytics" | "Data Analysis";
  image?: string;
  impact: string[];
  tech: string[];
  metrics?: { label: string; value: string }[];
  problem: string;
  systemDesign: string;
  approach: string;
  results: string;
  insights: string;
  github?: string;
  demo?: string;
  chartData?: any[];
  chartType?: 'line' | 'bar' | 'pie' | 'radar';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  value: number;
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

export interface CVOption {
  id: string;
  label: string;
  summary: string;
  resumeLink: string;
  neuralArchitectures?: {
    type: string;
    applications: string[];
    metrics: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    title: string;
    subTitle: string;
    description: string;
    image?: string;
    cvOptions: CVOption[];
  };
  experience: Experience[];
  skills: SkillCategory[];
  softSkills: { name: string; value: number }[];
  projects: Project[];
  blogs: BlogPost[];
}

export const portfolioData = {
  personal: {
    name: "Sahil Rai",
    location: "India",
    email: "sahil.rai234234@gmail.com",
    phone: "+91 8130962251",
    github: "https://github.com/sahilrai1225",
    linkedin: "https://linkedin.com/in/sahil-rai-b4a950352",
    title: "Data Scientist & ML/AI Engineer",
    subTitle: "Building resilient systems at the intersection of data logic and scale.",
    description: "I’m a data-driven AI/ML engineer focused on building production-grade intelligent systems that deliver measurable business impact. My work spans the full lifecycle—from data exploration and statistical validation to model deployment and scalable AI architectures.",
    image: "/sketch-profile.jpg",
    cvOptions: [
      { 
        id: 'ai-ml', 
        label: 'ML/AI Engineer', 
        summary: 'Specialized in Large Language Models (LLMs), RAG architectures, and production NLP pipelines. Focused on delivering context-aware, reliable AI solutions at scale.',
        resumeLink: "https://drive.google.com/file/d/1UYPx-aK__s9tu6Cq3sFYrg8hKvAEM8_N/view?usp=sharing",
        neuralArchitectures: [
          {
            type: "Transformers",
            applications: ["LLM Fine-tuning (PEFT/LoRA)", "RAG Pipelines", "Intent Classification"],
            metrics: "95% Retrieval Accuracy | 89% F1-Score"
          },
          {
            type: "RNNs / LSTMs",
            applications: ["Financial Time-series Filtering", "Volatility Prediction", "Sequential Modeling"],
            metrics: "3.2% RMSE on S&P 500 benchmarks"
          },
          {
            type: "CNNs",
            applications: ["Lexical Vector Analysis", "Zero-day Threat Detection", "Structural Vision"],
            metrics: "97.4% Threat Detection Accuracy"
          }
        ]
      },
      { 
        id: 'data-science', 
        label: 'Data Scientist', 
        summary: 'Expert in statistical modeling, behavioral predictive analytics, and end-to-end data pipelines. Driven to translate raw telemetry into business-critical insights.',
        resumeLink: "https://drive.google.com/file/d/1pBVmkHe5vcDaHSqAn23xYKoMJJTZWFVv/view?usp=sharing"
      },
      { 
        id: 'data-analysis', 
        label: 'Data Analyst', 
        summary: 'Detail-oriented metrics engineer focused on automation and high-fidelity reporting. Reducing operational overhead through systematic data process engineering.',
        resumeLink: "https://drive.google.com/file/d/1JX-FeCWjd2_nCZ4JEtqs6bIq6V2ozoNQ/view?usp=sharing"
      },
      { 
        id: 'bi-analyst', 
        label: 'BI Analyst', 
        summary: 'Specialized in self-service dashboard ecosystems and Star Schema optimization. Accelerating decision-making cycles through high-fidelity data synthesis.',
        resumeLink: "https://drive.google.com/file/d/1kZ4PLTgjXqYRfMsT5GsXNBk4bPkpSoOF/view?usp=sharing"
      }
    ]
  },
  experience: [
    {
      company: "CodeVeda",
      role: "Data Science & Analytics Intern",
      period: "Apr 2026 – Present",
      skills: ["Python", "SQL", "Power BI", "Pandas", "XGBoost", "A/B Testing"],
      points: [
        "Performed EDA on 50K+ records, uncovering 7 behavioral patterns informing product segmentation.",
        "Built predictive models (Random Forest, XGBoost) achieving 88% accuracy for at-risk accounts.",
        "Automated reporting pipelines, eliminating 8 hours of manual analyst work per week.",
        "Designed Power BI dashboards tracking 12 KPIs, accelerating executive decision cycles by 40%.",
        "Conducted A/B test analysis using SciPy, saving $45K in ineffective ad spend."
      ]
    },
    {
      company: "First Vidhya",
      role: "AI/ML Intern",
      period: "Feb 2026 – Apr 2026",
      skills: ["LangChain", "FAISS", "Transformer Architecture", "HuggingFace", "BERT"],
      points: [
        "Architected an LLM-powered Q&A pipeline achieving 92% answer relevance across 500+ documents.",
        "Conducted systematic ablation studies across 10+ deep learning architectures (LSTM, CNN, Transformers).",
        "Reduced retrieval latency by 40% through semantic chunking and embedding optimization.",
        "Fine-tuned Transformer models for intent classification, achieving 89% F1-score improvement."
      ]
    }
  ] as Experience[],
  skills: [
    { name: "ML Modelling", value: 95, tools: ["Scikit-learn", "TensorFlow", "XGBoost", "LightGBM", "Random Forest", "SVM"] },
    { name: "NLP / Generative AI", value: 92, tools: ["LangChain", "HuggingFace", "RAG", "LLM Fine-tuning", "FAISS", "Word Embeddings"] },
    { name: "Data Engineering", value: 94, tools: ["Pandas", "NumPy", "SQL", "ETL Pipelines", "Feature Engineering", "Data Profiling"] },
    { name: "BI & Visualization", value: 90, tools: ["Power BI", "DAX", "SQL Tuning", "Star Schema", "Tableau", "Matplotlib"] },
    { name: "Core Skills", value: 88, tools: ["A/B Testing", "Hypothesis Testing", "Structural Integrity", "System Scalability"] }
  ] as SkillCategory[],
  softSkills: [
    { name: "Decision Logic", value: 95 },
    { name: "Quant Reasoning", value: 92 },
    { name: "Strategic Vision", value: 88 },
    { name: "Problem Synthesis", value: 94 }
  ],
  projects: [
    {
      id: "customer-churn-prediction",
      title: "Telecom Analytics Engine",
      oneLiner: "Predictive behavioral modeling recovering $1.2M in annual retention value.",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800",
      impact: [
        "86.5% accuracy and 0.91 AUC-ROC on 10K+ telecom customer records.",
        "Recall improvement from 61% to 83% via SMOTE class balancing.",
        "Delivered Power BI dashboard linking probability scores to ROI."
      ],
      tech: ["Python", "XGBoost", "SMOTE", "Scikit-learn", "Power BI", "SQL", "Pandas"],
      metrics: [{ label: "ROI", value: "$1.2M" }, { label: "Recall", value: "83%" }],
      problem: "Identifying at-risk users before churn is a critical revenue challenge.",
      systemDesign: "End-to-end DS pipeline: SQL → Python ETL → Model → BI Synthesis.",
      approach: "Hyperparameter optimization with Bayesian search and synthetic sampling.",
      results: "Recovered $1.2M in projected revenue through targeted retention campaigns.",
      insights: "Usage velocity and churn-class recall are the primary revenue drivers.",
      github: "https://github.com/sahilrai1225/customer-churn-prediction",
      chartType: 'pie',
      chartData: [
        { name: 'Retained', value: 8650 },
        { name: 'At Risk', value: 1350 }
      ]
    },
    {
      id: "ai-research-assistant",
      title: "Production RAG System",
      oneLiner: "Advanced research synthesis indexing 500+ papers with 95% relevance.",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      impact: [
        "95% contextual retrieval accuracy using hybrid (Lexical + Dense) search.",
        "70% reduction in research summarization time via semantic chunking.",
        "Built ConversationalRetrievalChain with 10-turn memory buffer."
      ],
      tech: ["LangChain", "HuggingFace", "FAISS", "Python", "OpenAI", "ChromaDB", "FastAPI"],
      metrics: [{ label: "Relevance", value: "95%" }, { label: "Time Saved", value: "70%" }],
      problem: "Keyword-based search lacks the multi-document synthesis required for researchers.",
      systemDesign: "Vector-native RAG pipeline with MMR re-ranking and source citations.",
      approach: "Recursive character splitting with semantic metadata filtering.",
      results: "High-fidelity synthesis with clickable source citations mapping.",
      insights: "Chunking strategy is the single most important factor for RAG quality.",
      github: "https://github.com/sahilrai1225/ai-research-assistant",
      chartType: 'bar',
      chartData: [
        { name: 'Cosine', score: 0.95 },
        { name: 'Euclidean', score: 0.88 },
        { name: 'BM25', score: 0.82 },
        { name: 'Hybrid', score: 0.96 }
      ]
    },
    {
      id: "stock-market-prediction",
      title: "LSTM Forecasting Engine",
      oneLiner: "Deep learning time-series architecture with 3.2% RMSE on S&P 500.",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1611974717482-48a4a1c5188f?auto=format&fit=crop&q=80&w=800",
      impact: [
        "41% optimization in predictive stability compared to vanilla baselines.",
        "Engineered 15+ temporal factors (RSI, Bollinger) in ablation studies.",
        "Deployed interactive Streamlit dashboard for real-time 90-day forecasts."
      ],
      tech: ["TensorFlow", "PyTorch", "LSTM", "GRU", "Pandas", "yfinance", "Streamlit"],
      metrics: [{ label: "RMSE", value: "3.2%" }, { label: "Gain", value: "41%" }],
      problem: "Financial data is non-linear and noise-heavy, requiring advanced gating.",
      systemDesign: "Multi-layer ensemble with learning rate warmups and cosine decay.",
      approach: "Sliding-window feature engineering on 5+ years of OHLCV data.",
      results: "Significantly improved forecasting precision for non-technical stakeholders.",
      insights: "Training stability hinges on learning rate scheduling in financial domains.",
      github: "https://github.com/sahilrai1225/stock-market-prediction",
      chartType: 'line',
      chartData: [
        { date: 'Mon', actual: 4200, forecast: 4180 },
        { date: 'Tue', actual: 4250, forecast: 4260 },
        { date: 'Wed', actual: 4220, forecast: 4240 },
        { date: 'Thu', actual: 4300, forecast: 4290 },
        { date: 'Fri', actual: 4350, forecast: 4340 }
      ]
    },
    {
      id: "phishing-detection",
      title: "Security Vector Shield",
      oneLiner: "97.4% accuracy in real-time threat classification via ensemble ML.",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      impact: [
        "97.4% accuracy on zero-day attack simulated datasets.",
        "Sub-50ms inference latency for browser security integration.",
        "Extracted 30+ hand-crafted URL features for lexical analysis."
      ],
      tech: ["Python", "XGBoost", "Random Forest", "Flask", "Regex", "ML Engineering"],
      metrics: [{ label: "Accuracy", value: "97.4%" }, { label: "Latency", value: "48ms" }],
      problem: "Static filters fail against sophisticated zero-day phishing URL masking.",
      systemDesign: "Ensemble lexical classifier with entropy measurement layers.",
      approach: "Systematic feature importance study on 11K+ labeled URLs.",
      results: "Outperformed baseline models by 14% delta in production tests.",
      insights: "Lexical entropy is a highly reliable signal for URL spoofing detection.",
      github: "https://github.com/sahilrai1225/phishing-detection",
      chartType: 'radar',
      chartData: [
        { feature: 'Entropy', weight: 95 },
        { feature: 'Lexical', weight: 80 },
        { feature: 'SSL', weight: 60 },
        { feature: 'DomainAge', weight: 75 },
        { feature: 'Redirects', weight: 85 }
      ]
    }
  ] as Project[],
  blogs: [
    {
      id: "blog-1",
      title: "The Logic of Decision Intelligence",
      date: "Oct 2023",
      excerpt: "Bridging the gap between stochastic models and deterministic system outcomes.",
      content: "Exploring how to build reliability into intelligent systems through structural rigor.",
      readTime: "5 min read"
    },
    {
      id: "blog-2",
      title: "Architecting RAG for Scale",
      date: "Nov 2023",
      excerpt: "Why retrieval strategy matters more than LLM parameter count in production.",
      content: "A deep dive into semantic chunking, hybrid search, and hallucination control.",
      readTime: "4 min read"
    },
    {
      id: "blog-3",
      title: "Statistical Rigor in Product DS",
      date: "Dec 2023",
      excerpt: "Moving beyond simple A/B testing to causal inference and behavioral signal.",
      content: "How to extract actionable ROI from high-variance product telemetry data.",
      readTime: "6 min read"
    },
    {
      id: "blog-4",
      title: "The Future of Quant Prediction",
      date: "Jan 2024",
      excerpt: "Applying deep learning to financial time-series without the overfitting trap.",
      content: "Strategies for architectural gating and cross-validation in market forecasting.",
      readTime: "7 min read"
    }
  ] as BlogPost[]
};
