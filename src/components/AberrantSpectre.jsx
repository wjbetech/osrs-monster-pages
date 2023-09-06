const AberrantSpectre = () => {
  return (
    <div className="container">
      <table className="infobox">
        <tbody>
          <tr className="info--section--one">Aberrant Spectre</tr>
          <img className="monster--img" src="https://oldschool.runescape.wiki/images/thumb/Aberrant_spectre.png/150px-Aberrant_spectre.png?65d6f" alt="" />
          <tr>
            <th className="info--left">Released</th>
            <td>26 January 2005</td>
          </tr>
          <tr>
            <th className="info--left">Members</th>
            <td>Yes</td>
          </tr>
          <tr id="buffer">
            <th className="info--left">Combat Level</th>
            <td>96</td>
          </tr>
          <tr className="info--section--two">Combat Info</tr>
          <tr>
            <th className="info--left">Type</th>
            <td>Undead, Spectral</td>
          </tr>
          <tr>
            <th className="info--left">XP Bonus</th>
            <td>-</td>
          </tr>
          <tr>
            <th className="info--left">Max Hit</th>
            <td>11 (14 without Nose peg)</td>
          </tr>
          <tr>
            <th className="info--left">Aggressive?</th>
            <td>Yes</td>
          </tr>
          <tr>
            <th className="info--left">Attack Style</th>
            <td>Magic</td>
          </tr>
          <tr className="info--section--two">Stats</tr>
          <tr className="stats" id="stats">
            <th>ATT</th>
            <th>STR</th>
            <th>DEF</th>
            <th>RNG</th>
            <th>MGC</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AberrantSpectre
