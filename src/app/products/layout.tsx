type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
            <h1>Layout Products</h1>
        </>
    )
}