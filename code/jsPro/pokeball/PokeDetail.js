function PokeDetail({ pokemonDetail }) {
    return (
      <div style={styles.container}>
        <div style={styles.pokemonImage}>
          <img
            src={pokemonDetail.sprites.front_default}
            height={200}
            alt={pokemonDetail.name}
          />
          <p style={styles.pokemonName}>{pokemonDetail.name}</p>
        </div>
        <div style={styles.pokemonAttribute}>
          <p style={styles.label}>Types :</p>
          <p>
            {pokemonDetail.types.map((item) => item.type.name).join(", ")}
          </p>
          <p style={styles.label}>Skills : </p>
          <p>
            {pokemonDetail.abilities.map((item) => item.ability.name).join(", ")}
          </p>
          <p style={styles.label}>Status :</p>
          <table style={styles.statusTable}>
            <thead>
              <tr>
                <th style={styles.tableContent}>Status</th>
                <th style={styles.tableContent}>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemonDetail.stats.map((item) => (
                <tr key={item.stat.name}>
                  <td style={styles.tableContent}>{item.stat.name}</td>
                  <td style={styles.tableContent}>{item.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const styles = {
    container: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center",
      gap: 32,
    },
    pokemonImage: {
      backgroundColor: "aquamarine",
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    pokemonName: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      margin: 6,
      padding: 6,
      fontSize: 20,
      fontWeight: 600,
    },
    pokemonAttribute: {
      display: "grid",
      textAlign: "left",
      gridTemplateColumns: "100px auto",
      gap: 16,
    },
    label: {
      fontSize: "18px",
      fontWeight: "600",
    },
    statusTable: {
      borderCollapse: "collapse",
    },
    tableContent: {
      maxWidth: 300,
      border: "1px solid grey",
      borderCollapse: "collapse",
      padding: "2px 4px",
      textAlign: "center",
    },
  }

  export default PokeDetail
