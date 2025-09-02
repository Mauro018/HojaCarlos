const Experiencia = () => {
    const experienciaLaboral = [
        {
            texto: "No aplica"
        }
    ];

    return (
        <section className="section">
            <h2>Experiencia Laboral</h2>
            <div className="experience-list">
            {experienciaLaboral.map(exp => (
                <div key={exp.id} className="experience-item">
                <h3>{exp.texto}</h3>
                <p className="position">{exp.cargo} | {exp.periodo}</p>
                <h4>Funciones:</h4>
                <ul>
                    {exp.funciones.map((func, index) => (
                    <li key={index}>{func}</li>
                    ))}
                </ul>
                <p className="supervisor"><strong>Jefe inmediato:</strong> {exp.supervisor}</p>
                <p className="contact"><strong>Contacto:</strong> {exp.contacto}</p>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Experiencia;