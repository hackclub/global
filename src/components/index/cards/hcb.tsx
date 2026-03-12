// @ts-nocheck
/** @jsxImportSource theme-ui */
import CardModel from './card-model'
import { Box, Grid, Heading, Text } from 'theme-ui'
import Buttons from './button'
import { useTranslations } from 'next-intl'

export default function Bank({ data }) {
  const translate = useTranslations("index.hcbcard")
  return (
    <Box sx={{ position: 'relative' }}>
      <CardModel
        color="white"
        sx={{
          minHeight: ['300px', '400px', '380px'],
          backgroundColor: 'darkless',
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('/home/hackathons-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: '40%',
          color: 'snow'
        }}
        badge
        text={data[0] === 'error' ? 'The coolest money thing' : data[0]}
      >
        <Heading
          variant="title"
          sx={{ color: 'red', fontSize: ['36px', 4, 5], mt: [0, 3] }}
        >
          HCB
        </Heading>
        <Grid columns={[1, '1.3fr 1fr', 2]}>
          <Box>
            <Text as="p" variant="subtitle">
              {translate("text")}
            </Text>
            <Text as="p" variant="subtitle">
              {translate("text2")}
            </Text>
            <Buttons
              id="27"
              icon="bank-account"
              link="/hcb"
              primary="red"
              sx={{ mt: [0, 2, 3] }}
            >
              {translate("startfundraising")}
            </Buttons>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: [null, 'none', 'none'],
                mb: '-50px',
                mt: 3
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '250px',
                  position: 'relative',
                  display: 'block',
                  textAlign: 'center',
                  '&:before': {
                    content: '""',
                    backgroundImage: 'url(/home/hcb-mobile.webp)', // image doesn't exist
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    marginX: 'auto',
                    display: 'block'
                  }
                }}
              >
              </Box>
            </Box>
          </Box>
        </Grid>
      </CardModel>
      <Box
        sx={{
          position: 'absolute',
          right: [0, '-120px', '-30px'],
          bottom: [0, '-30px', '-50px'],
          display: ['none', 'block', 'block'],
          zIndex: 3
        }}
      >
        {' '}
        <Box
          sx={{
            width: ['250px', '500px'],
            height: ['180px', '360px'],
            position: 'relative',
            display: 'block',
            textAlign: 'center',
            '&:before': {
              content: '""',
              backgroundImage: 'url(/home/hcb.webp)',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              marginX: 'auto',
              display: 'block'
            }
          }}
        >
        </Box>
      </Box>
    </Box>
  )
}
