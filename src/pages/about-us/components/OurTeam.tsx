import teamGuy from "../../../assets/images/team-guy.png"
import './OurTeam.scss'

type teamMember = {
  name: string,
  position: string,
  image: string
}

const teamMembersData: teamMember[] = [
  {
    name: "henry leleh",
    position: "founder",
    image: teamGuy
  },
  {
    name: "emmanuel",
    position: "Co-Founder",
    image: teamGuy
  },
  {
    name: "ifeanyi okigbo",
    position: "product designer",
    image: teamGuy
  },
]

let teamMembersArray = teamMembersData.map((member: teamMember) => {
  const { name, position, image } = member;

  return(
    <article className="our-team__member">
      <picture className="image">
        <img src={image} alt={position} loading="lazy"/>
      </picture>
      <p className="name">{name}</p>
      <p className="position">{position}</p>
    </article>
  )
});


const OurTeam = () => {
  return (
    <section className="our-team">
      <header className="our-team__title">
        <h2>Our qualified team</h2>
      </header>
      <section className="our-team__members">
        {teamMembersArray}
      </section>
    </section>
  )
}

export default OurTeam