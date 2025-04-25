import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  sql,
  r,
  aws,
  azure,
  gcp,
  docker,
  kubernetes,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  rivach,
  deepseek,
  anomaly,
  mistral,
  llama2,
  llama3,
  multinlp,
  traffic,
  lifeexpentency,
  matplotlib,
  pyspark,
  pytorch,
  plotly,
  sklearn,
  opencv,
  huggingface,
  llama,
  keras,
  hadoop,
  streamlit,
  seaborn,
  pandas,
  hashing

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const softwaredevelopment = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  {name: "SQL",icon:sql},
  {name: "Python",icon:python},
  {name:"Java",icon:java},
  {name:"R",icon:r},
  {name:"AWS",icon:aws},
  {name:"Azure",icon:azure},
  {name:"GCP",icon:gcp},
  { name: "git", icon: git },
  {name:"docker",icon:docker},
  {name:"Kubernetes",icon:kubernetes}
];
export const AIML = [
  { name: "Pandas", icon: pandas },
  { name: "Matplotlib", icon: matplotlib },
  { name: "Pytorch", icon: pytorch },
  { name: "Scikit Learn", icon: sklearn },
  { name: "Open CV", icon: opencv },
  { name: "Hugging  Face", icon: huggingface },
  { name: "LLama", icon: llama },
  { name: "Keras", icon: keras },
  {name: "Pyspark",icon:pyspark},
  {name:"Hadoop",icon:hadoop},
  {name:"streamlit",icon:streamlit},
  {name:"plotly",icon:plotly},
  {name:"seaborn",icon:seaborn},
];




export const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: " Rivach LLP",
    icon: rivach,
    iconBg: "#161329",
    date: "April 2022 - May 2023",
    points: [
      "Designed and implemented a geo-personalized gig recommendation engine using spatial clustering and collaborative filtering, resulting in a 42% improvement in task-user match accuracy across the Brekrr platform.",
      "Engineered a robust identity verification system using Siamese neural networks and OpenCV, reducing fake profile creation by 35% and enhancing overall user trust",
      "Developed predictive maintenance algorithms leveraging XGBoost and Random Forest, achieving 60% forecast accuracy and decreasing equipment downtime by 28% within the Landmanager ecosystem.",
      "Spearheaded the deployment of a content-based recommender system powered by matrix factorization techniques, leading to a 50% increase in user engagement on Guiding Young Minds.",
      "Implemented Transformer-based NLP moderation pipelines for real-time chat analysis and policy enforcement, cutting manual moderation overhead by 60% while ensuring regulatory compliance.",
      "Optimized ML deployment pipelines using FastAPI and Docker within a microservices architecture, maintaining sub-200ms latency for high-frequency API interactions.",
      "Automated scalable inference systems using AWS Lambda and Firebase Functions, reducing cloud compute expenses by 20% and improving deployment agility.",
      "Established comprehensive monitoring solutions via MLflow and Prometheus, delivering 99.9% model uptime and real-time visibility into production model health.",
      "Collaborated with cross-functional stakeholders to translate business requirements into ML-driven features, accelerating project delivery by 25% and improving end-user satisfaction."
    ],
  },
  {
    title: "Unity 3D Developer Intern",
    company_name: " Hashing.Company",
    icon: hashing,
    iconBg: "#161329",
    date: "Sep 2021 - May 2022",
    points: [
      "Collaborated and Worked for the project “ 360 degree virtual tour of G.R.I.E.T using AR and VR “ as an 3 d modelling and graphic intern .",
      "Captured immersive 360-degree views using GoPro cameras to showcase campus infrastructure and key locations.",
      "Designed and built an interactive virtual tour using Unity Engine, enhancing user engagement through seamless navigation",
      "Delivered an innovative digital experience, improving accessibility for prospective students and visitors."
    ],
  },
  

];

export const projects = [
  {
    name: "Domain-Specific QA System Using DeepSeek and RAG",
    description: [
      "Built a question-answering system by integrating DeepSeek with a Retrieval-Augmented Generation (RAG) framework, combining dense retrieval (FAISS) and contextual generation for accurate, domain-specific responses.",
      "Fine-tuned DeepSeek on custom QA datasets and indexed 1M+ domain-specific documents using FAISS and Elasticsearch for efficient retrieval.",
      "Optimized the RAG pipeline by experimenting with embedding models (e.g., Sentence-BERT) and fine-tuning retrieval/generation components for improved relevance.",
      "Evaluated system performance using BLEU, ROUGE, and Exact Match, achieving a 30% improvement in accuracy over baseline models.",
      "Deployed the system as a scalable REST API using FastAPI and Docker, hosted on AWS, reducing domain experts' information retrieval time by 50%."
    ],
    tags: [
      { "name": "DeepSeek", "color": "blue-text-gradient" },
      { "name": "RAG", "color": "green-text-gradient" },
      { "name": "FAISS", "color": "pink-text-gradient" },
      { "name": "Sentence-BERT", "color": "yellow-text-gradient" },
      { "name": "FastAPI", "color": "purple-text-gradient" },
      { "name": "AWS", "color": "orange-text-gradient" }
    ],
    image: deepseek, 
    source_code_link: "https://github.com/yourusername/DomainSpecificQA"
  },
  {
    name: "Advanced Anomaly Detection and Text Classification Using Deep Learning",
    description: [
      "Developed an Anomaly Detection System using Autoencoders: Designed and implemented three autoencoder models to detect anomalies in a time-series dataset with 5,315 entries, achieving a validation R² score of up to 0.9916 and identifying 25-74 anomalies across models.",
      "Built and Fine-Tuned Transformer Models for Text Classification: Constructed a transformer-based model using PyTorch for the AG News dataset, achieving 90.08% accuracy, and improved performance to 90.53% with L2 regularization and dropout techniques.",
      "Preprocessed and Visualized Data: Cleaned, tokenized, and normalized datasets, and created visualizations (histograms,bar plots, scatter plots) to analyze data distributions and model performance.",
      "Optimized Model Performance: Applied optimization techniques like L2 regularization, dropout, and learning rate tuning toreduce overfitting and improve model accuracy by 0.45%.",
      "Evaluated Models using Metrics: Conducted extensive evaluation using metrics like R² score, precision, recall, F1-score, and confusion matrices, and visualized results through ROC curves and loss/accuracy graphs."
    ],
    tags: [
      { "name": "Anomaly Detection System", "color": "blue-text-gradient" },
      { "name": "Autoencoders", "color": "green-text-gradient" },
      { "name": "Transformer Models", "color": "pink-text-gradient" },
    ],
    image: anomaly, 
    source_code_link: "https://github.com/yourusername/DomainSpecificQA"
  },
  {
    name: "Chatbot with Mistral-7B",
    description: [
      "Developed an interactive AI-powered chatbot using the Mistral-7B model with Streamlit for a real-time conversational experience.",
      " Integrated Hugging Face Transformers for natural language processing.",
      "Optimized model execution with GPU acceleration (CUDA) for improved performance.",
      "Implemented authentication handling for secure API access.",
      "Used Streamlit session state for dynamic chat history tracking.",
      "Designed an efficient caching system to speed up model loading."
    ],
    tags: [
      { "name": "Streamlit", "color": "blue-text-gradient" },
      { "name": "ChatBot", "color": "green-text-gradient" },
      { "name": "Mistral- 7B", "color": "pink-text-gradient" },
    ],
    image: mistral, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/mistral_text_generator"
  },
  {
    name: "Text Classification using LLaMA 2",
    description: [
      "Built a real-time text classification application using LLaMA 2 Chat (7B) with FP16 precision for efficient inference.",
      "Integrated LLaMA 2 Chat model from Hugging Face for classification.",
      "Optimized inference using FP16 (half-precision) for reduced memory usage.",
      "Designed an interactive UI with Streamlit for user-friendly text input and classification.",
      "Implemented prompt engineering to guide classification into predefined categories.",
      "Enhanced performance with model caching to prevent redundant reloading.",
      "Applied custom UI styling for improved user experience"
    ],
    tags: [
      { "name": "Streamlit", "color": "blue-text-gradient" },
      { "name": "Text Classification", "color": "green-text-gradient" },
      { "name": "LLaMA2", "color": "pink-text-gradient" },
    ],
    image: llama2, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/LLaMA2_text_classification"
  },
  {
    name: "AI Chatbot with Sentiment Analysis",
    description: [
      "Developed an interactive AI chatbot powered by Meta-LLaMA 3 (8B) with real-time sentiment analysis using TextBlob.",
      "Integrated LLaMA 3 (8B) for conversational AI and response generation.",
      "Implemented sentiment analysis using TextBlob to classify user emotions (Positive, Neutral, Negative).",
      "Optimized model performance with FP16 precision & auto device mapping for efficient inference.",
      "Designed an interactive chat UI with Streamlit, including chat history tracking.",
      "Utilized session state for managing persistent chat memory.",
      "Implemented secure authentication with Hugging Face API tokens."
    ],
    tags: [
      { "name": "ChatBot", "color": "blue-text-gradient" },
      { "name": "Sentimental Analysis", "color": "green-text-gradient" },
      { "name": "LLaMA3", "color": "pink-text-gradient" },
    ],
    image: llama3, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/LLaMA3_sentiment_analysis"
  },
  {
    name: "Multi-Purpose NLP App",
    description: [
      "Developed an interactive NLP application using Hugging Face Transformers Pipelines and Streamlit to perform multiple NLP tasks seamlessly.",
      "Implemented CUDA acceleration for GPU-optimized performance.",
      "Designed an intuitive UI with Streamlit, including a dynamic task selector.",
      "Enhanced user experience with custom styling & interactive elements.",
      "Leveraged efficient caching to optimize model loading and inference speed.",
    ],
    tags: [
      { "name": "NLP App", "color": "blue-text-gradient" },
      { "name": "Transformer Pipeline", "color": "green-text-gradient" },
      { "name": "CUDA", "color": "pink-text-gradient" },
    ],
    image: multinlp, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/Transformers_Pipline_Task"
  },
  {
    name: "Traffic Sign Prediction using CNN & Streamlit 🚦🔍",
    description: [
      "This project classifies traffic signs using a Convolutional Neural Network (CNN), implemented with PyTorch and deployed via Streamlit for interactive visualization.",
      "Developed and trained a CNN model in PyTorch for traffic sign recognition (43 classes).",
      "Achieved 96.46% accuracy with optimized convolutional and fully connected layers.",
      "Deployed an interactive Streamlit app for real-time traffic sign classification.",
      "Evaluated performance using precision (0.9658), recall (0.9646), and F1-score (0.9645).",
    ],
    tags: [
      { "name": "Streankit", "color": "blue-text-gradient" },
      { "name": "CNN", "color": "green-text-gradient" },
      { "name": "Pytroech", "color": "pink-text-gradient" },
    ],
    image: traffic, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/Traffic_Sign_Prediction"
  },
  {
    name: "🌍 Life Expectancy Prediction using ANN",
    description: [
      "🧠 Built an Artificial Neural Network (ANN) in PyTorch for regression.",
      "📊 Performed Exploratory Data Analysis (EDA) to detect patterns and handle missing data.",
      "🔍 Feature Engineering: Applied label encoding, imputation, and StandardScaler normalization.",
      "📈 Feature Importance Analysis to determine key factors influencing life expectancy.",
    ],
    tags: [
      { "name": "ANN", "color": "blue-text-gradient" },
      { "name": "EDA", "color": "green-text-gradient" },
      { "name": "Feature Engineering", "color": "pink-text-gradient" },
    ],
    image: lifeexpentency, 
    source_code_link: "https://huggingface.co/spaces/saikiranmansa/Traffic_Sign_Prediction"
  },
];
