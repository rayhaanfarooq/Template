import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/personal/header"

function Pricing() {

    return (

        <section id="pricing" className="w-full py-24 lg:py-32 bg-gray-100">
          <Header />
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Basic", price: "$9.99/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
              { title: "Pro", price: "$19.99/mo", features: ["All Basic Features", "Feature 4", "Feature 5"] },
              { title: "Enterprise", price: "Custom", features: ["All Pro Features", "Custom Integration", "24/7 Support"] }
            ].map((plan, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-gray-900" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      


    )


}

export default Pricing;