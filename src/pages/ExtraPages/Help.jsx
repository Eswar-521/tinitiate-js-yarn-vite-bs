import React, { useState, useEffect } from "react";
import { HelpCircle, MessageCircle, Search, BookOpen, Zap, Shield, Users, ChevronDown, ChevronUp } from "lucide-react";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const faqs = [
    {
      question: "How can I reset my password?",
      answer: "Go to the login page and click on 'Forgot Password'. Follow the email instructions sent to your registered email address. The reset link expires in 24 hours.",
      category: "Account",
      icon: <Shield className="w-6 h-6" />,
      color: "#ff6b6b"
    },
    {
      question: "Where can I view my orders?",
      answer: "Navigate to your profile and select 'Order History' from the menu. You can filter by date, status, and payment method for easy tracking.",
      category: "Orders",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#4ecdc4"
    },
    {
      question: "How do I contact support?",
      answer: "Use the contact form, reach us at support@example.com, or use our live chat feature available 24/7. Premium users get priority support.",
      category: "Support",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "#45b7d1"
    },
    {
      question: "How to update my profile information?",
      answer: "Access your profile settings from the user menu. You can update personal details, preferences, and notification settings instantly.",
      category: "Account",
      icon: <Users className="w-6 h-6" />,
      color: "#f9ca24"
    },
    {
      question: "What are the premium features?",
      answer: "Premium includes advanced analytics, priority support, unlimited storage, custom integrations, and exclusive beta access to new features.",
      category: "Premium",
      icon: <Zap className="w-6 h-6" />,
      color: "#6c5ce7"
    },
    {
      question: "How to enable two-factor authentication?",
      answer: "Go to Security Settings in your profile. Enable 2FA using an authenticator app or SMS. This adds an extra layer of security to your account.",
      category: "Security",
      icon: <Shield className="w-6 h-6" />,
      color: "#fd79a8"
    }
  ];

  const categories = ["All", "Account", "Orders", "Support", "Premium", "Security"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const FloatingIcon = ({ icon, delay, size = "w-8 h-8" }) => (
    <div
      className={`absolute ${size} text-blue-300 opacity-20`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {icon}
    </div>
  );

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
        `,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon={<HelpCircle />} delay={0} />
        <FloatingIcon icon={<MessageCircle />} delay={1} />
        <FloatingIcon icon={<Search />} delay={2} />
        <FloatingIcon icon={<BookOpen />} delay={3} />
        <FloatingIcon icon={<Zap />} delay={4} />
        <FloatingIcon icon={<Shield />} delay={5} />
      </div>

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      <div className="relative z-10 p-6 lg:p-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1
              className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}
            >
              ❓ Help & Support
            </h1>
            <div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            />
          </div>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Find instant answers with our intelligent help system. Search, browse, or get direct support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
              style={{
                backdropFilter: 'blur(10px)',
                transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              <div
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 h-full border border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${faq.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                {/* Glowing background effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${faq.color}, transparent 70%)`
                  }}
                />

                {/* Category Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${faq.color}20`,
                    color: faq.color,
                    border: `1px solid ${faq.color}40`
                  }}
                >
                  {faq.category}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${faq.color}20`,
                    color: faq.color,
                    boxShadow: `0 0 20px ${faq.color}30`
                  }}
                >
                  {faq.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {faq.question}
                </h3>

                <p
                  className={`text-slate-300 leading-relaxed transition-all duration-500 ${
                    expandedFaq === idx ? 'opacity-100 max-h-40' : 'opacity-70 max-h-20'
                  } overflow-hidden`}
                >
                  {faq.answer}
                </p>

                {/* Expand Button */}
                <div className="flex justify-end mt-4">
                  <div className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    {expandedFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="text-center">
          <div
            className="relative inline-block p-12 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl border border-white/20"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"
              style={{ animation: 'pulse 4s ease-in-out infinite' }}
            />
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            
            <button
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white font-bold rounded-2xl overflow-hidden group transition-all duration-300 cursor-pointer"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradientShift 3s ease-in-out infinite',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)';
              }}
              onClick={() => alert('Contact support feature - navigate to contact page')}
            >
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.3)); }
          100% { filter: drop-shadow(0 0 30px rgba(56, 189, 248, 0.6)); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default Help;