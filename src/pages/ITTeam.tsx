export default function ITTeam() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "President & CEO",
      avatar: "SC",
      blurb: "With over 20 years of experience in technology leadership, Sarah guides our strategic vision and ensures exceptional service delivery for all our clients."
    },
    {
      name: "David Falkenberg",
      title: "Account Manager", 
      avatar: "DF",
      blurb: "David is your dedicated point of contact, managing relationships and ensuring your technology needs are met with personalized attention and care.",
      bookingLink: "https://outlook.office.com/bookwithme/user/f05a7a3e46524c5e9548b1b98cf1fae8@cloudradial.com?anonymous&ismsaljsauthenabled&ep=plink"
    },
    {
      name: "David Thompson",
      title: "Tech Support Manager",
      avatar: "DT", 
      blurb: "David leads our technical support team with 15 years of hands-on experience, providing rapid resolution for all your IT challenges and infrastructure needs."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center px-4" style={{backgroundColor: '#f0f0f0'}}>
      <div className="w-full max-w-3xl pt-32">
        <h1 className="text-center">
          Your IT Team
        </h1>
        <h2 className="text-center mt-4 mb-12">
          Meet the experts dedicated to your success
        </h2>
        
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                {member.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 leading-relaxed">{member.blurb}</p>
                {member.bookingLink && (
                  <a 
                    href={member.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    Book a meeting with David
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}