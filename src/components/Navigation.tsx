import { Link, useLocation } from 'react-router-dom'
import { AppShell, Group, Anchor, Container } from '@mantine/core'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <AppShell.Header style={{ backgroundColor: '#22335a', borderBottom: 'none' }}>
      <Container size="xl" h="100%">
        <Group h="100%" justify="center" gap="xl">
          <Anchor
            component={Link}
            to="/"
            c={isActive('/') ? 'white' : 'gray.4'}
            fw={isActive('/') ? 600 : 500}
            underline="never"
            style={{
              transition: 'color 0.2s',
              '&:hover': { color: 'white' }
            }}
          >
            Home
          </Anchor>
          <Anchor
            component={Link}
            to="/services"
            c={isActive('/services') ? 'white' : 'gray.4'}
            fw={isActive('/services') ? 600 : 500}
            underline="never"
            style={{
              transition: 'color 0.2s',
              '&:hover': { color: 'white' }
            }}
          >
            Services
          </Anchor>
          <Anchor
            component={Link}
            to="/it-team"
            c={isActive('/it-team') ? 'white' : 'gray.4'}
            fw={isActive('/it-team') ? 600 : 500}
            underline="never"
            style={{
              transition: 'color 0.2s',
              '&:hover': { color: 'white' }
            }}
          >
            Your IT Team
          </Anchor>
          <Anchor
            component={Link}
            to="/chat"
            c={isActive('/chat') ? 'white' : 'gray.4'}
            fw={isActive('/chat') ? 600 : 500}
            underline="never"
            style={{
              transition: 'color 0.2s',
              '&:hover': { color: 'white' }
            }}
          >
            Chat Home Proto
          </Anchor>
        </Group>
      </Container>
    </AppShell.Header>
  )
}