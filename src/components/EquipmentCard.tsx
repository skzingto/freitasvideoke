import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface EquipmentCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export function EquipmentCard({ title, description, price, image, features }: EquipmentCardProps) {
  return (
    <Card className="group hover:shadow-card hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
      <CardHeader className="relative">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter>
        <Button variant="glow" className="w-full">
          Solicitar Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
}