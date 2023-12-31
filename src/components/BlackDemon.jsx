const BlackDemon = () => {
  return (
    <div className="container">
      <table className="infobox">
        <tbody>
          <tr className="info--section--one">Black Demon</tr>
          <img className="monster--img" src="https://oldschool.runescape.wiki/images/thumb/Black_demon.png/475px-Black_demon.png?5ecf8&20190529045215" alt="" />
          <tr>
            <th className="info--left">Released</th>
            <td>27 February 2002</td>
          </tr>
          <tr>
            <th className="info--left">Members</th>
            <td>Yes</td>
          </tr>
          <tr id="buffer">
            <th className="info--left">Combat Level</th>
            <td>172</td>
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
            <td>16</td>
          </tr>
          <tr>
            <th className="info--left">Aggressive?</th>
            <td>Yes</td>
          </tr>
          <tr>
            <th className="info--left">Attack Style</th>
            <td>Slash</td>
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

export default BlackDemon
