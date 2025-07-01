import { Card, Typography } from "@mui/material";

export default function PublicLayout({ maxWidth = 360, title, children }: { maxWidth?: number; title: string; children: React.ReactNode }) {
    return (
        <div>
            <main>
                <Card
                    sx={{
                        maxWidth: maxWidth,
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
                    {children}
                </Card>
            </main>
        </div>
    );
}