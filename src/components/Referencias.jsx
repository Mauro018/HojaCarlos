const Referencias = () => {
    const references = [
        {
            name: "Tobias Arévalo",
            position: "Dueño de Campesino S.A.",
            phone: "320 857 2044",
            email: "tobias.arevalo@campesinos.com"
        }
    ];

    return (
        <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
};

export default Referencias;