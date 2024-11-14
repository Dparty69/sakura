import { motion } from "framer-motion";
import { FileText, Shield, Lock, Share2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { NavBar } from "@/components/NavBar";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  senderEmail: z.string().email("Voer een geldig e-mailadres in"),
  recipientEmail: z.string().email("Voer een geldig e-mailadres in"),
  message: z.string().optional(),
});

export default function FileShare() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderEmail: "",
      recipientEmail: "",
      message: "",
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        toast({
          title: "Bestand te groot",
          description: "Het bestand mag maximaal 100MB zijn.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      toast({
        title: "Bestand geselecteerd",
        description: `${file.name} is klaar om te versleutelen en delen.`,
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!selectedFile) {
      toast({
        title: "Geen bestand geselecteerd",
        description: "Selecteer eerst een bestand om te delen.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bestand wordt versleuteld",
      description: "Even geduld terwijl we uw bestand beveiligen...",
    });

    // Simulate file upload and processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically upload the file to a server and send emails
    console.log('Sending file:', {
      file: selectedFile,
      senderEmail: values.senderEmail,
      recipientEmail: values.recipientEmail,
      message: values.message,
    });

    toast({
      title: "Bestand gedeeld",
      description: `Uw bestand is succesvol verzonden naar ${values.recipientEmail}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sakura-50 pt-20">
      <NavBar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center mb-16"
      >
        <h1 className="heading-xl mb-6 text-gradient">
          End-to-End Versleutelde File-Share
        </h1>
        <p className="text-xl text-charcoal-100 max-w-3xl mx-auto">
          Een veilige oplossing voor het delen van bestanden met end-to-end encryptie, 
          ontworpen om uw gegevens te beschermen tijdens overdracht en opslag.
        </p>
      </motion.section>

      {/* File Upload Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 mb-16"
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send Encrypted Files</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="senderEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Uw e-mailadres</FormLabel>
                        <FormControl>
                          <Input placeholder="uw@email.nl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="recipientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ontvanger e-mailadres</FormLabel>
                        <FormControl>
                          <Input placeholder="ontvanger@email.nl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bericht (optioneel)</FormLabel>
                        <FormControl>
                          <Input placeholder="Voeg een bericht toe..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <Label htmlFor="file">Selecteer bestand</Label>
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileSelect}
                      className="cursor-pointer"
                    />
                    {selectedFile && (
                      <div className="text-sm text-charcoal-100">
                        Geselecteerd bestand: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-sakura-200 hover:bg-sakura-300 text-white"
                    disabled={!selectedFile}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Versleutel & Deel Bestand
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <Lock className="h-12 w-12 text-sakura-200 mb-4" />
            <h3 className="heading-md mb-2">End-to-End Encryptie</h3>
            <p className="text-charcoal-100">
              Geavanceerde versleuteling die uw bestanden beschermt van begin tot eind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <Shield className="h-12 w-12 text-sakura-200 mb-4" />
            <h3 className="heading-md mb-2">Veilige Opslag</h3>
            <p className="text-charcoal-100">
              Beveiligde server en database infrastructuur voor optimale gegevensbescherming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <Share2 className="h-12 w-12 text-sakura-200 mb-4" />
            <h3 className="heading-md mb-2">Eenvoudig Delen</h3>
            <p className="text-charcoal-100">
              Intuïtieve interface voor het veilig delen van bestanden met anderen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 mb-16">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Technische Specificaties</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-sakura-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Documentatie</h4>
                  <p className="text-charcoal-100">
                    Uitgebreide technische documentatie inclusief architectuur en beveiligingsmaatregelen.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-sakura-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">ISO27001:2023 Compliance</h4>
                  <p className="text-charcoal-100">
                    Implementatie volgens de laatste ISO27001:2023 standaarden voor informatiebeveiliging.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-16 text-center">
        <Button size="lg" className="bg-sakura-200 hover:bg-sakura-300 text-white">
          Meer Informatie
        </Button>
      </section>
    </div>
  );
}