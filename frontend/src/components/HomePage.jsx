import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, MapPin, Calendar, CheckCircle, Star, Users, Shield, Clock } from "lucide-react";
import { mockData } from "../data/mockData";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallNow = () => {
    window.location.href = "tel:808-853-1170";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_d3c0edc7-fb1d-4b0a-a6c7-4054e3459151/artifacts/y0z8eeuc_Flower%20Name%20and%20number.jpeg"
                alt="Hanks Tax Service Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Kalihi Office Open Year-Round</span>
              </div>
              <Button 
                onClick={handleCallNow}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: (808) 853-1170
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Badge className="bg-blue-100 text-blue-800 border-0 mb-4 px-4 py-2">
                Hawaii's Trusted Tax Professionals Since 1985
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let Us Keep Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Taxes In Order
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong className="text-green-700">The Best Service. The Best Returns.</strong>
                <br />
                Don't let mainland companies take your hard-earned money. Our local ohana helps you get the maximum refund you deserve.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">IRS Audit Defense</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Year-Round Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Maximum Refunds</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallNow}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now: (808) 853-1170
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Schedule Consultation
                </Button>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                  <p className="text-sm text-yellow-800">
                    <strong>Important Notice:</strong> Pearl City and Kapolei offices closed for the year. 
                    <strong className="text-yellow-900"> Kalihi office open year-round!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_d3c0edc7-fb1d-4b0a-a6c7-4054e3459151/artifacts/lxjze58o_cover%20photo.jpeg"
                  alt="Professional Tax Service"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Stats Card */}
                <Card className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">38+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">5000+</div>
                        <div className="text-xs text-gray-600">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-xs text-gray-600">Local Owned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Full Service Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Hanks Tax Service, our goal is to make filing your taxes easy. 
              We're dedicated to our clients and have represented them in IRS audits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hawaii Families Choose Hanks Tax Service
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise. Personal service. Maximum refunds guaranteed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4`}>
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Ohana Says
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real Hawaii families we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Maximum Refund?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't wait! Tax season fills up fast. Call now to secure your appointment 
            with Hawaii's most trusted tax professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Phone className="h-5 w-5 mr-3" />
              Call (808) 853-1170 Now
            </Button>
            
            <div className="flex items-center text-white">
              <Clock className="h-5 w-5 mr-2" />
              <span>Open Year-Round in Kalihi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_d3c0edc7-fb1d-4b0a-a6c7-4054e3459151/artifacts/c30f2lic_Flower%20large.jpeg"
                  alt="Hanks Tax Service"
                  className="h-12 w-auto object-contain bg-white rounded-lg p-1"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hawaii's trusted tax service for over 38 years. 
                Locally owned and operated with a commitment to our community.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  <span>(808) 853-1170</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-400" />
                  <span>Kalihi Office (Open Year-Round)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-green-400" />
                  <span>Mon-Fri: 9AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-1 text-gray-300">
                <li>Personal Tax Returns</li>
                <li>Business Tax Preparation</li>
                <li>IRS Audit Representation</li>
                <li>Tax Planning & Consultation</li>
                <li>Bookkeeping Services</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Hanks Tax Service. All rights reserved. | Hawaii's Local Tax Professionals Since 1985
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Button */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button 
          onClick={handleCallNow}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg shadow-2xl"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call (808) 853-1170
        </Button>
      </div>
    </div>
  );
};

export default HomePage;