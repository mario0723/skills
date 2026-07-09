import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function NotFoundRoute() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-xl place-items-center px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Page not found</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm text-muted-foreground">
          <p>The route you opened does not exist in this generated application.</p>
          <Button asChild className="w-fit">
            <Link to="/">Back to overview</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
