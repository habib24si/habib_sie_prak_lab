import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import Badge from "../../components/Badge";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Components() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Components" />

            <Container className="bg-gray-200">
                <h1 className="text-3xl font-bold mb-4">
                    Daftar Produk
                </h1>

                <p className="text-gray-600">
                    Berikut adalah daftar produk terbaru.
                </p>
                <p>Ini halaman Components</p>

                <Button>Simpan</Button>
                <Button type="danger">Hapus</Button>
                <Button type="secondary">Edit</Button>

                <div className="mb-3 felx gap-2">
                    <Badge>Berhasil</Badge>
                    <Badge type="success">berhasil</Badge>
                    <Badge type="warning">kurang</Badge>
                </div>

                <div className="mb-3 felx gap-2">
                    <Avatar name="habib" />
                    <Avatar name="syadira" />
                    <Avatar name="akbar" />
                </div>

                <Card>
                    <h2 className="text-xl font-bold">Judul Card</h2>
                    <p className="text-gray-600">Ini adalah isi dari card.</p>
                </Card>
            </Container>



            <Footer />

        </div>

    );
}