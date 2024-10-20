function Footer() {
    return (
        <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.3rem', color: 'black' }}>
            <p className="footer">By Arslaan with 🍵 and 💻.</p>
            <p>© {new Date().getFullYear()} </p>
            
        </footer>
    );
}

export default Footer;
