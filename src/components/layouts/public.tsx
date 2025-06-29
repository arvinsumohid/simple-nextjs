import { Card, Divider, Typography } from "@mui/material";

export default function PublicLayout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <main>
                <Card
                    sx={{
                        maxWidth: 360,
                        margin: 'auto',
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                        gap: 2,
                        p: 3,
                    }}
                >
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Divider />
                    {children}
                </Card>
            </main>
        </div>
    );
}