const mongoose = require("mongoose");

module.exports = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Finding in-demand hard skills for a job position.",
    content:
      "I am applying for a [Job title] job. I am going to give you 3 job descriptions for [Job title] roles I want to apply for. After I have given you the 3 job descriptions, I want you to provide 2-3 key specialties or hard skills that are highly relevant and in-demand for the job. Is that clear?",
    tag: "job-search",
    authorEmail: "samdang123@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Networking Message Generation",
    content:
      "You are an expert career coach. I am [mention the problem you are facing in detail with context]. I’m looking to expand my network in the [Specific Industry] industry. Can you help me craft a professional LinkedIn message to [Industry Professionals/Company Employees] that introduces myself and expresses my interest in learning more about their career paths and any advice they have for someone looking to enter the field? I want you to [mention how you want the output in detail with examples]",
    tag: "job-search",
    authorEmail: "samueldda32@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Cover Letter Creation",
    content:
      "You are an expert job search consultant who helps people get jobs. I am [mention the problem you are facing in detail with context]. I need to draft a cover letter for a job application at [Company Name], specifically for the role of [Job Title]. Can you generate a cover letter that emphasizes my strengths in [Key Strengths] and my passion for [Industry/Company Mission]? I want you to [mention how you want the output in detail with examples]",
    tag: "job-search",
    authorEmail: "samantha@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Networking Tips for Job Seekers",
    content:
      "You are an expert career coach. I am [mention the problem you are facing in detail with context]. I want to learn more about networking in the [Specific Industry] industry. Can you",
    tag: "networking",
    authorEmail: "sarah@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Resume Optimization for ATS",
    content:
      "As an expert in resume writing, I need your help optimizing my resume for Applicant Tracking Systems (ATS). I'm applying for a [Job Title] position in the [Industry] sector. Can you provide me with 5 key strategies to ensure my resume passes through ATS successfully and reaches human recruiters? Please include advice on formatting, keywords, and any other relevant factors.",
    tag: "resume",
    authorEmail: "michael@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Salary Negotiation Techniques",
    content:
      "You are a seasoned career advisor specializing in salary negotiations. I have received a job offer for a [Job Title] position at [Company Name], but I believe the offered salary is below market value. Can you provide me with a step-by-step strategy to negotiate a higher salary? Please include tips on research, timing, and effective communication techniques.",
    tag: "negotiation",
    authorEmail: "emily@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Career Change Guidance",
    content:
      "As a career transition expert, I seek your advice. I'm currently working as a [Current Job Title] but I'm looking to switch to a career in [Desired Field]. What are the most important steps I should take to make this transition successful? Please provide a comprehensive plan including skills to acquire, networking strategies, and how to position my existing experience for the new field.",
    tag: "career-change",
    authorEmail: "alex@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Interview Preparation Strategies",
    content:
      "You are an interview coach with extensive experience. I have an upcoming interview for a [Job Title] position at a [Company Type] company. Can you provide me with a comprehensive interview preparation plan? Include tips on researching the company, preparing for common questions, developing impactful stories, and strategies for standing out from other candidates.",
    tag: "interview",
    authorEmail: "rachel@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Building a Professional Online Presence",
    content:
      "As a digital branding expert, I need your guidance on building a strong professional online presence. I'm a [Job Title] looking to advance my career in the [Industry] field. Can you provide a step-by-step guide on optimizing my LinkedIn profile, creating a personal website, and leveraging other online platforms to showcase my expertise and attract career opportunities?",
    tag: "personal-branding",
    authorEmail: "daniel@gmail.com",
    date: Date.now(),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Overcoming Job Search Burnout",
    content:
      "You are a career counselor specializing in mental health and job search strategies. I've been actively job hunting for [Time Period] and I'm feeling discouraged and burnt out. Can you provide strategies to maintain motivation, manage stress, and stay productive during an extended job search? Please include both practical job search tips and mental health advice.",
    tag: "job-search",
    authorEmail: "jessica@gmail.com",
    date: Date.now(),
  },
];
