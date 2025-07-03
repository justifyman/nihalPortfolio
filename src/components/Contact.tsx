
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <a 
              href="mailto:visualnihal@gmail.com"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
              Send Email
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-medium text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">visualnihal@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Instagram</h4>
              <a 
                href="https://www.instagram.com/muslimkidfilms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                @muslimkidfilms
              </a>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Behance</h4>
              <a 
                href="https://www.behance.net/nihalNVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                nihalNVA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
