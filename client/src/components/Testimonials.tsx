import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const Testimonials: React.FC = () => (
    <div className="bg-stone-50 dark:bg-stone-950 py-12 mt-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial
            name="John Doe"
            title="Developer"
            image="/path/to/image.jpg"
            text="The Umineko API is fantastic! It has saved me so much time and effort. Highly recommend it to all developers."
          />
          <Testimonial
            name="Jane Smith"
            title="API User"
            image="/path/to/image.jpg"
            text="Incredibly easy to use and the documentation is superb. The support team is also very responsive."
          />
          <Testimonial
            name="Mark Johnson"
            title="Software Engineer"
            image="/path/to/image.jpg"
            text="A must-have for any project involving visual novels. The API is robust and well-maintained."
          />
        </div>
      </div>
    </div>
  );
  
  const Testimonial: React.FC<{ name: string; title: string; image: string; text: string }> = ({ name, title, image, text }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 text-center bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-700">
      <CardHeader className="flex flex-col items-center">
        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="pt-2">{title}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p>{text}</p>
      </CardContent>
    </Card>
  );
  
  export default Testimonials;
  