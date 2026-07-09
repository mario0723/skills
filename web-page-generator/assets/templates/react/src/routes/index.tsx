import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { title: "React 19", description: "Ready for componentized frontend application code." },
  { title: "Routes", description: "Pages live under src/routes so the app can grow beyond one screen." },
  { title: "shadcn/ui", description: "Local primitives are vendored so generation can start without CLI setup." },
];
const projectTitle = "{{PROJECT_TITLE}}";

export function IndexRoute() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl gap-8 px-6 py-16">
      <div className="max-w-3xl">
        <Badge variant="secondary" className="mb-4">
          React Routes Template
        </Badge>
        <h1 className="mb-5 text-5xl font-semibold tracking-normal md:text-7xl">
          {projectTitle}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          This starter uses a route tree, route modules, reusable UI primitives, and build-ready Vite configuration.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/workspace">
              Open workspace
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/settings">Review settings</Link>
          </Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
}
