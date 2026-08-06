/**
 * My Pre-Screening - Embedded Dataset
 * Works seamlessly offline, on file:// protocol, and hosted servers.
 */
window.SCREENINGS_DATA = [
  {
    "id": "blood_pressure",
    "category": "Cardiovascular Health",
    "title": "Blood Pressure Screening",
    "minAge": 18,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Detect high blood pressure (hypertension)",
    "frequency": {
      "under40": "Every 3-5 years if blood pressure is normal and low risk",
      "over40": "Annually for adults age 40 and older or those at increased risk"
    },
    "tests": [
      {
        "name": "Standard Blood Pressure Measurement",
        "description": "Non-invasive cuff reading of systolic and diastolic blood pressure."
      }
    ],
    "notes": "Essential for early detection of hypertension to prevent heart disease and stroke."
  },
  {
    "id": "cholesterol",
    "category": "Cardiovascular Health",
    "title": "Cholesterol (Lipid Panel)",
    "minAge": 17,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Detect high cholesterol and cardiovascular disease risk",
    "frequency": "Initial screening between ages 17-21; Routine screening every 4-6 years for most adults (more often if high risk).",
    "tests": [
      {
        "name": "Fasting Lipid Panel",
        "description": "Measures total cholesterol, LDL (bad cholesterol), HDL (good cholesterol), and triglycerides."
      }
    ],
    "notes": "Helps assess long-term risk of coronary artery disease and stroke."
  },
  {
    "id": "bmi",
    "category": "General Health & Wellness",
    "title": "Body Mass Index (BMI) & Weight Evaluation",
    "minAge": 18,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Assess healthy body weight and evaluate associated cardiometabolic risks",
    "frequency": "At routine healthcare visits",
    "tests": [
      {
        "name": "Height & Weight Assessment",
        "description": "Calculation of Body Mass Index (BMI) to guide nutritional and metabolic screening."
      }
    ],
    "notes": "Identifies risk for type 2 diabetes, heart disease, and joint health issues."
  },
  {
    "id": "cervical_cancer",
    "category": "Women's Health",
    "title": "Cervical Cancer Screening",
    "minAge": 21,
    "maxAge": 65,
    "gender": "female",
    "purpose": "Detect cervical dysplasia and cervical cancer early",
    "frequency": {
      "age21_29": "Pap test every 3 years",
      "age30_65": "HPV test every 5 years, Pap test every 3 years, or Co-testing (Pap + HPV) every 5 years"
    },
    "tests": [
      {
        "name": "Pap Smear (Cytology)",
        "description": "Microscopic examination of cervical cells."
      },
      {
        "name": "High-Risk HPV Test",
        "description": "Screens for human papillomavirus strains associated with cervical cancer."
      }
    ],
    "notes": "Highly effective preventive screening for women aged 21 to 65."
  },
  {
    "id": "diabetes",
    "category": "Metabolic Health",
    "title": "Diabetes & Blood Sugar Screening",
    "minAge": 35,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Detect prediabetes and Type 2 Diabetes",
    "frequency": "Screening recommended starting at age 35 (or earlier if overweight/higher risk). Repeat every 3 years if normal.",
    "tests": [
      {
        "name": "Hemoglobin A1c (HbA1c)",
        "description": "Measures average blood glucose over the previous 2–3 months."
      },
      {
        "name": "Fasting Plasma Glucose (FPG)",
        "description": "Blood glucose level after at least 8 hours of fasting (≥ 126 mg/dL diagnostic threshold)."
      },
      {
        "name": "Oral Glucose Tolerance Test (OGTT)",
        "description": "Blood glucose measured before and 2 hours after drinking a standard glucose solution."
      }
    ],
    "notes": "Recommended for all adults age 35 and older, or age 18-34 if overweight/at increased risk."
  },
  {
    "id": "prostate_cancer",
    "category": "Men's Health",
    "title": "Prostate Cancer Screening",
    "minAge": 40,
    "maxAge": 120,
    "gender": "male",
    "purpose": "Detect prostate abnormalities and prostate cancer early",
    "frequency": "Recommended starting at age 40 and older based on individual risk discussion.",
    "tests": [
      {
        "name": "PSA (Prostate-Specific Antigen) Blood Test",
        "description": "Measures the level of PSA protein in the blood."
      },
      {
        "name": "Digital Rectal Exam (DRE)",
        "description": "Physical examination of the prostate gland by a healthcare provider."
      }
    ],
    "notes": "Recommended for men age 40 and older."
  },
  {
    "id": "breast_cancer",
    "category": "Women's Health",
    "title": "Breast Cancer Screening",
    "minAge": 40,
    "maxAge": 120,
    "gender": "female",
    "purpose": "Detect early-stage breast tissue abnormalities and tumors",
    "frequency": "Recommended annually or biennially for women age 40 and older.",
    "tests": [
      {
        "name": "Mammogram (2D or 3D Digital Breast Tomosynthesis)",
        "description": "Low-dose X-ray imaging of breast tissue."
      },
      {
        "name": "Clinical Breast Exam",
        "description": "Physical examination conducted by a trained healthcare professional."
      }
    ],
    "notes": "Recommended for women age 40 and older."
  },
  {
    "id": "colorectal_cancer",
    "category": "Gastrointestinal Health",
    "title": "Colorectal Cancer Screening",
    "minAge": 45,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Detect precancerous polyps and colorectal cancer",
    "frequency": "Starting at age 45, frequency depends on chosen test modality.",
    "tests": [
      {
        "name": "Colonoscopy",
        "description": "Endoscopic visual examination of the colon (Every 10 years)."
      },
      {
        "name": "Fecal Immunochemical Test (FIT)",
        "description": "Stool test detecting hidden blood (Every year)."
      },
      {
        "name": "Guaiac Fecal Occult Blood Test (gFOBT)",
        "description": "Chemical stool test for occult blood (Every year)."
      },
      {
        "name": "FIT-DNA Stool Test (Cologuard)",
        "description": "Combines FIT with stool DNA biomarkers (Every 3 years)."
      },
      {
        "name": "CT Colonography (Virtual Colonoscopy)",
        "description": "CT scanning of the large intestine (Every 5 years)."
      },
      {
        "name": "Flexible Sigmoidoscopy",
        "description": "Visual examination of lower colon (Every 5 years)."
      }
    ],
    "notes": "Recommended for all adults age 45 and older."
  },
  {
    "id": "glaucoma",
    "category": "Vision & Eye Health",
    "title": "Glaucoma Screening (Comprehensive Eye Exam)",
    "minAge": 18,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Detect intraocular pressure and early optic nerve damage from glaucoma",
    "frequency": {
      "under40": "Baseline comprehensive eye exam at least once in early adulthood",
      "age40_54": "Every 2–4 years",
      "age55_64": "Every 1–3 years",
      "age65_plus": "Every 1–2 years"
    },
    "tests": [
      {
        "name": "Comprehensive Eye Exam with Tonometry & Ophthalmoscopy",
        "description": "Measures eye pressure, inspects the optic nerve, and tests visual fields."
      }
    ],
    "notes": "Essential for early detection before visual field loss occurs."
  },
  {
    "id": "afib_stroke",
    "category": "Cardiovascular & Stroke Prevention",
    "title": "Atrial Fibrillation (AFib) & Stroke Risk Screening",
    "minAge": 65,
    "maxAge": 120,
    "gender": "all",
    "purpose": "Screen for irregular heart rhythms (AFib) to prevent ischemic stroke",
    "frequency": "Recommended during routine clinical care for all adults age 65 and older.",
    "tests": [
      {
        "name": "Pulse Palpation & Electrocardiogram (ECG/EKG)",
        "description": "Screening for irregular heart rhythm during routine physical exam or single-lead ECG."
      }
    ],
    "notes": "Crucial stroke prevention screening for adults age 65 and older."
  }
];
