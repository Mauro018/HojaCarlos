import foto from '../assets/foto.jpg';


const Encabezado = () => {
    return (
        <header className="header">
            <img 
            src={foto} 
            alt="Foto de Aprendiz"
            className="foto-perfil"
            style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
            }}
            />
            <h1>Carlos Mauricio Arévalo Zapata</h1>
            <h2>Aprendiz Sena</h2>
            <div className="contact-info">
                <p>Ibagué, Colombia</p>
                <p>Teléfono: 321 289 2950</p>
                <p>Email: carlosmauricioarevalozapata13@gmail.com</p>
            </div>
        </header>
    );
};

export default Encabezado;