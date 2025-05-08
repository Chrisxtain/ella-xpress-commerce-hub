
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would send the data to an API
    setTimeout(() => {
      console.log(formData);
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We'd love to hear from you. Reach out with questions, feedback, or support requests.
          </p>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <Phone className="text-brand-navy" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <Mail className="text-brand-navy" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-700">support@ellaxpress.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <MapPin className="text-brand-navy" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-700">
                    123 Commerce Street<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-light p-3 rounded-full mr-4">
                  <Clock className="text-brand-navy" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Monday-Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-brand-navy hover:bg-brand-navy/90 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1646186512496!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ella Xpress Store Location"
        ></iframe>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-8 mb-12">
        <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">What are your shipping options?</h3>
            <p className="text-gray-700">
              We offer standard shipping (3-5 business days), express shipping (1-2 business days), 
              and international shipping (7-14 business days). Free shipping on orders over $100.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">What is your return policy?</h3>
            <p className="text-gray-700">
              We accept returns within 30 days of purchase. Items must be unused, unworn, and in original packaging. 
              Please contact our customer service team to initiate a return.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Do you offer international shipping?</h3>
            <p className="text-gray-700">
              Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days, 
              and additional customs fees may apply depending on your location.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">How can I track my order?</h3>
            <p className="text-gray-700">
              Once your order ships, you'll receive a confirmation email with tracking information. 
              You can also log into your account on our website to view order status and tracking details.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
