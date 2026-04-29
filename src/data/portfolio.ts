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
  longIntro?: string;
  pipeline?: string;
  methodology?: string;
  challenges?: string;
  impactExplanation?: string;
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
  coreResearch: { name: string; value: number }[];
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
    image: "https://drive.google.com/uc?export=download&id=1WpQeyPHVcyt8J086-bOgyYu0LoC4-2eE",
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
    { name: "Core Skills", value: 88, tools: ["A/B Testing", "Hypothesis Testing", "Statistical Validation", "Linear Algebra", "Git/Version Control", "System Scalability"] }
  ] as SkillCategory[],
  coreResearch: [
    { name: "Algorithm Optimization", value: 94 },
    { name: "System Design", value: 91 },
    { name: "Production Deployment", value: 89 },
    { name: "Statistical Inference", value: 92 }
  ],
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
      ],
      longIntro: "This project represents a comprehensive initiative to combat customer churn in a highly competitive telecom environment. By leveraging millions of transactional records, network quality logs, and historical usage patterns, we engineered an intelligent system capable of identifying at-risk users with unprecedented accuracy aforehand.",
      pipeline: "The data pipeline ingested 10K+ customer records in real-time. Unstructured text logs from customer service interactions were processed using NLP, while structured billing data went through a rigorous ETL process. Features were normalized, scaled, and managed through a feature store to ensure zero data leakage.",
      methodology: "We adopted a stratified approach. Initially, simple baselines like Logistic Regression provided a benchmark. After exhaustive exploratory data analysis (EDA), we transitioned to gradient boosting methods. We extensively utilized SMOTE for handling class imbalance, fine-tuned hyperparameters via Bayesian Optimization, and validated with 5-fold cross-validation.",
      challenges: "Class imbalance stood out as the predominant problem; the churn rate was merely ~13.5%. Early models showed extreme bias toward the majority class (retaining customers). Additionally, distinguishing between noise and actual churn signals in short-term data fluctuations demanded meticulous feature engineering.",
      impactExplanation: "By integrating the final XGBoost model directly with the BI systems, the marketing team could trigger automated retention workflows. This predictive approach shifted the strategy from reactive damage control to proactive customer success, recovering approximately $1.2M in annual retention value."
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
      ],
      longIntro: "A full-scale Retrieval-Augmented Generation (RAG) system built to parse, index, and query across 500+ deep tech academic papers. It bridges the gap between semantic understanding and factual grounding, providing researchers with instant, highly accurate literature synthesis.",
      pipeline: "Documents were processed via PyPDF and unstructured chunking libraries. The chunking strategy employed recursive character limits with 200-token overlaps. We utilized ChromaDB for vector storage and integrated FAISS for efficient similarity searches, all automated within a CI/CD-driven ingestion pipeline.",
      methodology: "We implemented a hybrid search setup, merging Dense Vector Embeddings (via SentenceTransformers) and Sparse Keyword Search (BM25) to maximize retrieval recall. Finally, to construct the final response, an LLM orchestrator combined the top-k relevant fragments, applying strict temperature controls to mitigate hallucinations.",
      challenges: "Navigating deeply technical academic jargon posed a massive challenge for out-of-the-box embeddings, resulting in 'lost-in-the-middle' phenomena. We solved this by implementing Metadata-filtered querying and Maximal Marginal Relevance (MMR) re-ranking.",
      impactExplanation: "Deployed as an internal FastAPI microservice, researchers slashed their literature review cycles by 70%. The hybrid pipeline guarantees 95% accuracy and enforces factual provenance by strictly citing retrieved chunk metadata."
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
      ],
      longIntro: "A dynamic and heavily optimized Long Short-Term Memory (LSTM) network designed to decode complex temporal patterns in stock market fluctuations. Specifically built for the S&P 500, it aims to extract probabilistic edges from notoriously resilient and noisy financial datasets.",
      pipeline: "Sourced high-frequency OHLCV (Open, High, Low, Close, Volume) data from financial APIs dating back over five years. We engineered more than 15 lagging and leading indicators, including RSI, MACD, and Bollinger Bands. The dataset was time-aligned and fed through standard squashing functions before reaching the network.",
      methodology: "Escewing simpler feed-forward networks, we utilized a multi-stage LSTM architecture capable of remembering 30-day lookback windows. We introduced Dropout layers to penalize overfitting and employed Learning Rate warmups with a Cosine Annealing schedule to ensure robust gradient convergence.",
      challenges: "Market volatility introduces severe non-linear noise, frequently causing catastrophic overfitting in preliminary models. Navigating regimes shifts—where market rules fundamentally change due to macroeconomic events—required embedding adaptive walk-forward validation strategies.",
      impactExplanation: "By integrating into a highly interactive Streamlit dashboard, portfolio managers gained real-time, mathematically grounded forecast bands. The architecture consistently achieves a remarkable 3.2% RMSE, providing a substantial 41% edge over naive moving-average strategies."
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
      ],
      longIntro: "A high-frequency cyber-security tool designed to intercept anomalous and malicious URLs before they compromise user systems. This 'Security Vector Shield' employs sophisticated lexical feature extraction to identify zero-day phishing attacks that bypass traditional blacklists.",
      pipeline: "The ingestion engine concurrently pulled malicious instances from academic datasets and open-source threat repositories, balanced with an equivalent set of benign traffic. A rigorous feature extractor transformed raw URL strings into numerical tensors measuring length, entropy, special character frequency, and domain obscuration tactics.",
      methodology: "We formulated this as a binary classification objective. We evaluated a battery of models including pure Deep Learning classifiers, but an ensemble consisting of Random Forest and XGBoost ultimately delivered the best latency-to-accuracy ratio. Extensive GridSearch was used for iterative tuning.",
      challenges: "Attackers continuously evolve their obfuscation—such as using typo-squatting or punycode. Feature extraction had to be extremely comprehensive yet remain computationally cheap to ensure the model could operate inline with browser traffic at sub-50ms latency.",
      impactExplanation: "When integrated as a network validation endpoint, the model reliably intercepted 97.4% of simulated zero-day phishing domains. Its lightweight lexical approach acts as a robust frontline defense, completely sidestepping the massive overhead associated with traditional signature-based scanning."
    }
  ] as Project[],
  blogs: [
    {
      id: "blog-1",
      title: "The Logic of Decision Intelligence",
      date: "Oct 2023",
      excerpt: "Bridging the gap between stochastic models and deterministic system outcomes.",
      content: "## The Paradox of Probabilistic Systems\n\nIn modern enterprise environments, the core challenge of deploying machine learning lies not in model architecture, but in translating probabilistic outputs into deterministic business logic. A model might predict customer churn with 85% probability, but the downstream system—a marketing automation tool or a supply chain orchestrator—requires a binary 'yes' or 'no'.\n\n### Formulating the Decision Boundary\n\nTo bridge this gap, engineers must construct decision layers that act as a buffer between raw inferences and systemic actions. This involves:\n\n1.  **Expected Value Frameworks:** Instead of optimizing for pure accuracy, we optimize for Expected Value (EV). If the cost of a false positive is $10 and the reward for a true positive is $100, the optimal probability threshold shifts dramatically. \n2.  **Calibration:** Uncalibrated outputs from complex models (like deep neural networks) can be wildly overconfident. Employing techniques like **Platt Scaling** or **Isotonic Regression** ensures that when a model predicts a 0.8 probability, the event actually happens 80% of the time in the real world.\n3.  **Human-in-the-Loop Safeguards:** For critical decisions, the model acts as an augmentative triage system rather than an autonomous actor.\n\n### The Shift to Decision Intelligence\n\nWe are moving beyond artificial intelligence as a purely predictive pursuit. Decision Intelligence merges data science with managerial science and social science. By understanding the causal mechanisms behind the data, we can move from answering \"What will happen?\" to \"What should we do?\"\n\nThis shift demands that Data Scientists evolve into Decision Architects—professionals who possess deep statistical rigor but prioritize business alignment above all else.",
      readTime: "8 min read"
    },
    {
      id: "blog-2",
      title: "Architecting RAG for Scale",
      date: "Nov 2023",
      excerpt: "Why retrieval strategy matters more than LLM parameter count in production environments.",
      content: "## The Delusion of LLM Parameter Sizes\n\nThe AI industry has been hypnotized by the sheer parameter count of foundational models. However, in production Enterprise settings, the primary challenge is not reasoning capability, but **factuality and domain-specific context**. This is where Retrieval-Augmented Generation (RAG) becomes non-negotiable.\n\n### The Retrieval Bottleneck\n\nA RAG system is only as intelligent as its retrieval pipeline. No amount of prompt engineering can salvage a response if the retrieved context is irrelevant or noisy. Building RAG for scale requires addressing three critical bottlenecks:\n\n1.  **Semantic Chunking:** Splitting documents strictly by character count is a recipe for disaster. It splits sentences mathematically, destroying semantic context. Advanced pipelines utilize structural or semantic chunking—respecting paragraphs, markdown headers, and logical document boundaries.\n2.  **Hybrid Search Methodologies:** Relying entirely on dense vector embeddings (like cosine similarity) is insufficient for exact keyword matches (e.g., retrieving a specific SKU or serial number). Production architectures *must* implement hybrid search—combining dense vectors with sparse keyword indexing (like BM25) and utilizing a re-ranking algorithm (like Cohere's ReRank) to synthesize the optimal order.\n3.  **The \"Lost in the Middle\" Phenomenon:** LLMs suffer from recency bias. They attend strongly to the beginning and end of a context window but often ignore information buried in the middle. We mitigate this by aggressively filtering out irrelevant chunks *before* feeding them to the generation prompt, ensuring high signal-to-noise ratios.\n\n### Beyond the Prototype\n\nBuilding a basic LangChain prototype takes an afternoon. Forging a scalable, resilient RAG pipeline that handles terabytes of enterprise data, enforces strict access controls (RBAC), and updates its vector store incrementally is a complex software engineering endeavor.",
      readTime: "10 min read"
    },
    {
      id: "blog-3",
      title: "Statistical Rigor in Product DS",
      date: "Dec 2023",
      excerpt: "Moving beyond simple A/B testing to causal inference and continuous behavioral signal analysis.",
      content: "## The Limits of Frequentist A/B Testing\n\nThe standard playbook for digital product development relies heavily on A/B testing. While valuable, traditional frequentist A/B testing is often misapplied and misunderstood. Peeking at p-values prematurely, ignoring the novelty effect, and failing to recognize Simpson's Paradox lead to fundamentally flawed product decisions.\n\n### Embracing Causal Inference\n\nWhen randomized controlled trials (RCTs) are impossible or unethical, data scientists must lean on observational data. This represents a paradigm shift from correlation to causation.\n\n*   **Differences-in-Differences (DiD):** By comparing the changes in outcomes over time between a group that is enrolled in a program (the intervention group) and a group that is not (the control group), we can estimate causal impact even without true randomization.\n*   **Propensity Score Matching:** This technique allows us to artificially construct a control group from historical data by matching similar users across a multitude of covariates, balancing the treatment and control groups to isolate the effect of a specific feature launch.\n\n### Behavioral Signal Extraction\n\nProduct data is incredibly noisy. Users click erratically, sessions timeout, and telemetry pipelines drop packets. The true art of Product Data Science lies in defining robust metrics that act as leading indicators for long-term retention and latent user satisfaction.\n\nInstead of tracking generic \"Daily Active Users (DAU),\" we must engineer composite features: \"Users who perform action X at least Y times within their first Z days.\" This specific behavioral clustering identifies the *Aha! moment* of a product, allowing engineering teams to ruthlessly optimize for user success.",
      readTime: "12 min read"
    },
    {
      id: "blog-4",
      title: "The Future of Quant Prediction",
      date: "Jan 2024",
      excerpt: "Applying deep learning to financial time-series without falling into the overfitting trap.",
      content: "## The Non-Stationary Nature of Markets\n\nFinancial markets are adversarial arenas characterized by extreme noise and non-stationary dynamics. Unlike computer vision or NLP, the \"rules\" of the market change dynamically as macroeconomic regimes shift. A model trained on the bull market of 2021 will collapse in the inflationary environment of 2022.\n\n### Defeating the Overfitting Trap\n\nThe greatest danger in quantitative machine learning is overfitting to historical data. It is remarkably easy to build an LSTM that generates perfect backtests but instantly drains capital in live trading.\n\n1.  **Walk-Forward Validation:** Traditional k-fold cross-validation is strictly forbidden in time-series due to data leakage. Instead, we must utilize Walk-Forward Validation (or Purged K-Fold Cross-Validation), ensuring the model is only ever evaluated on temporal data *succeeding* its training window.\n2.  **Feature Stationarity:** Feeding raw price data into a neural network is ineffective. Features must be rendered stationary (mean and variance constant over time). We achieve this through fractional differencing—preserving maximum memory while eliminating explosive trends.\n3.  **Ensemble Gating Architectures:** A single monolithic model cannot handle shifting volatility regimes. State-of-the-art architectures deploy \"Mixture of Experts\" (MoE). A gating network continuously evaluates the current market environment (e.g., high vs. low volatility) and routes the input features to the specific sub-network optimized for those conditions.\n\n### The Path Forward\n\nThe alpha generated by simple arbitrage is evaporating. The future belongs to systems that can synthesize massive, unstructured datasets—merging classical quantitative indicators with real-time NLP sentiment analysis of global news streams.",
      readTime: "10 min read"
    }
  ] as BlogPost[]
};
