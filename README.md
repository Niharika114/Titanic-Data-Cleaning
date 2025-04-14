

# Titanic Data Alchemy 🚢📊  
**Turning Raw Titanic Data Into Machine Learning Gold**

---

## 📖 Overview

**Titanic Data Alchemy** is a modern, interactive web application that walks users through the full lifecycle of preparing the Titanic dataset for machine learning. This tool visualizes each transformation step—cleaning, feature engineering, and modeling readiness—helping users grasp not just the _what_, but the _why_ behind each data operation.

It’s designed for data science learners, instructors, and practitioners who want to see data transformation in action, with an immersive interface that makes the abstract concrete.

---

Screenshot 
![Screenshot 2025-04-14 140909](https://github.com/user-attachments/assets/191df34a-c6e9-4e31-a038-0ec47a15df71)
![Screenshot 2025-04-14 140957](https://github.com/user-attachments/assets/b70246cb-e01d-4c66-a13d-a692b551cc79)
![Screenshot 2025-04-14 141035](https://github.com/user-attachments/assets/a0a8f231-4a23-4056-95cb-7904129ac5f3)



## ⚙️ Core Functionality

- **🔍 Raw Dataset Exploration**  
  Inspect the original Titanic dataset as it existed before any processing. Understand key variables and identify issues in real time.

- **🧹 Data Cleaning Pipeline**  
  Watch as missing values, outliers, and inconsistent entries are detected and resolved using best practices in data preprocessing.

- **🧠 Feature Engineering Showcase**  
  See how new features like "FamilySize" and "Title" are derived, and how they contribute to improved model performance.

- **📈 Machine Learning Prep View**  
  Explore how the transformed dataset is normalized, encoded, and split—ready for model training.

---

## 🛠 Tech Stack

| Category             | Technology           |
|----------------------|----------------------|
| **Frontend Framework** | React + TypeScript   |
| **Styling**            | Tailwind CSS         |
| **UI Components**      | [shadcn/ui](https://ui.shadcn.com) |
| **Visualization**      | Recharts             |
| **Build Tool**         | Vite                 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 18 or higher
- **npm** or [**Bun**](https://bun.sh)

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/titanic-data-alchemy.git
cd titanic-data-alchemy

# 2. Install dependencies
npm install      # or: bun install

# 3. Start the dev server
npm run dev      # or: bun dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── visualization/
│       ├── DataTransformationFlow.tsx       # Overall flow controller
│       ├── FeatureEngineeringSection.tsx    # Feature creation visuals
│       ├── MachineLearningOutput.tsx        # ML-ready data view
│       └── ProcessControls.tsx              # Step toggles and navigation
├── pages/
│   └── Index.tsx                            # Main landing page
└── TitanicVisualization.tsx                # Entry point for visual logic
```

---

## 🎨 UX & Design Philosophy

The UI is inspired by holographic sci-fi interfaces, merging cinematic visual language with educational clarity. Users are not just clicking through charts—they’re stepping through a story of data transformation, from chaos to clarity.

This design approach makes Titanic Data Alchemy a perfect fit for data science workshops, educational platforms, or onboarding tools for analytics teams.

---

## 📊 Model Output (Reference Implementation)

While the application is focused on data prep, it also includes a reference ML pipeline:

- **Model**: Random Forest Classifier  
- **Survival Prediction Accuracy**: 82.3%  
- **F1 Score**: 0.79  

> These metrics reflect model performance on a clean/test split using engineered features.

---

## 🤝 Contributing

We welcome open-source contributions to improve features, UI, or educational content.

1. Fork this repository
2. Create your feature branch  
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add my feature"
   ```
4. Push your branch  
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request

---


## 🙌 Acknowledgments

- [Kaggle Titanic Dataset](https://www.kaggle.com/c/titanic)  
- The React, TypeScript, and Tailwind communities  
- Visual inspiration from sci-fi UI/UX and data storytelling tools  

---

