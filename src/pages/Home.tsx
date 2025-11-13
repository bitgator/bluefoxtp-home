import { Container, Title, Text, Stack, Box, SimpleGrid, Card } from '@mantine/core'
import { Shield, Cloud, Users, HeadphonesIcon } from 'lucide-react'

export default function Home() {
  return (
    <Box style={{ backgroundColor: '#f8f9fa' }} mih="100vh">
      <Container size="lg" pt={80} pb={80}>
        <Stack gap="xl" align="center">
          {/* Logo and Header */}
          <Box ta="center" w="100%">
            <img
              src="/images/bluefox-logo-blue.png"
              alt="BLUEFOX Technology Partners"
              style={{ height: '160px', marginBottom: '30px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              Your trusted IT partner for managed services, cybersecurity, and cloud solutions
            </Text>
          </Box>

          {/* Services Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} w="100%" mt="xl" spacing="lg">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm" align="center">
                <Shield size={40} color="#22335a" />
                <Text fw={600} ta="center">Cybersecurity</Text>
                <Text size="sm" c="dimmed" ta="center">
                  Protect your business with advanced security solutions
                </Text>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm" align="center">
                <Cloud size={40} color="#22335a" />
                <Text fw={600} ta="center">Cloud Services</Text>
                <Text size="sm" c="dimmed" ta="center">
                  Scalable cloud infrastructure and migration support
                </Text>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm" align="center">
                <Users size={40} color="#22335a" />
                <Text fw={600} ta="center">IT Management</Text>
                <Text size="sm" c="dimmed" ta="center">
                  Comprehensive managed IT services for your team
                </Text>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm" align="center">
                <HeadphonesIcon size={40} color="#22335a" />
                <Text fw={600} ta="center">24/7 Support</Text>
                <Text size="sm" c="dimmed" ta="center">
                  Round-the-clock technical support when you need it
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* About Section */}
          <Card shadow="sm" padding="xl" radius="md" withBorder w="100%" mt="xl">
            <Stack gap="md">
              <Title order={2} size="h3" ta="center" c="bluefox">
                Why Choose BLUEFOX?
              </Title>
              <Text c="dimmed" ta="center" maw={700} mx="auto">
                We provide enterprise-grade IT solutions tailored to small and medium-sized businesses.
                Our team of certified professionals ensures your technology infrastructure runs smoothly,
                securely, and efficiently, so you can focus on growing your business.
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}