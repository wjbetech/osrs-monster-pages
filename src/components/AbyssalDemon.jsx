const AbyssalDemon = () => {
  return (
    <div className="container">
      <table className="infobox">
        <tbody>
          <tr className="info--section--one">Abyssal Demon</tr>
          <img className="monster--img" src="https://oldschool.runescape.wiki/images/thumb/Abyssal_demon.png/200px-Abyssal_demon.png?5e1ed" alt="" />
          <tr>
            <th className="info--left">Released</th>
            <td>26 January 2006</td>
          </tr>
          <tr>
            <th className="info--left">Members</th>
            <td>Yes</td>
          </tr>
          <tr id="buffer">
            <th className="info--left">Combat Level</th>
            <td>124</td>
          </tr>
          <tr className="info--section--two">Combat Info</tr>
          <tr>
            <th className="info--left">Type</th>
            <td>Demon</td>
          </tr>
          <tr>
            <th className="info--left">XP Bonus</th>
            <td>-</td>
          </tr>
          <tr>
            <th className="info--left">Max Hit</th>
            <td>8</td>
          </tr>
          <tr>
            <th className="info--left">Aggressive?</th>
            <td>No</td>
          </tr>
          <tr>
            <th className="info--left">Attack Style</th>
            <td>Stab</td>
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

export default AbyssalDemon
