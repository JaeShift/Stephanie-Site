import "./App.css";

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #faf9f6 0%, #f4efe8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
        background: 'white',
        padding: '60px 40px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        borderLeft: '4px solid #2C8E8B'
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#2C8E8B',
          marginBottom: '8px'
        }}>
          Balanced Care Columbus
        </div>
        
        <div style={{
          fontSize: '12px',
          color: '#555555',
          marginBottom: '32px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Women's Mental Health • Mid-Life Hormones
        </div>
        
        <div style={{
          fontSize: '72px',
          fontWeight: '700',
          color: '#2C8E8B',
          marginBottom: '16px',
          lineHeight: '1'
        }}>
          Coming Soon
        </div>
        
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1a1a1a',
          marginBottom: '16px',
          margin: '0 0 16px 0'
        }}>
          Website Under Construction
        </h1>
        
        <p style={{
          fontSize: '16px',
          color: '#555555',
          lineHeight: '1.6',
          marginBottom: '32px',
          margin: '0 0 32px 0'
        }}>
          We're building something special for women's mental health and hormone care. 
          Our new website will launch soon with comprehensive information about our specialized services.
        </p>
        
        <p style={{
          fontSize: '12px',
          color: '#555555',
          margin: '0'
        }}>
          Now accepting new patients • Most insurance plans accepted
        </p>
      </div>
    </div>
  );
}