import ContactForm from '@/components/contact/ContactForm';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Me | Jayin Khanna',
  description: 'Get in touch with Jayin Khanna for collaborations, questions, or discussions.',
};

const ContactPage = () => {
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground">Let's Connect and Create Something Amazing</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl font-headline mb-4 text-primary">Connect with Me</h2>
            <p className="text-muted-foreground mb-6">
              You can also find me on these platforms:
            </p>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                <Link href={SOCIAL_LINKS.email}>
                  <Mail className="mr-3 h-5 w-5" /> Email
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-headline mb-3 text-primary">Availability</h3>
            <p className="text-muted-foreground">
              I'm generally available for interesting projects and collaborations. Feel free to reach out if you think we could work together or if you have a compelling idea to discuss.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
