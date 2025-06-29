export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}