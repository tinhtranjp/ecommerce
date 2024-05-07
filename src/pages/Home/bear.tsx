import { useBearStore } from '@/stores/bearStore'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'

export default function Home() {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increase)
  const decrease = useBearStore((state) => state.decrease)
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  return (
    <Box>
      <Paper>
        <Typography component='p'>{bears}</Typography>
        <Stack>
          <Button variant='contained' onClick={() => increase(10)}>
            Cong 10
          </Button>
          <Button variant='contained' onClick={() => decrease(10)}>
            Tru 10
          </Button>
          <Button variant='contained' onClick={removeAllBears}>
            Remove All Bears
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
