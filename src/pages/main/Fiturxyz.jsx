import { Button } from "@/components/ui/button";
import PageHeader from "../../components/PageHeader";
import Card from "@/components/Card";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Badge from "@/components/Badge";
import { Accordion } from "radix-ui";

export default function FiturXyz() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Fitur XYZ" />
            <p>Ini halaman Fitur XYZ</p>

            <Button variant="outline">outline</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="default">default</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="Link">Link</Button>
            <Button variant="secondary">secondary</Button>

            <Card className="mt-4 w-[380px]">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Belajar shadcn/ui</CardTitle>
                        <Badge variant="secondary">Baru</Badge>
                    </div>
                    <CardDescription>
                        Contoh penggunaan komponen shadcn/ui di React
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Komponen ini dibuat di branch <strong>setup-shadcn</strong>
                        lalu di-merge ke main.
                    </p>
                </CardContent>

                <CardFooter className="flex gap-2">
                    <Button>Simpan</Button>
                    <Button variant="outline">Batal</Button>
                </CardFooter>
            </Card>



        </div>
    );
}