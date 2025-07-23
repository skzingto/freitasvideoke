import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  event: string;
}

export function TestimonialCard({ name, rating, comment, event }: TestimonialCardProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${i < rating ? 'text-accent' : 'text-muted-foreground'}`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{comment}"</p>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-primary">{event}</p>
        </div>
      </CardContent>
    </Card>
  );
}