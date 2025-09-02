const Experiencia = () => {
    const experienciaLaboral = [
        {
            id: 1,
            empresa: "Campesino S.A",
            cargo: "Auxiliar en trabajos agropecuarios",
            periodo: "2017-2018 y 2020",
            funciones: [
                "Siembra de alimentos",
                "Arreglo de tierras",
                "Tratamiento de los animales",
                "Preparación de los alimentos",
                "Entrega de los alimentos",
                "Limpieza de las tierras"
            ],
            supervisor: "Tobias Arévalo",
            contacto: "320 857 2044"
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