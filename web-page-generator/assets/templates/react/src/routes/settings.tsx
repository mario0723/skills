import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export function SettingsRoute() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="size-5" aria-hidden="true" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm text-muted-foreground">
          <p>Use this route for configuration, account state, publishing options, or generated app preferences.</p>
          <Button variant="outline" className="w-fit">
            Review configuration
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
