import { Calculator, DollarSign, Shield, Users, Star, Clock, CheckCircle, Award } from "lucide-react";

export const mockData = {
  services: [
    {
      title: "Maximize Refunds",
      description: "We find every deduction and credit you're entitled to. Our expert knowledge of Hawaii and federal tax laws ensures you get the maximum refund possible.",
      icon: DollarSign,
      gradient: "from-green-500 to-green-600",
      features: [
        "Expert deduction identification",
        "Hawaii state tax optimization",
        "Itemized vs standard deduction analysis",
        "Credit maximization strategies"
      ]
    },
    {
      title: "Don't Stress Over Filing",
      description: "Let our experienced professionals handle all the paperwork while you relax. We make tax season stress-free for Hawaii families and businesses.",
      icon: Shield,
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Complete paperwork handling",
        "Error-free filing guarantee",
        "Fast electronic filing",
        "Direct deposit setup"
      ]
    },
    {
      title: "Simplify Your Taxes",
      description: "Complex tax situations made simple. From basic returns to business taxes, we handle it all with the personal touch only a local Hawaii business can provide.",
      icon: Calculator,
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Personal & business returns",
        "Multi-state filing expertise",
        "Self-employment tax help",
        "Rental property assistance"
      ]
    }
  ],
  
  whyChooseUs: [
    {
      title: "Local Hawaii Experts",
      description: "38+ years serving Hawaii families. We understand local tax laws and military benefits unique to our islands.",
      icon: Users,
      gradient: "from-blue-500 to-green-500"
    },
    {
      title: "IRS Audit Defense",
      description: "We represent clients in IRS audits and provide year-round support for any tax questions or issues.",
      icon: Shield,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Year-Round Support",
      description: "Unlike seasonal chains, we're here all year to answer questions and help with IRS letters or notices.",
      icon: Clock,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Guaranteed Accuracy",
      description: "We stand behind our work with accuracy guarantees and professional liability insurance for your peace of mind.",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500"
    }
  ],

  testimonials: [
    {
      name: "Maria Santos",
      location: "Kalihi, Hawaii",
      review: "Hanks Tax Service has been doing my family's taxes for over 15 years. They always find deductions I would have missed and their customer service is amazing. True local ohana!"
    },
    {
      name: "David Kim",
      location: "Pearl City, Hawaii",
      review: "As a small business owner, I was stressed about my taxes until I found Hanks. They saved me thousands and made everything so simple. I recommend them to all my friends."
    },
    {
      name: "Jennifer Nakamura",
      location: "Honolulu, Hawaii",
      review: "When I got audited by the IRS, Hank's team represented me and resolved everything quickly. Their expertise and support during a scary time was invaluable."
    }
  ],

  officeHours: {
    kalihi: {
      name: "Kalihi Office (Main)",
      address: "1234 Kalihi St, Honolulu, HI 96819",
      phone: "(808) 853-1170",
      hours: "Monday-Friday: 9AM-6PM, Saturday: 9AM-4PM",
      status: "Open Year-Round"
    },
    pearlCity: {
      name: "Pearl City Office",
      status: "Closed for the year"
    },
    kapolei: {
      name: "Kapolei Office", 
      status: "Closed for the year"
    }
  },

  stats: {
    yearsExperience: 38,
    clientsServed: "5,000+",
    averageRefund: "$3,247",
    satisfactionRate: "99.8%"
  }
};