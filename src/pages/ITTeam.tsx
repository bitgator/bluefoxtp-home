import { Container, Title, Text, Stack, Box, Card, Avatar, Group, Anchor } from '@mantine/core'

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
    <Box style={{ backgroundColor: '#f8f9fa' }} mih="100vh">
      <Container size="md" pt={80} pb={80}>
        <Stack gap="xl" align="center">
          <Box ta="center" mb="lg" w="100%">
            <img
              src="/images/bluefox-logo-blue.png"
              alt="BLUEFOX Technology Partners"
              style={{ height: '120px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Title order={1} size="h2" c="bluefox" mb="sm">
              Your IT Team
            </Title>
            <Text size="lg" c="dimmed">
              Meet the experts dedicated to your success
            </Text>
          </Box>

          <Stack gap="md" w="100%">
            {teamMembers.map((member, index) => (
              <Card key={index} shadow="sm" padding="xl" radius="md" withBorder>
                <Group align="flex-start" gap="lg">
                  <Avatar
                    size={64}
                    radius="xl"
                    color="bluefox"
                    styles={{ placeholder: { fontSize: '1.25rem', fontWeight: 600 } }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <div>
                      <Text fw={600} size="lg">
                        {member.name}
                      </Text>
                      <Text c="bluefox" fw={500} size="sm">
                        {member.title}
                      </Text>
                    </div>
                    <Text c="dimmed" size="sm" style={{ lineHeight: 1.6 }}>
                      {member.blurb}
                    </Text>
                    {member.bookingLink && (
                      <Anchor
                        href={member.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        c="bluefox"
                        fw={500}
                        size="sm"
                        mt="xs"
                      >
                        Book a meeting with David
                      </Anchor>
                    )}
                  </Stack>
                </Group>
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}