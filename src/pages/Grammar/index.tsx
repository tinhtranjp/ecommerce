import { Box, List, ListItem, Paper, Typography } from '@mui/material'

export default function Grammar() {
  const text = {
    tenNguPhap: 'であれ',
    cauTruc: {
      type: 1,
      ketHop: 'N#A(な)#Câu hỏi nghi vấn(どう、何…)',
    },
    yNghia: 'Cho dù là...',
    mauCau: [
      {
        tiengNhat: 'たとえ社長であれ、会社のお金を自由にはできない。',
        tiengViet: 'Cho dù là giám đốc cũng không thể sử dụng tiền của công ty một cách tùy tiện',
      },
      {
        word: [
          { kanji: '私', hinagara: 'わたし' },
          { hinagara: 'には' },
          { kanji: '漢', hinagara: 'かん' },
          { kanji: '字', hinagara: 'じ' },
          { hinagara: 'がなかなか' },
          { kanji: '読', hinagara: 'よ' },
          { hinagara: '根がげ　<=>　値下げ' },
        ],
        nghia: 'hay la minh bat chap',
      },
    ],
  }

  let renderNguPhap
  if (text.cauTruc !== null) {
    if (text.cauTruc.type === 1) {
      const ketHopArr = text.cauTruc.ketHop.split('#')

      renderNguPhap = (
        <Box
          sx={{ display: 'flex', mt: 7, alignItems: 'center', color: 'green', fontSize: '30px' }}
        >
          <Box>
            {ketHopArr.map((text1, index) => (
              <List key={index}>
                <ListItem sx={{ padding: '0' }}>{text1}</ListItem>
              </List>
            ))}
          </Box>
          <Typography mx={10} fontSize='30px'>
            +
          </Typography>
          <Typography fontSize='30px'>~{text.tenNguPhap}</Typography>
        </Box>
      )
    }
  }

  let renderViDu
  if (text.mauCau !== null && text.mauCau.length > 0) {
    renderViDu = text.mauCau.map((item, index) => (
      <Box key={index} mt={5}>
        <Typography>
          {index + 1}. {item.tiengNhat}
        </Typography>
        <Typography mt={1}>{item.tiengViet}</Typography>
      </Box>
    ))
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 3, minWidth: '1200px' }}>
        <Typography variant='h3' component='h2'>
          Ngữ pháp:
          <Typography variant='h3' component='span' ml={3} sx={{ color: 'green' }}>
            ~{text.tenNguPhap}
          </Typography>
        </Typography>
        {renderNguPhap && renderNguPhap}
        <Typography variant='h6' mt={4} sx={{ color: '#8a6a36' }}>
          Ý nghĩa : {text.yNghia}
        </Typography>

        <Typography variant='h6' mt={10}>
          Ví Dụ:{' '}
        </Typography>
        <Box>{renderViDu}</Box>
      </Paper>
    </Box>
  )
}
