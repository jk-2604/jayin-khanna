
"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  reason: z.string().min(1, { message: "Please select a reason." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmittingState] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      reason: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmittingState(true);
    try {
      const response = await fetch('https://formspree.io/f/mldnjqqn', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await response.json().catch(() => ({})); // Consume JSON body if any, ignore errors
        toast({
          title: "Message Sent!",
          description: "Thank you! I’ll get back to you soon.",
          variant: "default",
        });
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        let errorMessage = "Submission failed. Please try again.";
        try {
          const errorData = await response.json();
          if (errorData && errorData.errors && Array.isArray(errorData.errors)) {
            errorMessage = errorData.errors
              .map((err: any) => err.message || (err.field ? `Error in '${err.field}' field` : 'Validation error'))
              .join("; ");
          } else if (errorData && typeof errorData.error === 'string') {
            errorMessage = errorData.error;
          } else {
            errorMessage = `Submission failed with status: ${response.status}. Please try again.`;
          }
        } catch (e) {
          // Failed to parse error JSON, use status text or default
          errorMessage = `Submission failed with status: ${response.status} ${response.statusText || ''}. Please try again.`;
        }
        toast({
          title: "Submission Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not send message. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingState(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline text-primary">Get In Touch</CardTitle>
        <CardDescription className="text-muted-foreground">
          Have a question, a project idea, or just want to connect? Drop me a line.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-10"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-input border-input-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input border-input-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Contact</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-input border-input-border focus:border-primary">
                              <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-popover text-popover-foreground border-border">
                            <SelectItem value="collaboration">Collaboration/Project Inquiry</SelectItem>
                            <SelectItem value="research">Research Discussion</SelectItem>
                            <SelectItem value="mentorship">Mentorship/Guidance</SelectItem>
                            <SelectItem value="general">General Question/Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." {...field} rows={5} className="bg-input border-input-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
