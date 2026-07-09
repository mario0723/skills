import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks } from "lucide-react";

export function WorkspaceRoute() {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Blocks className="size-5" aria-hidden="true" />
            Workspace
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-muted-foreground">
          <p>Use this route for the main application surface, dashboard, editor, or workflow view.</p>
          <Button className="w-fit">Open workspace</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Operational layout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            {["Routing", "State", "Deploy"].map((item) => (
              <div key={item} className="rounded-lg border bg-secondary p-4 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
