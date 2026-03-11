'use client'
import { Container, Button, Heading, Box } from 'theme-ui'

export default function LocalePage() {
  return (
    <>
      <nav>
        <Container variant="copy">
          <Heading>
            <a href="https://hackclub.com">Hack Club</a>
          </Heading>
        </Container>
      </nav>
      <main>
        <Container variant="copy">
          <Heading as="h1">
            Tələbələr tərəfindən, <br />
            tələbələr üçün.
          </Heading>
          <p>
            Hack Club, tələbələrin layihələr yaradaraq kodlaşdırma öyrəndikləri kompüter klubları şəbəkəsidir.
          </p>
          <p>
            <Button
              as="a"
              {...({ href: 'https://hackclub.com/?ref=az' } as object)}
              variant="ctaLg"
              sx={{
                backgroundImage: (t: any) => t.util.gx('cyan', 'blue'),
                color: 'white',
              }}
            >
              İngiliscə vebsaytın tamamını ziyarət edin
            </Button>
          </p>
          <img
            alt="Assemble tədbirində programlaşdırma edən tələbələr"
            src="https://cloud-lapsqbi7m-hack-club-bot.vercel.app/0assemble.jpg"
            width="512"
            height="341"
          />
        </Container>
      </main>
      <Box as="footer" bg="darker">
        <Container variant="copy">
          <h2>Hack Club HQ</h2>
          <p>
            15 Falls Road
            <br /> Shelburne, VT, 05482
            <br />United States of America
          </p>
          <p>
            EIN: 81-2908499 <br />
            <a href="tel:1-855-625-HACK">1-855-625-HACK</a>
          </p>
        </Container>
      </Box>
    </>
  )
}
