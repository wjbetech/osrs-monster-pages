const Bloodveld = () => {
  return (
    <div className="container">
      <table className="infobox">
        <tbody>
          <tr className="info--section--one">Bloodveld</tr>
          <img className="monster--img" src="https://oldschool.runescape.wiki/images/thumb/Bloodveld.png/250px-Bloodveld.png?adc61" alt="" />
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
            <td>76</td>
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
            <td>5</td>
          </tr>
          <tr>
            <th className="info--left">Aggressive?</th>
            <td>Yes</td>
          </tr>
          <tr>
            <th className="info--left">Attack Style</th>
            <td>Magical Melee</td>
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

export default Bloodveld
