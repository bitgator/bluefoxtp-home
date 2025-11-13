import { Container, Title, Text, Stack, Box, Card } from '@mantine/core'
import { Shield, Cloud, Users, HeadphonesIcon } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions",
      details: "Our comprehensive cybersecurity services include threat detection and prevention, network security monitoring, endpoint protection, security audits, and compliance management. We implement multi-layered security strategies to protect your critical business data from evolving cyber threats. Our team stays current with the latest security trends and technologies to ensure your organization remains protected against ransomware, phishing, and other cyber attacks."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration support",
      details: "Transform your IT infrastructure with our cloud solutions. We provide cloud migration services, hybrid cloud management, backup and disaster recovery, and cloud optimization. Whether you're moving to Microsoft Azure, AWS, or Google Cloud, our experts ensure a smooth transition with minimal downtime. We help you leverage the scalability, flexibility, and cost-effectiveness of cloud computing while maintaining security and compliance."
    },
    {
      icon: Users,
      title: "Managed IT Services",
      description: "Comprehensive managed IT services for your team",
      details: "Focus on your core business while we handle your IT infrastructure. Our managed IT services include 24/7 network monitoring, server management, workstation support, software updates and patch management, and IT infrastructure planning. We proactively monitor your systems to identify and resolve issues before they impact your business. With predictable monthly costs and reduced downtime, you can count on reliable IT support that scales with your business growth."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support when you need it",
      details: "Our dedicated support team is available around the clock to assist with any IT issues. From password resets to critical system failures, we provide rapid response times and effective solutions. Our multi-tiered support model ensures that simple requests are resolved quickly, while complex issues are escalated to senior engineers. We offer support via phone, email, and remote access, ensuring your team stays productive no matter when issues arise."
    }
  ]

  return (
    <Box style={{ backgroundColor: '#f8f9fa' }} mih="100vh">
      <Container size="lg" pt={80} pb={80}>
        <Stack gap="xl" align="center">
          {/* Logo and Header */}
          <Box ta="center" w="100%">
            <img
              src="/images/bluefox-logo-blue.png"
              alt="BLUEFOX Technology Partners"
              style={{ height: '120px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Title order={1} size="h2" c="bluefox" mb="sm">
              Our Services
            </Title>
            <Text size="lg" c="dimmed" maw={700} mx="auto">
              Comprehensive IT solutions designed to keep your business running smoothly
            </Text>
          </Box>

          {/* Services Cards */}
          <Stack gap="lg" w="100%" mt="lg">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} shadow="sm" padding="xl" radius="md" withBorder>
                  <Stack gap="md">
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Icon size={48} color="#22335a" />
                      <div>
                        <Title order={2} size="h3" c="bluefox">
                          {service.title}
                        </Title>
                        <Text c="dimmed" fw={500} size="sm">
                          {service.description}
                        </Text>
                      </div>
                    </Box>
                    <Text c="dimmed" style={{ lineHeight: 1.7 }}>
                      {service.details}
                    </Text>
                  </Stack>
                </Card>
              )
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
