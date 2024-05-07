export default function Home() {
  const isKanji = (char: string) => {
    const kanjiCharacters = /[一-龯]/
    return kanjiCharacters.test(char)
  }

  const tanGo = {
    type: 'n3',
    so: 1,
    words: {
      tuVung: 'べんきょう',
      kanji: '勉強', // truong duy nhat
      amHan: 'mien cuong',
      nghia: 'Hoc',
    },
    viDu: [
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
    ketHop: {
      kan: '根がげ　<=>　値下げ',
      ren: '_を見る、　＿から覚める',
      go: '電気＿、家電＿、プラスチック＿',
      dou: '',
      mei: '',
      rui: '',
      tai: '賛成',
      luuY: '',
    },
  }

  const text = '私わたし.には.漢かん.字じ.がなかなか.読よ.まない'
  const z = text.split('.').filter((word) => word.trim() !== '')

  const wordList = []
  for (let i = 0; i < z.length; i++) {
    const obj = { kanji: '', hinagara: '' }
    if (isKanji(z[i][0])) {
      obj.kanji = z[i][0]
      obj.hinagara = z[i].slice(1)
    } else {
      obj.hinagara += z[i]
    }
    wordList.push(obj)
  }

  const words = [
    { kanji: '私', hinagara: 'わたし' },
    { hinagara: 'には' },
    { kanji: '漢', hinagara: 'かん' },
    { kanji: '字', hinagara: 'じ' },
    { hinagara: 'がなかなか' },
    { kanji: '読', hinagara: 'よ' },
    { hinagara: 'まない' },
  ]

  return (
    <div>
      {words &&
        words.map((word, index) =>
          word.kanji ? (
            <ruby key={index}>
              {word.kanji}
              <rp>(</rp>
              <rt>{word.hinagara}</rt>
              <rp>)</rp>
            </ruby>
          ) : (
            <ruby key={index}>{word.hinagara}</ruby>
          ),
        )}
    </div>
  )
}
